import React from 'react'
function ImgCard({src}) {
    return (
        <div className="col-md-2 text-center d-flex align-items-center">
            <img src={src} alt="" style={{width:"100%"}}/>
        </div>
    )
}

export default ImgCard
