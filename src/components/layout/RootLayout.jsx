import { Outlet } from 'react-router-dom';
import RouterTest from '../RouterTest'; // Assuming RouterTest is your navigation

function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <RouterTest />
        <main className="mt-8">
          {/* Outlet is a placeholder. React Router will render the
              matching child route here (e.g., <Home /> or <About />) */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;