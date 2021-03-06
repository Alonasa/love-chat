import React from 'react';
import {NavItem} from '../Nav/NavItem/NavItem';
import './Profile.scss';
import {TopMenu} from '../TopMenu/TopMenu';
import pic_01 from '../../pictures/pic_01.jpg'
import {Posts} from '../Posts/Posts';

const UserMenu = [
    {id: 0, title: 'Profile', href: 'profile', itemClass: 'Nav__link'},
    {id: 1, title: 'News', href: 'news', itemClass: 'Nav__link'},
    {id: 2, title: 'Messages', href: 'messages', itemClass: 'Nav__link'},
    {id: 4, title: 'Settings', href: 'settings', itemClass: 'Nav__link'},
    {id: 3, title: 'Logout', href: 'logout', itemClass: 'Nav__link'},
]

const topMenu = [
    {id: 0, link: 'feed', title: 'Activity', isActive: false},
    {id: 1, link: 'friends', title: 'Friends', isActive: true}

]

const profileItem =
    {id: 0, name: 'John Dove', link: '../../pictures/pic_01.jpg', city: ' Odessa', lastActivity: ' 30 min ago'};

type ProfileDataType = {
    id: number
    name: string
    link: string
    city: string
    lastActivity: string
}


export const ProfileInfo = (props: ProfileDataType) => {
    return (
        <div key={props.id} className="Profile__info">
            <div className="Container">
                <img src={pic_01} alt={`${props.name} photo`} className="Profile__avatar"/>
                <h3 className="Profile__name">{props.name}</h3>
                <ul className="Profile__description">
                    <li className="Profile__description-item">City:
                        <span className="Profile__description-data">{props.city}</span>
                    </li>
                    <li className="Profile__description-item">Active:
                        <span className="Profile__description-data">{props.lastActivity}</span>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export const Profile = () => {
    return (
        <section className="Profile">
            <h4 className="Profile__title">Make your profile more interesting</h4>
            <div className="Container Profile__container">
                <div className="Profile__left">
                    <NavItem menuItems={UserMenu} menuName={'Profile__menu'}/>
                </div>
                <div className="Profile__right">

                    <ProfileInfo id={profileItem.id} name={profileItem.name} link={profileItem.link}
                                 lastActivity={profileItem.lastActivity} city={profileItem.city}/>
                    <div className="Profile__main-content">
                        <TopMenu items={topMenu}/>
                        <Posts/>
                    </div>
                </div>
            </div>
        </section>
    )
}