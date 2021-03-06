import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Login';
import './asset/style/index.css';
import Dashboard from './Component/Dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {
          localStorage.getItem('token') ?
            (
              <>
                <Route exact path='/dashboard' element={<Dashboard />}></Route>
              </>
            ) : (
              <>
                <Route exact path='/' element={<Login />}></Route>

              </>
            )

        }
        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/dashboard' element={<Dashboard />}></Route>





      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
