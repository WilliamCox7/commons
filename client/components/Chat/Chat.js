import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newMsg } from '../../reducers/chatReducer';
import photo from '../../src/chat-photo.svg';
import send from '../../src/send.svg';
import back from '../../src/back-arrow.svg';
import './Chat.scss';

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: ''
    }
    this.newMessage = this.newMessage.bind(this);
    this.updMessage = this.updMessage.bind(this);
    this.moveDown = this.moveDown.bind(this);
  }

  componentDidMount() {
    this.moveDown();
  }

  moveDown() {
    setTimeout(() => {
      var element = document.getElementsByClassName("chat-content")[0];
      var divHeight = element.clientHeight;
      element.scrollTop = divHeight;
    }, 50);
  }

  newMessage() {
    this.props.newMsg(this.props.match.matchId, this.props.user.id, this.state.msg);
    this.moveDown();
  }

  updMessage(e) {
    this.setState({msg: e.target.value});
  }

  render() {

    var thisConvo = this.props.chat.conversations.filter((convo) => {
      if (convo.id === this.props.match.matchId) { return true; }
    });

    var content = thisConvo[0].convo.map((message, i) => {
      var lastMsgId;
      if (i !== 0) {
        lastMsgId = thisConvo[0].convo[i-1].postId;
      }
      return (
        message.postId === this.props.user.id ? (
          <div key={i} className="user-message"
            style={lastMsgId === message.postId && lastMsgId ?
              {marginTop: '-7px'} : {marginTop: '15px'}}>
            <div className="msg-container">
              <span><p>{message.msg}</p></span>
              {lastMsgId === message.postId && lastMsgId ? (
                <span className="blankImg"></span>
              ) : (
                <img src={this.props.user.pic1} />
              )}
            </div>
          </div>
        ) : (
          <div key={i} className="match-message"
            style={lastMsgId === message.postId && lastMsgId ?
              {marginTop: '-7px'} : {marginTop: '15px'}}>
            <div className="msg-container">
              {lastMsgId === message.postId && lastMsgId ? (
                <span className="blankImg"></span>
              ) : (
                <img src={this.props.match.matchPhoto} />
              )}
              <span><p>{message.msg}</p></span>
            </div>
          </div>
        )
      );
    });

    return (
      <div className="Chat">
        <div className="chat-back">
          <img onClick={this.props.closeChat} src={back} />
        </div>
        <div className="chat-content">
          {content}
        </div>
        <div className="chat-input">
          <img src={photo} />
          <input onChange={this.updMessage} type="text" placeholder="new message" />
          <img onClick={this.newMessage} src={send} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chat: state.chat,
    user: state.user
  }
}

const mapDispatchToProps = {
  newMsg: newMsg
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
