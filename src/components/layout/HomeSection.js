import React, { Component } from 'react';
import '../style/HomeSection.css';

class HomeSection extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  render() {
    return (
      <header id="home-section">
        <div className="dark-overlay">
          <div className="home-inner container">
            <div className="row">
              <div className="col-lg-8 d-none d-lg-block">
                <h1 className="display-4">
                  Build <strong>social profiles</strong> and gain revenue{' '}
                  <strong>profits</strong>
                </h1>
                <div className="d-flex">
                  <div className="align-self-start p-4">
                    <i className="fas fa-check fa-2x" />
                  </div>
                  <div className="align-self-end p-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempore possimus officiis laudantium saepe cum veritatis?
                  </div>
                </div>
                <div className="d-flex">
                  <div className="align-self-start p-4">
                    <i className="fas fa-check fa-2x" />
                  </div>
                  <div className="align-self-end p-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempore possimus officiis laudantium saepe cum veritatis?
                  </div>
                </div>
                <div className="d-flex">
                  <div className="align-self-start p-4">
                    <i className="fas fa-check fa-2x" />
                  </div>
                  <div className="align-self-end p-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempore possimus officiis laudantium saepe cum veritatis?
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-primary text-center card-form pt-3">
                  <div className="card-body">
                    <h3>Sign Up Today</h3>
                    <p>Please fill out this form to register</p>
                    <div className="form">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Username"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <input
                        type="submit"
                        className="btn btn-outline-light btn-block"
                        value="Submit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HomeSection;
