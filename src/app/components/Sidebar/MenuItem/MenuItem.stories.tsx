import { Meta, StoryObj } from '@storybook/react';
import MenuItem, { IMenuItem } from './MenuItem';
import { mockMenuItemProps } from './MenuItem.mocks';

export default {
  title: 'templates/MenuItem',
  component: MenuItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof MenuItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<IMenuItem>;

export const Base: Template = (args: IMenuItem) => <MenuItem {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMenuItemProps.base,
} as IMenuItem;
