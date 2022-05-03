export interface NaturalistFormData{
    name:String,
    surname:String,
    email:String,
    kidClass:number,
    allergy?:Array<String>,
    pastActivity?:Array<pastActivityObj>,
    
}


interface pastActivityObj {
    year:Number,
    title:String,
    activityType:String,
}