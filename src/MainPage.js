import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,NavLink, Redirect} from "react-router-dom";
import "./index.css";
import Se from "./Se";
import Shdata from "./Shdata";
import Cedata from "./Cedata";
import Ledata from "./Ledata";
import Bedata from "./Bedata";
import Toloss from "./Toloss";
import Togain from "./Togain";
import {MediaControlCard,data} from "./MediaControlCard";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Col, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { LocalForm,Control, Errors } from 'react-redux-form';
import { TransitionGroup,CSSTransition } from "react-transition-group";


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
 const [view,setView]=useState(false);
 const [detail,setDetail]=useState('');
 const required=(val)=>val && val.length;
 const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber=(val)=>Number(val);
 
    
    return(
        
        <React.Fragment>
    
       <BrowserRouter>
       <div className=" position-fixed overlap  gray  small-h-25 w-100 d-flex justify-content-left ">
        
        <NavLink to="/exercise" activeClassName="selected" className="ml-4 text-white  h4  font-weight-normal ">Exercise</NavLink>
        <NavLink to="/timer" activeClassName="selected" className="ml-4 text-white h4  font-weight-normal ">Diet-plan</NavLink>
        <div className="text-white h4 font-weight-normal ml-4" onClick={()=>setView(!view)}>Contact Us</div>
        </div>
        
       <Modal isOpen={view} toggle={()=>setView(!view)} className="modal-dialog mt-5">
       <ModalHeader toggle={()=>setView(!view)}>Fill the Form</ModalHeader>
       <ModalBody>
       <LocalForm onSubmit={(values)=>{
           alert('Current State is: ' + JSON.stringify(values)); 
            setView(!view);
       }} toggle={()=>setView(!view)} >
       <Row className="form-group">
           <Label htmlFor="firstname" md={3}>First-Name:</Label>
           <Col md={9}>
           <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name" className="form-control"
               validators={{
                required, minLength: minLength(3), maxLength: maxLength(15)
               }}
                />
               <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
         </Col>
        </Row>
        <Row className="form-group">
        <Label htmlFor="lastname" md={3}>Last-name:</Label>
          <Col md={9}> 
          <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name" className="form-control"
              validators={{
                  required,minLength:minLength(3),maxLength:maxLength(10)
              }}
          />
          <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
          </Col>
        </Row>
        <Row className="form-group">
        <Label htmlFor="telnum" md={3}>Tel-Num</Label>
        <Col md={9}>
        <Control.text model=".telnum" id="telnum" name="telnum" placeholder="Enter Number" className="form-control" validators={{
            required,minLength:minLength(10),maxLength:maxLength(10),isNumber
        }}/>
        <Errors className="text-danger"
                model=".telnum"
                show="touched"
                messages={{
                    required:'Required',
                    minLength: 'Must be 10 characters',
                    maxLength: 'Must be 10 characters',
                    isNumber:'Must be a Number'
                }}
        />
  
        </Col>
        </Row>

        <Row className="form-group">
        <Label htmlFor="gender" md={3}>Gender:</Label>
        <Col md={5}>
        <Control.select model=".gender" id="gender" name="gender" placeholder="please select" validators={{required}} className="form-control" >
        <option defaultValue="select">Select gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
        
        </Control.select>
        <Errors className="text-danger" model=".gender" show="touched" messages={{required:"Please select gender"}}></Errors>
        </Col>
        </Row>
          
           <Row className="d-flex justify-content-center mr-3">
           
           <Label htmlFor="submit">
           <button type="submit" >Submit</button>
           </Label>
           </Row>
           
       </LocalForm>

       </ModalBody>
       <ModalFooter toggle={()=>setView(!view)} className="d-flex justify-content-center">
       Thanks for visit
       </ModalFooter>
       
       </Modal>
       
       <TransitionGroup >
    <CSSTransition className="page-enter page-enter-active page-exit" timeout={300}>
    <switch>
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
           </switch>
           </CSSTransition>
      </TransitionGroup>
      </BrowserRouter>
      
      <br/>
           
        <div className="position-fixed fixed-bottom h5 d-flex justify-content-center text-white gray CopyRight w-100 ">
        © Copyright {year} by JEMISH ITALIYA
        </div>
        </React.Fragment>
    );
    
};

export default MainPage;