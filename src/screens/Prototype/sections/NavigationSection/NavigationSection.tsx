import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Button } from "../../../../components/ui/button";

export const NavigationSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Define menu items for better maintainability
  const centerMenuItems = [
    { id: 1, label: "Menu item A" },
    { id: 2, label: "Menu item B" },
    { id: 3, label: "Menu item C" },
  ];

  const rightMenuItems = [
    { id: 1, label: "Menu item X" },
    { id: 2, label: "Menu item Y" },
  ];

  return (
    <header className="w-full h-[80px] lg:h-[122px] border-b border-[#eaeaea] bg-white relative">
      <div className="h-[78px] lg:h-[120px] flex items-center justify-between px-4 lg:px-16">
        {/* Logo */}
        <div className="relative w-[100px] lg:w-[127px] h-8 lg:h-10 bg-[#7A58D0] rounded-lg flex items-center justify-center">
          <img src="/Loxala_Logo.svg" alt="Loxala Logo" className="h-6 lg:h-8 w-auto" />
        </div>

        {/* Center Menu Items - Desktop Only */}
        <NavigationMenu className="mx-auto hidden lg:block">
          <NavigationMenuList className="flex gap-10">
            {centerMenuItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink className="inline-flex h-[18px] items-center justify-center pt-0.5 pb-0 px-0 [font-family:'AktivGrotesk-Bold-Bold',Helvetica] font-bold text-[#1e1e1ecc] text-[15px] tracking-[-0.15px] leading-[18px] whitespace-nowrap">
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Menu Items - Desktop Only */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex gap-10">
            {rightMenuItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink className="inline-flex h-[18px] items-center justify-center pt-0.5 pb-0 px-0 [font-family:'AktivGrotesk-Bold-Bold',Helvetica] font-bold text-[#1e1e1ecc] text-[15px] tracking-[-0.15px] leading-[18px] whitespace-nowrap">
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button - Only show below 1024px */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden h-10 w-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu - Only show below 1024px */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#eaeaea] shadow-lg z-50">
          <div className="px-4 py-6 space-y-4">
            {/* Center Menu Items */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[#272528] px-3">Navigation</h3>
              {centerMenuItems.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="block py-3 px-3 text-[#1e1e1ecc] [font-family:'AktivGrotesk-Bold-Bold',Helvetica] font-bold text-[15px] tracking-[-0.15px] hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-[#eaeaea] my-4"></div>

            {/* Right Menu Items */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[#272528] px-3">Account</h3>
              {rightMenuItems.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="block py-3 px-3 text-[#1e1e1ecc] [font-family:'AktivGrotesk-Bold-Bold',Helvetica] font-bold text-[15px] tracking-[-0.15px] hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
