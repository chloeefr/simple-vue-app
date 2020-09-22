import { shallowMount } from '@vue/test-utils'
import App from '../../src/App.vue'

describe('baseButton.vue', () => {
  it('text is shown when button is clicked', () => {
    const wrapper = shallowMount(App)
    // trigger a click
    wrapper.find('#button').trigger('click')
    expect(wrapper.find('p').exists()).toBe(true)
  })
})