import React from 'react'
import "./shirt.scss"
export default function Shirt() {
  const list = [{ img: "https://d1pdzcnm6xgxlz.cloudfront.net/bottoms/8905875418108-18.JPG", name: 'The New York Times', price: "$50" },
  { img: "https://www.thefashionisto.com/wp-content/uploads/2023/07/100-Percent-Cotton-Denim-Jeans-Stone-Wash-Tailored-Dearborn.jpg", name: "Pepe Jeans India", price: "$67" },
  { img: "https://hmonline.ru/pictures/product/big/13626459_big.jpg", name: "Super Baggy Jeans H&M", price: "$34" },
  { img: "https://i.pinimg.com/736x/da/12/f1/da12f1027e220594360893da0bfc8abf.jpg", name: "Outfits with Blue Jeans", price: "$79" }]
  const list2 = [{ img: "https://cdn15.nnnow.com/web-images/large/styles/L3WT5SX9V1E/1738239769009/1.jpg", name: "Flying Machine Women", price: "$124" },
  { img: "https://cdn-img.prettylittlething.com/0/1/4/1/01418664d4d47ea5d899f14270df580ad5862ffa_CNL8837_1_petite_light_blue_long_leg_straight_jeans.jpg?imwidth=600", name: "Women's Blue Jeans", price: "$80" },
  { img: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/im65NRFgCzi8/v0/-1x-1.webp", name: "Blue Jeans", price: "$109" },
  { img: "https://lsco.scene7.com/is/image/lsco/A55660010-dynamic1-pdp?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=1120&hei=1494", name: "Womens Baggy Jeans", price: "$69" }]
  return (
    <div className='shirt'>
      <div className='box1'>
        {list.map((elem, index) => {
          return <div key={index} style={{
            backgroundImage: `url(${elem.img})`, backgroundRepeat: "no-repeat",
            backgroundSize: "100% 80%",
          }}> <p>{elem.name}</p> <b>{elem.price}</b></div>
        })}
      </div>
      <div className='box2'>
        {list2.map((elem, index) => {
          return <div key={index} style={{
            backgroundImage: `url(${elem.img})`, backgroundRepeat: "no-repeat",
            backgroundSize: "100% 80%",
          }}> <p>{elem.name}</p> <b>{elem.price}</b></div>
        })}
      </div>
    </div>
  )
}
