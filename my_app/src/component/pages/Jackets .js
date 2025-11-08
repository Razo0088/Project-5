import React from 'react'
import "./jacets.scss"
export default function Jackets () {
  const list = [{ img: "https://imagescdn.allensolly.com/img/app/product/3/39827108-16449666.jpg?auto=format&w=390", name: "Buy Men Brown Solid ", price:"$65"},
    { img: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/Search/Lge/F31807.jpg?im=Resize,width=450", name: "Smart & Casual Jackets", price: "$84" },
    { img: "https://static.aceomni.cmsaceturtle.com/prod/product-image/aceomni/Wrangler/Monobrand/WMJK005313/WMJK005313_1.jpg", name: "Brown Regular Fit", price: "$86" },
    { img: "https://files-burkeandwills-com-au.s3.ap-southeast-2.amazonaws.com/172/MENS-KINGS-JACKET-HERO-BRONZE.jpg", name: "Stylish &mode", price: "$34" }
]
  const list2 = [{ img: "https://sites.create-cdn.net/siteimages/46/2/4/462425/20/9/6/20969782/339x340.png?1711120112", name: "Human Women's Jacket, Grace", price: "$50" },
    { img: "https://media.columbia.com/i/columbiasprtswr/Asset07_Grid%20Banner_CA_1?$img-cache$&h=622&fmt=auto", name: "Jackets -Women", price: "$36" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOvPp_z6il81x5xQHdtHNBZOPpYxWaARxaA&s", name: "BikerJackets|boohoo", price: "$34" },
    { img: "https://forecast.com.pk/cdn/shop/files/R1_3ee63f4e-dc88-46e5-9f68-d4213d19591f.jpg?v=1731526486", name: "Forecastclothing", price: "$78" }
  ]



  return (
    <div className='jacets'>
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
