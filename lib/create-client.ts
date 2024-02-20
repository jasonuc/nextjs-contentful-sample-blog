import { ContentfulClientApi, createClient } from "contentful";

export const client: ContentfulClientApi<undefined> = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN!,
});