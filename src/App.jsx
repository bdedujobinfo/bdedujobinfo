import { Route, Routes } from "react-router-dom";
import { JobInfo } from "./pages/JobInfo";
import { EduInfo } from "./pages/EduInfo";
import { JobPreparation } from "./pages/JobPreparation";
import { EnglishGrammar } from "./pages/EnglishGrammar";
import { BanglaGrammar } from "./pages/BanglaGrammar";
import { Dictionary } from "./pages/Dictionary";
import { CurrentAffairs } from "./pages/CurrentAffairs";
import { GeneralKnowledge } from "./pages/GeneralKnowledge";
import { Tutorials } from "./pages/Tutorials";
import { Header } from "./components/shared/Header";
import { JobDetails } from "./posts/jobs/JobDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<JobInfo />} />
        <Route path="/job-info/:id" element={<JobDetails />} />
        <Route path="edu-info" element={<EduInfo />} />
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
