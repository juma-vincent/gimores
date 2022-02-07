import React, { useState, useRef, useEffect } from 'react';
import Arrow from '../arrow/arrow';
import Dots from '../dots/dots';
import Slide from '../slide/slide';
import './banner-slider.scss';
import { ImageSliderContainer} from './banner-slider.styles';

const bannerData=[
{title:'We care for mothers and girls', 
subtitle:'', 
buttonText:'',
link:'/contact',
imageUrl:'/images/img2.jpg'},

{title:'They are special', 
subtitle:'', 
buttonText:'',
// link:'https://api.whatsapp.com/send?phone=254701032469',
link:'/event-booking',
imageUrl:'/images/img1.jpg'},

{title:'', 
subtitle:'', 
buttonText:'',
link:'/contact',
imageUrl:'/images/img3.jpg'},

]



const BannerSlider = ({autoPlay}) => {
    const [x, setX] = useState(0);

    const autoPlayRef = useRef();

    useEffect(()=>{
        autoPlayRef.current= goRight;
    })

    useEffect(()=>{
        const play = ()=>{
          autoPlayRef.current()
        }
        if(autoPlay){
          const interval = setInterval(play, autoPlay* 1000);
          return ()=> clearInterval(interval)
        }
        
      },[])

    const goLeft= ()=>{
        x === 0? setX(-100*(bannerData.length -1)) : setX(x+100);        
        
    }

    const goRight= ()=>{
        (x === -100*(bannerData.length -1))? setX(0) : setX(x-100);        
    }

    return (
        <ImageSliderContainer>
            
            {bannerData.map(({imageUrl, title, subtitle, buttonText,link })=> 
                    
                       
                    <Slide key={imageUrl}
                    x={x}
                    imageUrl={imageUrl} 
                    title={title} 
                    subtitle={subtitle} 
                    buttonText={buttonText}
                    link={link}
                    />
                )
            }
            <Arrow direction='left' handleClick={goLeft}/>
            <Arrow direction='right' handleClick={goRight}/>
            <Dots arraydata={bannerData} activeIndex={x}/>
            
        </ImageSliderContainer>
      );
}
 
export default BannerSlider;