import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./style.css";

const Icon =({className, name, ...props})=> {
    const cn = ClassNames("Icon", className, `Icon--${name}`
    );
    return <i className={cn} {...props}/>;
};

Icon.propTypes = {
  className : PropTypes.string,
  name: PropTypes.string.isRequired,
};

Icon.defaultProps={
    className : null,
};

export default Icon;