import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./index.css";
import Se from "./Se";
import Shdata from "./Shdata";
import Cedata from "./Cedata";
import Ledata from "./Ledata";
import Bedata from "./Bedata";
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
    let prop="btn btn-space btn-primary ";
    
    return(
        <>
        <BrowserRouter>
        <NavLink to="/shoulder" activeClassName="selected" ><button className={prop}>Shoulder-Exercise</button></NavLink> 
        <NavLink to="/chest" activeClassName="selected" ><button className={prop}>Chest-Exercise</button></NavLink>
        <NavLink to="/leg" activeClassName="selected" ><button className={prop}>Leg-Exercise</button></NavLink>
        <NavLink to="/bicep" activeClassName="selected" ><button className={prop}>Bicep-Exercise</button></NavLink>
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
        </BrowserRouter>

        <h5 className="CopyRight">© Copyright {year} </h5>
        </>
    );
    
};
export default MainPage;