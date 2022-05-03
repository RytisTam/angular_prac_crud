export interface NaturalistFormData{
    name:String,
    surname:String,
    email:String,
    kidClass:number,
    allergy?:Array<String>,
    pastActivity?:Array<String>,
    
}


interface pastActivityObj {
    year:Number,
    title:String,
    activityType:String,
}