import { Analytics } from "@vercel/analytics/react";
import { Route, Routes } from "react-router-dom";
import { JobInfo } from "./pages/jobs/JobInfo";
import { JobDetails } from "./pages/jobs/JobDetails";

import { EduInfo } from "./pages/edu/EduInfo";
import { EduDetails } from "./pages/edu/EduDetails";

import { JobPreparation } from "./pages/JobPreparation";
import { EnglishGrammar } from "./pages/EnglishGrammar";
import { BanglaGrammar } from "./pages/BanglaGrammar";
import { Dictionary } from "./pages/Dictionary";
import { CurrentAffairs } from "./pages/CurrentAffairs";
import { GeneralKnowledge } from "./pages/GeneralKnowledge";
import { Tutorials } from "./pages/Tutorials";
import { Header } from "./components/shared/Header";

function App() {
  return (
    <div>
      <Analytics />
      <Header />
      <Routes>
        <Route path="/" element={<JobInfo />} />
        <Route path="/job-info/:id" element={<JobDetails />} />
        {/* =================================================== */}
        <Route path="edu-info" element={<EduInfo />} />
        <Route path="edu-info/:id" element={<EduDetails />} />

        {/* ==================================================== */}
        <Route path="job-preparation" element={<JobPreparation />} />
        <Route path="english-grammar" element={<EnglishGrammar />} />
        <Route path="bangla-grammar" element={<BanglaGrammar />} />
        <Route path="dictionary" element={<Dictionary />} />
        <Route path="current-affairs" element={<CurrentAffairs />} />
        <Route path="general-knowledge" element={<GeneralKnowledge />} />
        <Route path="tutorials" element={<Tutorials />} />
      </Routes>
    </div>
  );
}

export default App;
