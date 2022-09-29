import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Routine from '../Routine/Routine';
import './Activity.css'


const Activity = () => {
    const [exercises, setExercises] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('exercisedata.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const addToListHandler = (exercises) => {
        console.log(exercises)
        const newCart = [...cart, exercises]
        setCart(newCart)
    }

    return (
        <div className='main-container'>
            <div>
                <h6>What will you choose today?</h6>
                <div className='exercise-container'>

                    {
                        exercises.map(exercise => <Exercise
                            key={exercise.id}
                            exercise={exercise}
                            addToListHandler={addToListHandler}
                        ></Exercise>)
                    }

                </div>
            </div>
            <div className='cart-container'>
                <Routine cart={cart}></Routine>
            </div>

        </div >
    );
};

export default Activity;