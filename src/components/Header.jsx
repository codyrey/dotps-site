import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const SearchBar = () => {
    return (
        <img src={search} className="search-icon" />
    );
}

const MenuBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {menuOpen && (
                <ul>
                    <li>
                        <Link to="/characters">Plot</Link>
                    </li>
                    <li>
                        <Link to="/characters">Characters</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            )}

        </nav>
    );
}

const Header = () => {

    return (
        <header>
            <row>
                <column1>
                    <h1> <div className="full_title">Death of the Prodigal Son</div> </h1>
                    <h1> <div className="abbreviated">DotPS</div> </h1>
                </column1>
                <column3>
                    <SearchBar />
                </column3>
                <column4>
                    <ul>
                        <li>
                            <Link to="/characters">Plot</Link>
                        </li>
                        <li>
                            <Link to="/characters">Characters</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </column4>
                <MenuBar />
            </row>
        </header>
    );
}

export default Header;