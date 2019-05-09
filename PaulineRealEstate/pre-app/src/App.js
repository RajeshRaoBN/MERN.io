import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateListing from "./components/create-listing.component";
import EditListing from "./components/edit-listing.component";
import Listing from "./components/listing.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" href="https://paulinerealestate.com.au" target="_blank">
              <img src={logo} width="300" height="100" alt="paulinerealestate.com.au" />
            </a>
            <Link to="/" className="navbar-brand">Pauline Real Estate</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/buy" className="nav-link">Buy</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/rent" className="nav-link">Rent</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/holiday" className="nav-link">Holiday Rentals</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/wanted" className="nav-link">Properties Wanted</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/about" className="nav-link">About Us</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/buylisting" exact component={Listing} />
          <Route path="/editbuylisting/:id" component={EditListing} />
          <Route path="/createbuylisting" component={CreateListing} />
          <Route path="/rentallisting" exact component={Listing} />
          <Route path="/editrental/:id" component={EditListing} />
          <Route path="/createrental" component={CreateListing} />
          <Route path="/buylisting" exact component={Listing} />
          <Route path="/editbuylisting/:id" component={EditListing} />
          <Route path="/createbuylisting" component={CreateListing} />
          <Route path="/rentallisting" exact component={Listing} />
          <Route path="/editrental/:id" component={EditListing} />
          <Route path="/createrental" component={CreateListing} />
        </div>
      </Router>
    );
  }
}

export default App;