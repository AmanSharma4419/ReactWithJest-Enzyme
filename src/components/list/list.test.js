import List from "./index";
import { shallow } from "enzyme";
import {findComponent,checkProps}   from "../../Utils/index";

function componentSetup(props) {
    const component =  shallow(<List {...props}/>);
    return component;
}

describe("List Component", () => {
    let component;
    beforeEach(() => {
        const expectedProps = {
            title: "testing title",
            desc:"testing desc"
        }
        component =  componentSetup(expectedProps);
    })
    describe("Checking proptypes", () => {
        it("should not throw a props warning error",() => {
            const expectedProps = {
                title: "testing title",
                desc:"testing desc"
            }
            const propsErr = checkProps (List,expectedProps)
            expect(propsErr).toBe(undefined);
        })
    })

    it("Should  render without errors", () => {
        const listComponent = findComponent (component,"section-list")
        expect(listComponent.length).toBe(1)
    })

    it("Should  render  title", () => {
        const title = findComponent (component,"title-list")
        expect(title.length).toBe(1)
    })

    it("Should  render  description", () => {
        const description = findComponent (component,"description-list")
        expect(description.length).toBe(1)
    })
    describe("Should not render", () => {
        let component;
        beforeEach(() => {
            const expectedProps = {
                desc:"testing desc"
            }
            component =  componentSetup(expectedProps);
        })   
        it ("Should not render the component", () => {
            const componentList = findComponent(component,"title-list")
            expect(componentList.length).toBe(0)
             })
     })

       
})