import React from 'react'
import "./gumwear.scss"
export default function Gumwear() {
  const list = [
    { img: "https://aaafashions.com/cdn/shop/files/b9fa9adc48cb6aad3029c95005052f6e.jpg?v=1696052385", name: "Men Fitness wear", price: "$50" },
    { img: " https://thegymking.com/cdn/shop/files/camotee2.jpg?v=1691421262&width=840", name: "Men's Gym Clothes ", price: "$30" },
    { img: "https://aaafashions.com/cdn/shop/files/8_293.webp?v=1696051748", name: "Men Gym wear shorts", price: "$39" },
    { img: "https://media.gq-magazine.co.uk/photos/65f1a5c085ac0dc01acc8f6a/3:4/w_748%2Cc_limit/GymClot", name: "Best Men's Gym ", price: "$70" },
  ]
  const list2 = [
    { img: "https://threo.co.uk/wp-content/uploads/2022/11/He5ec639de6c141ad8818007c2182551fs.webp", name: "Wear Women's Gym Wear", price: "$60" },
    { img: "https://images.bauerhosting.com/affiliates/sites/8/2023/12/Untitled-design-2.jpg?ar=16%3A9&", name: "The best gym clothes for", price: "$36" },
    { img: "https://getfith.co/cdn/shop/files/rahvsid-0025_1.jpg?v=1747983482&width=3824", name: " Workout Clothes", price: "$78" },
    { img: "https://www.dhresource.com/webp/m/0x0/f2/albu/g8/M00/07/E1/rBVaV12XfEmAS1TlAAIYGafxgPc271.jpg", name: "Sportswear Fitness", price: "$15" },
  ]
  return (
    <div className='gumwear'>
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
