import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component { 
    render() {
        return (
          
            <div className="container"> 
                
                <form className="login" method="post"> 
                    <h1>Sign Up</h1>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputEmail4">Username</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Username"/>
                      </div>
                      
                    </div>

                    <div className="form-row">

                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                      </div>
                    </div>
                    <div className="form-row">

                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Name</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Full Name"/>
                      </div>
                    </div>
                    <div className="form-row">
                    
                      <div className="form-group col-md-2">
                        <label for="inputState">Gender</label>
                        <select id="inputState" className="form-control">
                          <option selected>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
            </div>
        );
    }
}

export default SignUp;