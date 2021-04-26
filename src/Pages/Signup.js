import { faUserCheck, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div className="">
            <div className="hero space-5 sec1">
            <nav className="navbar">
            <Link to="/home" className="navbar-brand"><span className="text-white">My</span><span className="color2">Jobs</span></Link>
            </nav>
            </div>
            <div className="col-md-5 form-position p-3">
            <form className="form-container p-4">
            <h5 className="font-weight-bold">Signup</h5>
            <div className="form-group">
                <label for="user">I'm a</label>
                <br/>
                <button className="btn button1 button2 mr-3" type="button"><span className="text-white">
                <FontAwesomeIcon icon={faUserCheck}/> Recruiter</span></button>
                <button className="btn button1" type="button"><span className=""><FontAwesomeIcon icon={faUsers}/> Candidate</span></button>
                {/* <input type="email" className="form-control " placeholder="Enter your email" id="email" />               */}
            </div>
            <div className="form-group">
                <label for="fullname">Full Name*</label>
                <input type="text" className="form-control " placeholder="mail@email.com" id="name" />              
            </div>
            <div className="form-group">
                <label for="email">Email address*</label>
                <input type="email" className="form-control " placeholder="Enter your email" id="email" />              
            </div>
            <div className="form-row">
                <div className="col-md form-group">
                <label for="create password">Create Password*</label>
                <input type="password" className="form-control " placeholder="Enter your password" id="Password"/>
                </div>
                <div className="col-md form-group">
                <label for="confirm password">Confirm Password*</label>
                <input type="password" className="form-control " placeholder="Enter your password" id="Password"/>
                </div>
            </div>
            
            <div className="form-group">
                <label for="skills">Skills</label>
                <input type="skills" className="form-control " placeholder="Enter comma separated skills" id="skills" />              
            </div>
            <div className="text-center py-4">
            <button type="submit" className="button3"><span className="btntxt">Signup</span></button>
            </div>
            <div className="text-center">
            <h6>Have an account? 
            <span className="color2">
                <Link to="/login">
                Login
                </Link>
            </span></h6>
            </div>
            </form>
            </div>
          
        </div>
    )
}

export default Signup
