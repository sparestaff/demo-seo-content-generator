import { CustomContent } from "types/CustomContent";
import { Location } from "types/Location";
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

export const getLocations = async (
  location: string
): Promise<Location | string> => {
  try {
    const { data } = await APIWithoutAuth.get(`/locations/${location}`);
    return data;
  } catch (error) {
    return location;
  }
};

export const getLocationsByKeyword = async (
  keyword: string
): Promise<Location | null> => {
  try {
    const { data: locations } = await APIWithoutAuth.get(
      `/contents/locations/${keyword}`
    );
    return locations;
  } catch (error) {
    return null;
  }
};
