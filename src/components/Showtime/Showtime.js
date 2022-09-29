import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Showtime = ({ updatebreak }) => {

    const showToastMessage = () => {
        toast.success('Awesome... You have nailed it !!!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    let selectedBreak = 0
    for (const selectbreak of updatebreak) {
        selectedBreak = selectbreak.time
    }

    return (
        <div className='text-center'>
            <div className='p-2 bg-light border rounded-pill text-center mb-4'>
                <small>Break time: {selectedBreak} Seconds</small>
            </div>
            <button onClick={showToastMessage} className='btn btn-primary opacity-75 mb-4'>Activity Completed
            </button>
            <ToastContainer />
        </div>
    );
};

export default Showtime;