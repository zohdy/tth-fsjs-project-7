import React from 'react';

import SearchForm from './SearchForm';
import NavBar from './NavBar';

const Header = (props) => {
    return (
        <div>
            <SearchForm onFormSubmit={props.onFormSubmit} />
            <NavBar onItemClick={props.onItemClick}/>
        </div>
    )
};

export default Header;