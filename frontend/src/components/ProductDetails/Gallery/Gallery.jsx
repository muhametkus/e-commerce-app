import React from 'react'
import "./Gallery.css"
const Gallery = () => {
  return (
    <div className="product-gallery">
            <div className="single-image-wrapper">
              <img src="img/products/product2/1.png" id="single-image" alt="" />
            </div>
            <div className="product-thumb">
              <div className="glide__track" data-glide-el="track">
                <ol className="gallery-thumbs glide__slides" > 
                <li className='glide__slide glide__slide--active'>
                  <img src="img/products/product3/1.png" className='img-fluid active' alt="" />
                </li>
                <li className='glide__slide'>
                  <img src="img/products/product3/1.png" className='img-fluid' alt="" />
                </li>
                <li className='glide__slide'>
                  <img src="img/products/product3/1.png" className='img-fluid' alt="" />
                </li>
                
                </ol>
              </div>
              <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                  <i className="bi bi-chevron-left" />
                </button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                  <i className="bi bi-chevron-right" />
                </button>
              </div>
            </div>
          </div>
  )
}

export default Gallery