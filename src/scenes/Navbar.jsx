import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";


const Link = ({page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-yellow-400" : ""}
                hover:text-yellow-400 transition duration-500`}
                href={`#${lowerCasePage}`}
                onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({isTopOfPage,selectedPage,setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    // const navbarBackground = isTopOfPage? "" : "bg-gradient-rainbow";

    return (
        <nav className={`bg-gradient-rainbow z-40 w-full fixed top-0 py-3`}> 
            <div className="flex items-center justify-between mx-auto w-5/6 ">
                {/* <h4 className="font-plafair text-3xl font-bold">Teddy Edwar</h4> */}
                <img src="../assets/logo-teddy.png" alt="logo-teddy"  width={170}/>
                
                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link
                            page="Home"
                            SelectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Skills"
                            SelectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        
                        <Link
                            page="Projects"
                            SelectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            SelectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                <button
                    className="rounded-full bg-red-300 p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <img src="../assets/menu-icon.svg" alt="menu" />
                </button>
                )}
                {/* Mobile Menu Pop Up */}
                {!isAboveSmallScreens && isMenuToggled &&(
                    <div className="fixed right-0 bottom-0 h-full bg-blue-400 w-[300px]">
                        {/* Close Icon */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <img src="../assets/close-icon.svg" alt="close" />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-blue-950 font-semibold">
                        <Link
                            page="Home"
                            SelectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Skills"
                            SelectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        
                        <Link
                            page="Projects"
                            SelectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            SelectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        </div>

                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;