import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ManageProducts.css';

const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://calm-peak-97207.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, []);

    const handleProduct = id => {
        const proceed = window.confirm('are you sure, you want to delete?')
        if (proceed) {
            const url = `https://calm-peak-97207.herokuapp.com/allProducts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete successfully');
                        const remaining = allProducts.filter(allProduct => allProduct._id !== id)
                        setAllProducts(remaining);
                    }
                });
        };
    };
    return (
        <div>
            <h1>Manage All Products Here</h1>
            <div className="allProduct-container">
                {
                    allProducts.map(allProduct => <div className="single-allProduct" key={allProduct._id}>
                        <img src={allProduct.img} alt="" />
                        <h2>{allProduct.name}</h2>
                        <p>{allProduct.description.slice(0, 50)}</p>
                        <h3>{allProduct.price}</h3>
                        <br />
                        <Button variant="contained" style={{ backgroundColor: "#F5B041", color: "white", borderRadius: "5px", padding: "8px 16px", marginBottom: 5 }} onClick={() => handleProduct(allProduct._id)}>Delete</Button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;