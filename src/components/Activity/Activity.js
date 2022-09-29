import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Routine from '../Routine/Routine';
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
            <div className='exercise-container container'>

                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}></Exercise>)
                }

            </div>
            <div className='cart-container'>
                <Routine></Routine>
            </div>

        </div>
    );
};

export default Activity;