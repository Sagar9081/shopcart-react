import React from "react";
import { CountContext } from "./context";

class Prod3 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      show: true,
      removebt: false,
    };
  }
  static contextType = CountContext;
  isDisabled = (value) => this.setState({ show: value });
  setRemove = () => this.setState({ removebt: !this.state.removebt });

  render() {
    return (
      <>
        <div className="col mb-5">
          <div className="card h-100">
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>

            <img
              className="card-img-top"
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="..."
            />

            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">Sale Item</h5>
                <span className="text-muted text-decoration-line-through">
                  {this.props.price1}
                </span>
                {this.props.price2}
              </div>
            </div>

            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => {
                    this.context.increment();
                    this.isDisabled(false);
                    this.setRemove();
                  }}
                  disabled={!this.state.show}
                >
                  Add to cart
                </button>
                {this.state.removebt ? (
                  <button
                    onClick={() => {
                      this.context.decrement();
                      this.setRemove();
                      this.isDisabled(true);
                    }}
                    className="btn btn-outline-dark mt-auto"
                  >
                    Remove
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Prod3;
