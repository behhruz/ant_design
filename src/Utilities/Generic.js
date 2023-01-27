import { Divider } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";

export const Generic = () => {
  let location = useLocation();
  return <>
  <div>{location.pathname} is comming soon</div>
  </>
};
