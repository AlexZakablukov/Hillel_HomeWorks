import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";


const withIcon =(moduleName)=> {
    return (WrappedComponent) => {
        const ComponentWithIcon = ({children, iconName, ...props}) => {
            return <WrappedComponent  {...props}>
                <div className={`${moduleName}-icon`}>
                    <Icon name = {iconName}/>
                </div>
                <div className={`${moduleName}-content`}>
                    {children}
                </div>
            </WrappedComponent>
        };
        ComponentWithIcon.propTypes ={
            children: PropTypes.node,
            iconName: PropTypes.string.isRequired,
        };
        ComponentWithIcon.defaultProps ={
            children: "",
        };

        return ComponentWithIcon;
    };
};

export default withIcon;