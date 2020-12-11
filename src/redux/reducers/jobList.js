
let initialState = [ {
    // id: "1",
    name: "sleep",
  },
]

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case 'CREATE':
          state.push({ name: payload }); 
          return [...state]; 
        case 'DELETE':  {
          const index = state.findIndex((item) => { return item.name === payload});
          state.splice(index,1);
          return [...state];
        }
        case 'UPDATE': {
          const index = state.findIndex((item)=> {return item.name === payload[0].selJob;})
          console.log(index);
          state[index] = payload[0].selJob;
          return [...state];
        }

        
         

        default:
          return state;

}

}

export default reducer;

