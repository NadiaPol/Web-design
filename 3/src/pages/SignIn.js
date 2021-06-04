import React from "react";
import {useHistory} from 'react-router-dom';

const SignIn = () => {

    const history = useHistory();

    const handleRedirect = (url) => () => {
        if(url) {
            history.push(url);
        }
    } 
    
    return(
        <>
        <header className="d-flex flex-column flex-md-row justify-content-around align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h4 className="h4 my-0 me-md-auto fw-normal">Nadia Polukhovych</h4>
            <nav className="my-2 my-md-0 me-md-3">
                <div className="d-flex flex-wrap justify-content-center">
                <a className="btn btn-outline-link" onClick={handleRedirect('/')}>Home</a>
                <button className="btn btn-outline-link mr-2" onClick={handleRedirect('/calculator')}>Calculator</button>
                <button className="btn btn-outline-link mr-2" onClick={handleRedirect('/info')}>User Info</button>
                    <button className="btn btn-outline-link mr-2">Sign In</button>
                    <button className="btn btn-outline-link" onClick={handleRedirect('/registration')}>Sign Up</button>
                </div>
            </nav> 
        </header>
        <main>
            <section className="m-auto w-75 text-center">
            <div className="card bg-light">
                <div className="card-body">
                    <form id="sign_in" action="profile.html">
                        <h1 className="h3 p-3 m-auto fw-normal">Sign in</h1>
                        <input type="email" id="inputEmail" className="form-control mb-4" placeholder="Email address" required autofocus></input>
                        <input type="password" id="inputPassword" className="form-control mb-4" placeholder="Password" required></input>
                        <input className="w-100 btn btn-sm btn-dark" type="submit" value="Sign in"></input>
                      </form>
                    </div>
                  </div>
                  <div class="card bg-light" id="signUp">
                  </div>
            </section>
        </main>
        </>
    )
};

export default SignIn;