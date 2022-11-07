import useSWR from "swr";
import Cookies from "universal-cookie";
import { callApi } from "../helper/callApi";

const useAuth = () => {
    const cookie = new Cookies()

    const { data, error } = useSWR('user_me', () => {
        return callApi().get('/user')
    })

    console.log(data)
    return { user: data?.data?.user, error, loading: !data && !error }
}

export default useAuth