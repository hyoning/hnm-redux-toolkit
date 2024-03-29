import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div className="product_box" onClick={showDetail}>
        <div className="thumb">
          <div class="icon_wrap">
               {item?.choice === true ? (<p className="icon_choice">CHOICE</p>) : ""}
               {item?.new === true ? (<p className="icon_new">NEW</p>) : ""}
          </div>
          <img src={item?.img} alt=""/>
        </div>
        <div className='product_detail'>
            <div className="name">{item?.title}</div>
            <div className="price">₩{item?.price}</div>
        </div>
    </div>
  )
}

export default ProductCard