import React from 'react';

// components
import CollectionPreview from '../collection-preview/collection-preview.component'

// css
import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
         {  
            collections ? 
            collections.map(({_id, ...otherCollectionProps}) => (
                <CollectionPreview key={_id} {...otherCollectionProps} />
            ))
            : null
        }
    </div>
)

export default (CollectionsOverview)