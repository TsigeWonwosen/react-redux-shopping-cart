import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  // Split the current path and filter out empty strings
  const pathnames = location.pathname.split("/").filter((x) => x);
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const search = queryParams.get("search");

  if (category) {
    pathnames.push(category);
  }

  return (
    <section className="text-sm text-gray-500 flex justify-start items-center mb-2 w-full max-w-4xl ">
      <ol className="list-none p-0 inline-flex flex-wrap items-center space-x-1">
        <li className="flex justify-center items-center ml-9">
          <Link
            to="/"
            className="hover:text-gray-800 transition"
          >
            Home
          </Link>
          {pathnames.length > 0 && (
            <span className="mx-2 text-gray-400">
              <ChevronRight size={"14px"} />
            </span>
          )}
        </li>

        {pathnames.map((value, index) => {
          // Build the full path to this breadcrumb level
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          // Convert slug-style text to readable text
          const label = decodeURIComponent(value)
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          const isLast = index === pathnames.length - 1;

          return (
            <li
              key={to}
              className="inline-flex items-center"
            >
              {!isLast ? (
                <>
                  <Link
                    to={to}
                    className="hover:text-gray-800 transition"
                  >
                    {label}
                  </Link>
                  <span className="mx-2 text-gray-400">
                    <ChevronRight size={"14px"} />
                  </span>
                </>
              ) : (
                <span className="text-gray-800">{label}</span>
              )}
            </li>
          );
        })}
        {search && (
          <li className="flex justify-center items-center ml-9">
            <span className="mx-2 text-gray-400">
              <ChevronRight size={"14px"} />
            </span>
            <span className="text-gray-800">
              Search results for : "{search}" `
            </span>
          </li>
        )}
      </ol>
    </section>
  );
}
