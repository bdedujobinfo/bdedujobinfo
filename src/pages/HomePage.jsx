import { EduInfo } from "./edu/EduInfo";
import { JobInfo } from "./jobs/JobInfo";

export const HomePage = () => {
  return (
    <>
      <div>
        <JobInfo />
        <EduInfo />
      </div>
    </>
  );
};
