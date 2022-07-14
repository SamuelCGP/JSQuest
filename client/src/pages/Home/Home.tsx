import React, { useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [response, setResponse] = React.useState('');
    const serverURL = 'http://localhost:3001/';

    const options = {
        url: 'http://localhost:3001/user/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
          email: 'test',
          password: 'test'
        }
    };

    axios(options) // retorna um objeto
    //.post(`${serverURL}user/login`, JSON.stringify({ email: 'test', password: 'test' }))
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    });

    return ( 
        <div style={ {color: 'white', fontSize: '20px', padding: '20px'} }>
            <h1>This is a test</h1>
            <p>{response}</p>
        </div> 
    );
}

export default Home;