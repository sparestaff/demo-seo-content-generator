import { CustomContent } from "types/CustomContent";
import { APIWithoutAuth } from "utils/api";

export const getCustomContentsWithLocation = async (
  keyword: string,
  location: string
): Promise<CustomContent | string> => {
  try {
    const { data } = await APIWithoutAuth.get(
      `/contents/${keyword}/${location}`
    );
    return data;
  } catch (error: any) {
    return keyword;
  }
};
