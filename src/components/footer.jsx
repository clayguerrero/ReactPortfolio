export default function Footer() {
  return (
    <>
      <footer className="bottom-0 left-0 w-full  bg-gray-800 shadow ">
        <div className=" flex w-full mx-auto max-w-screen-xl p-4 justify-center ">
          <ul className="flex flex-wrap  text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="/" className="hover:underline ">
                About
              </a>
            </li>
            <li className="px-2"> | </li>
            <li>
              <a href="/contact" className="hover:underline ">
                Contact
              </a>
            </li>
            <li className="px-2"> | </li>
            <li>
              <a
                href="https://github.com/clayguerrero"
                className="hover:underline "
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
