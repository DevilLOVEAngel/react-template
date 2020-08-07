import Footer from './components/Footer/Footer';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      Hello World
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
