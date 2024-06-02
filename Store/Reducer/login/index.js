import {
        LOGIN_DATA,
        LOGIN_DATA_START,
        LOGIN_DATA_END
} from '../../Actions/types'


const initState = {
    data: [],
    dataSingle: [],
    loading: false,
}

const Red_Login = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_DATA_START:
            return {
                ...state,
                loading: action.loading,
            };
        case LOGIN_DATA:
            return {
                ...state,
                data: action.payload,
                loading: action.loading,
            };
        case LOGIN_DATA_END:
            return {
                ...state,
                dataSingle: action.payload,
                loading: action.loading,
            };
      
        default:
            return state;
    }
};

export default Red_Login 