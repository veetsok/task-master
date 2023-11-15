import React from "react";
import * as ST from "./styled";

const Loader: React.FC = () => (
  <ST.LoaderWrapper>
    <ST.Spinner />
  </ST.LoaderWrapper>
);

export default Loader;
