import React from 'react';
import { Navbar } from './components/layout/Navbar';
import ItemListContainer from './components/pages/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola! Cómo estás? Bienvenido!" />
    </div>
  );
}

export default App;
