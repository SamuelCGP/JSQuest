import React from 'react';
import { useParams } from 'react-router-dom';

function ResetPassword(){
    const { userId } = useParams();
    const { token } = useParams();

    return (
        <div>
            <h1 style = {{color: 'white'}}>ID: { userId }</h1>
            <h1 style = {{color: 'white'}}>TOKEN: { token }</h1>
        </div>
    );
}

export default ResetPassword;