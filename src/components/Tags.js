import React from 'react';
import '../css/Tags.css';
import { observer } from "../index";

export let Tags = (props) => {
    return (
        <div
            style={{
                marginRight: props.styleProps.split(';')[0],
                background: props.styleProps.split(';')[1],
                color: props.styleProps.split(';')[2]
            }}
            onClick={() => {
                props.store.clickTags(props.flagTag);
                observer()
            }}
            onMouseEnter={() => {
                props.store.hoverTags(props.flagTag);
                observer()
            }}
            onMouseLeave={() => {
                props.store.leaveTags(props.flagTag);
                observer()
            }}
            className="Tags">{props.text}
        </div>
    );
}