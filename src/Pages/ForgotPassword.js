import React from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
    return (
        
        <div className="">
            <div className="hero space-5 sec1">
            <nav className="navbar">
            <Link to="/home" className="navbar-brand"><span className="text-white">My</span><span className="color2">Jobs</span></Link>
                <button className="btn button1" type="button"><Link to="/login" className="btntxt">Login/Signup</Link></button>
            </nav>
            </div>
            <div className="col-md-5 form-position p-3">
            <form className="form-container p-4">
            <h5 className="font-weight-bold">Forgot your password?</h5>
            <label className="py-3">Enter the email associated with your account and we’ll send you instructions to reset your password.</label>
            <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control " placeholder="Enter your email" id="email" aria-describedby="emailHelp"/>
                
            </div>
            
            <div className="text-center pt-4 pb-2 ">
            <button type="submit" className="button3"><span className="btntxt">Submit</span></button>
            </div>
            
            </form>
            </div>
            
        </div>
    )
}

export default ForgotPassword
