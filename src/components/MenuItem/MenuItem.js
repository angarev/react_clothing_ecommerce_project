import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.styles.scss';

const MenuItem = ({ title, subtitle, imageUrl, size, history }) => {
    return (
        <div
            className={`menu-item ${size ? size : ''}`}
            onClick={() => history.push(`/${title}`)}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}></div>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>{subtitle}</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
