import React, { useContext } from 'react';
import DummyContext from '../store/dummy-context';

const Login = () => {

    const context = useContext(DummyContext);

    console.log(context.hobbies);
    console.log(context.name);
    context.changeToUpperCase();

    return (
        <article>
            <h2>Login</h2>
        </article>
    )
}

export default Login
