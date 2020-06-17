import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../../img/logo 1.png';
import bordered_logo from './../../../img/icon/bordered_logo.svg';
import new_shipment from './../../../img/icon/new_shipment.svg';
import plus from './../../../img/icon/plus.svg';
import menu_logo from './../../../img/menu_logo.png';

import Notification_Counter from './Notification_Counter';
import Sidebar_ from "./Sidebar";
import Sidebar from "react-sidebar";

class Navbar extends React.Component {

    state = {
        purple_notification: "#4E2F8A",
        orange_notification: "#F16724",
        sidebarOpen: false
    };

    onSetSidebarOpen = (open) => {
        this.setState({sidebarOpen: open});
    };

    render() {
        return (
            <React.Fragment>
                <nav className="p-2 d-flex align-items-center">

                    <div style={{width: '50px'}}>
                        <Sidebar
                            sidebar={<Sidebar_/>}
                            open={this.state.sidebarOpen}
                            onSetOpen={this.onSetSidebarOpen}
                            styles={{sidebar: {background: "white"}}}
                            pullRight={true}
                        >
                            <div className="d-flex align-items-center menu d-xl-none">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => this.onSetSidebarOpen(true)}
                                >
                                    <img src={menu_logo} className="menu-logo"/>
                                </button>
                            </div>
                        </Sidebar>
                    </div>
                    <Link to="/" className="mx-4 p-md-0">
                        <img src={logo}/>
                    </Link>
                    <ul className="nav mr-auto align-items-center ml-md-5">
                        <li className="nav-item mx-4">
                            <div className="dropdown">
                                <a className="dropdown-heading d-flex flex-column justify-content-around align-items-center"
                                   href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                   aria-expanded="false">
                                    <Notification_Counter notification_counter={this.props.notifications_counter}/>
                                    <svg width="27" height="24" viewBox="0 0 27 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill={this.props.notifications_counter ? this.state.purple_notification : this.state.orange_notification}
                                            d="M24.3333 24H2.33325C1.04663 24 0 22.9534 0 21.6668C0 20.9839 0.297363 20.3374 0.815918 19.8933C0.849365 19.864 0.885254 19.8374 0.922607 19.8132C2.87988 18.1052 4 15.648 4 13.0532V9.33326C4 4.99074 6.94263 1.26271 11.156 0.266616C11.6946 0.142593 12.2334 0.471938 12.3601 1.01076C12.4866 1.54811 12.1533 2.08668 11.6174 2.21339C8.30933 2.99464 6 5.92262 6 9.33326V13.0532C6 16.2747 4.58789 19.3228 2.12939 21.4146C2.10938 21.4307 2.09204 21.4453 2.07056 21.46C2.03467 21.5054 2 21.5747 2 21.6668C2 21.8479 2.1521 22 2.33325 22H24.3333C24.5146 22 24.6667 21.8479 24.6667 21.6668C24.6667 21.5733 24.6321 21.5054 24.5947 21.46C24.5747 21.4453 24.5559 21.4307 24.5374 21.4146C23.3428 20.396 22.3999 19.1668 21.7361 17.76C21.4988 17.2612 21.7119 16.6653 22.2119 16.428C22.7161 16.1907 23.3066 16.4067 23.5427 16.9053C24.0706 18.02 24.8105 18.9988 25.7466 19.8174C25.7812 19.8413 25.8174 19.8667 25.8479 19.8933C26.3694 20.3374 26.6667 20.9839 26.6667 21.6668C26.6667 22.9534 25.6201 24 24.3333 24Z"/>
                                    </svg>

                                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" className="position-absolute bell-2">
                                        <path
                                            fill={this.props.notifications_counter ? this.state.purple_notification : this.state.orange_notification}
                                            d="M5.33301 6C2.57715 6 0.333008 3.75732 0.333008 1C0.333008 0.447998 0.781006 0 1.33301 0C1.88501 0 2.33301 0.447998 2.33301 1C2.33301 2.65479 3.67969 4 5.33301 4C6.98633 4 8.33301 2.65479 8.33301 1C8.33301 0.447998 8.78101 0 9.33301 0C9.88501 0 10.333 0.447998 10.333 1C10.333 3.75732 8.08911 6 5.33301 6Z"/>
                                    </svg>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">اشعار 1</a>
                                    <a className="dropdown-item" href="#">اشعار 2</a>
                                    <a className="dropdown-item" href="#">اشعار 3</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item mx-4 d-none d-lg-block">
                            <img src={bordered_logo}/>
                        </li>
                        <li className="new-shipment align-self-end nav-item mx-4 d-none d-lg-inline-block">
                            <Link to="/dashboard/new-shipment"
                                  className="nav-link d-flex align-items-center position-relative">
                                <img src={plus} className="plus position-absolute"/>
                                <img src={new_shipment} className="px-1"/>
                                <span className="px-1 pt-1">شحنة جديدة</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </React.Fragment>
        )
    }
}

export default Navbar;