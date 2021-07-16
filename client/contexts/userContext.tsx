// @ts-nocheck
import { createContext, useContext, useReducer } from 'react';
import {
    FILTER_USERS_BY_USER_NAME,
    INITILISE_FILTRED_USERS_LIST,
    SET_USERS_LIST,
    START_LOADING
} from '../utils/constants';

type userContextProps = {
    initialState: object;
    children: React.ReactNode;
};

const UserContext = createContext();

const reducerFactory = () => {
    return (state, action) => {
        switch (action.type) {
            case SET_USERS_LIST:
                return {
                    ...state,
                    users: [...state.users, ...action.users],
                };
            case START_LOADING:
                return {
                    ...state,
                    loading: action.loading,
                };
            case INITILISE_FILTRED_USERS_LIST:
                return {
                    ...state,
                    filtredListUsers: action.users,
                };
            case FILTER_USERS_BY_USER_NAME:
                return {
                    ...state,
                    filtredListUsers: [...state.users].filter(
                        (user) =>
                            user.name.toString().toLowerCase().indexOf(action.searchKey.toString().toLowerCase()) !== -1
                    ),
                };
            default:
                return state;
        }
    };
};

export const UserProvider = (props: userContextProps) => {
    const initialState = props.initialState || {
        users: [],
        filtredListUsers: [],
        loading: false
    };

    const { children } = props;
    const [userState, dispatch] = useReducer(reducerFactory(), initialState);

    const filterByUserName = (searchKey) => {
        if (!searchKey) {
            dispatch({ type: INITILISE_FILTRED_USERS_LIST });
        }
        dispatch({ type: FILTER_USERS_BY_USER_NAME, searchKey });
    };

    const contextValue = [
        userState,
        {
            dispatch,
            filterByUserName,
        },
    ];

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
export const useUserContext = () => useContext(UserContext);
