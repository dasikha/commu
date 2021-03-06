import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Header.css";
import "./Footer.css";

export default class Favourites extends Component {
  render() {
    return (
      <div className="container py-4">
        <h3>
          <Header />
        </h3>
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <Link className="text-decoration-none text-dark" to="/favorites">
            <button
              type="button"
              className="btn btn-light shadow p-3 mb-5 bg-white rounded"
            >
              <img
                src="https://i.imgur.com/ux2D9Tu.png"
                className="d-inline-block align-top"
                alt=""
              />
            </button>
          </Link>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
