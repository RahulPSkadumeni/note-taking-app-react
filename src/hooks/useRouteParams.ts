import { useParams } from "react-router-dom";

export function useRouteParams<T extends Record<string, string>>() {
  return useParams<T>();
}
