import useSWR from "swr";
import User from "../types/user";
import axios, {AxiosError} from "axios";



const fetcher = (url: string) => axios.get(url).then(res => res.data)


export const useUsers = () => {
  const { data, error} = useSWR<User[]>(`/api/profiles`, fetcher)

  return {
    users: data,
    isLoading: !error && !data,
    isError: error
  }
}