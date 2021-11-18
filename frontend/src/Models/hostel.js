export class Hostel {
    constructor(id, hostelName, info, profilePicUrl, pricing, salesPitch, foodInfo, livingOptions, attractions, isPetFriendly, isCovidSafe, location, hasLockers, hasGenderedRoom, reviews){
        this.id = id;
        this.hostelName = hostelName;
        this.info = info;
        //not in schema currently
        this.profilePicUrl = profilePicUrl;
        this.pricing = pricing;
        this.salesPitch = salesPitch;
        this.foodInfo = foodInfo;
        this.livingOptions = livingOptions;
        this.attractions = attractions;
        this.isPetFriendly = isPetFriendly;
        this.isCovidSafe = isCovidSafe;
        this.location = location;
        this.hasLockers = hasLockers;
        this.hasGenderedRoom = hasGenderedRoom;
        this.reviews = reviews;
    }
}
export default Hostel;