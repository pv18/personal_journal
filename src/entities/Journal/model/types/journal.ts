export interface IMemoir {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string;
}

export type JournalFormType = Omit<IMemoir, "id">;
