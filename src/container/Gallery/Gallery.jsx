import React from 'react';

import './Gallery.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { BiLogoInstagram, BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction==='left') {
      current.scrollLeft -= 300;
    }
    else {
      current.scrollLeft += 300;
    }

  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h2 className='headtext__cormorant'>Photo Gallery</h2>
        <p className='p__opensans' style={{color:'#aaa', marginTop:'2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-imgs'>
        <div className='app__gallery-imgs_container' ref={scrollRef}>
          {galleryImages.map((image,index)=>(
            <div className='app__gallery-imgs_card flex__center' key={`gallery_img-${index + 1}`} >
                <img src={image} alt='gallery' />
                <BiLogoInstagram className='gallery__img-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-imgs_arrows'>
          <BiLeftArrowCircle className='gallery__arrow-icon' onClick={()=>scroll('left')} />
          <BiRightArrowCircle className='gallery__arrow-icon' onClick={()=>scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery;
