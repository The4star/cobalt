import React from 'react';


// components
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collections, match }) => {
    
        const collection = collections.find(theCollection => {
            return theCollection.routeName === match.params.collectionName
        })
        
        console.log(collection)

    
    
    const { title, items } = collection;
    
    return(
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => {
                     return <CollectionItem key={item._id} item={item} />
                    })
                }
            </div>
        </div>  
    )
    
};

export default CollectionPage;