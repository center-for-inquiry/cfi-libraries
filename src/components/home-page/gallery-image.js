import React from 'react';

const GalleryImg = (props) => {
    return (
        <div className="col-12 col-sm-6 col-lg-3" role="img">
            <div className="gallery-img" onClick={props.onClick}
            style={{backgroundImage: `url(${props.src})`, backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} 
            alt={props.alt}></div>
        </div>
    );
}

export default GalleryImg;