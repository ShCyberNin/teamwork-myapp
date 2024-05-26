import { Navbar } from '@/app/(dashboard)/_components/navbar'
import Sidebar from '@/app/(dashboard)/_components/sidebar'

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
  return (
    <main className="flex items-start justify-between">
        <div className='min-w-[250px] border-r min-h-screen'>
          <Sidebar/>
        </div>
        <div className='grid w-full h-full' >
        {children}
        </div>
        <Navbar/>
        
    </main>
  )

}

export default DashboardLayout;