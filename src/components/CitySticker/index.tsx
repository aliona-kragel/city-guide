import { FC, PropsWithChildren } from "react";
import "./index.scss";

const CitySticker: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="city__sticker">
      {children}
    </div>
  )
}

export default CitySticker