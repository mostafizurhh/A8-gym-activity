import React from 'react';

const Exercise = (props) => {
    console.log(props.exercise)
    const { picture, title, description, time } = props.exercise
    return (
        <div className='card text-center'>
            <img className='card-img-top' src={picture} alt="" />
            <div className='card-body'>
                <h5 className='card-title text-start'>Name: {title}</h5>
                <p className='card-text text-start'>Description: {description}</p>
                <h6 className='card-title text-start'>Time: {time}s</h6>
                <button className='btn btn-success'>Add To List</button>
            </div>
        </div>
    );
};

export default Exercise;