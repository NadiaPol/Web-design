import React from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import '../style.css';

export default class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }

    this.handleRedirect = this.handleRedirect.bind(this);
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data[0];
        this.setState({ persons });
      })
  }

  handleRedirect = (url) => () => {
    if(url) {
      useHistory.push(url);
    }
  }
  render () {
  return(
    <>
    <header className="d-flex flex-column flex-md-row justify-content-around align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h4 className="h4 my-0 me-md-auto fw-normal">Nadia Polukhovych</h4>
        <nav className="my-2 my-md-0 me-md-3">
            <div className="d-flex flex-wrap justify-content-center">
               <a className="btn btn-outline-link">Home</a>
            <button className="btn btn-outline-link mr-2">Calculator</button>
            <button className="btn btn-outline-link mr-2">User Info</button>
                <button className="btn btn-outline-link mr-2">Sign In</button>
                <button className="btn btn-outline-link">Sign Up</button>
            </div>
        </nav> 
    </header>
      <main>
        <section className="m-auto w-75 bg-white border-bottom shadow-sm">
          <h1 className="text-center p-5">{this.state.persons.name}</h1>
            <table className="table w-100 text-center info">
                <thead className="bg-warning">
                  <tr>
                    <th scope="col">Email</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.persons.email}</td>
                    <td>{this.state.persons.username}</td>
                    <td>{this.state.persons.phone}</td>
                  </tr>
                </tbody>
              </table>
        </section>
    </main>
    </>
  )}
}
