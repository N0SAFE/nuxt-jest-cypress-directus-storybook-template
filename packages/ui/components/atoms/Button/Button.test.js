// write a test for the vue Button component with jest

import Button from "./Button.vue";
import { mount } from "@vue/test-utils";

// write a test for the vue Button component
describe("Button.vue", () => {
  // write a test for the Button component
  it("should render the button", () => {
    // mount the Button component
    const wrapper = mount(Button);
    // assert the component exists
    expect(wrapper.exists()).toBe(true);
  });
});
