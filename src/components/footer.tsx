export const Footer = () => {
  return (
    <footer className="font-sans tracking-wide bg-[#62566D] py-5 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-20 gap-96">
        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="***"
                className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="***"
                className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="content-center">
          <h4 className="text-[#FFA726] font-semibold text-lg mb-3">
            Platforms
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="***"
                className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="***"
                className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-3">Company</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="***"
                className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="***"
                className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
              >
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center border-[#6b5f5f] pt-1 mt-1">
        <p className="text-gray-300 text-[15px]">
          © Architects Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
