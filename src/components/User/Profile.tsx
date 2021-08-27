import React from 'react';
import {NavItem} from '../Nav/NavItem/NavItem';
import './Profile.scss';


const UserMenu = [
    {id: 0, title: 'Profile', href: 'profile', itemClass: 'Nav__link'},
    {id: 1, title: 'News', href: 'news', itemClass: 'Nav__link'},
    {id: 2, title: 'Messages', href: 'messages', itemClass: 'Nav__link'},
    {id: 4, title: 'Settings', href: 'settings', itemClass: 'Nav__link'},
    {id: 3, title: 'Logout', href: 'logout', itemClass: 'Nav__link'},
]

export const Profile = () => {
    return (
        <section className="Profile">
            <h4 className="Profile-info">Make your profile more interesting</h4>
            <div className="Container">
                <NavItem menuItems={UserMenu} menuName={'Profile__menu'}/>
            </div>
        </section>
    )
}