import React from 'react';
import './register.css'
import logo from '../logo.png';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';
import { Redirect } from 'react-router-dom';
import { RegisterErrorMessage, RegisterErrorMessage2 } from './loginButton';
export class RegisterHost extends React.Component {
    apiClient = new HostelHopperAPIClient();
    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        registered: false,
        register2: false,
        confirm: null,
        id:'',
        hostelName: '',
        info : '',
        hostelPicUrl: '',
        pricing: '',
        salesPitch: '',
        foodInfo : '',
        livingOptions: '',
        attractions : '',
        isPetFriendly: false,
        isCovidSafe : false,
        location: '',
        hasLockers: false,
        hasGenderedRoom : false,
        zipCode: '',
    };
    readyToRegister() {
        if (this.state.username !== ''
            && this.state.email !== ''
            && this.state.password !== ''
            && this.state.confirmPassword === this.state.password) return true;
        this.setState({ confirm: false });
        return false;
    }
    registerHost(username, email, password, confirmPassword, profilePicUrl) {
        if (profilePicUrl === '') profilePicUrl = "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg";
        if (this.readyToRegister()) {
            this.setState({ confirm: true });
            this.apiClient.register(username, email, password, profilePicUrl)
                .then(user => {
                    console.log(user.info[0].id);
                    this.setState({ id: user.info[0].id });
                    this.setState({ registered: true });
                });
        }else{
            alert("Please fill out all fields");
        }
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
                                <h1>Register as Host</h1>
                                <img src={logo} alt="Avatar" className="avatar"></img>
                            </div>
                            {this.state.registered === false && <RegisterErrorMessage />}
                            {this.state.register2 === false && <RegisterErrorMessage2 />}
                           
                            <div className="login-form">
                                <div className="form-group">
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
                                    <input type="text"
                                        className="form-control"
                                        placeholder="profile picture url (optional)"
                                        value={this.state.hostelPicUrl}
                                        onChange={e => this.setState({ hostelPicUrl: e.target.value })} 
                                    />
                                </div>
                            </div>
                            <div className="login-form">
                                <div className="form-group">
                                    <input type="text"
                                        name="Email"
                                        className="form-control"
                                        placeholder="Name of Hostel"
                                        value={this.state.hostelName}
                                        onChange={e => this.setState({ hostelName: e.target.value })} 
                                    />
                                </div>
                            </div>
                            <div className="login-form">
                                <div className="form-group">
                                    <input type="text"
                                        name="Email"
                                        className="form-control"
                                        placeholder="Hostel tag line (or slogan)"
                                        value={this.state.info}
                                        onChange={e => this.setState({ info: e.target.value })} 
                                    />
                                </div>
                            </div>
                            <div className="login-form">
                                <div className="form-group">
                                    <input type="text"
                                        name="Email"
                                        className="form-control"
                                        placeholder="Price per night"
                                        value={this.state.pricing}
                                        onChange={e => this.setState({ pricing: e.target.value })} 
                                    />
                                </div>
                            </div>
                            <div className="login-form">
                                <div className="form-group">
                                    <input type="text"
                                        name="Email"
                                        className="form-control"
                                        placeholder="Hostel Description (bio)"
                                        value={this.state.salesPitch}
                                        onChange={e => this.setState({ salesPitch: e.target.value })} 
                                    />
                                </div>
                            </div>
                            
                            <div className="login-form">
                                <div className="form-group">
                                    <input type="text"
                                        name="Email"
                                        className="form-control"
                                        placeholder="Meal information"
                                        value={this.state.foodInfo}
                                        onChange={e => this.setState({ foodInfo: e.target.value })} 
                                    />
                                </div>
                            </div>
                            <div className="login-form">
                                <div className="form-group">
                                    <input type="text"
                                        name="Email"
                                        className="form-control"
                                        placeholder="Living options"
                                        value={this.state.livingOptions}
                                        onChange={e => this.setState({ livingOptions: e.target.value })} 
                                    />
                                </div>
                            </div>
                            <div className="login-form">
                                <div className="form-group">
                                    <input type="text"
                                        name="Email"
                                        className="form-control"
                                        placeholder="Nearby attractions"
                                        value={this.state.attractions}
                                        onChange={e => this.setState({ attractions: e.target.value })} 
                                    />
                                </div>
                            </div>
                            <div className="login-form">
                                <div className="form-group">
                                    <input type="text"
                                        name="Email"
                                        className="form-control"
                                        placeholder="Location (City,State)"
                                        value={this.state.location}
                                        onChange={e => this.setState({ location: e.target.value })} 
                                    />
                                </div>
                            </div>
                            <div className="login-form">
                                <div className="form-group">
                                    <input type="text"
                                        name="Email"
                                        className="form-control"
                                        placeholder="Zip Code"
                                        value={this.state.zipCode}
                                        onChange={e => this.setState({ zipCode: e.target.value })} 
                                    />
                                </div>
                            </div>
                            <p>This property...</p>
    
                            <div id="checklist">
                                <div>
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        checked={!!this.state.isPetFriendly}
                                        onChange={e => this.setState((state) => {
                                            return {isPetFriendly: !state.isPetFriendly}
                                            })}
                                        id="defaultCheck1"/>
                                    <label 
                                        className="form-check-label" 
                                        for="defaultCheck1" >
                                        Is pet friendly
                                    </label>  
                                </div>
                                <div>
                                    <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    checked={!!this.state.isCovidSafe} 
                                    onChange={e => this.setState((state) => {
                                        return {isCovidSafe: !state.isCovidSafe}
                                        })}
                                    id="defaultCheck1"/>
                                    <label className="form-check-label" for="defaultCheck1" >
                                        Is covid safe
                                    </label>  
                                </div>
                                <div>
                                    <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    checked={!!this.state.hasLockers} 
                                    onChange={e => this.setState((state) => {
                                        return {hasLockers: !state.hasLockers}
                                        })}
                                    id="defaultCheck1"/>
                                    <label className="form-check-label" for="defaultCheck1" >
                                        Has lockers avaliable
                                    </label>  
                                </div>
                                <div>
                                    <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    checked={!!this.state.hasGenderedRoom} 
                                    onChange={e => this.setState((state) => {
                                        return {hasGenderedRoom: !state.hasGenderedRoom}
                                        })}
                                    id="defaultCheck1"/>
                                    <label className="form-check-label" for="defaultCheck1" >
                                        Has gendered rooms
                                    </label>  
                                </div>
                            </div>
                            <div className="login-form pb-4">
                                <button className="btn btn-primary btn-lg btn-block" type="button" onClick={() => this.registerHost(this.state.username, this.state.email, this.state.password, this.state.confirmPassword, this.state.hostelPicUrl, this.state.info,this.state.pricing,this.state.salesPitch,this.state.foodInfo,this.state.livingOptions,this.state.attractions,this.state.isPetFriendly,this.state.isCovidSafe,this.state.location,this.state.hasLockers,this.state.hasGenderedRoom,this.state.zipCode)}>Register</button>
                                {this.state.registered && <Redirect to={'/profile/' + this.state.id} />}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>;
    }
}
export default RegisterHost;