import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 shadow-inner">
      <div className="md:flex md:justify-between md:px-8 lg:px-16">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center">
            <div className="mr-3 w-10">
              <Image
                src="/assets/footer_img.jpg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="Footer"
              />
            </div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              KK
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="https://flowbite.com" className="hover:underline">
                  KK
                </a>
              </li>
              <li>
                <Link href="/faq">
                  <a className="hover:underline">FAQ</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow us
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://github.com/Kerubi-5"
                  className="hover:underline "
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/P8HNjN4t4p"
                  className="hover:underline"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com" className="hover:underline">
            KK™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          ></a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          ></a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          ></a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          ></a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          ></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
