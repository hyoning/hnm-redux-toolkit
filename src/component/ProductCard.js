import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div className="product_box" onClick={showDetail}>
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