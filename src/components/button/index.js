import React from "react";
import PropTypes from "prop-types";

const Button = () => {
    return (
        <div>
            <button className="btn-click-here" data-test="btn-btn-click">Click here</button>
        </div>
    )
}
Button.propTypes = {
    title:PropTypes.string,
    emitEvent : PropTypes.func
}
export default Button;