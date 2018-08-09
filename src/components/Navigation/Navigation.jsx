import { Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarStart, NavbarEnd} from "bloomer";
import { Icon, Field, Control, Button } from "bloomer";
import React, { Component } from "react";
//import "./Navbar.css";

class Navigation extends Component {
  render() {
    return (
        <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
            <NavbarBrand>
                <NavbarItem>
                    <img src="https://bulma.io/images/placeholders/128x128.png" style={{ marginRight: 5 }} /> Bloomer
                </NavbarItem>
                <NavbarItem isHidden='desktop'>
                    <Icon className='fa fa-github' />
                </NavbarItem>
                <NavbarItem isHidden='desktop'>
                    <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
                </NavbarItem>
                <NavbarBurger/>
            </NavbarBrand>
            <NavbarMenu>
                
            </NavbarMenu>
        </Navbar>
    );
  }
}

export default Navigation;
/*isActive={this.state.isActive} onClick={this.onClickNav}*/