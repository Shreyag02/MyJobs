import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
function PostJobs() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        
        <div className="">
            <div className="hero space-5 sec1">
            <nav className="navbar">
            <Link to="/home" className="navbar-brand"><span className="text-white">My</span><span className="color2">Jobs</span></Link>
            <div className="d-flex align-items-center">
            <Link to="/postjobs" className="sub-menu mx-3">Post a Job</Link>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                <button className="button5" type="button">
                R
                </button>
            </DropdownToggle>
            <DropdownMenu right className="my-dropdown" >
                <Link to="/home" className="">Logout</Link>
            </DropdownMenu>
            </Dropdown>
            </div>
                
            </nav>
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb col-md-10 m-zero-auto">
                <li className="breadcrumb-item active" aria-current="page"><FontAwesomeIcon icon={faHome}/> Home &gt; Post a Job</li>
            </ol>
            </nav>
            </div>
            <div className="col-md-5 form-position p-3">
            <form className="form-container p-4">
            <h5 className="font-weight-bold">Post a Job</h5>
            <div className="form-group">
                <label for="job title">Job Title*</label>
                <input type="text" className="form-control " placeholder="Enter job title" id="job"/> 
            </div>

            <div className="form-group">
                <label for="job description">Job Description*</label>
                <textarea type="text" className="form-control " placeholder="Enter job description" id="jobdesc"/> 
            </div>

            <div className="form-group">
                <label for="job description">Location*</label>
                <input type="text" className="form-control " placeholder="Enter location" id="jobdesc"/> 
            </div>
            
            <div className="text-center pt-4 pb-2 ">
            <button type="submit" className="button3"><span className="btntxt">Post</span></button>
            </div>
            
            </form>
            </div>
            
        </div>
    )
}

export default PostJobs
