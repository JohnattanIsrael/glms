import React, { useState } from 'react';


import Map from './journey/map';

const Dashboard = ({ handleLogOut }, ...props) => {

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogOut}>Logout</button>

        </div>
    );

}

export default Dashboard;