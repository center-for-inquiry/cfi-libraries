import React from "react";
import { Link } from "gatsby";


const Banner = (props) => {

    function makeMainSection(){
        return {__html: props.main}
    }

    function makeBtnText(){
        return{__html: props.btnText}
    }

    return(

      <div className="row">
        <div className="col-12 col-md-8">
            <img src={props.image} alt="Illustration of people sitting on larger-than-life books and talking."></img>
        </div>
        <div className="col-12 col-md-4">
            <span id="main-text" dangerouslySetInnerHTML={makeMainSection()}></span>
            <Link to="/search" className="btn orange-button" dangerouslySetInnerHTML={makeBtnText()} />
        </div>
      </div>

    );
}

export default Banner;