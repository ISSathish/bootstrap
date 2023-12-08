import logo from './logo.svg';
import './App.css';
import Product from './Product'
import React, {useState} from 'react';

import { ProductContext } from './ProductContext';
import Profile from './Profile';

function App() {

    const [productname,setProductname]=useState("")
    const [productprice,setProductprice]=useState("")
    const [productquantity,setProductquantity]=useState("")
    const [productdescription,setProductdescription]=useState("")

    const[showProfile,setShowProfile]=useState(false)


  return (
    <div className="App">
      <ProductContext.Provider value={{productname,setProductname,productprice,setProductprice,productquantity,setProductquantity,productdescription,setProductdescription,setShowProfile}}>

        { showProfile ? <Profile/> : <Product/> }

      </ProductContext.Provider >

    </div> 
  );
}

export default App;
