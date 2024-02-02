import './Header.css';
import Curriculo from '../../Arquivos/Felipe_camoes.pdf'
import { Link } from 'react-router-dom';

export default function Header() {
    function dropdown(el) {
        if (el.target.className === 'header__dropdown') {
            el.target.childNodes.forEach((ell) => {
                ell.children[0].classList.add('header__linkDropdown')
            })
        }
        else if (el.target.className === ''){
            el.target.parentElement.childNodes.forEach((ell) => {
                ell.children[0].classList.remove('header__linkDropdown')
            })
        }
    }
    return (
        <header className="header">
            <h1>< Link to="/" className="header__name" >Felipe Camões</Link></h1>
            <nav onClick={dropdown}>
                <ul className='header__dropdown'  >
                    <li><Link to='/' className="header__link">Home</Link></li>
                    <li><Link to={Curriculo} className="header__link"  target="_blank">Curriculo</Link></li>
                    <li><Link to="https://github.com/felipe-camoes" className="header__link" target="_blank" rel="noreferrer">Git-hub</Link></li>
                    <li><Link to="https://linkedin.com/in/felipe-camões-9b68701b0" className="header__link" target="_blank" rel="noreferrer" >Linkedin</Link></li>
                </ul>
            </nav>
        </header>
    );
}

