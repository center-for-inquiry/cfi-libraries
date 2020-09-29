import React from "react";

const HomeFullWButton = (props) =>{
    if(props.linkTo !== null){
        return (

        <div className="btn-row row">
            <a href={props.linkTo} className="btn orange-button" id="blogs-btn" target="_blank" rel="noreferrer">{props.text}</a>
        </div>

    );
    }
    
}

export default HomeFullWButton;