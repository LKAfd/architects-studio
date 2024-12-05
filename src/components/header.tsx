import Image from "next/image";
import logoImage from "../../public/assets/architects-logo.jpg";

export const Header = () => {
  return (
    <header className="flex shadow-md py-1 px-4 sm:px-10 bg-[#d6cfdd] font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        <Image
          className="rounded-[50%] w-[4rem] h-[4rem]"
          src={logoImage}
          alt="logo"
          height={36}
          width={36}
        />

        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-2">
              <a
                href="***"
                className="hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
              >
                HOME
              </a>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-32">
              <a
                href="***"
                className="hover:text-[#007bff] text-black block font-semibold text-[15px]"
              >
                ABOUT
              </a>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <a
                href="***"
                className="hover:text-[#007bff] text-black block font-semibold text-[15px]"
              >
                SERVICES
              </a>
            </li>
          </ul>
        </div>

        <div className="flex max-lg:ml-auto space-x-4">
          <button className="px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-[#f4f4f4] hover:bg-white transition-all ease-in-out duration-300">
            LOGIN
          </button>
          <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
            SIGN UP
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
