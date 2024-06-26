import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll, //Since we are not passing parameters to the API, we can use the getAll method directly.
    staleTime: ms("24h"), // 24 hours
    initialData: genres,
  });

export default useGenres;
