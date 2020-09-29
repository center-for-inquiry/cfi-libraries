import React from "react";

const HomeTitle= (props) => {
    return(

        <div className="home-header">
              <h2 id={props.id}><strong>{props.title}</strong></h2>
              <hr></hr>
        </div>

    );
}

export default HomeTitle;