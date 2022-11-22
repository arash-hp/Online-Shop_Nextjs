import AdminPanelLayout from "../../app/components/adminPanelLayout";
import { NextPageWithLayout } from "../_app";

const AdminPanel : NextPageWithLayout = () => {
    return (
        <div>
            <h1>Admin Dashborad</h1>
        </div>
    )
}

AdminPanel.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default AdminPanel;