import React from 'react';
import Card from './Card';
const CardList = ({robots}) => {
    return (
        <div className='flex flex-wrap justify-center'>
            {robots.map(user =>
                <React.Fragment key={user.id}>
                    <Card 
                    
                    id={user.id} 
                    name={user.name} 
                    email={user.email}

                    />
                </React.Fragment>
            )}
        </div>
    );
}

export default CardList;