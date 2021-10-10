import useSWR from "swr";
import User from "../types/user";
import axios, {AxiosError} from "axios";

const fetcher = (url: string) => axios.get(url).then(res => res.data)


export const useUser = (id: string) => {
  const { data, error} = useSWR<User>(`/api/profiles/${id}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}