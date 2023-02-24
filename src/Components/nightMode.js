import React,{useState} from 'react'
//import Navbar from './Navbar';



export default function DarkMode(props) {
    //default is removed
    const [myStyle,setStyle] = useState({
        // display : "flexbox",
        // alignItems : "centre",
        color: "white",
        backgroundColor: "black",
    })

    function ModeChange(){
        if (myStyle.color ==='white'){
            //let mode='dark'
            setStyle({
                color: "black",
                backgroundColor: "white"
            });
            
            console.log("dark")
            
        }else{
            //let mode='light'
            setStyle({
                color: "white",
        backgroundColor: "black"
            });
            
            console.log("light")
        }
    }
        
    

  return (
    <>
    <div style={{dispplay:"flexbox",alignItems:"end"}}>
        <button type="button" className="btn btn-dark my-3 mx-1 " style={myStyle} onClick={ModeChange} >Dark Mode</button>
    </div>
    </>
  );
}


