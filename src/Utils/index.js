function findComponent (component,attr) {
    const resultedComponent = component.find(`[data-test='${attr}']`)
    return resultedComponent; 
}

export default findComponent;