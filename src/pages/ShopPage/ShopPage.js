import React, { Component } from 'react';
import CollectionsData from '../../data/collections.js';

import PreviewCollection from '../../components/PreviewCollection';

class ShopPage extends Component {
    state = {
        collections: CollectionsData
    };

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default ShopPage;
