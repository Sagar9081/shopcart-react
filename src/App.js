import React from "react";
import Prod1 from "./prod1";
import Prod2 from "./prod2";
import Prod3 from "./prod3";
import Prod4 from "./prod4";
import { CountContext } from "./context";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      show: true,
      removebt: false,
    };
  }
  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  isDisabled = (value) => this.setState({ show: value });
  setRemove = () => this.setState({ removebt: !this.state.removebt });

  render() {
    const { increment, decrement } = this;
    const { count } = this.state;
    return (
      <CountContext.Provider
        value={{
          count,
          increment,
          decrement,
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
            <div className="navbar-brand">Start Bootstrap</div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#!">
                        All Products
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                  <i className="bi-cart-fill me-1"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {this.state.count}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </nav>

        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
              <p className="lead fw-normal text-white-50 mb-0">
                With this shop hompeage template
              </p>
            </div>
          </div>
        </header>

        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <Prod1 price=" $40.00 - $80.00" />
              <Prod2 price1=" $20.00" price2=" $18.00" />
              <Prod3 price1=" $50.00" price2=" $25.00" />
              <Prod4 price=" $40.00" />
              <Prod3 price1=" $50.00" price2=" $25.00" />
              <Prod1 price=" $120.00 - $280.00" />
              <Prod2 price1=" $20.00" price2=" $18.00" />
              <Prod4 price=" $40.00" />
            </div>
          </div>
        </section>

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Your Website 2021
            </p>
          </div>
        </footer>
      </CountContext.Provider>
    );
  }
}
export default Cart;
