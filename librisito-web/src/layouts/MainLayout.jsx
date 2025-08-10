// src/layouts/MainLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./../pages/Auth/AuthContext";
import NavbarGuest from "./../components/NavbarGuest";
import NavbarUser from "./../components/NavbarUser";
import Footer from "./../components/Footer";

export default function MainLayout() {
    const { user } = useAuth();
    const { pathname } = useLocation();

    // rutas donde NO queremos navbar/footer
    const HIDE_ON = ["/inicio-sesion", "/registro"];

    // si más adelante tenés subrutas tipo /inicio-sesion/recuperar, usa startsWith
    const shouldHideChrome = HIDE_ON.some((p) => pathname.startsWith(p));

    return (
        <div className="min-h-screen flex flex-col bg-pastelPink">
        {!shouldHideChrome && (user ? <NavbarUser /> : <NavbarGuest />)}

        <main className="flex-1">
            <Outlet />
        </main>

        {!shouldHideChrome && <Footer />}
        </div>
    );
}
