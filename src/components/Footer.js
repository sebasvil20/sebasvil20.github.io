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
            href="https://www.facebook.com/sebasvil20/"
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
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            className="ml-3 text-royalbluedark z-50"
            href="https://www.instagram.com/sebas_villegas20/"
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
            href="https://www.linkedin.com/in/sebasvil20/"
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
