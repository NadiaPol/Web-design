import React from "react";
import {useHistory} from 'react-router-dom';

import '../style.css';

const MainPage = () => {
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
               <a className="btn btn-outline-link">Home</a>
            <button className="btn btn-outline-link mr-2" onClick={handleRedirect('/calculator')}>Calculator</button>
            <button className="btn btn-outline-link mr-2" onClick={handleRedirect('/info')}>User Info</button>
                <button className="btn btn-outline-link mr-2" onClick={handleRedirect('/signIn')}>Sign In</button>
                <button className="btn btn-outline-link" onClick={handleRedirect('/registration')}>Sign Up</button>
            </div>
        </nav> 
    </header>
    <main className="container">
        <div className="row mb-2">
            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h1>Hey, welcome<br></br>it`s my site project</h1>
                            <p className="lead my-3"> <strong> 
                                Here you can see the calculator app. Just go to the page "Calculator". Also you can
                                see registration field on "Sign Up" page, and authorisation field on "Sign In".
                            </strong></p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </main>
    </>
  )
};

export default MainPage;