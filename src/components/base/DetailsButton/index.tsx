import { FC, MouseEventHandler, PropsWithChildren } from "react"
import "./index.scss"

interface BtnDetailsTypes {
  onClick?: MouseEventHandler<HTMLButtonElement>
}
const DetailsButton: FC<PropsWithChildren<BtnDetailsTypes>> = ({ children, onClick }) => {
  return (
    <button className="button__details" onClick={onClick}>
      {children}
    </button>
  )
}

export default DetailsButton