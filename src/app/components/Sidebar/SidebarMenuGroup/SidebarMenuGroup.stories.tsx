import { Meta, StoryObj } from '@storybook/react';
import SidebarMenuGroup, { ISidebarMenuGroup } from './SidebarMenuGroup';
import { mockSidebarMenuGroupProps } from './SidebarMenuGroup.mocks';

export default {
  title: 'templates/SidebarMenuGroup',
  component: SidebarMenuGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof SidebarMenuGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<ISidebarMenuGroup>;

export const Base: Template = (args: ISidebarMenuGroup) => (
  <SidebarMenuGroup {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSidebarMenuGroupProps.base,
} as ISidebarMenuGroup;
