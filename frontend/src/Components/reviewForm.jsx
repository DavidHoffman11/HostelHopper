import React from 'react';
import HostelReview  from '../Models/hostelReview.js';

export default class ReviewForm extends React.Component {
    ratings = [1,2,3,4,5];
    constructor(props){
        super();
        this.state = {
            userName: '',
            comment : '',
            rating: 0
        }
    }
    onAddClick(){
        var date = new Date().toDateString();
        this.props.onReviewAdded(new HostelReview(this.state.userName, this.state.rating, this.state.comment, date));
        this.setState({
            
                userName: '',
                comment : '',
                rating: 0
            
        });
    }
    render(){
        return(
            <form className="container">
                <header className="nav navbar navbar-light bg-dgrey"><p className="reviewBar">Add Review</p></header>
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
                    <div class="col-sm">
                        <label className="form-label" htmlFor="rating">Rating</label>
                        <select id="rating" name="rating" className="form-select" value={this.state.rating} onChange={e => this.setState({ rating: e.target.value })} >
                            <option></option>{
                                this.ratings.map(x => <option key={x} value={x}>{x}</option>)
                            }
                        </select>
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