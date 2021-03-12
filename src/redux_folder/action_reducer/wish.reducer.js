import {GOODMORNINGTYPE, GOODAFTERNOONTYPE, GOODNIGHTTYPE} from './wish.action'

let initialmsg = {
    message : " Hello Prasad"
}

let wishReducer = (state = initialmsg, action) => {
    // console.log(action.type);
    switch(action.type){
        case GOODMORNINGTYPE : 
            return {message : "Good Monrning from reducer"};
            
        case GOODAFTERNOONTYPE : 
            return {message : "Good Afternoon from reducer"};
            
        case GOODNIGHTTYPE : 
            return {message : "Good Night from reducer"};
            
        default:
            return state;
           
    }

}

export {wishReducer};