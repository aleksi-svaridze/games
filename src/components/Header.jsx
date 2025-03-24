import { NavLink } from "react-router";

export const DesktopHeader = () => {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between py-7 container mx-auto px-5 lg:px-0 border-b-[#29292a] border-b-[1px]">
        <NavLink to={"/"} className="size-12 bg-white"></NavLink>
        <div className="flex items-center md:text-lg font-light capitalize lg:text-xl gap-x-5 md:gap-x-10 lg:gap-x-20">
          <NavLink to="/" className={`text-white`}>
            home
          </NavLink>
          <NavLink to="pc" className={`text-white`}>
            PC
          </NavLink>
          <NavLink to="playstation" className={`text-white`}>
            PlayStation
          </NavLink>
          <NavLink to="xbox" className={`text-white`}>
            Xbox
          </NavLink>
        </div>
      </div>
    </header>
  );
};
