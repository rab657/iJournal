import React from 'react';

function Datetime(props) {

    const showDate = new Date();
    const displayToday = showDate.getDate()+'/'+ showDate.getMonth()+1 + '/'+showDate.getFullYear();

    return (
        <div>
            <h1 style={{color: "black", fontSize: '2rem'}}>Today's Date: {displayToday}</h1>
        </div>
    );
}

export default Datetime;