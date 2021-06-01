import { shallowMount, mount } from "@vue/test-utils";

import HomePage from "@/components/Pages/HomePage.vue";



test('displays message of the button', () => {
    const wrapper = mount(HomePage)
  
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('AddEdit')
})


