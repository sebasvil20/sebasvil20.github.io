import React from "react";
import LogoPersonal from "../Images/logo.png";

const Footer = () => {
  return (
    <footer className="text-magnolia z-50">
      <div className="container px-5 py-8 mx-auto flex items-center content-center sm:flex-row flex-col z-50">
        <a
          className="flex font-medium items-center md:justify-start justify-center text-magnolia z-50 font-quicksand"
          href="/"
        >
          <img src={LogoPersonal} alt="Logo personal" className="w-8 z-50" />
          <span className="ml-3 text-xl">Sebastián Villegas</span>
        </a>
        <p className="text-sm text-magnolia sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 z-50">
          <a
            href="https://github.com/sebasvil20"
            className="ml-1 z-50 font-quicksand"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Sebasvil20
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className=" text-royalbluedark z-50"
            href="https://github.com/sebasvil20"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5 z-50"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            className="ml-3 text-royalbluedark z-50"
            href="https://github.com/sebasvil20"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5 z-50"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a
            className="ml-3 text-royalbluedark z-50"
            href="https://github.com/sebasvil20"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5 z-50"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a
            className="ml-3 text-royalbluedark z-50"
            href="https://github.com/sebasvil20"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5 z-50"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
