import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="relative flex flex-no-wrap items-center justify-between w-full py-2 shadow-dark-mild bg-zinc-50 lg:flex-wrap lg:justify-start lg:py-4 dark:bg-neutral-700">
      <div className="flex flex-wrap items-center justify-between w-full px-3">
        <div className="flex flex-col space-x-10 text-white list-style-none me-auto ps-0 lg:flex-row">
          <div className="flex flex-col text-white list-style-none me-auto ps-0 lg:flex-row">
            <Link className="mb-4 text-[#BBA] lg:mb-0 lg:pe-2" to="/crash">
              Our Teams{" "}
            </Link>
            <Link
              className="mb-4 hover:text-[#BBA] focus:text-[#BB0] lg:mb-0 lg:pe-2"
              to="/team/sales"
            >
              Sales
            </Link>
            <Link
              className="mb-4 hover:text-[#BBA] focus:text-[#BB0] lg:mb-0 lg:pe-2"
              to="/team/webdesign"
            >
              Webdesign
            </Link>
            <Link
              className="mb-4 hover:text-[#BBA] focus:text-[#BB0] lg:mb-0 lg:pe-2"
              to="/team/development"
            >
              Development
            </Link>
          </div>
          <div className="flex flex-col space-x-10 text-white list-style-none me-auto ps-0 lg:flex-row">
            <Link
              className="ml-15 mb-4 hover:text-[#BBA] focus:text-[#BB0] lg:mb-0 lg:pe-2"
              to="/buy"
            >
              Buy
            </Link>
            <Link
              className="mb-4 hover:text-[#BBA] focus:text-[#BB0] lg:mb-0 lg:pe-2"
              to="/about"
            >
              ?
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
