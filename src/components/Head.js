import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Glowa = () => {
    return (
        <header>
            Lista użytkowników
            <Link to='/Form'>Add User</Link>
            <Link to='/Search'>Search</Link>
            <Outlet/>
        </header>
    );
}

export default Glowa;
