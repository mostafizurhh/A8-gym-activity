import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import Routine from '../Routine/Routine';
import Showtime from '../Showtime/Showtime';
import './Activity.css'


const Activity = () => {
    const [exercises, setExercises] = useState([]);
    const [cart, setCart] = useState([]);
    const [breaktimes, setBreaktime] = useState([]);
    const [updatebreak, setUpdatebreak] = useState([])


    useEffect(() => {
        fetch('exercisedata.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    useEffect(() => {
        fetch('breaktime.json')
            .then(res => res.json())
            .then(data => setBreaktime(data))

    }, [])

    const addToListHandler = (exercises) => {
        console.log(exercises)
        const newCart = [...cart, exercises]
        setCart(newCart)
    }

    const addABreak = (breaktimes) => {
        console.log(breaktimes)
        const newBreak = [...updatebreak, breaktimes]
        setUpdatebreak(newBreak)
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
                <Routine
                    cart={cart}
                ></Routine>
                <div className='d-flex'>
                    {
                        breaktimes.map(breaktime => <Break
                            key={breaktime.id}
                            breaktime={breaktime}
                            addABreak={addABreak}
                        ></Break>
                        )
                    }
                </div>
                <Showtime
                    updatebreak={updatebreak}
                ></Showtime>
            </div>

        </div >
    );
};

export default Activity;