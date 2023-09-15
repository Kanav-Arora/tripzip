import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle } from "@nextui-org/react";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar isBlurred={false} isBordered={false} className='landing-navbar' onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="hidden mobile:block"
                />
                <NavbarBrand>
                    <p className="font-bold text-sm">Travel Buddy</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden xl:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <p className='text-sm'>Home</p>
                </NavbarItem>
                <NavbarItem isActive>
                    <p className='text-sm'>About</p>
                </NavbarItem>
                <NavbarItem isActive>
                    <p className='text-sm'>Upcoming Packages</p>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <p className='text-sm'>Login</p>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} variant="flat" radius="sm" className='hidden landing-signup'>
                        <p className='text-sm'>Sign Up</p>
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar >

    )
}
