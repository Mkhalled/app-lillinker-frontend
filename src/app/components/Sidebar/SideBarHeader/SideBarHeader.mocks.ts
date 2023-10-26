import { ISideBarHeader } from './SideBarHeader';

const base: ISideBarHeader = {
  setSidebarOpen: () => {},

  trigger: undefined,
  sidebarOpen: false,
};

export const mockSideBarHeaderProps = {
  base,
};
