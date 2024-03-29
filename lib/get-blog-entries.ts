import { client } from "@/lib/create-client";
import { EntryFieldTypes } from "contentful";

export interface BlogPostInterface {
    contentTypeId: "blogPost";
    fields: {
        title: EntryFieldTypes.Text
        subtitle: EntryFieldTypes.Text
        slug: EntryFieldTypes.Text
        publishDate: EntryFieldTypes.Text
        readTime: EntryFieldTypes.Number
        postContent: EntryFieldTypes.RichText
    }
}

export const getBlogEntries = async () => {
    const entries = await client.getEntries<BlogPostInterface>({ content_type: "blogPost" });
    return entries;
}

export const getBlogEntry = async (slug: string) => {
    const entryQuery = await client.getEntries<BlogPostInterface>({ 
        content_type: "blogPost",
        "fields.slug[match]": slug
    })

    return entryQuery.items[0];
}