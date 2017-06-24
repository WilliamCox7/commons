import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from "react-router";
import { setUser } from '../../reducers/userReducer';
import axios from 'axios';

/* checks to see if user is logged in */
// -- redirects to login if not
class IsLoggedIn extends Component {

  componentDidMount() {
    if (!this.props.user.isLoggedIn) {
      hashHistory.replace("/login");
      // axios.get('auth/devmtn').then((data) => {
      //   console.log(data.data);
      //   var userData = data.data;
      //   this.props.setUser({
      //     role: ((userData) => {
      //       var userRole = 'student';
      //       userData.roles.forEach((role) => {
      //         if (role.role === 'admin') { userRole = 'admin'; }
      //       });
      //       return userRole;
      //     })(userData),
      //     name: userData.first_name + " " + userData.last_name,
      //     dmId: userData.id,
      //     isLoggedIn: true,
      //     roommates: []
      //   });
      // })
    }
  }

  render() {
    if (this.props.user.isLoggedIn) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {
  setUser: setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(IsLoggedIn);
