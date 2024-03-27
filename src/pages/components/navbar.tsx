import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';
import './css/navbarcss.css';

function Navbar() {
    return (
        <div>
            <header>
                <Link className="navlinkss" to="/Home">Home</Link>
                <NavLink className="navlinkss" to="/About">About</NavLink>
                <NavLink className="navlinkss" to="/Gallery">Gallery</NavLink>
                <NavLink className="navlinkss" to="/Contact">Contact</NavLink>
                <Authenticator>
                    {({ signOut }) =>
                        <div>
                            <button onClick={signOut}>Sign Out</button>
                        </div>
                    }
                </Authenticator>
            </header>
        </div>
    );
}

export default Navbar;
