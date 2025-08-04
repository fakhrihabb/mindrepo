import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <main className="mt-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;