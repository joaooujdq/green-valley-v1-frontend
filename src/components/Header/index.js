import { FiShoppingCart, FiHeart} from 'react-icons/fi';
import './styles.css';


export default function Header() {
    const username = localStorage.getItem('username');
    return (
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
                <button><strong>{username}</strong></button>
                <button>logout</button>
            </div>
        </header>
    );
}