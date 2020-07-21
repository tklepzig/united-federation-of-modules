import * as React from "react";

const RemoteButton = React.lazy(() =>
  import("button/Button").then(({ Button }) => ({ default: Button }))
);

export const App = () => (
  <>
    <h1>Base</h1>
    <React.Suspense fallback="Loading Button">
      <RemoteButton>Using button from remote</RemoteButton>
    </React.Suspense>
  </>
);
