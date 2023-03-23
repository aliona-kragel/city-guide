import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux"
import mapSlice from "store/slices/map/mapSlice";

const useMapActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(mapSlice.actions, dispatch),
    [dispatch]
  )
}

export default useMapActions;