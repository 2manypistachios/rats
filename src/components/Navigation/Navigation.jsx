import React, { Component } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarStart, NavbarEnd, NavbarLink} from "bloomer";
import { NavbarDropdown, NavbarDivider, Icon, Field, Control, Button } from "bloomer";


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {isActive: false};
        this.onClickNav = this.onClickNav.bind(this);
    }

    onClickNav() {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
    }

    render() {
        return (
            <ErrorBoundary>
                <Navbar style={{ margin: '0' }}>
                    <NavbarBrand>
                        <NavbarItem>
                            <img src="/logos/parlourrats.svg" style={{ marginRight: 5 }} />
                        </NavbarItem>
                        <NavbarItem isHidden='desktop'>
                            <Icon className='fab fa-twitter' style={{ color: '#55acee' }} />
                        </NavbarItem>
                        <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                    </NavbarBrand>
                    <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
                        <NavbarStart>
                            <NavbarItem href='/'>Home</NavbarItem>
                            <NavbarItem hasDropdown isHoverable>
                                <NavbarLink href='/'>Pages</NavbarLink>
                                <NavbarDropdown>
                                    <NavbarItem href='/cast/'>Cast</NavbarItem>
                                    <NavbarItem href='/archive/'>Archive</NavbarItem>
                                    <NavbarDivider />
                                    <NavbarItem href='/about/'>About</NavbarItem>
                                    <NavbarItem href='/credits/'>Credits</NavbarItem>
                                </NavbarDropdown>
                            </NavbarItem>
                        </NavbarStart>
                    </NavbarMenu>
                    </Navbar>
            </ErrorBoundary>
        );
    }
}

export default Navigation;