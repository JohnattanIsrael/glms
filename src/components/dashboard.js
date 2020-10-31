import React from 'react';
import axios from 'axios';



const Dashboard = ({handleLogOut}) => {

    // fetchData = () => {
    //     axios.get('https://glms-e42b5.firebaseio.com/user.json').then(response => {
    //         // console.log(response);
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
            {/* {this.fetchData()} */}
        </div>
    );

}

export default Dashboard;