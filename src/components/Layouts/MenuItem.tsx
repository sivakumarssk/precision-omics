"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  label: string;
  link: string;
  submenu?: MenuItemProps[];
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, submenu }) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <li className={`nav-item ${submenu ? "dropdown" : ""}`} key={label}>
      <Link
        href={link}
        className={`nav-link ${submenu ? "dropdown-toggle" : ""} ${
          isActive ? "active" : ""
        }`}
        onClick={(e) => submenu && e.preventDefault()} // Prevent default for parent menus with submenus
      >
        {label}
      </Link>

      {submenu && (
        <ul className="dropdown-menu">
          {submenu.map((subItem) => (
            <MenuItem key={subItem.label} {...subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
