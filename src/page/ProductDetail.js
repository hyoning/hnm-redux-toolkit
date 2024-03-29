import React, {useEffect, useState, useCallback} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const [productOption, setProductOption] = useState([]);
  const getProductDetail = useCallback(async() => {
    let url = `https://my-json-server.typicode.com/hyoning/hnm-shopping/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
    setProductOption(data.size);
  },[id])

  useEffect(() => {
    getProductDetail();
  }, [getProductDetail]);

  return (
    <div className='productDetail_wrap'>
      <Container>
        <Row>
          <Col lg="5" className="product-img">
            <img src={product?.img} alt={product?.title}/>
          </Col>
          <Col lg="7" className="product-cont">
            <div class="icon_wrap mBot10">
               {product?.choice === true ? (<p className="icon_choice">CHOICE</p>) : ""}
               {product?.new === true ? (<p className="icon_new">NEW</p>) : ""}
            </div>
            <div className="name mBot10">{product?.title}</div>
            <div className="price mBot20">₩{product?.price}</div>
            <div className="option mBot10">
              <Form.Select aria-label="Default select example">
                <option>사이즈 선택</option>
                {productOption && productOption.map((item) => <option value={item} key={item}>{item}</option>)}
              </Form.Select>
            </div>
            <Button className="product-button" variant="dark">추가</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail