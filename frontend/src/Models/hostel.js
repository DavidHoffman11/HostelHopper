export class Hostel {
    constructor(id, hostelName, info, profilePicUrl, pricing, salesPitch, foodInfo, livingOptions, attractions){
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

    }
}
export default Hostel;