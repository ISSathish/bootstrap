import React, { useState, useContext } from 'react';
import { ProductContext } from './ProductContext';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';

function Product(){

   const {setProductname,setProductprice,setProductquantity,setProductdescription,setShowProfile}= useContext(ProductContext)

    // const [productname,setProductname]=useState("")
    // const [productprice,setProductprice]=useState("")
    // const [productquantity,setProductquantity]=useState("")
    // const [productndescription,setProductdescription]=useState("")

    
    return(

       <section className='product-sec'>
        <Container>
            <div className='product'>
                <div className='Col'>
                <h2>Product Details</h2>
                <Form>
                    <InputGroup className='inner-product mt-3 w-50 m-auto '>
                        <Form.Control placeholder='Product name' className='name'
                        onChange={(event)=>{
                            setProductname(event.target.value)
                        }}/>
                    </InputGroup>
                    <InputGroup className='inner-product mt-3 w-50 m-auto'>
                        <Form.Control placeholder='Product price' className='name'
                        onChange={(event)=>{
                            setProductprice(event.target.value)
                        }}/>
                    </InputGroup>
                    <InputGroup className='inner-product mt-3 w-50 m-auto'>
                        <Form.Control placeholder='Product quantity' className='name'
                        onChange={(event)=>{
                            setProductquantity(event.target.value)
                        }}/>
                    </InputGroup>
                    <InputGroup className='inner-product mt-3 w-50 m-auto'>
                        <Form.Control placeholder='Product description' className='name'
                        onChange={(event)=>{
                            setProductdescription(event.target.value)
                        }}/>
                    </InputGroup>
                        <button className='submit bg-primary text-white m-3' onClick={()=>{setShowProfile(true)}}>Submit</button>
                </Form>
                </div>
            </div>  
         </Container>
        </section>
    )
}

export default Product