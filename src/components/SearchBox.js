import React from 'react';
import 'tachyons';

const SearchBox = ({searchChange}) => {
    return(
        <React.StrictMode>
            <div className='pa2'>
                <input 
                    className='pa3 ba b--green bg-lightest-blue'
                    type='search' 
                    placeholder='Search Robots' 
                    onChange={searchChange}
                />
            </div>
        </React.StrictMode>
    );
}

export default SearchBox;