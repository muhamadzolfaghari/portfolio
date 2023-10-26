import { StringType } from "../types/ReferenceType.ts";

export default interface IDatum {
  img: string;
  title: keyof StringType;
  endDate: string;
  startDate: string;
  description: keyof StringType;
}