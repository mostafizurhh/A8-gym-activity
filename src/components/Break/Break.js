import React from 'react';

const Break = (props) => {

    const { time } = props.breaktime;


    return (
        <div className='ps-2 pb-2'>
            <button onClick={() => props.addABreak(props.breaktime)} className='btn bg-warning rounded-circle p-1 m-1'><small><small>{time}s</small></small></button>
        </div>
    );
};

export default Break;