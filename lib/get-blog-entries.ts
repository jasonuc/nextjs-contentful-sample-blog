import { client } from "@/lib/create-client";
import { EntryFieldTypes } from "contentful";

interface BlogPostSkeleton {
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
    const entries = await client.getEntries<BlogPostSkeleton>({ content_type: "blogPost" });
    return entries;
}
