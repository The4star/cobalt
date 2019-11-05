import React from 'react';

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            categories: [
                {
                title: 'Games',
                imageUrl: 'img/games.jpg',
                id: 1,
                linkUrl: 'shop/games'
                },
                {
                title: 'Collectibles',
                imageUrl: 'img/collectibles.jpg',
                id: 2,
                linkUrl: 'shop/collectibles'
                },
                {
                title: 'Clothing & Apparel',
                imageUrl: 'img/clothing.jpg',
                id: 3,
                linkUrl: 'shop/clothing'
                },
                {
                title: 'Consoles',
                imageUrl: 'img/consoles.jpg',
                size: 'large',
                id: 4,
                linkUrl: 'shop/consoles'
                },
                {
                title: 'Computers',
                imageUrl: 'img/computers.jpg',
                size: 'large',
                id: 5,
                linkUrl: 'shop/computers'
                }
            ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.categories.map(({id, ...otherSectionProps}) => {
                        return <MenuItem key={id} {...otherSectionProps}/>
                    })
                }
            </div>
        )
    }
}

export default Directory;
