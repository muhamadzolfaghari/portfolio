import useStringReference from "../hooks/useStringReference.ts";
import Experiences from "./Experiences.tsx";
import WORK_EXPERIENCES from "../lib/WORK_EXPERIENCES.ts";

export default function WorkExperiences() {
  const R = useStringReference();

  return (
    <Experiences
      data={WORK_EXPERIENCES}
      title={R.job_experiences}
      subtitle={R.working_with}
    />
  );
}
