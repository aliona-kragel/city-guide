import { FC, PropsWithChildren } from "react";
import "./index.scss";

const PlaceSticker: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="place__sticker">
      {children}
    </div>
  )
}

export default PlaceSticker;