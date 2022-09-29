import React from 'react';
import './Routine.css'
import logo from './final-1.png'

const Routine = ({ cart }) => {
    let exerciseTime = 0
    for (const exercise of cart) {
        exerciseTime = exerciseTime + exercise.time
    }
    return (
        <div className='text-center ps-1'>

            <div className='align-items-center mt-1 mb-4'>
                <div>
                    <img className='img-fluid' src={logo} alt="" />
                </div>
                <div className="lh-1 ms-2 fw-light">
                    <small>Raz Ahmed</small> <br />
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
            <h6 style={{ marginBottom: 24 }}>Add A Break</h6>
            <div className='self-info mb-4'>
                <button className='btn bg-white rounded-circle p-1 m-1'><small><small>30s</small></small></button>
                <button className='btn bg-white rounded-circle p-1 m-1'><small><small>60s</small></small></button>
                <button className='btn bg-white rounded-circle p-1 m-1'><small><small>90s</small></small></button>
                <button className='btn bg-white rounded-circle p-1 m-1'><small><small>20s</small></small></button>
            </div>
            <h6 style={{ marginBottom: 12 }}>Exercise Details</h6>
            <div className='self-info mb-2'>
                <small>Exercise time: {exerciseTime} Seconds </small>
            </div>
            <div className='self-info mb-5'>
                <small>Break time: </small>

            </div>
            <button className='btn btn-primary opacity-75'>Activity Completed</button>
        </div>
    );
};

export default Routine;