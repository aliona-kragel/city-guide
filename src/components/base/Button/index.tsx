import { FC, MouseEventHandler, PropsWithChildren } from "react";
import "./index.scss"

interface BtnSearchTypes {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const ButtonSearch: FC<PropsWithChildren<BtnSearchTypes>> = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonSearch;