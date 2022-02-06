import React from "react";
import { shallow } from "enzyme";
import  {findComponent}   from "../../Utils/index";
import Header from "./index";

function componentSetup() {
    const component =  shallow(<Header/>);
    return component;
}

describe("Header Component", () => {
    let component;
     beforeEach(() => {
     component = componentSetup();
})
    it ("should render without errors",() => {
        const header = findComponent(component,"header")
        expect(header.length).toBe(1)
    }) 

    it ("should render the heading text",() => {
        const headingText = findComponent(component,"header-content")
        expect(headingText.length).toBe(1)
    })
})