import React from "react";

export default function (props) {
    return (
        <div className='user-detail'>

            <div className='user-detail__level'>{props.level}</div>
            <div className='user-detail__name'>{props.name}</div>
            <div className='user-detail__points'>{props.points}</div>

        </div>
    )
}