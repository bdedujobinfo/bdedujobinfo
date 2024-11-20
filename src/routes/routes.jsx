import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage";
import { JobInfo } from "../pages/jobs/JobInfo";
import { JobDetails } from "../pages/jobs/JobDetails";
import { EduInfo } from "../pages/edu/EduInfo";
import { EduDetails } from "../pages/edu/EduDetails";
import { JobPreparation } from "../pages/JobPreparation";
import { EnglishGrammar } from "../pages/EnglishGrammar";
import { BanglaGrammar } from "../pages/BanglaGrammar";
import { Dictionary } from "../pages/dictionary/Dictionary";
import { CurrentAffairs } from "../pages/CurrentAffairs";
import { GeneralKnowledge } from "../pages/GeneralKnowledge";
import { Tutorials } from "../pages/Tutorials";
import { NotFound } from "../pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "job-info", element: <JobInfo /> },
      { path: "/job-info/:id", element: <JobDetails /> },
      { path: "edu-info", element: <EduInfo /> },
      { path: "edu-info/:id", element: <EduDetails /> },
      { path: "job-preparation", element: <JobPreparation /> },
      { path: "english-grammar", element: <EnglishGrammar /> },
      { path: "bangla-grammar", element: <BanglaGrammar /> },
      { path: "dictionary", element: <Dictionary /> },
      { path: "current-affairs", element: <CurrentAffairs /> },
      { path: "general-knowledge", element: <GeneralKnowledge /> },
      { path: "tutorials", element: <Tutorials /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routes;