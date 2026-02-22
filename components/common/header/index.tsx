"use client";

import Avatar from "@/components/ui/avatar";

import Logo from "@/components/ui/logo";
import { Menu } from "@/components/ui/menu";
import { MenuItem, MenuList } from "@/components/ui/menu-item";

import TextField from "@/components/ui/text-field";
import { HEADER_NAV_ITEMS } from "@/lib/constants";
import {
  BookA,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  User,
  Menu as MenuIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import IconButton from "@/components/ui/icon-button";
import Sidebar from "../sidebar";
import SearchModal from "@/components/features/SearchModal";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full h-14 lg:h-16 bg-white border-b border-border-default flex items-center">
        <div className="container mx-auto flex items-center gap-4 justify-between px-4">
          <div className="flex items-center gap-4 flex-shrink-0">
            <Logo className="w-[120px]" />
            <nav className="hidden lg:flex items-center gap-1 mx-auto">
              {HEADER_NAV_ITEMS.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="px-3 py-1.5 text-body-2 text-text-default rounded-md hover:bg-brand-subtle hover:text-text-bold transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-0 lg:gap-4">
            <div>
              <TextField
                className="hidden lg:block"
                onClick={() => setOpen(true)}
                aria-label="Search courses"
                placeholder="Search courses..."
                leftIcon={<Search className="w-5 h-5 text-text-default" />}
              />

              <IconButton
                onClick={() => setOpen(true)}
                variant="ghost"
                className="block lg:hidden"
                aria-label="Open search modal"
              >
                <Search onClick={() => setOpen(true)} className="w-5 h-5 " />
              </IconButton>

              <SearchModal
                open={open}
                onClose={() => setOpen(false)}
                setOpen={setOpen}
              />
            </div>
            <div className="hidden lg:block">
              <Menu
                aria-hidden="true"
                trigger={
                  <Avatar
                    name="Nabeel Thurakkal"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                  />
                }
              >
                <div className="px-4 py-3 w-[250px]">
                  <div className="text-body-1 text-text-default line-clamp-1">
                    Nabeel Thurakkal
                  </div>
                  <p className="text-body-2 text-text-subtle line-clamp-1">
                    nthurakkal92@gmail.com
                  </p>
                </div>
                <hr className="border-border-default" />
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
              </Menu>
            </div>
            <IconButton
              aria-label="Hamburger menu"
              variant="ghost"
              className="block lg:hidden"
              onClick={() => setOpenSidebar(true)}
            >
              <MenuIcon className="w-5 h-5" />
            </IconButton>
          </div>
        </div>
      </header>
      <Sidebar isOpen={openSidebar} onClose={() => setOpenSidebar(false)} />
    </>
  );
};

export default Header;
