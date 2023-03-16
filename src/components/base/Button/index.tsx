import { FC, PropsWithChildren } from "react";
import "./index.scss"

const ButttonSearch: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className="button">
      {children}
    </button>
  )
}

export default ButttonSearch;