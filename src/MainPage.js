import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,NavLink} from "react-router-dom";
import "./index.css";
import Se from "./Se";
import Shdata from "./Shdata";
import Cedata from "./Cedata";
import Ledata from "./Ledata";
import Bedata from "./Bedata";
import jemish from "./images/jemish.jpg";
import InstagramIcon from '@material-ui/icons/Instagram';
import DraftsIcon from '@material-ui/icons/Drafts';
import CallIcon from '@material-ui/icons/Call';


function ncard1(val)
{
return (
<Se
img={val.img}
title={val.title}
data={val.data}
/>
);
}

const MainPage=()=>{
    let year=new Date().getFullYear();
    let prop="btn d-inline btn-primary ";
    
    return(
        <>
        <BrowserRouter>
      
        <NavLink to="/home" activeClassName="selected" replace><button className={prop}>Profile</button></NavLink>
        <NavLink to="/shoulder" activeClassName="selected" ><button className={prop}>Shoulder-Exercise</button></NavLink> 
        <NavLink to="/chest" activeClassName="selected" ><button className={prop}>Chest-Exercise</button></NavLink>
        <NavLink to="/leg" activeClassName="selected" ><button className={prop}>Leg-Exercise</button></NavLink>
        <NavLink to="/bicep" activeClassName="selected" ><button className={prop}>Bicep-Exercise</button></NavLink>
        <NavLink to="/timer" activeClassName="selected" ><button className={prop}>Stopwatch && Timer</button></NavLink>
        
        
        <Route exact path="/mahadevay" render={()=>{
            return (
                <>
                <br />
                <br />
            
                <img src="https://i.pinimg.com/736x/67/50/8c/67508cacd7406a4cb80ee7bf489a27f9.jpg" className="ml-5 w-50 h-40 mt-50px "></img>
                 <h1 className="ml-5">To be continued....</h1>
                
                
                 </>
            );

        }} />
        
        <Route path="/home" render={()=>{
            return(
                <>
                <br/>
                <br/>
                <img src={jemish} className="ml-5 w-50 h-50"></img><br/>
                <br/>
               <a href="https://instagram.com/jemish_italiya_?igshid=i1nrk81esd3j"> <InstagramIcon className="insta-whatsapp" /></a>
                <a href="mailto:italiyajemish99@gmail.com"><DraftsIcon className="insta-whatsapp" /></a>
                <a href="tel:7096015396"><CallIcon className="insta-whatsapp" />  (+91 7096015396)</a>
                <br/>
                <br/>
                </>

            );
        }}
 />
        <Route exact path="/shoulder" render={()=>{
            return(
            <>
            <br/>
           {Shdata.map(ncard1)}
           </>
            );
        }}
/> 
        <Route path="/Chest" render={()=>{
            return(
            <>
            <br/>
           {Cedata.map(ncard1)}
           </>
            );
        }}/>
        <Route path="/Leg" render={()=>{
            return(
            <>
            <br/>
           {Ledata.map(ncard1)}
           </>
            );
        }}/>
        <Route path="/Bicep" render={()=>{
            return(
            <>
            <br/>
           {Bedata.map(ncard1)}
           </>
            );
        }}/>
        <Route path="/timer" render={()=>{

      

            
        }}/>
        
           </BrowserRouter>
           <br/>
           <br/>
        <h5 className="CopyRight">© Copyright {year} by JEMISH ITALIYA</h5>
        </>
    );
    
};
export default MainPage;