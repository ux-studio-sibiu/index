import createClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

import type { ClientConfig } from "@sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const config: ClientConfig = {
  // projectId: "x30qpt6x",
  // projectId: "4sefwx29", //ux.studio.sibiu
  dataset: "production",
  apiVersion: "2025-07-14",
  useCdn: false,
};

const client = createClient(config);

export default client;


const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}