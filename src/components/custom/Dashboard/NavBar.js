"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function NavBar() {
  const [role, setRole] = useState(null);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname) {
      const currentRole = pathname.split("/")[2];
      setRole(currentRole);
    }
  }, [pathname]);

  const menuItems = {
    admin: [
      {
        label: "Dashboard",
        link: "/dashboard/admin",
        icon: "flaticon-025-dashboard",
      },
      {
        label: "Search Thesis",
        link: "/dashboard/admin/search_thesis",
        icon: "flaticon-022-copy",
      },
      {
        label: "Manage Guidelines",
        link: "/dashboard/admin/manage_guidelines",
        icon: "flaticon-035-flag",
      },
      {
        label: "Manage Review",
        link: "/dashboard/admin/manage_peer",
        icon: "flaticon-009-check",
      },
      {
        label: "Manage Users",
        link: "/dashboard/admin/manage_users",
        icon: "flaticon-085-signal",
      },
      {
        label: "Manage Thesis",
        link: "/dashboard/admin/manage_thesis",
        icon: "flaticon-053-lifebuoy",
      },
      {
        label: "Profile",
        link: "/dashboard/admin/profile",
        icon: "flaticon-086-star",
      },
    ],
    scholar: [
      {
        label: "Dashboard",
        link: "/dashboard/scholar",
        icon: "flaticon-025-dashboard",
      },
      {
        label: "Search Thesis",
        link: "/dashboard/scholar/search_thesis",
        icon: "flaticon-022-copy",
      },
      {
        label: "Manage Guidelines",
        link: "/dashboard/scholar/manage_guidelines",
        icon: "flaticon-035-flag",
      },
      {
        label: "Manage Review",
        link: "/dashboard/scholar/manage_peer",
        icon: "flaticon-009-check",
      },
      {
        label: "Manage Thesis",
        link: "/dashboard/scholar/manage_thesis",
        icon: "flaticon-053-lifebuoy",
      },
      {
        label: "Submit Thesis",
        link: "/dashboard/scholar/submit_thesis",
        icon: "flaticon-093-waving",
      },
      {
        label: "Profile",
        link: "/dashboard/scholar/profile",
        icon: "flaticon-086-star",
      },
    ],
    user: [
      {
        label: "Dashboard",
        link: "/dashboard/user",
        icon: "flaticon-025-dashboard",
      },
      {
        label: "Search Thesis",
        link: "/dashboard/user/search_thesis",
        icon: "flaticon-022-copy",
      },
      {
        label: "Submit Thesis",
        link: "/dashboard/user/submit_thesis",
        icon: "flaticon-093-waving",
      },
      {
        label: "My Thesis",
        link: "/dashboard/user/my_thesis",
        icon: "flaticon-050-info",
      },
      {
        label: "Profile",
        link: "/dashboard/user/profile",
        icon: "flaticon-086-star",
      },
    ],
  };

  const currentMenuItems = menuItems[role] || [];

  return (
    <div className="dlabnav">
      <div className="dlabnav-scroll">
        <ul className="metismenu" id="menu">
          {currentMenuItems.map((item, index) => (
            <li key={index}>
              <Link aria-expanded="false" href={item.link}>
                <i className={item.icon} />
                <span className="nav-text">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
