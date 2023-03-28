
import * as actionTypes from './action-Types';
// import axios from '../../src/axios-order'

export const mountainSuccess = (data) => {
    return {
        type: actionTypes.MOUNTAIN_SUCCESS,
        data: data
    };
};

export const mountainFail = (error) => {
    return {
        type: actionTypes.MOUNTAIN_FAIL,
        error: error
    };
}

export const mountainStart = () => {
    return {
        type: actionTypes.MOUNTAIN_START
    }
}

export const mountainLogin = (data) => {
    return dispatch => {
        dispatch(mountainStart())
            .post('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=mountain&per_page=24&format=json&nojsoncallback=1', data)
            .then(response => {

                dispatch(mountainSuccess(response.data))
            })
            .catch(error => {

                dispatch(mountainFail(error))
            });
    }
};

export const beachesSuccess = (data) => {
    return {
        type: actionTypes.BEACHES_SUCCESS,
        data: data
    };
};

export const beachesFail = (error) => {
    return {
        type: actionTypes.BEACHES_FAIL,
        error: error
    };
}

export const beachesStart = () => {
    return {
        type: actionTypes.BEACHES_START
    }
}

export const beachesLogin = (data) => {

    return dispatch => {
        dispatch(beachesStart())
            .post('', data)
            .then(response => {

                dispatch(beachesSuccess(response.data))
            })
            .catch(error => {

                dispatch(beachesFail(error))
            });
    }
};

export const birdsSuccess = (data) => {
    return {
        type: actionTypes.BIRDS_SUCCESS,
        data: data
    };
};

export const birdsFail = (error) => {
    return {
        type: actionTypes.BIRDS_FAIL,
        error: error
    };
}

export const birdsStart = () => {
    return {
        type: actionTypes.BIRDS_START
    }
}

export const birdsLogin = (data) => {

    return dispatch => {
        dispatch(birdsStart())
            .post('', data)
            .then(response => {

                dispatch(birdsSuccess(response.data))
            })
            .catch(error => {

                dispatch(birdsFail(error))
            });
    }
};


export const foodSuccess = (data) => {
    return {
        type: actionTypes.FOOD_SUCCESS,
        data: data
    };
};

export const foodFail = (error) => {
    return {
        type: actionTypes.FOOD_FAIL,
        error: error
    };
}

export const foodStart = () => {
    return {
        type: actionTypes.FOOD_START
    }
}

export const foodLogin = (data) => {

    return dispatch => {
        dispatch(foodStart())
            .post('', data)
            .then(response => {
                dispatch(foodSuccess(response.data))
            })
            .catch(error => {
                dispatch(foodFail(error))
            });
    }
};
