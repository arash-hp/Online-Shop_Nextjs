import { useRouter } from "next/router"
import { removeLoginToken } from "../../helper/auth"
import useAuth from "../../hooks/useAuth"



const UserInfo = () => {
    //  i can get user at redux bur SWR is better 
    const { user } = useAuth()
    const router = useRouter()

    const handleLogout = async ()=>{
        await removeLoginToken();
        await router.push('/');
    }

    return <>
        <span>User name:</span>
        <h2>{user.name}</h2>

        <button onClick={handleLogout}>logout</button>
    </>
}

export default UserInfo