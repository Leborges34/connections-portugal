import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const AdminDashboardLayout: React.FC = () => {
  const location = useLocation();
  const { signOut } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Usuários', href: '/admin/users' },
    { name: 'Parceiros', href: '/admin/partners' },
    { name: 'Aprovações', href: '/admin/approvals' },
    { name: 'Agendamentos', href: '/admin/bookings' },
    { name: 'Pagamentos', href: '/admin/payments' },
    { name: 'Estatísticas', href: '/admin/statistics' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="flex">
        <div className="w-64 bg-gray-900 min-h-screen">
          <div className="p-6">
            <h1 className="text-xl font-bold text-white mb-8">Admin Panel</h1>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-green-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <button
                onClick={() => signOut()}
                className="w-full px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
