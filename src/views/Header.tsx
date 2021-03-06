import React from 'react'
import { Link } from '@reach/router';

export default function Header() {
  return (
    <React.Fragment>
        <header className="header">
            <div>
                <h4>illuminate</h4>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/test">--=-*!--*-</Link>
            </div>
        </header>
    </React.Fragment>
  )
}
