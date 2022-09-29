import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { picture, title, description, time } = props.exercise
    return (

        <div className='exercise card'>
            <img src={picture} alt="" />
            <div className='card-body p-2'>
                <h5>{title}</h5>
                <p className='card-text text-justify'>{description}</p>
                <p><b>Time Required:</b> {time}s</p>
            </div>
            <button className='btn btn-success' onClick={props.addToListHandler}>Add To List</button>
        </div>

    );
};

export default Exercise;