import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
let data=[{
  name:"Namo Namo",
  img:"https://a10.gaanacdn.com/images/song/3/24429403/crop_480x480_1541417975.jpg",
  link:"https://paglasongs.com/files/download/id/1439"
},
{
  name:"Pani Da Rang",
  img:"https://i.ytimg.com/vi/wPTXkEuMAGo/maxresdefault.jpg",
  link:"https://paglasongs.com/files/download/id/1479"
},
{
  name:"Yalgaar",
  img:"https://i.ytimg.com/vi/zzwRbKI2pn4/maxresdefault.jpg",
  link:"https://paglasongs.com/files/download/id/1211"
},
{
  name:"Naam",
  img:"https://cdn.telanganatoday.com/wp-content/uploads/2020/07/Tulsi-Kumar-.jpg",
  link:"https://paglasongs.com/files/download/id/1555"
},
{
  name:"Ghar se door",
  img:"https://images.genius.com/c7a0ede51c4b829bf848b1f40d0550ad.1000x1000x1.jpg",
  link:"https://paglasongs.com/files/download/id/1671"
},
{
  name:"Naina",
  img:"https://i.pinimg.com/originals/4a/64/e3/4a64e314e7dfdbf577a73fcda6a47b2e.jpg",
  link:"https://paglasongs.com/files/download/id/1543"
},
{
  name:"Naino Wale Ne",
  img:"https://i.ytimg.com/vi/ccirUJwVBqo/maxresdefault.jpg",
  link:"https://paglasongs.com/files/download/id/1660"
},
{
  name:"Dil Ko Maine Di Kasam",
  img:"https://www.pinkvilla.com/files/asim_riaz_and_himanshi_khuranas_third_song_dil_ko_maine_di_kasams_poster_is_out_heres_when_it_will_release.jpg",
  link:"https://paglasongs.com/files/download/id/1674"
},
{
  name:"Koi Deewana Kehta Hai ",
  img:"https://i.pinimg.com/736x/f7/e4/05/f7e405f8d6bdfae2d4f3d8cb7ef6d173.jpg",
  link:"https://paglasongs.com/files/download/id/1596"
},
{
  name:"Kyon",
  img:"https://a10.gaanacdn.com/gn_img/albums/7rVW1Rbk56/rVW1Y0onWk/size_xxl_1593954734.webp",
  link:"https://paglasongs.com/files/download/id/1455"
}

];
 const MediaControlCard=(props)=>{
   
  return(
    <>
    <div className="menu border border-darken-1 bg-white">
    <div className="card1">
   <table className="table">
   <tr>
   <td align="center" className="font-italic h6 exercise">{props.name}</td>
   <td rowSpan="2" align="center"><img src={props.img} className="aimage" /></td>
   </tr>
   <tr>
   <td><audio className="audio mt-4" align="center" controls> <source src={props.link} /></audio></td>
   </tr>
   </table>
  </div>
    </div>
    </>

  );
}
export  {MediaControlCard,data};

