"use client";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // optional helper for conditional classes

export const sideBarNav = [
  {
    title: "Get Started",
    url: "/",
    icon: Home,
    category: [
      { title: "Libraries", url: "/libraries", icon: Home },
      { title: "Installation", url: "/installation", icon: Home },
    ],
  },
  {
    title: "Components",
    url: "/components",
    icon: Inbox,
    category: [
      { title: "Inbox", url: "/components/inbox", icon: Inbox },
      { title: "Calendar", url: "/components/calendar", icon: Calendar },
      { title: "Search", url: "/components/search", icon: Search },
      { title: "Settings", url: "/components/settings", icon: Settings },
    ],
  },
  {
    title: "Templates",
    url: "/templates",
    icon: Inbox,
    category: [
      { title: "Blog", url: "/templates/blogtemplate", icon: Inbox },
      { title: "Ecommerce", url: "/templates/ecommerce", icon: Calendar },
      { title: "Socials", url: "/templates/socialmedia", icon: Search },
      { title: "Dashboard", url: "/templates/dashboard", icon: Settings },
    ],
  },
];

const sections = [
  { title: "Get Started", url: "/", icon: Inbox },
  { title: "Components", url: "/components", icon: Inbox },
  { title: "Templates", url: "/templates", icon: Inbox },
];

export function AppSidebar() {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop(); // e.g. "inbox"

  return (
    <Sidebar className="pt-16">
      <SidebarContent>
        {/* Main Sections */}
        <SidebarGroup>
          <SidebarGroupLabel>Sections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((item) => {
                const itemSegment = item.url.split("/").filter(Boolean).pop();
                const isActive = lastSegment === itemSegment;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={clsx(
                        "w-full justify-start",
                        isActive && "bg-accent font-semibold"
                      )}
                    >
                      <a href={`/docs${item.url}`}>
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Docs Nav */}
        <SidebarGroup>
          <SidebarGroupLabel>Docs</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sideBarNav.map((item) => {
                const itemSegment = item.url.split("/").filter(Boolean).pop();
                const isParentActive = lastSegment === itemSegment;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={clsx(
                        "w-full justify-start",
                        isParentActive && "bg-muted font-semibold"
                      )}
                    >
                      <a href={`/docs${item.url}`}>
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>

                    {/* Sub items */}
                    {item.category.length > 0 && (
                      <SidebarMenuSub>
                        {item.category.map((subItem) => {
                          const subSegment = subItem.url
                            .split("/")
                            .filter(Boolean)
                            .pop();
                          const isSubActive = lastSegment === subSegment;

                          return (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                className={clsx(
                                  "w-full justify-start",
                                  isSubActive && "bg-muted font-semibold"
                                )}
                              >
                                <a href={`/docs${subItem.url}`}>
                                  <subItem.icon className="mr-2 h-4 w-4" />
                                  <span>{subItem.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
