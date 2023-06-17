import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//  import App from './App';
import reportWebVitals from './reportWebVitals';
//  import ClassCounter from './ClassCounter';
//  import FunctionCounter from './FunctionCounter';
// import Navbar from './Navbar';
//  import ClassExample from './ClassExample';
//  import FunctionExample from './FunctionExample';
// import Form from './Form'
// import A from './A'
// import DataFetch from './DataFetch';
import WebPage from './WebPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar websitename="Entri Course" /> */}
     {/* <App />  */}
    {/*<ClassExample  data="React class constructor"/>
      <FunctionExample />*/}
      {/* <Form /> */}
      {/* <ClassCounter />
      <FunctionCounter /> */}
      {/* <A /> */}
      {/* <DataFetch /> */}
      <WebPage />
    </React.StrictMode>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
