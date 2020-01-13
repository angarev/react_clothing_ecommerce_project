import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.styles.scss';

const MenuItem = ({
    title,
    subtitle,
    imageUrl,
    size,
    history,
    linkUrl,
    match
}) => {
    return (
        <div
            className={`menu-item ${size ? size : ''}`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}></div>
            <div className='menu-item__content'>
                <h1 className='menu-item__content__title'>{title}</h1>
                <span className='menu-item__content__subtitle'>{subtitle}</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
