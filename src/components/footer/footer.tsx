import Logo from "@/assets/phish_logo-removebg.png";

const Footer = () => {
    return (
        // bakground farge for footer
        <footer className="bg-primary-200 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    {/*<img alt="logo" src={Logo} className="h-12 w-auto" />*/}
                    <p className="my-5">
                        OffTheHook is a dedicated team of four computer science students from USN Bakkenteigen,
                        united by a strong passion for cybersecurity.
                        Together, we strive to create innovative solutions and push the boundaries of digital safety.
                    </p>
                    <p>© OffTheHook Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">LinkedIn</p>
                    <p className="my-5">Instagram</p>
                    <p>X</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Have questions or want to collaborate? Reach out to OffTheHook!</p>
                    <p>Email: contact@offthehook.com</p>
                    <p>Phone: (+47) 47707181</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



