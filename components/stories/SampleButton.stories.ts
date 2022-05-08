import SampleButton from '../SampleButton.vue'

export default {
  title: 'Button/SampleButton',
  component: SampleButton,
  argTypes: {
    click: {
      action: 'click',
    },
  },
}

const Template = (args) => ({
  components: { SampleButton },
  setup() {
    return {
      args,
    }
  },
  template: `
    <SampleButton v-bind="args" @click="click">Sample Button</SampleButton>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  outlined: false,
  type: 'button'
}
