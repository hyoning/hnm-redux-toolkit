import React, { useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
//eslint-disable-next-line
import { fetchProducts } from '../redux/reducers/productSlice';

const ProductAll = () => {
    const productList = useSelector((state) => state.product.productList)
    // eslint-disable-next-line
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();
    const getProducts = () => {
      let searchQuery = query.get("q") || "";
      dispatch(fetchProducts(searchQuery));
    }

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line
    },[query])

  return (
    <div className="productAll_wrap">
      <Container>
        <Row>
            {productList.map((menu) => (
                <Col lg={3} key={menu.id}><ProductCard item={menu}/></Col>
                ))
            }
        </Row>
      </Container>  

    </div>
  )
}

export default ProductAll