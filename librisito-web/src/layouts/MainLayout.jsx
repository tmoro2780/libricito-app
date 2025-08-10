// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import { useAuth } from "./../pages/Auth/AuthContext";
import NavbarGuest from "./../components/NavbarGuest";
import NavbarUser from "./../components/NavbarUser";
import Footer from "./../components/Footer";

export default function MainLayout() {
    const { user } = useAuth();
    return (
        <div className="min-h-screen flex flex-col bg-pastelPink">
        {user ? <NavbarUser /> : <NavbarGuest />}
        <main className="flex-1 px-6 py-8">
            <Outlet />
        </main>
        <Footer />
        </div>
    );
}
