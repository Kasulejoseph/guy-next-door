import React from "react";
import { CategoriesList } from "../components/Categories";
import { BreadCrumb } from "../components/Layouts/BreadCrumb";

export default function categories() {
  return (
    <>
      <BreadCrumb category="" />
      <CategoriesList />
    </>
  );
}
