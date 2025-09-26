import { groq } from "next-sanity";
import client from "./sanity.client";
import { FaqType } from "@/types";

const revalidateInterval = 10; // ms

export async function getFaqList(): Promise<FaqType[]> {
  const result = await client.fetch(
    groq`*[_type == "faq"][0]{
      _id,
      faqList[]{_id, question, answer, city}
    }`,
    {},
    // { next: { revalidate: revalidateInterval } }
  );

  return result?.faqList || [];
}
