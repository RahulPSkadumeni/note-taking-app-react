export interface NotesItem {
  id: string;
  title: string;
  category: string;
  text: string;

  date: string;
}

export interface RouteParams {
  id: string;
  [key: string]: string;
}
