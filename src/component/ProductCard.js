import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
        <div>
            <img src={item?.img} alt=""/>
        </div>
        <div>Conscious choice</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard