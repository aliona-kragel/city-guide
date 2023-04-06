import { FC, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

type ILink = {
  to: string;
}

const LinkBreadCrumb: FC<PropsWithChildren<ILink>> = ({ children, to }) => {
  return (
    <NavLink to={to} className="bread__crumb">
      {children}
    </NavLink >
  )
}

export default LinkBreadCrumb;