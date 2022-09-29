import React from 'react';

const Showtime = ({ updatebreak }) => {
    console.log(updatebreak)
    let selectedBreak = 0
    for (const selectbreak of updatebreak) {
        selectedBreak = selectbreak.time
    }
    return (
        <div className='text-center'>
            <div className='p-2 bg-light border rounded-pill text-center mb-4'>
                <small>Break time: {selectedBreak} Seconds</small>
            </div>
            <button className='btn btn-primary opacity-75 mb-4'>Activity Completed</button>
        </div>
    );
};

export default Showtime;