export interface NaturalistFormData{
    id?:String,
    name:String,
    surname:String,
    email:String,
    kidClass:number,
    allergy?:String[],
    pastActivity?:[{year:Number, title:String, activityType:String}],
    coupon?:String    
}