import { lazy } from "react";

export const SignUpPageAsync = lazy(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  () => import("./SignUpPage")
);
