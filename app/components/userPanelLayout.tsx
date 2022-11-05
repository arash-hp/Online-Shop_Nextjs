import { useRouter } from "next/router"
import { ReactNode } from "react"
import useAuth from "../hooks/useAuth"

interface Props {
    children: ReactNode
}

const UserPanelLayout = ({ children }: Props) => {
    const router = useRouter()
    const { user, error, loading } = useAuth()

    if (loading) return <h1>Loading ...</h1>

    if (error) {
        router.push('/auth/login')
        return <></>
    }

    console.log(user)

    return (
        <div className="w-full">
            {children}
        </div>
    )
}

export default UserPanelLayout;