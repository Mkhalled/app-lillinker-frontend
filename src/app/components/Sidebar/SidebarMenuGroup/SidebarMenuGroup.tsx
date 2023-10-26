export interface ISidebarMenuGroup {
  title: string;
  children: React.ReactNode;
}

const SidebarMenuGroup: React.FC<ISidebarMenuGroup> = ({ title, children }) => {
  return (
    <div>
      <h3 className="mb-4 ml-4 text-sm font-semibold text-white">{title}</h3>

      <ul className="mb-6 flex flex-col gap-1.5">{children}</ul>
    </div>
  );
};

export default SidebarMenuGroup;
