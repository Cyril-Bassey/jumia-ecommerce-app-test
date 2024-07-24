import React from 'react';
import  'flowbite';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ProductUploadForm from './Components/ProductUploadForm';
// import AdminPage from './Components/AdminPage';
import ViewDetails from './Components/ProductDetailsPage';
import Admin from './Components/Admin';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/uploadproduct" element={<ProductUploadForm />} />
                <Route path="/productdetails/:id" element={<ViewDetails />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </div>
    );
};

export default App;