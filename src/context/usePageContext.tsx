import React from "react";
import { PageContext } from "./PageContext";

export const usePageContext = () => {
  const pageContext = React.useContext(PageContext);

  if (!pageContext) throw new Error('You need to use this hook inside a context provider');

  return pageContext;
};