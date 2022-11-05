import useAuth from "../../hooks/useAuth"



const UserInfo = () => {
    //  i can get user at redux bur SWR is better 
    const { user } = useAuth()

    return <>
        <span>User name:</span>
        <h2>{user.name}</h2>
    </>
}

export default UserInfo