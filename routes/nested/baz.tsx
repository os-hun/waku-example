import { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h3>Baz</h3>
      {children}
    </div>
  );
};
