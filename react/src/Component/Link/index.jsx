import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css"
import withIcon from "../hocs/withIcon";
import branch from "../hocs/branch";

const Link = ({children, className, to, ...props}) =>{
	const cn = classNames("Link", className);

	return <a className = {cn} href={to} {...props}>{children}</a>;
};

Link.propTypes = {
	children : PropTypes.node.isRequired,
	className : PropTypes.string,
	to : PropTypes.node,
};

Link.defaultProps = {
	className : null,
	to: "#",
};

export default branch(
    ({iconName}) => Boolean(iconName),
    withIcon("Link"),
)(Link);