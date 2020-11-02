import React, { useState } from 'react';


import Map from './journey/map';

const Dashboard = ({ handleLogOut }, ...props) => {


    // fetchData = () => {
    //     axios.get('https://glms-e42b5.firebaseio.com/user.json').then(response => {
    //         console.log(response);
    //         let data = response;
    //         console.log("Hero Level:", data.data.hero.level);


    //     }).catch(error => {
    //         console.log("fetchData erro", error);
    //     });
    // }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogOut}>Logout</button>
            {/* {fetchData()} */}
            {console.log(`user_id passed as prop :${props.user_id}`)}


            <Map />
        </div>
    );

}

export default Dashboard;