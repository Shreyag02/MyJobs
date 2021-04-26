import React from 'react'

function DetailCard({title1, title2}) {
    return (
        <div className="col-md">
            <div className="DetailCard p-3 m-3">
            <h5 className="color2">{title1} <br/> {title2}</h5>
            <p className="mt-4 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            </div>
            
        </div>
    )
}

export default DetailCard
