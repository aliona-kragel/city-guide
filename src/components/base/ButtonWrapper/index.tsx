import { FC, MouseEventHandler, PropsWithChildren } from "react";
import "./index.scss"

interface BtnWrapperTypes {
  onClick?: MouseEventHandler<HTMLButtonElement>,
}

const ButtonWrapper: FC<PropsWithChildren<BtnWrapperTypes>> = ({ children, onClick }) => {
  return (
    <button className="button__wrapper" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonWrapper;


