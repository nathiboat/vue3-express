import {  mount } from "@vue/test-utils";

import UserProfile from "@/components/Pages/UserProfile.vue";


test('displays message of the name', () => {
    const wrapper = mount(UserProfile)
  
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Austin Fisher')
})

test('displays message of greeting message on navbar', () => {
    const wrapper = mount(UserProfile, {
      props: {
        msg: 'Hi, User'
      }
    })
  
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Hi, User')
})

