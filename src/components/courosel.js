import React from 'react'
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import image1 from './../assets/images/bg.jpg'
import image2 from './../assets/images/bg2.jpg'
import image3 from './../assets/images/bg3.jpg'

export default function Courosel() {
    return (
        <Carousel
        plugins={[
         'infinite',
        {
          resolve: autoplayPlugin,
          options: {
            interval: 2000,
          }
        },
      ]}   
      animationSpeed={1000}
    >
      <img src={image1} />
      <img src={image2} />
      <img src={image3} />
    </Carousel>
    )
}

