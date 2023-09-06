export interface NotesItem {
  id: string;
  title: string;
  text: string;
  color: string;
  date: string;
}

export interface RouteParams {
  id: string;
  [key: string]: string;
}
