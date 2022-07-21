import React from 'react';
import * as User from '../../api/user'

function Home() {
    const [responseLogin, setResponseLogin] = React.useState();

    User.login('test', 'test').then(response => setResponseLogin(response));

    return ( 
        <div style={ {color: 'white', fontSize: '20px', padding: '20px'} }>
            <h1>This is a test</h1>
            <p>Login status: {responseLogin}</p>
        </div> 
    );
}

export default Home;