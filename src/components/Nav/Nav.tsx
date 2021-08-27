import React from 'react';
import {NavItem} from './NavItem/NavItem';
import './Nav.scss';


export type NavType = {
    menuItems: Array<ListItems>
    menuName: string
}

type ListItems = {
    id: number
    title: string
    href: string
    itemClass: string
}

const mainMenu = [
    {id: 0, title: 'Users', href: 'users', itemClass: 'Nav__link'},
    {id: 1, title: 'Posts', href: 'posts', itemClass: 'Nav__link'},
    {id: 2, title: 'Top', href: 'top', itemClass: 'Nav__link'},
    {id: 3, title: 'Shop', href: 'shop', itemClass: 'Nav__link'},
    {id: 4, title: 'FAQ', href: 'faq', itemClass: 'Nav__link'},
    {id: 5, title: 'User', href: 'user', itemClass: 'Nav__link Nav__submenu'},

]



export const Nav = () => {
    return (
        <nav className="Nav">
            <NavItem menuItems={mainMenu} menuName={"Nav__main"}/>
        </nav>
    )
}