import { IoMdHeart } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-7 bg-secondary p-3 font-roboto text-white">
      <div className="flex gap-1 items-center justify-center mb-4 text-sm">
        <div>
          <p>Developed with</p>
        </div>
        <div>
          <IoMdHeart size={20} color="#F7996E" />
        </div>
        <div>
          <p>
            by{" "}
            <a href="#" className="underline">
              TheCoderSingh
            </a>
          </p>
        </div>
      </div>
      <p className="text-center text-xs">
        Copyright &copy; 2024 | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
