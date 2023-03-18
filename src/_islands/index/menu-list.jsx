import { RiCodeFill, RiRadarFill, RiSettings4Fill, RiServerFill } from "react-icons/ri";
import { HiArrowNarrowRight } from "react-icons/hi";



export default () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 my-4">
      {items.map((item, i) => {
        const {
          icon,
          title,
          description,
          url,
          external,
        } = { ...item };
        const link = (
          <div className="flex items-center text-blue-500 dark:text-blue-600 space-x-1.5">
            <span>
              Get Started
            </span>
            <HiArrowNarrowRight size={16} className="mt-0.5" />
          </div>
        );
        const element = (
          <div className="card-index h-full flex flex-col justify-between">
            <div className="mb-2">
              <div className="flex items-center space-x-3">
                {icon}
                <span className="text-base font-semibold">
                  {title}
                </span>
              </div>
              <div className="text-gray-500 dark:text-gray-400 mt-4">
                {description}
              </div>
            </div>
            {link}
          </div>
        );

        return (
          external ?
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopenner noreferrer"
              className="no-underline text-black dark:text-white"
            >
              {element}
            </a>
            :
            <a
              key={i}
              href={url}
            >
              <span className="no-underline text-black dark:text-white">
                {element}
              </span>
            </a>
        );
      })}
    </div>
  );
};