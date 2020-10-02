import React from 'react';

const LinkComponent = (props)=>{
    const linkStyle = {
        padding:props.padding,
        backgroundColor:props.backgroundColor,
        color:props.color,
        textDecoration:"none",
        borderRadius:"45px",
        
    }
    return(
        <div>
            <a
                href={props.path}
                style={linkStyle}
                className = {props.className}
            >
                {props.name}
            </a>
        </div>
    )
}

export default LinkComponent;