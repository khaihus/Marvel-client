import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Login extends Component { 
    render() {
        return (
          
            <div className="container"> 
                
                <form action="http://localhost:6969/api/auth/" className="login" method="post">
                    <h1>Log In</h1>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputEmail4">Username</label>
                        <input type="text" name="username" className="form-control" id="inputEmail4" placeholder="Username"/>
                      </div>
                      
                    </div>

                    <div className="form-row">

                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" name="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                      </div>
                    </div>


                    {/* <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" for="gridCheck">
                          Remember me
                        </label>
                      </div>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Sign in</button>
                  </form>
            </div>
        );
    }
}

export default Login;