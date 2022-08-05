import React from 'react';

const Card = (props) => {
    const {name, email, id} = props;
        return(
            <div className=' tc bg-light-green dib br4 pa0 ma2 grow bw2  shadow-S '>
                <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
}

export default Card;