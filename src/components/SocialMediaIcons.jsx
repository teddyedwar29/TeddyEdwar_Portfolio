
const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/teddy-edwar-15904527b"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/linkedin.png" alt="linkedin-link" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.facebook.com/profile.php?id=100005223162440"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/facebook.png" alt="facebook-link" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/teddy9dw4r?igsh=MXZsODc2cXNocXgyYg=="
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/instagram.png" alt="instagram-link" />
            </a>
        </div>
    )
}

export default SocialMediaIcons;