import useStringReference from "../hooks/useStringReference.ts";
import Profession from "./Profession.tsx";
import EDUCATIONS from "../lib/educations.ts";

export default function Educations() {
  const R = useStringReference();

  return (
    <Profession
      data={EDUCATIONS}
      title={R.education_experiences}
      subtitle={R.study_in}
    />
  );
}
