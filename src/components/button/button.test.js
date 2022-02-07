import Button from "./index";
import { shallow } from "enzyme";
import {findComponent,checkProps}   from "../../Utils/index"

function componentSetup(props) {
    const component =  shallow(<Button {...props}/>);
    return component;
}


describe("Button Component", () => {
    let component;
    beforeEach(() => {
       component =  componentSetup();
    })

    describe("Checking proptypes",() => {
        it("should not throw a props warning error",() => {
            const expectedProps = {
                title:"test title",
                emitEvent : () => {
                    
                }
            }
            const propsErr = checkProps(Button,expectedProps)
            expect(propsErr).toBe(undefined)
        })
    } )

it ("Should render the button",() => {
const button = findComponent(component, "btn-btn-click")
expect(button.length).toBe(1)
})
})