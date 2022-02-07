import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    return (
        <div>
            <button className="btn-click-here" data-test="btn-btn-click" onClick={()=>{props.eventEmit()}} >{props.title}</button>
        </div>
    )
}

Button.propTypes = {
    title:PropTypes.string,
    emitEvent : PropTypes.func
}
export default Button;