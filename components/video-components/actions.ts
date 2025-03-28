"use server";

import { DUMMY_DATA } from "@/lib/DUMMY_DATA";

export const getDummyData = async () => {
  const data = await DUMMY_DATA;

  return data;
};
