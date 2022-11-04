import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../assets/slider1.png'
import Image2 from '../assets/landinghero2.png'
import Image3 from '../assets/logo.png'


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
            
                <div style={{ height: 600}}>
                    <img src={Image1} />
                </div>
                <div style={{height: 600}}>
                    <img src={Image2} />
                </div>
                <div style={{ height: 600}}>
                    <img src={Image2} />
                </div>
            </Carousel>
)
}

export default ImageCarousel