import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import Card from 'react-bootstrap/Card';

function Profile(){

    const {productname,productprice,productquantity,productdescription}=useContext(ProductContext)
    return(
        <div>

    <Card  className="m-auto mt-5 bg-primary text-white"style={{ width: '28rem' }}>
        <Card.Img variant="top" src="img/iphone.avif" />
        <Card.Body>
            <Card.Title>Product Details</Card.Title>
            <Card.Text>
                <p>{productname}</p>
                <p>{productprice}</p>
                <p>{productquantity}</p>
                <p>{productdescription}</p>
            </Card.Text>
        </Card.Body>
    </Card>
            
        </div>
    )
}

export default Profile