import { FC, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./index.scss"

type ILinkItem = {
  to: string;
}

const LinkItem: FC<PropsWithChildren<ILinkItem>> = ({ children, to }) => {
  return (
    <LinkContainer>
      <NavLink to={to} className={({ isActive }) => isActive ? 'link__item active__link' : "link__item"}>
        {children}
      </NavLink>
    </LinkContainer>
  )
}

export default LinkItem;

const LinkContainer = styled.div`
display: flex;
align-items: center;
width: 100%;
`