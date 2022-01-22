import React from "react";
import { shallow } from "enzyme";
import HeadLine from ".";
import {findComponent,checkProps}   from "../../Utils/index"

function componentSetup(props) {
    const component =  shallow(<HeadLine {...props}/>);
    return component;
}

describe("Headline component", () => {

    describe("checking propTypes",() => {
    it("should not throw a props warning error",() => {
    const expectedProps = {
        heading:"test heading"
    }
    const propsErr = checkProps(HeadLine, expectedProps)
    expect(propsErr).toBeUndefined()
})
})
    describe ("Have props", () => {
        let component;
        beforeEach (() => {
            const props = {
                heading:"test heading"
            }
            component = componentSetup(props)
        })
    
    it ("should render without erros", () => {
        const heading = findComponent(component,"post-section")
        expect(heading.length).toBe(1)
    })
    
    it ("should render the post heading",() => {
        const postHeading = findComponent(component,"post-headline")
        expect(postHeading.length).toBe(1)
    })
    
    it ("should render the description of heading",() => {
        const descriptionHeading = findComponent(component,"post-headline")
        expect(descriptionHeading.length).toBe(1)
    })
    
    })

    describe ("Have no props",() => {
        let component;
        beforeEach (() => {
            component = componentSetup()
        })
        it ("should not render the component",() => {
            const heading = findComponent(component,"post-section");
            expect(heading.length).toBe(0)
        })
    })
   
})