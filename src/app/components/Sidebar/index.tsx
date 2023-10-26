import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import MenuItem from './MenuItem/MenuItem';
import SideBarHeader from './SideBarHeader/SideBarHeader';
import SidebarMenuGroup from './SidebarMenuGroup/SidebarMenuGroup';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = 'true';
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-primary duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <SideBarHeader {...{ setSidebarOpen, trigger, sidebarOpen }} />

      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <SidebarMenuGroup title="MENU">
            {/* <!-- Menu Item Dashboard --> */}
            <MenuItem
              href="/calendar"
              label="Dashboard"
              icon="ri-dashboard-line"
              isActive={pathname.includes('calendar')}
            />

            {/* <!-- Menu Item Dashboard --> */}
            {/* <!-- Menu Item Demandes de Simulation --> */}

            <MenuItem
              href="/demands"
              label="Demandes de Simulation"
              icon="ri-mail-send-line"
              isActive={pathname.includes('demands')}
            />
            {/* <!-- Menu Item Demandes de Simulation --> */}
            {/* <!-- Menu Item Retours de Simulation --> */}

            <MenuItem
              href="/replays"
              label="Retours de Simulation"
              icon="ri-mail-send-line"
              isActive={pathname.includes('replays')}
            />
            {/* <!-- Menu Item Retours de Simulation --> */}
            {/* <!-- Menu Item Settings --> */}
            <MenuItem
              href="/settings"
              label="Settings"
              icon="ri-settings-2-line"
              isActive={pathname.includes('settings')}
            />
            {/* <!-- Menu Item Settings --> */}
          </SidebarMenuGroup>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
