import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/upload", label: "Upload" },
  { href: "/preprocessing", label: "Preprocessing" },
  { href: "/visualizations", label: "Visualizations" },
  { href: "/feature_selection", label: "Feature Selection" },
  { href: "/choosing_models", label: "Choosing Models" },
  { href: "/results", label: "Results" },
];

export default function NavBar() {
  return (
    <nav
      className="w-full flex gap-4 px-6 py-4 mb-8"
      style={{
        background: 'var(--card-bg)',
        borderBottom: '1px solid var(--card-border)',
        boxShadow: 'var(--shadow)',
        transition: 'var(--transition)',
      }}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="font-medium px-3 py-1 rounded-lg transition-colors"
          style={{
            color: 'var(--foreground)',
            textDecoration: 'none',
          }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
