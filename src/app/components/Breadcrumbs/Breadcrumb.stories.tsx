import { Meta, StoryObj } from '@storybook/react';
import Breadcrumb, { IBreadcrumb } from './Breadcrumb';
import { mockBreadcrumbProps } from './Breadcrumb.mocks';

export default {
  title: 'templates/Breadcrumb',
  component: Breadcrumb,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Breadcrumb>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<IBreadcrumb>;

export const Base: Template = (args: IBreadcrumb) => <Breadcrumb {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBreadcrumbProps.base,
} as IBreadcrumb;
