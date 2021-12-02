import React from 'react';
import './register.css'
import logo from '../logo.png';
import { Redirect } from 'react-router-dom';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import { RegisterErrorMessage, RegisterErrorMessage2 } from './loginButton';


export class UpdateUser extends React.Component {

    apiClient = new HostelHopperAPIClient();

    //jsonUser = {name : "Eric", email : "erichoutman37@gmail.com", password : "hi"};

    state = {
        
        // user : new User(123457, '', '', '', '', ''),
        // registered: undefined,
        // register2: undefined,
        // confirm: null
        id: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        profilePicUrl: '',
        // registered: undefined,
        // register2: undefined,
        registered: false,
        register2: false,
        confirm: null
    };

    // readyToRegister() {
    //     if (this.state.username !== ''
    //         && this.state.email !== ''
    //         && this.state.password !== ''
    //         && this.state.confirmPassword === this.state.password) return true;
    //     return false;
    // }

    updaterUser(user_id,username, email, password, confirmPassword, profilePicUrl) {
        if (profilePicUrl === '') profilePicUrl = "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg";
        //if (this.readyToRegister()) {
        this.setState({ confirm: true });

        this.apiClient.updateUser(user_id, username, email, password, profilePicUrl).then(this.setState({registered: true}));




        
        //}else{
        //    alert("Please fill out all fields");
        //}
    }

    passwordsDoNotMatch() {
        if (this.state.confirmPassword !== '') {
            if (this.state.confirmPassword !== this.state.password) {
                return true;
            }
        }
        return false;
    }

    render() {
        return <>
            <div id="loginPageBG">
                <div className="fadeInDown" id="loginWrapper">
                    <div id="loginFormContent">
                        <form className="container">
                            <div className="imgcontainer pt-3">
                                <h1>Update User Info</h1>
                                <img src={logo} alt="Avatar" className="avatar"></img>
                            </div>
                            {this.state.registered === false && <RegisterErrorMessage />}
                            {this.state.register2 === false && <RegisterErrorMessage2 />}
                            <div className="login-form">
                                <div className="form-group">
                                    {/* <label htmlFor="search_name" className="py-0">Username</label> */}
                                    {/* <span className="text-danger"> *</span> */}
                                    <input type="text"
                                        name="Email"
                                        className="form-control"
                                        placeholder="username"
                                        value={this.state.username}
                                        onChange={e => this.setState({ username: e.target.value })} 
                                    />
                                </div>
                            </div>

                            <div className="login-form">
                                <div className="form-group">
                                    {/* <label htmlFor="search_name" className="py-0">Email</label> */}
                                    {/* <span className="text-danger"> *</span> */}
                                    <input type="text"
                                        name="Email"
                                        className="form-control"
                                        placeholder="email"
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })} 
                                    />
                                </div>
                            </div>
                            <div className="login-form">
                                <div className="form-group">
                                    {/* <label htmlFor="search_name" className="py-0">Password</label> */}
                                    {/* <span className="text-danger"> *</span> */}
                                    <input type="password"
                                        name="Password"
                                        className="form-control"
                                        placeholder="password"
                                        value={this.state.password}
                                        onChange={e => this.setState({ password: e.target.value })} 
                                    />
                                </div>
                            </div>

                            <div className="login-form">
                                <div className="form-group">
                                    {/* <label htmlFor="search_name" className="py-0">Confirm Password</label> */}
                                    {/* <span className="text-danger"> *</span> */}
                                    {this.passwordsDoNotMatch() && <p className="text-danger form-control border border-white">Passwords do not match</p>}
                                    <input type="password"
                                        name="Password"
                                        className="form-control"
                                        placeholder="confirm password"
                                        value={this.state.confirmPassword}
                                        onChange={e => this.setState({ confirmPassword: e.target.value })} 
                                    />
                                </div>
                            </div>

                            <div className="login-form">
                                <div className="form-group">
                                    {/* <label htmlFor="profPicUrl" className="py-0">Profile Picture URL</label> */}
                                    <input type="text"
                                        className="form-control"
                                        placeholder="profile picture url (optional)"
                                        value={this.state.profilePicUrl}
                                        onChange={e => this.setState({ profilePicUrl: e.target.value })} 
                                    />
                                </div>
                            </div>

                            <div className="login-form pb-4">
                                <button className="btn btn-primary btn-lg btn-block" type="button" onClick={() => this.updaterUser(this.props.match.params.id, this.state.username, this.state.email, this.state.password, this.state.confirmPassword, this.state.profilePicUrl)}>Update</button>
                                {this.state.registered && <Redirect to={this.state.route} />}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>;
    }
    componentDidMount(){
        let profid = this.props.match.params.id;
        if (profid){
          this.apiClient.getUserInfo(profid)
          .then(user => {
              let page = user.info[0];
              this.setState({id: page.id, route: '/profile/' + page.id, username: page.name, email: page.email, password: page.password,profilePicUrl: page.image_url});
        }
        );
        }
    }
}

export default UpdateUser;