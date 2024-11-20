import { Analytics } from "@vercel/analytics/react";

import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <div>
      <Analytics />
      <MainLayout />
    </div>
  );
}

export default App;
