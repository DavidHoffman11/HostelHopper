export class Review {
    constructor(id, host_id, user_id, rating, body, date, parent_review_id){
        this.id = id;
        this.host_id = host_id;
        this.user_id = user_id;
        this.rating = rating;
        this.body = body;
        this.date = date;
        this.parent_review_id = parent_review_id;
    }
}
export default Review;