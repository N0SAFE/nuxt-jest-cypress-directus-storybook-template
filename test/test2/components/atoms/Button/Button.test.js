// create a test for the Button component with jest

import { shallowMount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button.vue", () => {
    it("renders props.label when passed", () => {
        const label = "new message";
        const wrapper = shallowMount(Button, {
            propsData: { label }
        });
        expect(wrapper.text()).toMatch(label);
    });
});
