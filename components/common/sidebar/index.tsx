"use client";

import Avatar from "@/components/ui/avatar";
import IconButton from "@/components/ui/icon-button";
import Logo from "@/components/ui/logo";
import { MenuItem, MenuList } from "@/components/ui/menu-item";
import {
  BookA,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  X,
} from "lucide-react";

function SideBar({
  isOpen = true,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-full md:w-72 bg-white shadow-2xl
          flex flex-col
          transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 h-14 border-b border-border-default">
          <Logo className="w-[120px]" />
          <IconButton variant="ghost" onClick={onClose} aria-label="Close menu">
            <X className="w-5 h-5" />
          </IconButton>
        </div>

        <div className="flex items-center gap-3 px-4 py-3 border-b border-border-default">
          <Avatar
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
            name="Nabeel Thurakkal"
          />
          <div>
            <p className="text-body-2 font-semibold text-text-default">
              Nabeel Thurakkal
            </p>
            <p className="text-caption-2 text-text-default line-clamp-1">
              nthurakkal92@gmail.com
            </p>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-0 py-3 flex flex-col gap-1">
          <MenuList>
            <MenuItem leftIcon={<LayoutDashboard className="w-5 h-5" />}>
              Dashboard
            </MenuItem>
            <MenuItem leftIcon={<BookA className="w-5 h-5" />}>
              My courses
            </MenuItem>
            <hr className="border-border-default" />
            <MenuItem
              leftIcon={<User className="w-5 h-5" />}
              onClick={() => alert("Profile clicked")}
            >
              Profile
            </MenuItem>

            <MenuItem
              leftIcon={<Settings className="w-5 h-5" />}
              onClick={() => alert("Settings clicked")}
            >
              Settings
            </MenuItem>
            <MenuItem
              leftIcon={<LogOut className="w-5 h-5" />}
              onClick={() => alert("Logout clicked")}
            >
              Logout
            </MenuItem>
          </MenuList>
        </nav>
      </aside>
    </>
  );
}

export default SideBar;
