import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginForm from './components/AutoForm/LoginForm';
import React from 'react';
import ReactDOM from 'react-dom';

const Index = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Index />, rootElement);
