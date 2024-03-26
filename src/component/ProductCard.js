import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className="product_box">
        <div className="thumb"><img src={item?.img} alt=""/></div>
        <div className='product_detail'>
            <div className="choice">{item?.choice === true ? "Choice" : ""}</div>
            <div className="name">{item?.title}</div>
            <div className="price">₩{item?.price}</div>
            <div className="icon">{item?.new === true ? "신제품" : ""}</div>
        </div>
    </div>
  )
}

export default ProductCard