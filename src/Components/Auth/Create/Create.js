import React, { Component } from 'react';
import logo from '../../../images/logo-orange.svg';
import logo_text from '../../../images/logo-text-orange.svg';
import './Create.css';

class Create extends Component {
  render() {

    var tenYears = (new Date()).getFullYear()-10;

    return (
      <div className="create">
        <div className="logo-section">
          <img className="logo" src={logo} />
          <img className="text" src={logo_text} />
        </div>
        <div className="form-section">
          <div className="form-input">
            <h1>first name</h1>
            <input type="text" />
          </div>
          <div className="form-input">
            <h1>last name</h1>
            <input type="text" />
          </div>
          <div className="form-input">
            <h1>email address</h1>
            <input type="text" />
          </div>
          <div className="form-radio">
            <div className="form-age">
              <h2>birthday</h2>
              <select>
                <option>1</option><option>2</option><option>3</option>
                <option>4</option><option>5</option><option>6</option>
                <option>7</option><option>8</option><option>9</option>
                <option>10</option><option>11</option><option>12</option>
              </select>
              <select>
                <option>1</option><option>2</option><option>3</option>
                <option>4</option><option>5</option><option>6</option>
                <option>7</option><option>8</option><option>9</option>
                <option>10</option><option>11</option><option>12</option>
                <option>13</option><option>14</option><option>15</option>
                <option>16</option><option>17</option><option>18</option>
                <option>19</option><option>20</option><option>21</option>
                <option>22</option><option>23</option><option>24</option>
                <option>25</option><option>26</option><option>27</option>
                <option>28</option><option>29</option><option>30</option>
                <option>31</option>
              </select>
              <select>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
                <option>{tenYears--}</option><option>{tenYears--}</option><option>{tenYears--}</option>
              </select>
            </div>
            <div className="form-gender">
              <div className="radio-gender">
                {/* <input type="radio" /> */}
                <div className="outer-circle">
                  <div className="inner-circle"></div>
                </div>
                <h2>male</h2>
              </div>
              <div className="radio-gender">
                {/* <input type="radio" /> */}
                <div className="outer-circle">
                  <div className="inner-circle"></div>
                </div>
                <h2>female</h2>
              </div>
            </div>
          </div>
          <div className="form-input">
            <h1>password</h1>
            <input type="password" />
          </div>
          <div className="form-input">
            <h1>confirm password</h1>
            <input type="password" />
          </div>
          <div className="form-submit">
            <a href="/#/welcome"><button>continue</button></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Create;
