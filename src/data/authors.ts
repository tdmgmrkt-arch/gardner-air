export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
  url: string;
  image?: string;
  sameAs?: string[];
};

export const AUTHORS: Record<string, Author> = {
  "dirk-gardner": {
    id: "https://gardnerair.com/#dirk-gardner",
    name: "Dirk Gardner",
    role: "Owner & President, Gardner Air",
    bio: "Dirk started Gardner Air in 2006 with a vision: build an HVAC company that does things the right way. With over 30 years in the industry and a background as a technician, Dirk knows this work inside and out. He's built a team that shares his belief in integrity, communication, and showing up prepared. That foundation is what Gardner Air is built on.",
    url: "https://gardnerair.com/about/leadership-team/",
    sameAs: ["https://gardnerair.com/about/leadership-team/"],
  },
};
