import Link from 'next/link';
export interface IMenuItem {
  label: string;
  href: string;
  icon: string;
  isActive: boolean;
}

const MenuItem: React.FC<IMenuItem> = ({ label, href, icon, isActive }) => {
  return (
    <li>
      <Link
        href={href}
        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-gray hover:text-primary dark:hover:bg-meta-4 
        ${isActive && 'bg-graydark dark:bg-meta-4'}`}
      >
        <i className={`... ${icon}`}></i>
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
