import { useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Axios from 'axios';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JobCard from '../Components/JobCard'
import { Link } from 'react-router-dom';

function Jobs() {

    const [jobs, setJobs] = useState([]);
    const url="https://jobs-api.squareboat.info/api/v1/jobs"
    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
        const result = await Axios.get(url);
        setJobs(result.data.data);
        console.log(result.data.data);
        };
        fetchData();
    }, [url]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div className="">
            <div className="hero space-5 sec3">
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
                <li className="breadcrumb-item active" aria-current="page"><FontAwesomeIcon icon={faHome}/> Home</li>
            </ol>
            </nav>
            </div>
            <div className="col-md-10  px-5 m-zero-auto mt-n6">
            <h4 className="text-white mb-3">Jobs posted by you</h4>
            <div className="row">
                {jobs.map(job => {
                    return(
                        <JobCard key={job.id} id={job.id} title={job.title} desc={job.description} location={job.location}/>
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default Jobs
