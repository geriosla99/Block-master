import React from 'react'
import { Link } from 'react-router-dom'
import Search from "../Search/Search";
import {StyleNav,
LogoBM,
ContentLogoBM,
ContentOption
} from './NavbarStyled'
import All from "../All/All";
import MoreValued from "../MoreValue/MoreValue";
import LessValued from "../LessValued/LessValued";

const Navbar = () => {
    return (
        <StyleNav>
            <ContentLogoBM>
                <LogoBM src='https://i.imgur.com/RJQjzuf.png' alt='BlockMaster'/>
            </ContentLogoBM>
            <ContentOption>
                <All/>
                <MoreValued/>
                <LessValued/>
                <Search/>
                <Link to='/login'>
                    Iniciar sesion
                </Link>
            </ContentOption>
        </StyleNav>
    )
}

export default Navbar
