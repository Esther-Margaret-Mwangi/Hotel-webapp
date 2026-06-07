import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import "../styles/Layout.css";

export default function Layout({
  children,
  pageTitle = "Welcome!",
  headerRight,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <div className="app-shell">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <header className="topbar">
          <button
            className="topbar-menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          <div className="topbar-copy">
            <h1>{pageTitle}</h1>
          </div>

          <div className="topbar-logo">
            {headerRight ?? (
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=120&q=80"
                alt="Fairmont logo"
              />
            )}
          </div>
        </header>

        <main className="layout-main">{children}</main>
      </div>
    </div>
  );
}
