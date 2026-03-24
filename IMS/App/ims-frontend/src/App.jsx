// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListCustomerComponent from './components/ListCustomerComponent'
import CustomerComponent from './components/CustomerComponent'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import ListItemComponent from './components/ListItemComponent'
import ItemComponent from './components/ItemComponent'
import ListItemCategoryComponent from './components/ListItemCategoryComponent'
import ItemCategoryComponent from './components/ItemCategoryComponent'
import ListOrderComponent from './components/ListOrderComponent'
import OrderComponent from './components/OrderComponent'



function App() {
  

  return ( 

    <>
      <BrowserRouter>

      <HeaderComponent/>
      <Routes>

        
        {/* // http://localhost:3000 */}
         <Route path ='/' element={<ListCustomerComponent/>}> </Route>

         {/* //http://localhost:3000/customer */}
          <Route path ='/customer' element={<ListCustomerComponent/>}></Route>
          {/* //http://localhost:3000/add-Customer */}
          <Route path='/add-Customer' element={<CustomerComponent/>}></Route>
          {/* //http://localhost:3000/edit-Customer */}
          <Route path='/edit-Customer/:id' element={<CustomerComponent/>}></Route>



          {/* //http://localhost:3000/item*/}
          <Route path='/item' element={<ListItemComponent/>}></Route>
          {/* //http://localhost:3000/add-item*/}
          <Route path='/add-item' element={<ItemComponent/>}></Route>
          {/* //http://localhost:3000/edit-item*/}
          <Route path='/edit-item/:id' element={<ItemComponent/>}></Route>




          {/* //http://localhost:3000/itemCategory*/}
          <Route path='/itemCategory' element={<ListItemCategoryComponent/>}></Route>  
          {/* //http://localhost:3000/add-Category*/} 
          <Route path='/add-Category' element={<ItemCategoryComponent/>}></Route>
          {/* //http://localhost:3000/edit-itemCategory*/}   
          <Route path='/edit-itemCategory/:id' element={<ItemCategoryComponent/>}></Route> 


          

          {/* //http://localhost:3000/order*/}
          <Route path='/order' element={<ListOrderComponent/>}></Route>
          {/* //http://localhost:3000/add-order*/} 
          <Route path='/add-order' element={<OrderComponent/>}></Route>
          {/* //http://localhost:3000/edit-order*/}  
          {/* <Route path='/edit-order/:id' element={<OrderComponent/>}></Route>  */}





      </Routes>
      <FooterComponent/>
      </BrowserRouter>
    </>
  )

}


export default App
