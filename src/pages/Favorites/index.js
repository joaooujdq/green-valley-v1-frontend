import React, { useState, useEffect } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi'
import { FiPower, FiEdit, FiShoppingCart, FiHeart, FiArrowDown } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';

import logoImage from '../../assets/logo.webp'
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Favorites() {

    const [favorites, setFavorites] = useState([]);
    const [page, setPage] = useState(1);
    const accessToken = localStorage.getItem('accessToken');

    async function fetchMoreFavorites() {
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

        // setFavorites([...favorites, ...response.data._embedded.favoritesVoes])
         
        setFavorites([...favorites, ...response.data._embedded.bookVoes])
        setPage(page + 1);
    }

    useEffect(() => {
        fetchMoreFavorites();
    }, [])

    return (
        <>
            <Header />
            <div className="favorites-container" >
                <h1>MY FAVORITES</h1>
                <ul>
                    {favorites.map(favorite => (
                        <li className='favorite' key={favorite.id}>
                            <div className='fav-img-and-name'>
                                <img src={logoImage} alt="Favorite Image" />
                                <h2>Favorite name: {favorite.id}</h2>
                            </div>
                            <div className='fav-delete-and-price'>
                                <button type="button">
                                    <FiTrash2 size={30} color="#000000" />
                                </button>
                                <h3>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(favorite.price)}</h3>
                            </div>
                        </li>
                    ))}
                </ul>
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