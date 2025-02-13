import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-5">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <ul className="space-y-3">
            
            <Link href={'/'}>
            <li className="p-2 hover:bg-gray-700 cursor-pointer rounded">Home</li>
            </Link>
            <Link href={'/profile'}>
            <li className="p-2 hover:bg-gray-700 cursor-pointer rounded">Profile</li>
            </Link>
            <Link href={'/career'}>
            <li className="p-2 hover:bg-gray-700 cursor-pointer rounded">Career</li>
            </Link>
           
            <li className="p-2 hover:bg-gray-700 cursor-pointer rounded">Settings</li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer rounded">Logout</li>
          </ul>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>
    );
  }
  