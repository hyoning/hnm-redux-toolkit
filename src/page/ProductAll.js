import React, { useEffect, useState, useCallback} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    // eslint-disable-next-line
    const [query, setQuery] = useSearchParams();
    const getProducts = useCallback(async () => {
        let searchQuery = query.get("q") || "";
        let url = `https://my-json-server.typicode.com/hyoning/hnm-shopping/products?q=${searchQuery}`;
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data);

    },[query])

    useEffect(() => {
        getProducts()
    },[getProducts])
    console.log(productList);

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