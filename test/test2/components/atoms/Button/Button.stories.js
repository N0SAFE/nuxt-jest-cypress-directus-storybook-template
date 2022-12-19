// create a story for the Button component without using the storiesOf API

import Button from './Button.vue'


export default {
  title: 'Button',
  component: Button
}

export const asAComponent = () => ({
  components: { Button },
  template: '<Button />'
})

export const iDontWork = () => '<Button />'
