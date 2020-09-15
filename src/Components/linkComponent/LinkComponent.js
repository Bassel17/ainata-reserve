import React from 'react';
import {Link} from "react-router-dom";

const LinkComponent = (props)=>{
    const linkStyle = {
        padding:"1em",
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
            >
                {props.name}
            </Link>
        </div>
    )
}

export default LinkComponent;