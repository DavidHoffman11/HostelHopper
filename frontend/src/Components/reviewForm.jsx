import React from 'react';
import HostelReview  from '../Models/hostelReview.js';
import './profilePage.css'
import { Rating } from './Rating.jsx';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';

export default class ReviewForm extends React.Component {
    ratings = [1,2,3,4,5];

    apiClient = new HostelHopperAPIClient();

    constructor(props){
        super();
        this.state = {
            //apiClient: new HostelHopperAPIClient(),
            user_id: this.apiClient.getUserInfo(props.id),
            host_id: this.apiClient.getHost(props.id),
            user_name: '',
            comment : '',
            rating: 0
        }
    }
    onAddClick(userName,comment,rating){
        //var date = new Date().toDateString();
        //var review = new HostelReview(this.state.user_name, this.state.rating, this.state.comment);
        this.setState({ confirm: true });
        this.apiClient.postReview(this.state.host_id, this.state.user_id, rating, comment, userName )
        .then(this.setState({registered: true}));
    }
    render(){
        return(
            <form className="container informationContainer mt-3">
                <header className="nav navbar navbar-light bg-dgrey"><h1 className="reviewBar">Add Review</h1></header>
                <div className="form-group">
                    <div className="row">
                        <div className="col-8">
                            <label htmlFor="buttonName">Your Name</label>
                            <input 
                                type="text" 
                                id="buttonName" 
                                name="buttonName" 
                                value={this.state.userName}
                                onChange={ event => this.setState({ userName: event.target.value }) }
                                className="form-control"
                            />
                        </div>
                        <div className="col-2">
                            <label htmlFor="type">Rating</label>
                            <select
                                name="type"
                                id="type"
                                className="form-control"
                                value={this.state.rating}
                                onChange={ event => this.setState({ rating: event.target.value }) }>
                                <option></option>
                                {
                                    this.ratings.map((x, i) => <option key={ i }>{ x }</option>)
                                }
                            </select>
                        </div>
                        <Rating className="col-auto" value={this.state.rating}/></div>
                    </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="comment">Comment
                        <textarea id="comment"
                            name="comment"
                            rows = "4"
                            cols = "200"
                            className="form-control"
                            value={this.state.comment}
                            onChange={e => this.setState({ comment: e.target.value })}
                        />
                    </label>
                    
                </div>
                <button className="btn btn-primary mb-3" type="button" onClick={() => this.onAddClick(this.state.user_name,this.state.rating,this.state.comment)}>Submit</button>
            </form>
        )
    }
}