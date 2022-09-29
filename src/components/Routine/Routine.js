import React, { useEffect, useState } from 'react';
import './Routine.css'
import logo from './final-1.png'


const Routine = ({ cart }) => {

    let exerciseTime = 0
    for (const exercise of cart) {
        exerciseTime = exerciseTime + exercise.time
    }

    return (
        <div className='text-center'>
            <div className='align-items-center mt-1 mb-4'>
                <div>
                    <img className='img-fluid' src={logo} alt="" />
                </div>
                <div className="lh-1 ms-2 fw-light">
                    <small>Razu Ahmed</small> <br />
                    <small>Paris,France</small>
                </div>
            </div>
            <div className='self-info d-flex lh-1 text-center mb-4'>
                <div className='p-2'>
                    <h5>73<small className='fw-light text-secondary'><small><small>Kg</small></small></small></h5>
                    <small>Weight</small>
                </div>
                <div className='p-2'>
                    <h5>6.6</h5>
                    <small>Height</small>
                </div>
                <div className='p-2'>
                    <h5>35<small className='fw-light text-secondary'><small><small>Yrs</small></small></small></h5>
                    <small>Age</small>
                </div>
            </div>
            <h5 style={{ marginBottom: 12 }}>Exercise Details</h5>
            <div className='self-info mb-4'>
                <small>Exercise time: {exerciseTime} Seconds </small>
            </div>
            <h5 style={{ marginBottom: 12, textAlign: 'center' }}>Add A Break</h5>
        </div>
    );
};

export default Routine;