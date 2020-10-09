import React, { useEffect, useState } from 'react';
import GalleryImg from './gallery-image';

const Gallery = (props) => {

    const [modal, setModal] = useState(false);
    const [modSrc, setModSrc] = useState("");

    function handleClick(event){
        event.preventDefault();
        setModal(true);
            setModSrc(event.target.style.backgroundImage.split('("')[1].split('")')[0])
    }

    function closeModal(){
        setModal(false);
    }

    useEffect(() => document.addEventListener("keydown", function(e){ if(e.key === "Escape"){ closeModal() } else {} }, false), []);
    

    return(
        <>

            <div className="row" id="gallery">
    
                {props.gal.map(im => <GalleryImg src={im.sourceUrl} alt={im.altText} key={im.id} onClick={handleClick} role="img" />)}

            </div>

            <div className={modal === true ? "modal open" : "modal closed"}>
                <div id="modClose" onClick={closeModal} role="button" tabIndex={0}>CLOSE</div>
                <img alt="" id="modInner" src={modSrc}></img>
            </div>

        </>
);
}

export default Gallery;