import {  mount, shallowMount } from "@vue/test-utils";

import NavBar from "@/components/sections/NavBar.vue";


test('displays message of the name', () => {
    const wrapper = shallowMount(NavBar)

    const span = wrapper.find('span')
  
    // Assert the rendered text of the component
    expect(span.text()).toContain('Hi')
})


