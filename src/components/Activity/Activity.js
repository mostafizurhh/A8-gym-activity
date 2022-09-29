import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';


const Activity = () => {
    const [exercises, setExercises] = useState([])
    useEffect(() => {
        fetch('exercisedata.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div>
            {
                exercises.map(exercise => <Exercise
                    key={exercise.id}
                    exercise={exercise}></Exercise>)
            }


        </div>
    );
};

export default Activity;