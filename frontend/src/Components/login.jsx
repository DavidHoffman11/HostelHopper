import React from 'react';
import './login.css'
import { Redirect, Link } from 'react-router-dom';
import logo from '../logo.png';
import backgroundImage from '../backgroundImage.jpeg';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import { ErrorMessage } from './loginButton';

class Login extends React.Component {

    apiClient = new HostelHopperAPIClient();

    onLogin() {
        this.apiClient.login(this.state.email, this.state.password).then(user => {
            console.log(user.info[0].id)
            if (user.info[0].id !== undefined) {
                this.setState({ authenticated: true });
                console.log(user.info[0]);
                this.setState({ id: user.info[0].id });
                this.setState( {route: '/homepage/' + this.state.id });
            }
            else {
                this.setState({ authenticated: false });
            }
        });

    }
    onHostLogin() {
        this.apiClient.loginHostel(this.state.email, this.state.password).then(user => {
            console.log(user.info[0].id)
            if (user.info[0].id !== undefined) {
                this.setState({ authenticated: true });
                console.log(user.info[0]);
                this.setState({ id: user.info[0].id });
                this.setState( {route: '/hostelProfile/' + this.state.id });
            }
            else {
                this.setState({ authenticated: false });
            }
        });

    }
    registerUser = e => {
        this.setState({ register: true });
    }

    handleKeyPress = e => {
        if (e.keyCode === 13) {
            alert("You hit enter");
            this.onLogin();
        }
      };

    state = {
        id: '',
        username: "",
        email: "",
        password: "",
        authenticated: null
    };

    render() {
        return <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-137604632-1"></script>

            {this.state.authenticated === false && <ErrorMessage />}
            <div id="loginPageBG">
            <div className="fadeInDown" id="loginWrapper">
                <div id="loginFormContent">
                    <div className="imgcontainer pt-4 mb-0">
                        <h1 id="welcome" >Welcome to Hostel Hopper!</h1>
                        <img src={logo} alt="Avatar" className="avatar text-center"></img>
                    </div>
                    <div className="login-form">
                        <div className="form-group">
                            {/* <label htmlFor="search_name">Email</label> */}
                            <input type="text"
                                name="Email"
                                className="form-control"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })} />
                        </div>
                    </div>
                    <div className="login-form">
                        <div className="form-group">
                            {/* <label htmlFor="search_name">Password</label> */}
                            <input type="password"
                                name="Password"
                                className="form-control"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={e => this.setState({ password: e.target.value })}
                            />
                        </div>

                        <button className="btn btn-primary btn-lg btn-block btn-bot-margin" type="button"
                            //onKeyPress={handleKeyPress}
                           onClick={() => this.onLogin()}>Log In As User</button>
                           {this.state.authenticated &&  <Redirect to={this.state.route}/>}
                           <button className="btn btn-primary btn-lg btn-block btn-bot-margin" type="button"
                                                      onClick={() => this.onHostLogin()}>Log In As Host</button>

                           


                        <p>Don't have an account yet?</p>

                        <br></br>

                        <div className="pb-5">
                            <Link to={'registerUser'}>
                                <button className="btn btn-primary btn-lg mb-7 btn-block" type="button" id="registerButton">Register as User</button>
                            </Link>

                            <Link to={'registerHost'}>
                                <button className="btn btn-primary btn-lg mb-7 btn-block" type="button" id="registerButton">Register as Host</button>
                            </Link>
                        </div>
                        <br></br>


                        

                        


                    </div>
                </div>
            </div>
            </div>
            {/* <Link to={'/home/' + this.state.id}>Skip to Home</Link> */}
        </>;
    }

}
export default Login;