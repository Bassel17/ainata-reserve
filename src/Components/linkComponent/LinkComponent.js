import React from 'react';
import {Link} from "react-router-dom";

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
            <Link 
                to={props.path}
                style={linkStyle}
                className = {props.className}
            >
                {props.name}
            </Link>
        </div>
    )
}

export default LinkComponent;