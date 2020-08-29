import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,NavLink, Redirect} from "react-router-dom";
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
import Toloss from "./Toloss";
import Togain from "./Togain";
import {MediaControlCard,data} from "./MediaControlCard";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

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
function ncard2(val)
{
return (
<MediaControlCard
name={val.name}
img={val.img}
link={val.link}
/>
);
}

const MainPage=()=>{
    let year=new Date().getFullYear();

    
    return(
        
        <React.Fragment>
    
       <BrowserRouter>
       <div className=" position-fixed overlap  gray  small-h-25 w-100 d-flex justify-content-center ">
        <NavLink to="/home" activeClassName="selected" className="ml-4 text-white  h4  font-weight-bolder  ">Profile</NavLink>
        <NavLink to="/exercise" activeClassName="selected" className="ml-4 text-white  h4  font-weight-bolder  ">Exercise</NavLink>
        <NavLink to="/timer" activeClassName="selected" className="ml-4 text-white h4  font-weight-bolder ">Diet-plan</NavLink>
       </div>
      
       <Route exact path="/" render={()=>{
            return (
                <>
                <br/>
                <div className="h4 exercise  font-italic font-weight-light d-flex justify-content-center mb-3 mt-5 ">
                    The harder you fall,<br />
                         &nbsp;  &nbsp;  &nbsp;  The higher you bounce.
                
                </div>
                <div className="mt-5 exercise h6 font-italic ml-3">Swipe  <KeyboardArrowRightIcon/><KeyboardArrowRightIcon/></div>
                <div className="Scrolling-menu ">
                
               {data.map(ncard2)}
               </div>
                 <div className="d-flex justify-content-center ">
                <img src="https://thumbs.dreamstime.com/b/vector-elements-vintage-fitness-gym-labels-sport-bodybuilding-dumbbell-element-barbell-label-66140836.jpg" className="h-75 w-50 mb-5 rounded img-fluid img-thumbnail mt-5"/>
                
                </div>
                
                </>
            );

        }} />
        <Route  path="/exercise" render={()=>{
            return (
                <>
                <br />
                <br />
                <div className=" gray1 mt-5 h-25 d-flex justify-content-center">
                <NavLink to="/shoulder" activeClassName="selected"   className="ml-2 h4 exercise font-weight-bolder ">Shoulder-Exercise</NavLink>
                </div> 
                <div className=" gray1 mt-5 h-25 d-flex justify-content-center"> 
                <NavLink to="/chest" activeClassName="selected"  className="ml-2 h4 exercise  font-weight-bolder ">Chest-Exercise</NavLink>
                </div>
                <div className="gray1  mt-5 h-25 d-flex justify-content-center">
                 <NavLink to="/leg" activeClassName="selected"  className="ml-2 h4 exercise font-weight-bolder ">Leg-Exercise</NavLink>
                 </div>
                <div className="gray1 mt-5 h-25 d-flex justify-content-center"> 
                <NavLink to="/bicep" activeClassName="selected"  className="ml-2 h4 exercise  font-weight-bolder" >Bicep-Exercise</NavLink>
                </div>
               <div className="d-flex justify-content-center mt-3"> 
               <img src="https://www.muscleandfitness.com/wp-content/uploads/2018/12/1109-Dumbbell-Row-Shredded-GettyImages-673114571.jpg?quality=86&strip=all" className="img-fluid img-thumbnail h-50 w-50" />
               </div>
                   
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
                <img src={jemish} className="ml-5 h-75 mt-5 w-75 rounded-3 img-fluid img-thumbnail"></img><br/>
                <br/>
               <a href="https://instagram.com/jemish_italiya_?igshid=i1nrk81esd3j"> <InstagramIcon className="insta-whatsapp" /></a>
                <a href="mailto:italiyajemish99@gmail.com"><DraftsIcon className="insta-whatsapp" /></a>
                <a href="tel:7096015396"><CallIcon className="insta-whatsapp " /> <span className="black"> (+91 7096015396)</span></a>
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
         
          <div className=" gray1 mt-5 h-25 d-flex justify-content-center">
                <NavLink to="/togain" activeClassName="selected"   className="ml-2 h4 exercise font-weight-bolder ">To gain weight</NavLink>
                </div> 
                <div className=" gray1 mt-5 h-25 d-flex justify-content-center">
                <NavLink to="/toloss" activeClassName="selected"   className="ml-2 h4 exercise font-weight-bolder ">To loss weight</NavLink>
                </div>
                <div className="mt-3 d-flex justify-content-center">
                <img src="https://global-uploads.webflow.com/5ca5fe687e34be0992df1fbe/5d9ebc7c36e26ff101bdbbfe_diet%2520chart%2520for%2520women.jpeg" className="img-fluid img-thumbnail h-50 w-50" />
                </div>
         </React.Fragment>
           );
           }}/>
           <Route path="/toloss" render={()=>{
               return(
                   <>
                <Toloss />
                   </>
                     );
           }} />
           <Route path="/togain" render={()=>{
               return(
            <>
            <Togain />
            </>
               );
           }}/>
 
           <Redirect to="/" ></Redirect>
        
      </BrowserRouter>
      <br/>
           
        <div className="position-fixed fixed-bottom h5 d-flex justify-content-center text-white gray CopyRight w-100 ">
        © Copyright {year} by JEMISH ITALIYA
        </div>
        </React.Fragment>
    );
    
};

export default MainPage;