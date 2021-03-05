import Breadcrumb from "@components/breadcrumb/Breadcrumb";
import React from "react";
import { Outlet } from "react-router-dom";

export default function ActorsLayout() {
  return (
    <>
      <Breadcrumb />
      <Outlet />
    </>
  );
}
