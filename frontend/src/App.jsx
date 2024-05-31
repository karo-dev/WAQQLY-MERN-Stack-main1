import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateDog from './pages/CreateDog';
import ShowDog from './pages/ShowDog';
import EditDog from './pages/EditDog';
import DeleteDog from './pages/DeleteDog';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Dogs/create' element={<CreateDog />} />
      <Route path='/Dogs/details/:id' element={<ShowDog />} />
      <Route path='/Dogs/edit/:id' element={<EditDog />} />
      <Route path='/Dogs/delete/:id' element={<DeleteDog />} />
    </Routes>
  );
};

export default App;
