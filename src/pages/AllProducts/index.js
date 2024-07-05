import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiEdit, FiShoppingCart, FiHeart, FiArrowDown } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';

import logoImage from '../../assets/logo.webp'

export default function AllProducts() {

    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);

    const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');

    const history = useHistory();

    async function logout() {
        localStorage.clear();
        history.push('/');
    }

    async function editBook(id) {
        try {
            history.push(`book/new/${id}`)
        } catch (error) {
            alert('Edit failed! Try again.');
        }
    }
    async function deleteBook(id) {
        try {
            await api.delete(`api/book/v1/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

            setBooks(books.filter(book => book.id !== id))
        } catch (err) {
            alert('Delete failed! Try again.');
        }
    }

    async function fetchMoreBooks() {
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

        setBooks([...books, ...response.data._embedded.bookVoes])
        setPage(page + 1);
    }

    useEffect(() => {
        fetchMoreBooks();
    }, [])

    return (
        <div className="all-products-container">
            <header className='account-buttons-header'>
                <h1>Generic Store Name</h1>
                <div >
                    <button className='shopping-cart-counter' >
                        <p>10</p>
                        <FiHeart size={20} color="#004F3C" />
                    </button>
                    <button className='favorites-counter'>
                        <p>10</p>
                        <FiShoppingCart size={20} color="#004F3C" />
                    </button>
                    <button>my profile</button>
                    <button>logout</button>
                </div>
            </header>
            <div className="filter-button">
                <button className='order-by'>
                    <p>Best Sellers</p>
                    <FiArrowDown size={40} color="#000000" />
                </button>
                <button className='items-collection'>
                    <p>All Items</p>
                    <FiArrowDown size={40} color="#000000" />
                </button>
            </div>

            {/*  <img src={logoImage} alt="Erudio" />
                <span>Welcome, <strong>{username.toUpperCase()}</strong>!</span>
                <Link className="button" to="book/new/0">Add New Book</Link>
                <button onClick={logout} type="button">
                    <FiPower size={18} color="#004F3C" />
                </button> */}



            <ul>
                {books.map(book => (
                    <li className='product' key={book.id}>

                        <strong>Produto {book.id}</strong>

                        <img src={logoImage} alt="Product Image" />

                        <div className='product-buttons'>
                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(book.price)}</p>

                            <button onClick={() => editBook(book.id)} type="button">
                                <FiHeart size={30} color="#004F3C" />
                            </button>

                            <button className='last-button' onClick={() => deleteBook(book.id)} type="button">
                                <FiShoppingCart size={30} color="#004F3C" />
                            </button>

                        </div>
                    </li>
                ))}
            </ul>

            <footer>
                <div className='left-footer-buttons'>
                    <button>About the store</button>
                    <button>Talk with me</button>
                </div>
                <button>Request a custom sculpture</button>
            </footer>

            {/* <button className="button" onClick={fetchMoreBooks} type="button">Load More</button> */}
        </div>
    );
}