import React from "react";
import { Link, useLocation } from "react-router-dom";

import routes from "../routes";

import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react";

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname;

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname);
    return currentRoute ? currentRoute.name : false;
  };

  const getBreadcrumbs = (location) => {
    const breadcrumbs = [];
    location.split("/").reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`;
      const routeName = getRouteName(currentPathname, routes);
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        });
      return currentPathname;
    });
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs(currentLocation);

  return (
    <>
      <CBreadcrumb className="m-0 ms-2">
        <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <CBreadcrumbItem
              {...(breadcrumb.active
                ? { active: true }
                : { href: breadcrumb.pathname })}
              key={index}
            >
              {breadcrumb.name}
            </CBreadcrumbItem>
          );
        })}
      </CBreadcrumb>
      <span className="d-flex align-items-center" >
        <Link to="/order" className="ms-2 active">New Orders</Link>
        <Link className="ms-2 text-dark text-decoration-none">/</Link>
        <Link to="/progress" className="ms-2 active">Progress</Link>
        <Link className="ms-2 text-dark text-decoration-none ">/</Link>
        <Link className="ms-2 active">Done</Link>
      </span>
    </>
  );
};

export default React.memo(AppBreadcrumb);
