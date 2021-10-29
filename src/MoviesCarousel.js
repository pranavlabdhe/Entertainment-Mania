import {React,useState} from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
// import { UncontrolledCarousel} from "reactstrap";
import { imageUrl } from "./imageUrl";
const MovieCarousel = (props) =>{
const [current,setCurrent] = useState(0)
const length = props.trending.length

const nextSlide = ()=>{
    setCurrent(current === length -1 ?0:current+1)
}
const prevSlide = ()=>{
    setCurrent(current===0?length-1:current-1)
}
// console.log(current);

if(!Array.isArray(props.trending)||props.trending.length <=0){
    return null;
}
    return(
        <div className="main">
        <div className="tending_text">
        <h1 className="text-center">THIS WEEKS TRENDING</h1>
        </div>
        <div className="border_div"></div>
        <div className="slider">
        <FaArrowAltCircleLeft className="left-arrow"
            onClick={prevSlide}
        />
        <FaArrowAltCircleRight className="right-arrow" 
          onClick={nextSlide}  
        />
        {props.trending.map((s,index)=>{
            return(
                <div className={index===current?'s active':'s'} key={index}>
                    {index===current && (<img src= {imageUrl + s.poster_path} alt="image" className="slider_images"/> )}
                  
                </div>
            )
        })}
        </div>
        </div>
        
    );
}
export default MovieCarousel;
