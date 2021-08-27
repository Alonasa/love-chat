import React from 'react';
import './TopMenu.scss';

type TopMenuType = {
    items: Array<TopMenuItems>
}

type TopMenuItems = {
    id: number
    link: string
    title: string
    isActive: boolean
}


export const TopMenu = (props: TopMenuType) => {
    return (
        <ul className="Top-menu">
            {props.items.map(i => {
                const active = i.isActive
                if (active) {
                    return (
                        <li className="Top-menu__item" key={i.id}><a className="Active" href={i.link}>{i.title}</a></li>
                    )
                } else {
                    return (
                        <li className="Top-menu__item" key={i.id}><a href={i.link}>{i.title}</a></li>
                    )

                }
            })
            }
        </ul>

    )
}