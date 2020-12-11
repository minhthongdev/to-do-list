

let initialState = null;
// let initialState = 


const reducer = (state=initialState, {type, payload}) =>{
    switch(type){
        case "SELECT":
            state=payload;
            console.log(payload)
            return state;
        default: 
            return state;
    }
}

export default reducer;
