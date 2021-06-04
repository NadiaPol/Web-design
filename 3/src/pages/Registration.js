import React from "react";
import {useHistory} from 'react-router-dom';

import '../style.css';

const Problems = () => {
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
                    <button className="btn btn-outline-link mr-2" onClick={handleRedirect('/signIn')}>Sign In</button>
                    <button className="btn btn-outline-link">Sign Up</button>
                </div>
            </nav> 
        </header>
        <main>
        <section className="m-auto w-75 text-center">
            <div className="card bg-light">
                <div className="card-body">
                  <form id="sign_up">
                    <h1 className="h3 p-3 m-auto fw-normal">Sign up</h1>
                    <input type="text"  className="form-control mb-4" placeholder="Username"></input>          
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked></input>
                      <label className="form-check-label" for="inlineRadio1">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                      <label className="form-check-label" for="inlineRadio2">Male</label>
                    </div>
                    <div>
                       <label for="exampleInputEmail1" className="form-label mt-4">Date of birth</label>
                        <input type="date" id="date" name="date" className="rounded form-control mb-4"></input>
                    </div>
                    
                    <input type="email" id="inputEmail" className="form-control mb-4" placeholder="Email address"></input>
                    <input type="password" id="inputPassword" className="form-control mb-4" placeholder="Password"></input>
          
                    <input className="w-100 btn btn-sm btn-dark" type="submit" value="Sign Up"></input>
                  </form>
                </div>
              </div>
        </section>
    </main>
    </>
  )
};

export default Problems;