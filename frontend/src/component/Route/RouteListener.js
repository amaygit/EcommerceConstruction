import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteListener = () => {
  const location = useLocation();
  useEffect(() => {
    const navs = [
      ...document.getElementsByClassName("nav1"),
      ...document.getElementsByClassName("nav2"),
      ...document.getElementsByClassName("nav3"),
      ...document.getElementsByClassName("nav4"),
    ];
    const buttons = document.getElementsByClassName("menuBurgerItem");
    let flag = false;
    navs.forEach((nav) => {
      const transform = nav.style.transform;
      if (transform === "translateY(0px)") {
        flag = true;
        nav.style.transform = "translateY(-100vmax)";
      }
    });
    if (flag) {
      console.log(buttons);
      Array.from(buttons).forEach((button, index) => {
        button.classList.toggle(`menuBurgerItem${index + 1}`);
      });
    }
  }, [location]);
  return <div></div>;
};

RouteListener.propTypes = {};

export default RouteListener;
