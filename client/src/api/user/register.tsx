import * as enviroment from '../config/enviroment';
import axios from 'axios';

export async function register(username: string, userEmail: string, userPassword: string){
    const options = {
        url: `${enviroment.SERVER_URL}user/register`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
          username: username,
          email: userEmail,
          password: userPassword
        }
    };

    // tratar retorno
    const response = await axios(options)
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return error;
        });
    
    return response;
}