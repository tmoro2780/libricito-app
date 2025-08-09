export default function Footer() {
    return (
    <footer className="border-t border-gray-100 mt-12">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Librisito — Hecho con ❤️
        </div>
    </footer>
    );
}
