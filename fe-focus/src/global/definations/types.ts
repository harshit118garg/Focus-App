export interface Idea {
  label: string;
  value: IdeaValue;
}

export interface IdeaValue {
  ideaTitle: string;
  ideaDescription: string;
  ideaCategory: {
    categoryTitle: string;
    categoryColor: string;
  };
}
