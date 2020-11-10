import React from "react";



export default function (props) {
    return (
        <div className={`${props.class ? props.class : 'user-detail'}`}>

            <div className={`${props.class ? props.class : 'user-detail'}__level`}>{props.level}</div>
            <div className={`${props.class ? props.class : 'user-detail'}__name`}>{props.name}</div>
            <div className={`${props.class ? props.class : 'user-detail'}__points`}>{props.points} hp.</div>

        </div>
    )
}