import { Meta, Story } from '@storybook/react/types-6-0';

import {TextButton, TextButtonProps } from './textButton';

export default {
    title: 'TextButton',
    component: TextButton,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
} as Meta;


const Template: Story<TextButtonProps> = (args) => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Text'
};

