import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "tal4o5i4",
  dataset: "production",
  apiVersion: "2023-08-01",
  useCdn: false,
};

const client = createClient(config);

export default client;