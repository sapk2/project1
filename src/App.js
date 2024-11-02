import { useState } from "react";
import './Carousel.css';


const image =[
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"

]
export default function App(){
  const [current ,setcurrent]=useState(0);
  function nextslide(){
    setcurrent(current===image.length-1?0:current+1);
  }
  function prevslide(){
    setcurrent(current===image.length - 1?0:current-1);
  }
  return (
<>
<h1>Image Carousel</h1>
<div className="slider">
  <div className="left-arrow" onClick={prevslide} >👈🏾</div>
  <div className="right-arrow" onClick={nextslide} >👉🏾</div>

{image.map((image,index) => current===index &&(
  <div className="slide" key={image}>
    <img src={image} alt="img" />
  </div>)
)}
</div>
</>
  );

};
