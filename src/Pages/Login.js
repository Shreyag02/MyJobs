import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    // // (function() {
    //     'use strict';
    //     window.addEventListener('load', function() {
    //       // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //       var forms = document.getElementsByClassName('needs-validation');
    //       // Loop over them and prevent submission
    //       var validation = Array.prototype.filter.call(forms, function(form) {
    //         form.addEventListener('submit', function(event) {
    //           if (form.checkValidity() === false) {
    //             event.preventDefault();
    //             event.stopPropagation();
    //           }
    //           form.classList.add('was-validated');
    //         }, false);
    //       });
    //     }, false);
    //   })();
      
    return (
        <div className="">
            <div className="hero space-5 sec1">
            <nav className="navbar">
            <Link to="/home" className="navbar-brand"><span className="text-white">My</span><span className="color2">Jobs</span></Link>
            </nav>
            </div>
            <div className="col-md-5 form-position p-3">
            <form className="form-container needs-validation p-4" novalidate>
            <h5 className="font-weight-bold">Login</h5>
            <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control " placeholder="Enter your email" id="email" aria-describedby="emailHelp"/>
                
            </div>
            <div className="form-group">
                <label for="Password" className="d-flex justify-content-between">
                    <span>
                    Password
                    </span>
                    <span className="color2">
                        <Link to="/forgotpassword">
                        Forgot your password?
                        </Link>
                    </span>
                </label>
                <input type="password" className="form-control " placeholder="Enter your password" id="Password"/>
                {/* <small id="error" className="form-text text-right text-danger">Incorrect email address or password.</small> */}
            </div>
            
            <div className="text-center py-4">
            <button type="submit" className="button3"><span className="btntxt">Login</span></button>
            </div>
            <div className="text-center">
            <h6>New to MyJobs? <span className="color2">
                <Link to="/signup">
                        Create an account       
                </Link>
                    </span></h6>
            </div>
            </form>
            </div>
            
        </div>
    )
}

export default Login
