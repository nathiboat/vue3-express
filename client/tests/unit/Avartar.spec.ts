import {  mount } from "@vue/test-utils";


import Avatar from "@/components/base/Avatar.vue";

const wrapper = mount(Avatar, {
    props: {
      name: 'h'
    }
})

it('equals messages to h', () => {
    
    expect(wrapper.props('name')).toBe('h')
});


