import AdminPanelLayout from '../../app/components/adminPanelLayout';
import { NextPageWithLayout } from '../_app';

const Admin: NextPageWithLayout = () => {

    return (
        <div>
            <h1>Admin panel</h1>
        </div>
    )
}

Admin.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default Admin;