import React from 'react';
import { useNavigate } from 'react-router';

const Product = ({ d }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/product/${d.id}`);
    };

    return (
        <button
            onClick={handleButtonClick}
            style={{
                border: '1px solid gray',
                padding: '5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
            }}
        >
            <div>
                <img src={d.image} alt='' height={150} />
            </div>
            <div style={{ fontWeight: '600' }}>{d.type}</div>
            <div>{d.cost}</div>
            <div style={{ background: 'orange', borderRadius: '15px', padding: '6px', width: '200px' }}>
                <b>Go to Product</b>
            </div>
        </button>
    );
};

export default Product;
