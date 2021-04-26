import React from 'react'

function ApplicantCard() {
    return (
        <div className="col-md-6 mb-3">
        <div className="ApplicantCard p-2">
        <div className="d-flex align-items-center">
            <button className="avatar mr-2">
                A
            </button>
            <div>
                  <span className="my-card">
                      Applicant Name
                  </span>
                  <br/>
                  <span className="text-muted my-card-sub">
                  abc123@email.com
                  </span>
            </div>
        </div>
        <div>
            <span className="my-card">Skills</span>
            <br/>
            <span className="text-muted my-card-sub">
            Coding, designing, graphics, website, app ui
            </span>
        </div>
        </div>
        
    </div>
    )
}

export default ApplicantCard
