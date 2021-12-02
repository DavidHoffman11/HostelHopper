import React from 'react';
import HostelReview  from '../Models/hostelReview.js';
import './profilePage.css'
import { Rating } from './Rating.jsx';
import {User} from '../Models/user';
import { Link } from 'react-router-dom';
import { HostelHopperAPIClient } from '../Api/HostelHopperAPIClient';

export default class ReviewForm extends React.Component {
    ratings = [1,2,3,4,5];

    apiClient = new HostelHopperAPIClient();
    

 state = {
            //apiClient: new HostelHopperAPIClient(),
            user_id: this.props.userID,
            host_id: this.props.hostID,
            user_name: '',
            comment : '',
            rating: 0
        }
    onAddClick(comment,rating){
        
        var date = new Date().toDateString();
        this.setState({ confirm: true });
        this.apiClient.postReview(this.state.host_id, this.state.user_id, rating, comment, this.state.user_name, date)
        .then(this.setState({registered: true, comment : '', rating: 0}));
    }
    render(){
        return(
            <form className="container informationContainer mt-3">
                <header className="nav navbar navbar-light bg-dgrey"><h1 className="reviewBar">Add Review</h1></header>
                <div className="form-group">
                    <div className="row">
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
                <button className="btn btn-primary mb-3" type="button" onClick={() => this.onAddClick(this.state.comment,this.state.rating)}>Submit</button>
            </form>
        )
    }
    componentDidMount() {
        let profid = this.state.user_id;
        if (profid){
          this.apiClient.getUserInfo(profid)
          .then(user => {
              let page = user.info[0];
              this.setState({user_id: page.id, user_name: page.name});
        }
        );
        }
        let hostid = this.state.host_id;
        if (hostid){
            this.apiClient.getHost(hostid)
            .then(host => {
                let page = host.info[0];
                this.setState({host_id:  page.id});
            }
            );
            }
      }
}


