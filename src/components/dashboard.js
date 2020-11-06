import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
// faSquare, faCircle, faCaretUp, faShapes, faCaretLeft, faCaretRight, faSignInAlt,

const Dashboard = ({ handleLogOut }, ...props) => {

    return (
        <div className='dashboard-navbar'>
    
            <div className='dashboard-navbar__logout' onClick={handleLogOut}>
                <FontAwesomeIcon icon={faSignOutAlt}/>
            </div>

        </div>
    );

}

export default Dashboard;