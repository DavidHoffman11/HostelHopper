import React from 'react';
import HostelReview  from '/Users/yeet/Documents/GitHub/HostelHopper/frontend/src/Models/hostelReview.js';

export default class ReviewForm extends React.Component {
    constructor(props){
        super();
        this.state = {
            userName: '',
            comment : ''
        }
    }
    onAddClick(){
        var date = new Date().toDateString();
        this.props.onReviewAdded(new HostelReview(this.state.userName, this.state.rating, this.state.comment, date));
        this.setState({
            
                userName: '',
                comment : ''
            
        });
    }
    render(){
        return(
            <form className="container">
                <header className="nav navbar navbar-light bg-dgrey" ><p className="reviewBar"  >Add Review</p></header>
                <div className="form-group">




                <div class="row g-3">
                    <div class="col-sm-7">
                        <label className="form-label" htmlFor="name">Your Name</label>
                    
                        <input 
                            type="text"
                            id = "name" 
                            name="name"
                            className="form-control"
                            value={this.state.userName}
                            onChange={e => this.setState({ userName: e.target.value })}
                        />                    
                    </div>
                </div>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="comment">Comment
                
                    <textarea id="comment"
                    name="comment"
                    rows = "4"
                    cols = "150"
                    className="form-control"
                    value={this.state.comment}
                    onChange={e => this.setState({ comment: e.target.value })}
                    />
                    </label>
                    
                </div>
                <button className="btn btn-primary" type="button" onClick={() => this.onAddClick()}>Submit</button>
            </form>
        )
    }
}