import React from 'react';
//import ReactDOM from 'react-dom/client';
import './Image-css.css';


export default function ImageSlides(){
    return(
<>
<div className="imageList">
    {/* <img src="https://static.invenglobal.com/upload/image/2020/04/02/i1585819016848035.jpeg" className="rounded float-left" alt="Responsive image"/> */}
    {/* <img src="https://static1-us.millenium.gg/articles/8/13/54/8/@/144762-phoenix-amp_main_media_schema-3.jpg" className="rounded float-right" alt="Responsive image"/> */}
    {/* <img src="https://static.invenglobal.com/upload/image/2020/04/02/i1585819016848035.jpeg" className="img-fluid" alt="Responsive image"/> */}

</div>

    <div className="imageList">
        
            <img src="https://static.invenglobal.com/upload/image/2020/04/02/i1585819016848035.jpeg" alt="Responsive image"/>
        

        
            <img src="https://static1-us.millenium.gg/articles/8/13/54/8/@/144762-phoenix-amp_main_media_schema-3.jpg" alt="Responsive image"/>
        

        
            <img src="https://static1-us.millenium.gg/articles/5/13/51/5/@/144606-sage-amp_main_media_schema-3.jpg" alt="Responsive image"/>
        

        
            <img src="https://prod.assets.earlygamecdn.com/images/sova-agent.jpg?x=0.5&y=0.5" alt="Responsive image"/>
        
    </div>
</>
);
}