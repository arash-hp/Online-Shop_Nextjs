import { useRouter } from "next/router"
import { ReactNode } from "react"
import useAuth from "../hooks/useAuth"

interface Props {
    children: ReactNode
}

const GuestPanelLayout = ({ children }: Props) => {
    const router = useRouter()
    const { user, error, loading } = useAuth()


    if (user) {
        router.push('/panel')
        return <></>
    }

    console.log(user)

    return (
        <div className="w-full">
            {children}
        </div>
    )
}

export default GuestPanelLayout;