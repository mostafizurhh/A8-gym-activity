import React from 'react';
import './Routine.css'
import logo from './final-1.png'

const Routine = () => {
    return (
        <div className='p-2'>

            <div className='d-flex align-items-center mb-3'>
                <div>
                    <img className='img-fluid' src={logo} alt="" />
                </div>
                <div class="lh-1 ms-2 fw-light">
                    <small>Raz Ahmed</small> <br />
                    <small>Paris,France</small>
                </div>
            </div>
            <div className='self-info d-flex lh-1 text-center'>
                <div className='p-2'>
                    <h6>73<small className='fw-light text-secondary'><small>Kg</small></small></h6>
                    <small>Weight</small>
                </div>
                <div className='p-2'>
                    <h6>6.6</h6>
                    <small>Height</small>
                </div>
                <div className='p-2'>
                    <h6>35<small className='fw-light text-secondary'><small>Yrs</small></small></h6>
                    <small>Age</small>
                </div>

            </div>

        </div>
    );
};

export default Routine;