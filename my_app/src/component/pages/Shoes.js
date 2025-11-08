import React from 'react'
import "./shoes.scss"

export default function Shoes() {
  const list = [
    { img: "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Library-Sites-SkechersSharedLibrary/default/dw43b90dff/images/2025-Images/Q3/Mens_FW25_CasualSneakers.jpg?sw=356", name: "Men's Shoes: Sneakers", price: "$25" },
    { img: "https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/2507_EMEA_HD_ImageTileUpdate_ImageTile_New_For_Him/Crocs", name: "Men's Casual Shoes ", price: "$35" },
    { img: "https://cdnimg.brunomarc.com/thumbnail/600x600/brunomarcshoes/product/product/2024-01-31/7500/08:58--SBOX2401M-Grey-1.jpg", name: "Men's Knitted Business Casual", price: "$40" },
    { img: "https://shopify-app-group-product.s3.amazonaws.com/1715079127126-8.jpg", name: "Casual Sneaker Shoes For Men", price: "$30" },
  ]
  const list2 = [
    { img: "https://i5.walmartimages.com/seo/adviicd-Water-Shoes-For-Women-Business-Casual-Shoes-For-Women-Print-Slip-On-Canvas-Shoes-Womens-Casual-Canvas-Flat-Sneakers-Shoes-White-8_bfb2b081-c54d-468b-b044-1fba2bb4b5dc.f2c4d737b8c6eaa224af344f5a7cf3f9.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", name: "Adviicd Water Shoes For", price: "$36" },
    { img: "https://image.made-in-china.com/202f0j00tpRoZEhJqazq/2024-Newsonfly-Women-s-Fashion-Casual-Shoes-Women-Sneakers-Lady-Shoe-Sneaker.jpg", name: "2024 Newsonfly Women's Fashi", price: "$36" },
    { img: "https://img.fruugo.com/product/5/26/1601755265_0340_0340.jpg", name: "Women's Casual Shoes Women's", price: "$43" },
    { img: "https://kxadmin.metroshoes.com/product/31-808/550/31-808LA21.jpg", name: "Buy Stylish Shoes for Women Up To", price: "$25" },
  ]
  return (
    <div className='shoes'>
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
