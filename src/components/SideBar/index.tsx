import React from "react";
import { useDispatch } from "react-redux";
import { NavLink} from "react-router-dom";
import { RoutePath } from "../../constants/routes";
import { IRoute } from "../../routes/routes";
import { useLocation,useNavigate } from "react-router";
import {useEffect} from 'react';
type Props = {};

const SideBar = (props: Props) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const routeList: IRoute[] = [
    {
      path: RoutePath.HOME_PAGE,
      icon: "bx bx-home-alt",
      title: "Trang chủ",
    },
    {
      path: RoutePath.TICKET_MANAGE_PAGE,
      icon: "bx bx-home-alt",
      title: "Quản lý vé",
    },
    {
      path: RoutePath.TICKET_CHECK_PAGE,
      icon: "bx bx-home-alt",
      title: "Đối soát vé",
    },
    {
      path: RoutePath.PACKAGE_PAGE,
      icon: "bx bx-home-alt",
      title: "Cài đặt",
    },
  ];

  useEffect(() => {
    
  }, [location])

  return (
    <div className="sidebar">
      <ul className="navigation">
        {routeList.map((route) => (
          <NavLink to={route.path} key={route.path}>
            <i className={route.icon}></i>
            <span>{route.title}</span>
          </NavLink>
        ))}

        <li className={location === RoutePath.PACKAGE_PAGE ? "active" : ""} onClick={()=>navigate(RoutePath.PACKAGE_PAGE)}>
          Gói dịch vụ
        </li>
      </ul>
      <div className="sidebar__copyright">
        <p>
          <span>Copyright</span>
          <img src="./imgs/copyright.svg" alt="" />
          <span>2020 Alta Software </span>
        </p>
      </div>
    </div>
  );
};

export default SideBar;
