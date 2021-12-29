import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "n8qy86ed",
  dataset: "production",
  apiVersion: "2021-12-28",
  useCdn: true,
  token:
    "sk54LJpZMgJ3RN2oLxGny1U49WF8L81FUISKk7HyNlXIBAZpN3WptBZOaHYDJJlhrHmWTsnBBf1iEpqkPMvLPD9In25LmVfz2gUCx9ouNPR6relM6L7OgPGx8CP9wJPreEOfW5b06jFmyLdUJiPTP2U30e5NUPsAH3DiRnUUnTrFRdtugrtk",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
