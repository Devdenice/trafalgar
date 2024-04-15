import pattern from "/pattern.svg";

const Footer = () => {
  return (
    <footer>
      <div className=" bg-gradient-to-r from-[#67C3F3] to-[#5A98F2] relative">
        <div className="absolute bottom-0">
          <img src={pattern} width={100} height={100} />
        </div>
        <div className="flex items-center justify-between w-10/12 mx-auto py-10 max-md:flex-col max-md:items-start max-md:gap-y-10">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-2 flex-row">
                <div className="text-[#5B9BF3] logo-footer">T</div>
                <h3 className="nav-text footer-header">Trafalgar</h3>
              </div>
              <p className="w-full md:w-[60%] footer-subheader">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
            </div>
            <p className="footer-subheader">
              ©Trafalgar PTY LTD 2020. All rights reserved
            </p>
          </div>
          <div>
            <div className="flex gap-x-20 max-xs:flex-col max-xs:gap-y-5">
              <div>
                <h3 className="footer-header">Company</h3>
                <p className="footer-subheader">About</p>
                <p className="footer-subheader">Testomonials</p>
                <p className="footer-subheader">Find a doctor</p>
                <p className="footer-subheader">Apps</p>
              </div>
              <div>
                <h3 className="footer-header">Region</h3>
                <p className="footer-subheader">Indonesia</p>
                <p className="footer-subheader">Singapore</p>
                <p className="footer-subheader">Hongkong</p>
                <p className="footer-subheader">Canada</p>
              </div>
              <div className="w-[100px]">
                <h3 className="footer-header">Help</h3>
                <p className="footer-subheader">Help Center</p>
                <p className="footer-subheader">Contact Support</p>
                <p className="footer-subheader">Instructions</p>
                <p className="footer-subheader">How it works</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
