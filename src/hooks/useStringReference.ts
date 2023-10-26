import { useMemo } from "react";
import { STRING_KEYS, STRINGS } from "../lib/strings.const";
import { StringType } from "../types/ReferenceType";
import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";

function useStringReference(): StringType {
  const { language } = useSelector((state: RootState) => state.app);

  return useMemo(
    () =>
      STRING_KEYS.reduce(
        (prev, cur) => ({
          ...prev,
          [cur]: STRINGS[cur][language],
        }),
        {} as StringType,
      ),
    [language],
  );
}

export default useStringReference;
