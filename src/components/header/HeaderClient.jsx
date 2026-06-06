import React, { useMemo, useState } from "react";
import { Facebook, Instagram, Menu, Search, X, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";
import { listPosts, travelCategories } from "../../clientPages/mockTravelData";

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [query, setQuery] = useState("");

  const menuItems = [
    { label: "Home", path: "/trang-chu" },
    { label: "About", path: "/gioi-thieu" },
    { label: "Inspiration", path: "/dich-vu" },
    { label: "Destination", path: "/tin-tuc" },
    { label: "Trip Ideas", path: "/tuyen-dung" },
    { label: "Contact", path: "/lien-he" },
  ];

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return listPosts
      .filter((post) => post.title.toLowerCase().includes(query.trim().toLowerCase()))
      .slice(0, 4);
  }, [query]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="border-b border-[#ececec]">
        <div className="mx-auto grid max-w-[1170px] grid-cols-[44px_1fr_44px] items-center gap-3 px-5 py-5 md:grid-cols-[220px_1fr_220px] md:px-0 md:py-7">
          <div className="hidden items-center gap-3 text-neutral-900 md:flex">
            <a href="#" aria-label="Facebook" className="transition hover:text-[#6eb48c]">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="transition hover:text-[#6eb48c]">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="transition hover:text-[#6eb48c]">
              <Youtube className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center text-neutral-900 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <NavLink to="/trang-chu" className="min-w-0 text-center">
            <span className="block font-serif text-[42px] font-semibold leading-none tracking-wide text-neutral-950 md:text-[64px]">
              Soledad
            </span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.34em] text-neutral-500 md:text-[11px]">
              Travel Magazine
            </span>
          </NavLink>

          <div className="hidden justify-self-end md:block md:w-[220px]">
            <form
              className="relative"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                className="h-9 w-full border border-[#ececec] pl-4 pr-10 text-[13px] outline-none transition placeholder:text-neutral-400 focus:border-[#6eb48c]"
              />
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              {suggestions.length > 0 && (
                <div className="absolute right-0 top-11 w-80 border border-[#ececec] bg-white p-3 shadow-xl">
                  {suggestions.map((post) => (
                    <a
                      href="#"
                      key={post.id}
                      className="block border-b border-neutral-100 px-2 py-3 font-serif text-[15px] font-semibold leading-snug text-neutral-900 last:border-b-0 hover:text-[#6eb48c]"
                    >
                      {post.title}
                    </a>
                  ))}
                </div>
              )}
            </form>
          </div>

          <div className="flex justify-end md:hidden">
            <Search className="h-5 w-5 text-neutral-900" />
          </div>
        </div>
      </div>

      <nav className="hidden border-b border-[#ececec] md:block">
        <div className="mx-auto flex max-w-[1170px] items-center justify-center">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `px-[18px] py-[18px] text-[12px] font-bold uppercase tracking-[0.12em] transition ${
                  isActive ? "text-[#6eb48c]" : "text-neutral-800 hover:text-[#6eb48c]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/45 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="ml-auto h-full w-[300px] bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-neutral-200 pb-5">
              <div>
                <p className="font-serif text-[34px] font-semibold leading-none text-neutral-950">Soledad</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                  Travel Magazine
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center border border-neutral-200"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-6 space-y-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-2 py-3 text-sm font-bold uppercase tracking-[0.16em] ${
                      isActive ? "text-[#6eb48c]" : "text-neutral-800"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-7 border-t border-neutral-200 pt-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                Categories
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {travelCategories.map((category) => (
                  <a key={category} href="#" className="border border-neutral-200 px-3 py-2 text-xs">
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
