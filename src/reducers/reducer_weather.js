import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    console.log('reducer weather action', action);
    switch (action.type) {
        case FETCH_WEATHER:
        // ES5
        // return state.concat([ action.payload.data ]); 
        //ES6
        return [ action.payload.data, ...state ];
        // нельзя втупую пихать дату в state и перезаписывать его. 
        // Лучше вернуть новый state с новой и предыдущей date используя concat.

    }
    
    console.log('reducer weather state', state)
    return state;
}