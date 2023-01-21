import { CustomContent } from "types/CustomContent";
import { APIWithoutAuth } from "utils/api";

export const getCustomContents = async (
  keyword: string
): Promise<CustomContent | string> => {
  try {
    const { data } = await APIWithoutAuth.get(`/contents/${keyword}`);
    return data;
  } catch (error: any) {
    return keyword;
  }
};
