import React from 'react';
import './App.css';
import ClassComponent from './components/PaymentSSL/ClassComponent';
import Classes from './components/PaymentSSL/Classes';
import Products from './components/PaymentSSL/Products';

function App() {
  return (
    <section>
      {/* <p className='text-4xl'> Payment System !! </p> */}
      {/* <Products /> */}
      <Classes />
      <ClassComponent />
    </section>
  );
}

export default App;
