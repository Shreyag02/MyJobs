import React from 'react'
import {Link} from "react-router-dom"
function ResetPassword() {
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
            <h5 className="font-weight-bold">Reset Your Password</h5>
            <label className="py-3">Enter your new password below.</label>
            <div className="form-group">
                <label for="confirm password">New Password</label>
                <input type="password" className="form-control " placeholder="Enter your password" id="Password"/>
            </div>
            <div className="form-group">
                <label for="confirm password">Confirm New Password</label>
                <input type="password" className="form-control " placeholder="Enter your password" id="Password"/>
            </div> 
            <div className="text-center pt-4 pb-2 ">
            <button type="submit" className="button3"><span className="btntxt">Reset</span></button>
            </div>
            
            </form>
            </div>
        </div>
    )
}

export default ResetPassword
