// create action type
const GOODMORNINGTYPE= "GOODMORNINGTYPE"
const GOODAFTERNOONTYPE = "GOODAFTERNOONTYPE"
const GOODNIGHTTYPE = "GOODNIGHTTYPE"


//create action method

let SayGoodmorningAction = () =>{
    // console.log("SayGoodmorningAction");
    return {
        
        type : GOODMORNINGTYPE
    }
}

let SayGoodAfternoonAction = () =>{
    // console.log("SayGoodAfternoonAction");
    return {
        type : GOODAFTERNOONTYPE
    }
}

let SayGoodNightAction = () =>{
    // console.log("SayGoodNightAction");
    return {
        type : GOODNIGHTTYPE
    }
}


//export action method and action type

export {SayGoodmorningAction, SayGoodAfternoonAction, SayGoodNightAction, GOODMORNINGTYPE, GOODAFTERNOONTYPE, GOODNIGHTTYPE}