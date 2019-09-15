import React from 'react';
import Header from './Header';
import TextSection from './TextSection';
import Footer from './Footer';
import Counter from './Counter'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Idx = () => {
  return (
    <Router>
      <div>
        <Header text='Hello from Header Component!' />
        <TextSection text='Hello from TextSection Component!' />
        <Footer text='Hello from Footer Component!' />

        <Counter />
      </div>
    </Router>
  );
};

export default Idx;
