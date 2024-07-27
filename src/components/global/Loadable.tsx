import { Loader } from "lucide-react";
import React, { Suspense } from "react";

const Loadable = (Component:React.ComponentType<any>) => (props:React.ComponentProps<any>) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
