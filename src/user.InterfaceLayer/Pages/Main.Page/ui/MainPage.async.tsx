import { lazy } from "react";

export const MainPageAsync = lazy(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  () => import("./MainPage")
);
