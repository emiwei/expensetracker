import { React, useState } from "react";
import icon from '../images/lovely.png';
import './navbar.css';
import SearchBar from "./searchbar";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className="navbar"> 
            <Stack spacing={2} direction="row">
                <Button varient="contained">
                    <img style={{width: '45px', height: '45px', paddingLeft: '8px'}} src={icon} alt="Icon"/>
                </Button>
            </Stack>
            <h1 className="header">emily's tracker</h1>
            <div className="searchbar">
                <SearchBar></SearchBar>
            </div>
        </div>
    )
}

export default Navbar;