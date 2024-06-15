import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (

        <footer className="h-60 bg-gradient-rainbow pt-10">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons/>
                <div className="md:flex justify-center md:justify-between text-center ">
                    <p className="font-playfair font-semibold text-2xl text-yellow-400">
                        TEDDY EDWAR
                    </p>
                    <p className="font-playfair text-md text-white">
                        ©2024 TEDDY. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )

}

export default Footer;