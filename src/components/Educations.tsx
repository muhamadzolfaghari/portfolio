import useStringReference from "../hooks/useStringReference.ts";
import Experiences from "./Experiences.tsx";
import EDUCATION_EXPERIENCES from "../lib/EDUCATION_EXPERIENCES.ts";

export default function Educations() {
  const R = useStringReference();

  return (
    <Experiences
      data={EDUCATION_EXPERIENCES}
      title={R.education_experiences}
      subtitle={R.study_in}
    />
  );
}
