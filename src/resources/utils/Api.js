import axios from "axios";

const host = 'http://127.0.0.1:8086';

class API {

    login = (username, password, success) => {
        axios.post(`${host}/login`, {username: username, password: password })
        .then(
            res => {
                success(res);
            }
        )
    }

}

export default API;