import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../assets/slider1.png'
import Image2 from '../assets/landinghero2.png'
import Image3 from '../assets/logo.png'
import caro1 from '../assets/carosel1.JPG'
import caro2 from '../assets/carosel2.JPG'
import caro3 from '../assets/carosel3.JPG'


function ImageCarousel() {
return(
<Carousel 
          width={320} 
          autoFocus 
          autoPlay 
          infiniteLoop 
          interval={1000} 
          showArrows={false} 
          showStatus={false} 
          showIndicators={false} 
          showThumbs={false}>
            
                <div style={{ height: 700, borderRadius:20 }}>
                    <img src={caro3} style={{borderRadius:20}} />
                </div>
                <div style={{height: 700, borderRadius:20}}>
                    <img src={caro1} style={{borderRadius:20}} />
                </div>
                <div style={{ height: 700, borderRadius:20}}>
                    <img src={caro2} style={{borderRadius:20}} />
                </div>
            </Carousel>
)
}

export default ImageCarousel