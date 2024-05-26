'use client'

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command"

import UserItem from 'useritem';
import { BookUser, CircleUser, ClipboardPenLine, FolderOpenDot, Star } from "lucide-react"

export default function Sidebar() {
    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: '/',
                    icon: <CircleUser />,
                    text: 'Profile'
                },
                {
                    link: '/',
                    icon: <FolderOpenDot />,
                    text: 'Projects'
                },
                {
                    link: '/',
                    icon: <BookUser />,
                    text: 'Teams'
                },
                {
                    link: '/',
                    icon: <Star />,
                    text: 'Reviews'
                },
            ]
        },
        {
            group: "Current Project",
            items: [
                {
                    link: '/',
                    icon: <ClipboardPenLine />,
                    text: 'My Board'
                },
            ]
        }
    ]

  return (
    <div className="fixed flex flex-col gap-4 w-[250px] min-w-[250px] p-4 min-h-screen pt-20">
        <div> 
            <UserItem
                title= "john doe"
                description="john@gmail.com"
                shadow={false}
            />
        </div>
        <div className="grow"> 
        <Command style={{ overflow: 'visible'}}>
            <CommandList style={{ overflow: 'visible'}}>
                {menuList.map((menu: any, key: number) => (
                <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => 
                <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                    {option.icon}
                    {option.text}
                </CommandItem> )}
                </CommandGroup>))}
            </CommandList>
        </Command>
        </div> 
    </div>
  )
}
