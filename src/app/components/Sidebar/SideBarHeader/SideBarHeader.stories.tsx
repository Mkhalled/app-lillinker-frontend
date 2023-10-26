import { Meta, StoryObj } from '@storybook/react';
import SideBarHeader, { ISideBarHeader } from './SideBarHeader';
import { mockSideBarHeaderProps } from './SideBarHeader.mocks';

export default {
  title: 'templates/SideBarHeader',
  component: SideBarHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof SideBarHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<ISideBarHeader>;

export const Base: Template = (args: ISideBarHeader) => (
  <SideBarHeader {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSideBarHeaderProps.base,
} as ISideBarHeader;
