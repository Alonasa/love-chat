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
    {id: 0, title: 'Users', href: 'users', itemClass: 'nav-link'},
    {id: 1, title: 'Posts', href: 'posts', itemClass: 'nav-link'},
    {id: 2, title: 'Top', href: 'top', itemClass: 'nav-link'},
    {id: 3, title: 'Shop', href: 'shop', itemClass: 'nav-link'},
    {id: 4, title: 'FAQ', href: 'faq', itemClass: 'nav-link'},
]

const userMenu = [
    {id: 0, title: 'Profile', href: 'profile', itemClass: 'nav-link'},
    {id: 1, title: 'News', href: 'news', itemClass: 'nav-link'},
    {id: 2, title: 'Messages', href: 'messages', itemClass: 'nav-link'},
    {id: 3, title: 'Logout', href: 'logout', itemClass: 'nav-link'},
]

export const Nav = () => {
    return (
        <nav className="nav">
            <NavItem menuItems={mainMenu} menuName={"nav__main"}/>
            <NavItem menuItems={userMenu} menuName={"nav__user"}/>
        </nav>
    )
}