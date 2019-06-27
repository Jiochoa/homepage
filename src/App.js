import React from 'react';
import TableOfContent from './components/TableOfContent/TableOfContent';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';


import './App.css';

function App() {
  return (
    <div className="App">
      <TableOfContent />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
