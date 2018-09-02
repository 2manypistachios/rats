import React, { Component } from "react";
import { Link } from "gatsby";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarStart, NavbarLink} from "bloomer";
import { NavbarDropdown, NavbarDivider } from "bloomer";


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
                            <Link to="/"><img src="/logos/parlourrats.svg" style={{ marginRight: 5 }} /></Link>
                        </NavbarItem>
                        <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                    </NavbarBrand>
                    <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
                        <NavbarStart>
                            <NavbarItem hasDropdown isHoverable>
                                <NavbarLink href='/'>Pages</NavbarLink>
                                <NavbarDropdown>
                                    <Link to="/cast"><NavbarItem href='/cast/'>Cast</NavbarItem></Link>
                                    <Link to="/archive"><NavbarItem href='/archive/'>Archive</NavbarItem></Link>
                                    <NavbarDivider />
                                    <Link to="/about"><NavbarItem href='/cast/'>About</NavbarItem></Link>
                                    <Link to="/credits"><NavbarItem href='/credits/'>Credits</NavbarItem></Link>
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