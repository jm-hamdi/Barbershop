import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

import "./Header.css";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const leftNavigation = [
  { name: "About us", to: "/about", current: true },
  { name: "Services", to: "/services", current: false },
];

const rightNavigation = [
  { name: "Gallery", to: "/gallery", current: false },
  { name: "FAQ", to: "/faq", current: false },
];

export default function Header() {
  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50 bg-slate-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <img
              alt="Logo"
              src="/images/Padour.png"
              className="h-10 w-auto ml-2"
            />
            <h1 className="Title">&nbsp;Barber</h1>
          </div>
          {/* Mobile menu button*/}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="hidden sm:flex items-center gap-x-6">
            {/* Left Navigation - About us & Services */}
            <div className="flex space-x-20">
              {leftNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  aria-current={item.current ? "page" : undefined}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-4 py-2 text-xl font-medium"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Center - Logo */}
            <a href="/" className="flex-shrink-0">
            <div className="flex-shrink-0 mx-16">
              <img
                alt="Logo"
               src="/images/Padour.png"
                className="h-16 w-auto rounded-full"
              />
            </div></a>

            {/* Right Navigation - Gallery & FAQ */}
            <div className="flex space-x-20">
              {rightNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  aria-current={item.current ? "page" : undefined}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-4 py-2 text-xl font-medium"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {leftNavigation.concat(rightNavigation).map((item) => (
            <NavLink
              key={item.name}
              as="a"
              to={item.to}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
