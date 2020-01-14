import React from 'react';
import './PreviewCollection.styles.scss';
import CollectionItem from '../CollectionItem';

const PreviewCollection = ({ title, items }) => {
	return (
		<div className='preview-collection'>
			<h1 className='preview-collection__title'>{title}</h1>
			<div className='preview-collection__content'>
				{items
					.filter((item, index) => index < 4)
					.map(({ id, ...otherItemProps }) => (
						<CollectionItem key={id} {...otherItemProps} />
					))}
			</div>
		</div>
	);
};

export default PreviewCollection;
