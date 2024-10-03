"use client";

import { usePathname } from "next/navigation";
import AdminDashboard from "@/components/AdminDashboard/AdminDashboard";
import RestaurantDashboard from "@/components/RestaurantDashboard/RestaurantDashboard";
import DriverDashboard from "@/components/DriverDashboard/DriverDashboard";

const DashboardPage: React.FC = () => {
  const pathname = usePathname();
  const role = pathname ? pathname.split("/")[2] : "invalid";

  // Render different dashboards based on the role
  const renderDashboard = () => {
    switch (role) {
      case "admin":
        return <AdminDashboard />;
      case "restaurant":
        return <RestaurantDashboard />;
      case "driver":
        return <DriverDashboard />;
      default:
        return <p>Invalid role</p>;
    }
  };

  return (
    <div>
      <h1>{role} Dashboard</h1>
      {renderDashboard()}
    </div>
  );
};

export default DashboardPage;
