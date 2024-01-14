import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-[#E5E6E9] w-full flex items-center justify-center py-4">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex items-center">
          <p className="text-[#9A9A9A] hover:text-[#BBBABA] cursor-pointer">
            <i className="fa-brands fa-square-facebook"></i>
          </p>
          <p className="text-[#9A9A9A] ml-2 hover:text-[#BBBABA] cursor-pointer">
            <i className="fa-brands fa-square-x-twitter"></i>
          </p>
          <p className="text-[#9A9A9A] ml-2 hover:text-[#BBBABA] cursor-pointer">
            <i className="fa-brands fa-square-instagram"></i>
          </p>
          <p className="text-[#9A9A9A] ml-2 hover:text-[#BBBABA] cursor-pointer">
            <i className="fa-brands fa-square-whatsapp"></i>
          </p>
        </div>
        <p className="text-[#9A9A9A] text-[16px]">
          &copy; 2024. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
