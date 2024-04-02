import React, {useEffect} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { productAction} from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
  let {id} = useParams();
  const product = useSelector((state) => state.product.selectedItem)
  const optionList = useSelector((state) => state.product.optionList)
  const dispatch = useDispatch();
  const getProductDetail = async() => {
    dispatch(productAction.getDetails(id));
  }

  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className='productDetail_wrap'>
      <Container>
        <Row>
          <Col lg="5" className="product-img">
            <img src={product?.img} alt={product?.title}/>
          </Col>
          <Col lg="7" className="product-cont">
            <div className="icon_wrap mBot10">
               {product?.choice === true ? (<p className="icon_choice">CHOICE</p>) : ""}
               {product?.new === true ? (<p className="icon_new">NEW</p>) : ""}
            </div>
            <div className="name mBot10">{product?.title}</div>
            <div className="price mBot20">₩{product?.price}</div>
            <div className="option mBot10">
              <Form.Select aria-label="Default select example">
                <option>사이즈 선택</option>
                {optionList.map((item) => <option value={item} key={item}>{item}</option>)}
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