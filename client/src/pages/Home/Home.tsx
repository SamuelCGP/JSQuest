import React, { useEffect } from 'react';
import axios from 'axios';
import * as User from '../../server/user'

function Home() {
    const [response, setResponse] = React.useState();

    User.login('test', 'test').then(response => setResponse(response));

    return ( 
        <div style={ {color: 'white', fontSize: '20px', padding: '20px'} }>
            <h1>This is a test</h1>
            <p>Status: {response}</p>
        </div> 
    );
}

export default Home;