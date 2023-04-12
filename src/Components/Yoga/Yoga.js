import React from 'react';

const Yoga = (props) => {
    console.log(props);
    const { id, name, picture, about } = props.yoga;
    return (
        <div>
            <h1>Hello Yoga world !!!</h1>
            <img src={picture} alt=''></img>
            <p>Name : {name}</p>

        </div>
    );
};

export default Yoga;