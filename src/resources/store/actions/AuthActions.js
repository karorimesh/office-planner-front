import API from '../../utils/Api';


export const login = (username, password) => {
    return(dispatch) => {
        API.login(username, password, res => {
            console.log('something');
            dispatch(
                {
                    type: 'LOGIN',
                    payload: {
                        username: username,
                        token: res.data.id,
                        userId: res.data.userId
                    }
                }
            )
        })
    }
    /*
    return {
        type: 'LOGIN',
        payload: {email, password}
    }
    */
}

export const register = (email, password) => {
    return {
        type: 'REGISTER',
        payload: {email, password}
    }
}