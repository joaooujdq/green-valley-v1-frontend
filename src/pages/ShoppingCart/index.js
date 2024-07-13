import React, { useState, useEffect } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiDelete, FiShare2, FiTrash2 } from 'react-icons/fi'
import { FiPower, FiEdit, FiShoppingCart, FiHeart, FiArrowDown } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';

import logoImage from '../../assets/logo.webp'
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function ShoppingCart() {

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
                limit: 7,
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
            <div className="shopping-cart-container" >
                <h1>MY SHOPPING CART</h1>
                <ul>
                    {shoppingCart.map(shoppingCart => (
                        <li className='shopping-cart' key={shoppingCart.id}>
                            <div className='sc-img-and-name'>
                                <img src={logoImage} alt="Shopping Cart Image" />
                                <h2>Shopping Cart name: {shoppingCart.id}</h2>
                            </div>
                            <div className='sc-delete-and-price'>
                                <button type="button">
                                    <FiTrash2 size={30} color="#000000" />
                                </button>
                                <h3>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(shoppingCart.price)}</h3>
                            </div>
                        </li>
                    ))}
                </ul>
                <button>Checkout</button>
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