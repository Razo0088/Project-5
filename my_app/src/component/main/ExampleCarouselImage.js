import React from 'react'
import { Carousel } from 'react-bootstrap';

export default function ExampleCarouselImage() {
  return (
    
          <Carousel fade>
              <Carousel.Item interval={5000}>
                  <img
                      className="d-block w-100"
                      src="https://m.media-amazon.com/images/I/717GcgSJTpL._AC_UY1000_.jpg"
                      alt="Первый слайд"
                  style={{ objectFit: 'cover', height: '400px', width: '100%', transition: 'transform 0.9s ease' }}
                  />
                  <Carousel.Caption>
                  <h3>New arrivals</h3>
                  <p>COLLECTION 2025</p>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={5000}>
              
              <img
                  className="d-block w-100"
                  src="https://www.joebrowns.co.uk/media/catalog/product/W/J/WJ762A_1.jpg"
                  alt="Второй слайд"
                  style={{ objectFit: 'cover', height: '400px', width: '100%', transition: 'transform 0.5s ease' }}
              />
                  <Carousel.Caption>
                  <h3>New arrivals</h3>
                  <p>COLLECTION 2025</p>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={5000}>
                  <img
                      className="d-block w-100"
                      src="https://albinadyla.com/cdn/shop/products/AD2143-01@2x.jpg?v=1643999715"
                      alt="Третий слайд"
                  style={{ objectFit: 'cover', height: '400px', width: '100%', objectPosition: 'center',  transition: 'transform 0.5s ease' }}
                  />
                  <Carousel.Caption>
                  <h3 style={{color:""}}>New arrivals</h3>
                  <p>COLLECTION 2025</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
  )
}
