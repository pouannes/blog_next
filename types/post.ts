interface IReadTimeResults {
  text: string;
  time: number;
  words: number;
  minutes: number;
}

export type PostType = {
  date?: string;
  description?: string;
  image?: string;
  slug: string;
  title: string;
  draft?: boolean;
  hasMath?: boolean;
  readingTime: IReadTimeResults;
};
