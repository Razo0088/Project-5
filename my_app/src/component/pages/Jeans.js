import React from 'react'
import "./jeans.scss"
export default function Jeans() {
  const list = [{ img: "https://imagescdn.simons.ca/images/6652-24309-40-A1_2/dusty-blue-jean-jacket.jpg?__=6", name: "Dusty bluejacke", price: "$54" },
  { img: "https://elvdenim.com/cdn/shop/files/mens-classic-denim-jacket-mid-blue-592144_1400x.jpg?v=1722884672", name: "Classic Denim ", price: "$68" },
  { img: " https://m.media-amazon.com/images/I/71zrmkTn8KL._AC_UY1000_.jpg", name: "ATLAS FOR MEN ", price: "$78" },
  { img: "https://shopduer.com/cdn/shop/files/MOFR4505-Tech_Fleece_Denim_Jacket-Classic_Indigo_0858_R-894375.jpg?v=1728446874", name: "Fleece-Lined Blue", price: "$59" },
  ]
  const list2 = [{
    img: " https://assets.vogue.in/photos/620e40b5ecc68b9d65d3896c/2:3/w_2560%2Cc_limit/Alia%2520Bhatt%2520in%2520denim.jpg", name: "How to wear a denim", price: "$39"
  },
  { img: "https://cdn-img.prettylittlething.com/9/0/e/4/90e465a609b829b60b963bcf25a1193d998f454f_cmn6009_1.jpg", name: "PLT Plus Vintage", price: "$65" },
  { img: "https://img.freepik.com/free-photo/attractive-stylish-casual-student-girl-denim-jacket-with-coffee-textbooks-thoughtfully-looking-away-outdoor_574295-1379.jpg", name: "Discount jeans", price: "$38" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgC-IpdiOPR1dfkSZf416e00u02wpN75LxrE6IZfr-XfLVmlx4wboVYUl7ZfyvNZXQYg&usqp=CAU", name: "Raw-Hem Denim", price: "$69" }
  ]
  return (
    <div className='Jeans'>
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
