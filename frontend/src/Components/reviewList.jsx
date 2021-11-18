import React from 'react';

export const ReviewList = props => <>
    <h2>Hostel Reviews <span>({props.reviews.length})</span></h2>
    <ul className="list-group">
        {
            !props.reviews.length && <li className="list-group-item">Be the first to add a review!</li>
        }
        {
            props.reviews.map((x, i) => <li className="list-group-item" key={ i }>
                 <header className="navbar navbar-light bg-grey">
                    <div className="navbar-brand">
                    <span>{ x.userName }</span>
                         </div>
                    </header>
                    <div className = "upperBridge">
                    
                    <span>{ x.date }</span>
                    </div>
                    <p className="comment">"{ x.comment }"</p>
                    </li>)
        }
    </ul>
    </>;