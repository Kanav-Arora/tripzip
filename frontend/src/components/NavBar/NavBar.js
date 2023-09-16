import { React, useState } from 'react'
import { Hamburger as Hamburger, Cross as Cross } from '../../assets/ext-icon';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="absolute w-full top-0 bg-transparent py-4 flex justify-between items-center z-50 px-10 mobile:px-5">
            <div className="flex items-center text-white leading-3">
                <div className="hidden mobile:block pr-5 ">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <Cross />
                        ) : (
                            <Hamburger />
                        )}
                    </button>
                </div>
                Travel Buddy
            </div>

            {/* In mobile view: SideBar is open */}
            {isOpen && (
                <div className="hidden mobile:block absolute w-[200px] top-full bg-white py-2 shadow-xl rounded-lg">
                    <div className="flex flex-col items-start space-y-4 pl-4">
                        <a href="#home" className="text-black">Home</a>
                        <a href="#" className="text-black">About</a>
                        <a href="#" className="text-black">Upcoming Packages</a>
                        <button className="text-black">Login</button>
                        <button className="text-white border px-2 py-2 bg-orange-accent rounded-md">Sign Up</button>
                    </div>
                </div>
            )}

            <div className="mobile:hidden flex-grow flex justify-center space-x-6">
                <a href="#" className="text-white">Home</a>
                <a href="#" className="text-white">About</a>
                <a href="#" className="text-white">Upcoming Packages</a>
            </div>

            <div className="mobile:hidden flex items-center space-x-2">
                <button className="text-white bg-transparent pr-3 py-2">Login</button>
                <button className="bg-white text-black border rounded-full px-4 py-2">Sign Up</button>
            </div>

        </nav>

        // <Navbar isBlurred={false} isBordered={false} className='landing-navbar' onMenuOpenChange={setIsMenuOpen}>
        //     <NavbarContent>
        //         <NavbarMenuToggle
        //             aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        //             className="hidden mobile:block"
        //         />
        //         <NavbarBrand>
        //             <p className="font-bold text-sm">Travel Buddy</p>
        //         </NavbarBrand>
        //     </NavbarContent>
        //     <NavbarContent className="hidden xl:flex gap-4" justify="center">
        //         <NavbarItem isActive>
        //             <p className='text-sm'>Home</p>
        //         </NavbarItem>
        //         <NavbarItem isActive>
        //             <p className='text-sm'>About</p>
        //         </NavbarItem>
        //         <NavbarItem isActive>
        //             <p className='text-sm'>Upcoming Packages</p>
        //         </NavbarItem>
        //     </NavbarContent>
        //     <NavbarContent justify="end">
        //         <NavbarItem className="hidden lg:flex">
        //             <p className='text-sm'>Login</p>
        //         </NavbarItem>
        //         <NavbarItem>
        //             <Button as={Link} variant="flat" radius="sm" className='hidden landing-signup'>
        //                 <p className='text-sm'>Sign Up</p>
        //             </Button>
        //         </NavbarItem>
        //     </NavbarContent>
        // </Navbar >

    )
}
