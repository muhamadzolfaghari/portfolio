import useStringReference from "../hooks/useStringReference.ts";
import Profession from "./Profession.tsx";
import EXPERIENCES from "../lib/experiences.ts";

export default function Experiences() {
  const R = useStringReference();

  return (
    <Profession
      data={EXPERIENCES}
      title={R.experiences}
      subtitle={R.working_with}
    />
  );
}
