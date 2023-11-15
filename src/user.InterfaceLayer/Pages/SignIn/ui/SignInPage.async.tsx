import { lazy } from "react";

export const SignInPageAsync = lazy(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  () => import("./SignInPage")
);
