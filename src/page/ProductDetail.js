import React, {useEffect, useState, useCallback} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
 
  const getProductDetail = useCallback(async() => {
    let url = `http://localhost:3001/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  },[id])

  useEffect(() => {
    getProductDetail();
  }, [getProductDetail]);

  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img">
            <img src={product?.img} alt={product?.title}/>
          </Col>
          <Col sm={7}>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail