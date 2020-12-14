
let initialState = [ {
    name: "sleep",
    id: Math.floor(Math.random()*(10**14))
  },
]

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case 'CREATE':
          state.push({ name: payload, id:  Math.floor(Math.random()*(10**14))}); 
          return [...state]; 
        case 'DELETE':  {
          const index = state.findIndex((item) =>item.id === payload);
          state.splice(index,1);
          return [...state];
        }
        case 'UPDATE': {
          const index = state.findIndex((item)=> item.id === payload.id);
          state[index].name = payload.value;
          return [...state];
        }
        case 'SEARCH': {
          return [...state]
        }
        
        default:
          return state;

    }
}

export default reducer;

