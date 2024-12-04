export type HomePageData = Record<
  string,
  {
    description: string;
    items: {
      title: string;
      description: string;
      link: string;
      external: boolean;
    }[];
  }
>;
