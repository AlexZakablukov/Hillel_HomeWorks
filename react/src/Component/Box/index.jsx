import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";


const Box = ({className, ...props}) =>{
    const cn = classNames("Box", className);
    return <div className={cn} {...props}></div>
};

Box.propTypes = {
    className : PropTypes.string,
};

Box.defaultProps = {
    className : null,
};

export default Box;