import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ProductUploadForm from './Components/ProductUploadForm';
import ViewDetails from './Components/ProductDetailsPage';
import AdminPage from './Components/AdminPage';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/uploadproduct" element={<ProductUploadForm />} />
                <Route path="/productdetails/:id" element={<ViewDetails />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </div>
    );
};

export default App;