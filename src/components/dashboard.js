import React, { useState } from 'react';


const Dashboard = ({ handleLogOut }, ...props) => {

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogOut}>Logout</button>

        </div>
    );

}

export default Dashboard;