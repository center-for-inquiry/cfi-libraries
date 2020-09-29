import React from "react";

const HomeMap = (props) => {

    function makeMapText(){
        return{__html: props.text}
    }

    function makeContactText(){
        return{__html: props.contact}
    }
    
    return(

    <div id="library-map-row" className="row">
        <div className="col-12 col-md-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d186756.18689204915!2d-78.800586!3d42.997957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x709b23565f1c5ed4!2sCenter%20For%20Inquiry!5e0!3m2!1sen!2sus!4v1599767969195!5m2!1sen!2sus" width="100%" height="100%" frameBorder="0" style={{border: "0"}} allowFullScreen="" aria-hidden="false" title="Google Maps"></iframe>
        </div>
        <div className="col-12 col-md-6">
            <span id="map-text" dangerouslySetInnerHTML={makeMapText()}></span>
            <div id="contact-text">
                <span dangerouslySetInnerHTML={makeContactText()}></span>
            </div>
        </div>
    </div>
    
    );
}

export default HomeMap;