import React, {Component} from 'react';
import {NavLink } from 'react-router-dom';

class NavBar extends Component {

    state = {
        goTo: ''
    };

    onItemClick = e => {
        let searchTerm = e.target.innerHTML.toLowerCase();
        this.props.onItemClick(searchTerm);
        this.setState({ goTo : searchTerm});
    };

    render() {
        return(
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to={ this.state.goTo } onClick={this.onItemClick}>Cats</NavLink></li>
                        <li><NavLink to={ this.state.goTo } onClick={this.onItemClick}>Dogs</NavLink></li>
                        <li><NavLink to={ this.state.goTo } onClick={this.onItemClick}>Computers</NavLink></li>
                    </ul>
                </nav>
            );
        }
    }

export default NavBar;