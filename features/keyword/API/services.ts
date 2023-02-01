import { CustomContent } from "types/CustomContent";
import { Location } from "types/Location";
import { FAQ } from "types/FAQ";
import { Review } from "types/Review";
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
    const { data } = await APIWithoutAuth.get(`/locations/suburbs/${location}`);
    return data;
  } catch (error) {
    return location;
  }
};

export const getRegions = async (): Promise<Location | string[]> => {
  try {
    const { data } = await APIWithoutAuth.get(`/locations/regions`);
    return data;
  } catch (error) {
    return [];
  }
};

export const getRandomFAQs = async (): Promise<FAQ[]> => {
  try {
    const { data } = await APIWithoutAuth.get("/faqs");
    return data;
  } catch (error) {
    return [];
  }
};

export const getRandomReviews = async (): Promise<Review[]> => {
  try {
    const { data } = await APIWithoutAuth.get("/reviews");
    return data;
  } catch (error) {
    return [];
  }
};
