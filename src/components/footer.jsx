export default function Footer() {
  return (
    <>
      <footer class="bg-gray-800 rounded-b-lg shadow ">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <a href="">Insert note here</a>
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="/" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/contact" class="hover:underline me-4 md:me-6">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://github.com/clayguerrero"
                class="hover:underline me-4 md:me-6"
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
