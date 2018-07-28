import React from "react";

const branch = (conditionFn, hocTrue) =>{
    return (WrappedComponent) =>{
        return (props) =>{
            let ComponentA = hocTrue(WrappedComponent);
            return conditionFn(props) ? <ComponentA {...props}/> : <WrappedComponent {...props}/>

        }
    }
}

export default branch;