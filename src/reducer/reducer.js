import * as actionTypes from '../action/action-Types';


const initialState = {
    login: false
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MOUNTAIN_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.MOUNTAIN_SUCCESS:
            return {
                ...state,
                login: true
            }
        case actionTypes.MOUNTAIN_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.BEACHES_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.BEACHES_SUCCESS:
            return {
                ...state,
                login: true
            }
        case actionTypes.BEACHES_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.BIRDS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.BIRDS_SUCCESS:
            return {
                ...state,
                login: true
            }
        case actionTypes.BIRDS_FAIL:
            return {
                ...state,
                loading: false
            }

        case actionTypes.FOOD_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FOOD_SUCCESS:
            return {
                ...state,
                login: true
            }
        case actionTypes.FOOD_FAIL:
            return {
                ...state,
                loading: false
            }

        default: return state;
    }
}
export default reducer
