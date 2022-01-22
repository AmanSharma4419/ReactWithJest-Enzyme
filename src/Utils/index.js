import checkPropTypes from "check-prop-types";

export  const findComponent = (component,attr) => {
    const resultedComponent = component.find(`[data-test='${attr}']`)
    return resultedComponent; 
}

export const  checkProps = (component,expectedProps) => {
    const propsErr = checkPropTypes(component.checkPropTypes,expectedProps,"props",component.name)
    return propsErr;
}


