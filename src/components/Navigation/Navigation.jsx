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
                <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
                    <NavbarBrand>
                        <NavbarItem>
                            <img src="/images/glitchLogo.png" style={{ marginRight: 5 }} /> ParlourRats
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
                        <NavbarEnd>
                            <NavbarItem href="https://twitter.com/AlgusDark" isHidden='touch'>
                                <Icon className='fab fa-twitter' style={{ color: '#55acee' }} />
                            </NavbarItem>
                        </NavbarEnd>
                    </NavbarMenu>
                    </Navbar>
            </ErrorBoundary>
        );
    }
}

export default Navigation;