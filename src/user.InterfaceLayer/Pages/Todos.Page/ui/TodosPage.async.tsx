import { lazy } from "react";

export const TodosPageAsync = lazy(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  () => import("./TodosPage")
);
