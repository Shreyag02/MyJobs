import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React ,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ApplicantCard from './ApplicantCard';

function JobCard({
    id,
    title="Job Title",
    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
    location="location"
}) {

    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);


    //   const [candidates, setCandidates] = useState([]);
    //   const url=`https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${id}/candidates`     
    //   useEffect(() => {
    //       if (!url) return;
    //       const fetchData = async () => {
    //       const result = await Axios.get(url);
    //       setCandidates(result.data.data);
    //       console.log(result.data.data);
    //       };
    //       fetchData();
    //   }, [url]);

    return (
        <div className="col-md-3 col-sm-6 mb-3">
        <div className="DetailCard p-3">
        <h6 className="color2">{title}</h6>
        <p className="my-3 desctxt line-clamp">
        {desc}
        </p>
        <div className="d-flex justify-content-between align-items-center">
            <span>
                <FontAwesomeIcon icon={faMapMarkerAlt}/>  <span className="subtext">{location}</span>
            </span>
            <button type="button" className="btn button1 button4" onClick={toggle}><span className="subtext">View Applications</span></button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Applicants for this job</ModalHeader>
                <ModalBody>
                <div className="row candidates">
                    {/* {candidates.map(candidate => {
                        return(
                            <ApplicantCard key={job.id} id={job.id} title={job.title} desc={job.description} location={job.location}/>
                        )
                    })} */}
                    <ApplicantCard/>
                </div>
                </ModalBody>
            </Modal>
        </div>
        </div>
        
    </div>
    )
}

export default JobCard
