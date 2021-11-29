import React from 'react';
import './profilePage.css'
import { Rating } from "./Rating";

export const ReviewList = props => <div className="informationContainer">
    <h1 className="px-3">Hostel Reviews <span>({props.reviews.length})</span></h1>
    <ul className="list-group">
        {
            !props.reviews.length && <li className="list-group-item mb-3 mx-3">Be the first to add a review!</li>
        }
        {
            props.reviews.map((x, i) => <div className="border border-secondary rounded m-3 bg-light"key={i}>
                { <div className="border-bottom border-secondary p-3" ><Rating value={x.rating}/></div> }
                { <p className="float-right float-top px-3 py-2 text-muted">{x.date}</p> }
                { <div className="pb-3 px-3">
                    {<p id="reviewUserName" >{x.userName} says:</p> }
                    { <p className="text-muted">"{x.comment}"</p> }
                </div>}
            </div>)
        }
    </ul>
</div>;