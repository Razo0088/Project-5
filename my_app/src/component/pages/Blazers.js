import React from 'react'
import "./blazers.scss"
export default function Blazers() {
  const list = [{ img: "https://content.moss.co.uk/images/extraextralarge/967043509_02.jpg", name: 'Formal & Casual Blazer Jackets', price: "$150" },
    { img: "https://www.schoffelcountry.com/cdn/shop/files/20-5015-6792_20-3016-8880copy.jpg?v=1756721523&width=2000", name: "St Andrews Tweed Sports Jacket", price: "$260" },
    { img: "https://www.threadpepper.com/cdn/shop/files/caridi-navy-jacket-blazers-jackets-128447.jpg?v=1706938662&width=533", name: "Caridi Beige Jacket", price: "$134" },
    { img: "https://img-lcwaikiki.mncdn.com/mnpadding/1020/1360/ffffff/pim/productimages/20231/6335400/v5/l_20231-s3cb47z8-sxu-98-76-97-189_a.jpg", name: "LCWAIKIKI Classic Slim ", price: "$90" }]
  const list2 = [{ img: "https://www.blazerboutique.com/wp-content/uploads/2016/01/2211c.jpg", name: "Black Womens Uniform", price: "$89" },
    { img: "https://m.media-amazon.com/images/I/717GcgSJTpL._AC_UY1000_.jpg", name: "Women's Blue Blazers", price: "$80" },
    { img: "https://res.cloudinary.com/the-groomsman-suit/image/upload/f_jpg,h_1124,w_830,c_crop,g_north,h_1124,w_830,q_auto/v1/gatsby-cloudinary/products/product_womens-blazers_7104535101613?_a=AXAH4S10", name: "Autumn Fashion Casual", price: "$109" },
    { img: "https://www.joebrowns.co.uk/media/catalog/product/W/J/WJ762A_1.jpg", name: " Check & Tweed Blazers ", price: "$69" }]
  return (
    <div className='Blazers'>
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
