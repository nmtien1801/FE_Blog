import React, { useMemo, useState } from "react";
import { Facebook, Instagram, Menu, Search, X, Youtube, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { listPosts, travelCategories } from "../../clientPages/mockTravelData";

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [query, setQuery] = useState("");

  const menuItems = [
    { label: "Home", path: "/trang-chu" },
    { label: "About", path: "/gioi-thieu" },
    { 
      label: "Inspiration", 
      path: "/trang-chu",
      subMenu: ["Hotel & Resort", "Food & Culture", "Travel Well", "Tip & Planning"] 
    },
    { label: "Contact", path: "/lien-he" },
  ];

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return listPosts
      .filter((post) => post.title.toLowerCase().includes(query.trim().toLowerCase()))
      .slice(0, 4);
  }, [query]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-[#ececec]">
        <div className="mx-auto grid max-w-[1170px] grid-cols-[44px_1fr_44px] items-center gap-3 px-5 py-5 md:grid-cols-[220px_1fr_220px] md:px-0 md:py-7">
          <div className="hidden items-center gap-3 text-neutral-900 md:flex">
            <a href="#" className="transition hover:text-[#6eb48c]"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="transition hover:text-[#6eb48c]"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="transition hover:text-[#6eb48c]"><Youtube className="h-4 w-4" /></a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden"><Menu /></button>

          <NavLink to="/trang-chu" className="text-center">
            <span className="block font-serif text-[42px] font-semibold leading-none text-neutral-950 md:text-[64px]">Soledad</span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.34em] text-neutral-500">Travel Magazine</span>
          </NavLink>

          <div className="hidden md:block justify-self-end w-[220px]">
            <input 
              className="h-9 w-full border border-[#ececec] pl-4 text-[13px] outline-none focus:border-[#6eb48c]" 
              placeholder="Search" 
              value={query} 
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="hidden border-b border-[#ececec] md:block">
        <div className="mx-auto flex max-w-[1170px] justify-center">
          {menuItems.map((item) => (
            <div key={item.label} className="group relative">
              <NavLink to={item.path} className="flex items-center gap-1 px-[18px] py-[18px] text-[12px] font-bold uppercase text-neutral-800 hover:text-[#6eb48c]">
                {item.label}
                {item.subMenu && <ChevronDown className="h-3 w-3" />}
              </NavLink>
              {item.subMenu && (
                <div className="absolute left-0 top-full hidden min-w-[200px] bg-white shadow-xl group-hover:block z-50 border border-neutral-100">
                  {item.subMenu.map((sub) => (
                    <a key={sub} href="#" className="block px-6 py-3 text-[12px] font-bold uppercase text-neutral-800 hover:text-[#6eb48c] border-b border-neutral-100">{sub}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="ml-auto h-full w-[300px] bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsMobileMenuOpen(false)}><X /></button>
            <nav className="mt-6 space-y-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <NavLink to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 font-bold uppercase">{item.label}</NavLink>
                  {item.subMenu && (
                    <div className="pl-4 space-y-1">
                      {item.subMenu.map((sub) => <a key={sub} href="#" className="block text-xs uppercase text-neutral-600">{sub}</a>)}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}