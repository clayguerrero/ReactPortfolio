import { useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  const navigation = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "Portfolio",
      href: "/projects",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Resume",
      href: "/resume",
    },
  ];

  return (
    <>
      <div className="bg-gray-800 rounded-lg shadow  overflow-hidden">
        {/* navbar */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Clay Guerrero
            </span>
          </a>

          {navigation.map((nav, idx) => {
            const isActiveRoute = location.pathname === nav.href;
            return (
              <a
                key={idx}
                href={nav.href}
                style={{
                  padding: "0 25px",
                  color: isActiveRoute && "white",
                }}
                className="hidden md:flex items-center space-x-5 text-gray-400"
              >
                <h3>{nav.name}</h3>
              </a>
            );
          })}

          {/* hamburger menu */}
          <button className="space-y-1 group md:hidden">
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>

          {/* menu */}
          <ul className="bg-[#252525] w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
              <button className="px-10 py-8 relative ml-auto">
                <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
                <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
              </button>
              <li className=" font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <a
                  href="/"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About Me
                </a>
              </li>
              <li className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <a
                  href="projects"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Portfolio
                </a>
              </li>
              <li className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <a
                  href="contact"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
              <li className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <a
                  href="resume"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Resume
                </a>
              </li>
            </ul>
          </button>
        </div>
      </div>
    </>
  );
}
