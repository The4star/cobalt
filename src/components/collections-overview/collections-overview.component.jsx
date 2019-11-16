import React from 'react';

// components
import CollectionPreview from '../collection-preview/collection-preview.component'
import Spinner from '../with-spinner/with-spinner.component'

// css
import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => {

    return collections ? (
        <div className='collections-overview'>
            {  
                collections.map(({_id, ...otherCollectionProps}) => (
                    <CollectionPreview key={_id} {...otherCollectionProps} />
                ))
            }
        </div>
    ) : (
        <Spinner />
    )
    
}

export default (CollectionsOverview)