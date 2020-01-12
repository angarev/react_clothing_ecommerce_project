import React from 'react';
import './HomePage.styles.scss';

import DirectoryMenu from '../../components/DirectoryMenu/index';

const HomePage = () => {
    return (
        <div className='homepage'>
            <DirectoryMenu />
        </div>
    );
};

export default HomePage;
