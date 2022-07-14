import * as enviroment from '../config/enviroment';
import axios from 'axios';

export async function login(userEmail: string, userPassword: string){
    const options = {
        url: `${enviroment.SERVER_URL}user/login`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
          email: userEmail,
          password: userPassword
        }
    };

    //tratar retorno
    const response = await axios(options)
        .then((res) => {
            return res.statusText;
        })
        .catch((error) => {
            return error.response.statusText;
        });
    
    return response;
}