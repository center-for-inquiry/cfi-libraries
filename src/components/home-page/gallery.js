import React, { useEffect, useState } from 'react';
import GalleryImg from './gallery-image';

const Gallery = (props) => {

    const [modal, setModal] = useState(false);
    const [caption, setCaption] = useState("");
    const [title, setTitle] = useState("");
    const [modSrc, setModSrc] = useState("");

    function handleClick(event){
        event.preventDefault();
        setModal(true);
        setModSrc(event.target.style.backgroundImage.split('("')[1].split('")')[0]);
        setCaption(event.target.getAttribute("caption"));
        setTitle(event.target.getAttribute("title"));
    }

    function closeModal(){
        setModal(false);
    }

    useEffect(() => document.addEventListener("keydown", function(e){ if(e.key === "Escape"){ closeModal() } else {} }, false), []);
    useEffect(() => window.addEventListener("click", function(e){ if(e.target === document.getElementById("thisModal")){ closeModal() } else {} }, false), []);

    return(
        <>

            <div className="row" id="gallery">
    
                {props.gal.map(im => <GalleryImg src={im.sourceUrl} alt={im.altText} caption={im.caption} title={im.title} key={im.id} onClick={handleClick} role="img" />)}

            </div>

            <div className={modal === true ? "modal open" : "modal closed"} id="thisModal">
                <div id="modClose" onClick={closeModal} role="button" tabIndex={0}>CLOSE</div>
                
                <div className="col-12 mod-col">
                    <img alt="" id="modInner" src={modSrc}></img>
                    <div className="gal-cap">
                        <h4>{title}</h4><br></br>
                        {caption}
                    </div>
                </div>   
            </div>

        </>
);
}

export default Gallery;