// src/layouts/MainLayout.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
    <div className="min-h-screen flex flex-col bg-white w-full">
        <Navbar />
        <main className="flex-1 w-full">
            <Outlet />
        </main>
        <Footer />
    </div>
    );
}
