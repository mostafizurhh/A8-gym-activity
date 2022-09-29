import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Activity.css'


const Activity = () => {
    const [exercises, setExercises] = useState([])
    useEffect(() => {
        fetch('exercisedata.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div className='main-container'>
            <div className='exercise-container'>

                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}></Exercise>)
                }

            </div>
            <div className='cart-container'>
                <h2>Customer Info</h2>
            </div>

        </div>
    );
};

export default Activity;