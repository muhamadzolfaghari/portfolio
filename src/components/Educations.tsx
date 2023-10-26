import useStringReference from "../hooks/useStringReference.ts";
import Experiences from "./Experiences.tsx";
import EDUCATIONS from "../lib/educations.ts";

export default function Educations() {
  const R = useStringReference();

  return (
    <Experiences
      data={EDUCATIONS}
      title={R.education_experiences}
      subtitle={R.study_in}
    />
  );
}
