import { IStore, initialStore } from './store';
import { AnyAction, Reducer } from 'redux';

const mainReducer: Reducer<IStore, AnyAction> = (state = initialStore, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS': {
            return {
                ...state,
                products: action.resource
            };
        }
        default: {
            return state
        }
    }
}

export default mainReducer;