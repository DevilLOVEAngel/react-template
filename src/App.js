import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <Header />
      Hello World
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
