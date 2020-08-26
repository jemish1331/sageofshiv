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
import { Wave, Random } from 'react-animated-text';
import { colors } from "@material-ui/core";


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
    
    return(
        
        <React.Fragment>
    
       <BrowserRouter>
       <div className=" position-fixed overlap  gray  small-h-25 w-100 d-flex justify-content-center ">
        <NavLink to="/home" activeClassName="selected" className="ml-4 text-white  h4  font-weight-bolder  "><Wave  text="Profile" speed="1"  delay="7"/></NavLink>
        <NavLink to="/exercise" activeClassName="selected" className="ml-4 text-white  h4  font-weight-bolder  "><Wave  text="Exercise" speed="1" delay="7"/></NavLink>
        <NavLink to="/timer" activeClassName="selected" className="ml-4 text-white h4  font-weight-bolder "><Wave  text="Diet-plan" speed="1" delay="7"/></NavLink>
       </div>
       
       
        <Route exact path="/" render={()=>{
            return (
                <div className="d-flex justify-content-center mt-5">
                <br />
                 <br/>
                <img src="https://i.pinimg.com/736x/67/50/8c/67508cacd7406a4cb80ee7bf489a27f9.jpg" className="ml-5 w-50 h-40 "></img>
                 
                <p className="display-4 text-white"> To be continued....</p>
                </div>
            );

        }} />
        <Route  path="/exercise" render={()=>{
            return (
                <>
                <br />
                <br />
                <div className=" gray mt-5 h-25 d-flex justify-content-center">
                <NavLink to="/shoulder" activeClassName="selected"   className="ml-2 text-white h4  font-weight-bolder ">Shoulder-Exercise</NavLink></div> 
                <div className=" gray mt-5 h-25 d-flex justify-content-center"> <NavLink to="/chest" activeClassName="selected"  className="ml-2 text-white h4   font-weight-bolder ">Chest-Exercise</NavLink></div>
                <div className=" gray mt-5 h-25 d-flex justify-content-center"> <NavLink to="/leg" activeClassName="selected"  className="ml-2 text-white h4 font-weight-bolder ">Leg-Exercise</NavLink></div>
                <div className=" gray mt-5 h-25 d-flex justify-content-center"> <NavLink to="/bicep" activeClassName="selected"  className="ml-2 text-white h4  font-weight-bolder" >Bicep-Exercise</NavLink></div>
               
                   
                <br/>
                
                </>
            );

        }} />
        <Route path="/home" render={()=>{
            return(
                <>
                <br/>
                <br/>
                <br/>
                <img src={jemish} className="ml-5 w-50 mt-5 h-50"></img><br/>
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
           <br />
           {Shdata.map(ncard1)}
           </>
            );
        }}
/> 
        <Route path="/Chest" render={()=>{
            return(
            <>
         <br />
           {Cedata.map(ncard1)}
           </>
            );
        }}/>
        <Route path="/Leg" render={()=>{
            return(
            <>
           <br />
           {Ledata.map(ncard1)}
           </>
            );
        }}/>
        <Route path="/Bicep" render={()=>{
            return(
            <>
            <br />
           {Bedata.map(ncard1)}
           </>
            );
        }}/>
        <Route path="/timer" render={()=>{

      return(
         <React.Fragment>
          <br/>
          <br />

          <div className="container mt-3">
          <NavLink to="/togain">Togain weight </NavLink><br/>
          </div>
          <div className="container">
          <NavLink to="/toloss">To weight-loss</NavLink> <br/>
          </div>
        </React.Fragment>
          

      );

            
        }}/>
        
      </BrowserRouter>
           
           <br/>
        <h5 className="CopyRight mt-5 d-flex justify-content-center">© Copyright {year} by JEMISH ITALIYA</h5>
        </React.Fragment>
    );
    
};

export default MainPage;