import { useMemo } from "react";
import { STRING_KEYS, STRINGS } from "../lib/strings.const";
import { LanguageType } from "../types/LanguageType";
import { StringType } from "../types/ReferenceType";

const useString = (language: LanguageType): StringType =>
  useMemo(
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

export default useString;
