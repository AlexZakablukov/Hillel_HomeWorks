import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css"

const Link = ({children, className, ...props}) =>{
	const cn = classNames("Link", className);

	return <a className = {cn} {...props}>{children}</a>;
}

Link.propTypes = {
	children : PropTypes.node.isRequired,
	className : PropTypes.string,
	href : PropTypes.node,
}

Link.defaultProps = {
	className : null,
	href: "#",
}

export default Link;