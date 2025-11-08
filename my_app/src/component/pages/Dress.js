import React from 'react'
import "./dres.scss"

export default function Dress() {
  const list = [{ img: "https://taniaolsen.com.au/cdn/shop/files/Jacaranda_9.jpg?v=1716265297&width=1080", name: 'Jacaranda Formal Dress', price: "$150" },
    { img: "https://babaroni.com/cdn/shop/files/preview_images/Sharla-3.jpg?v=1714031435", name: "Off The Shoulder Tiered Prom", price: "$60" },
    { img: "https://cdn-img.prettylittlething.com/6/0/5/c/605cd0b2cbef30967526bc9c2ada92ff25af1c7e_cmu6186_1.jpg?imwidth=600", name: "Women's Formal Dresses ", price: "$54" },
    { img: "https://cdn-2.stacees.co.uk/uploads/2023/07/25/2023072550075180177_S7348H.jpg", name: "A-line Off-the-Shoulder  ", price: "$90" }]
  const list2 = [{ img: "https://cdn-1.stacees.co.uk/uploads/2024/12/18/2024121859123976177_S8448P.jpg", name: "A-line Tulle Prom Dress ", price: "$89" },
    { img: "https://albinadyla.com/cdn/shop/products/AD2143-01@2x.jpg?v=1643999715", name: "Black Long Dress", price: "$80" },
    { img: "https://thatssofetch.com/cdn/shop/files/romeo_maxi_black_8_680x.jpg?v=1709855465", name: "Romeo Maxi Dress ", price: "$79" },
    { img: "https://www.lafemmefashion.com/sites/default/files/dresses_images/black-prom-dress-1-32781.jpg", name: "Prom Dress Style ", price: "$69" }]
  return (
    <div className='dress'>
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
