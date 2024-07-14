import React, { useState, useEffect } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiDelete, FiShare2, FiTrash2 } from 'react-icons/fi'
import { FiPower, FiEdit, FiShoppingCart, FiHeart, FiArrowDown } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';

import logoImage from '../../assets/logo.webp'
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function AdressesAndOrders() {

    const [shoppingCart, setShoppingCart] = useState([]);
    const [page, setPage] = useState(1);
    const accessToken = localStorage.getItem('accessToken');

    async function fetchMoreShoppingCart() {
        const response = await api.get('api/book/v1', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                page: page,
                limit: 6,
                direction: 'desc'
            }
        });

        setShoppingCart([...shoppingCart, ...response.data._embedded.bookVoes])
        /* setShoppingCart([...shoppingCart, ...response.data._embedded.shoppingCartVoes]) */
        setPage(page + 1);
    }

    useEffect(() => {
        fetchMoreShoppingCart();
    }, [])

    return (
        <>
            <Header />
            <div className="adresses-orders-container" >
                <h1>MY ORDERS</h1>
                <div className='order-section'>
                    <button type="button">
                        <FiArrowLeft size={30} color="#000000" />
                    </button>
                    <div className='order-content'>
                        <div className='first-line'>
                            <h2>Order Name Example</h2>
                            <h2>12/12/2012</h2>
                        </div>
                        <h3>Delivery status: coming to your home</h3>
                        <h3>Delivery code: LA123456ABC</h3>
                        <h3>Transport company: FEDEX</h3>
                        <h3>Product name: Sculture example name</h3>
                    </div>
                    <button type="button">
                        <FiArrowRight size={30} color="#000000" />
                    </button>
                    <h4>Total Orders: 10</h4>
                </div>
                <h1>MY ADRESSES</h1>
                <div className='adresses-section'>
                    <button type="button">
                        <FiArrowLeft size={30} color="#000000" />
                    </button>
                    <div className='adresses-content'>
                        <div className='first-line'>
                            <h2>Adress Name Example</h2>
                            <button type="button">
                                <FiTrash2 size={30} color="#000000" />
                            </button>
                        </div>
                        <h3>Salvador, Bahia</h3>
                        <h3>Street name</h3>
                        <h3>House number</h3>
                        <h3>Neighborhood name</h3>
                        <h3>Next to abandoned building</h3>
                        <h3>CEP 12345678</h3>
                    </div>
                    <button type="button">
                        <FiArrowRight size={30} color="#000000" />
                    </button>
                    <h4>Total Adresses: 10</h4>
                </div>
                <button className='new-adress-button'>New Adress</button>
            </div>
            <Footer />

            {/* <section className="form">
                    <img src={logoImage} alt="Erudio" />
                    <h1>{bookId === '0' ? 'Add New' : 'Update'} Book</h1>
                    <p>Enter the book information and click on {bookId === '0' ? "'Add'" : "'Update'"}!</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#251fc5" />
                        Back to Book
                    </Link>
                </section>
                <form onSubmit={saveOrUpdate}>
                    <input
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input
                        placeholder="Author"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                    <input
                        type="date"
                        value={launchDate}
                        onChange={e => setLaunchDate(e.target.value)}
                    />
                    <input
                        placeholder="Price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />

                    <button className="button" type="submit">{bookId === '0' ? 'Add' : 'Update'}</button>
                </form> */}

        </>

    );
}