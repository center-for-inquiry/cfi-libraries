import React from 'react';

const SingleBlog = (props) => {

    function makeTitle(){
        return{__html: props.title}
    }

    function makeDate(){
        return{__html: props.date}
    }

    function makeDesc(){
        return{__html: props.desc}
    }
    return(

        <div className="article-horizontal-list row">
		    <div className="stacked-article-photo col-md-3 img-fit" style={{backgroundImage: `url("${props.image}")`}}></div>
            <div className="col-md-9 extra-padding">
                <div>
                    <a target="_blank" rel="noreferrer" href={props.headerLink}>
                        <h5 dangerouslySetInnerHTML={makeTitle()}></h5>
                    </a>
                    <span className="grey-tags" dangerouslySetInnerHTML={makeDate()}></span><br></br>			
                    <span className="blog-desc" dangerouslySetInnerHTML={makeDesc()}></span>
                </div>
	        </div>
        </div>

    );
}

export default SingleBlog;