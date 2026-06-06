import React, { useState } from "react";
import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import { footerGallery, travelCategories } from "../clientPages/mockTravelData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#111] text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1170px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 md:px-0">
          {travelCategories.map((category) => (
            <a
              key={category}
              href="#"
              className="text-[12px] font-bold uppercase tracking-[0.12em] text-neutral-300 transition hover:text-[#6eb48c]"
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1170px] px-5 py-14 md:px-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr_1.2fr]">
          <div>
            <h2 className="font-serif text-[54px] font-semibold leading-none">Soledad</h2>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.34em] text-[#6eb48c]">
              Travel Magazine
            </p>
            <p className="mt-6 max-w-sm text-[14px] leading-7 text-neutral-300">
              Travel stories, trip ideas, destination guides and planning notes curated in the
              clean editorial style of the Soledad magazine demo.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center border border-white/20 transition hover:border-[#6eb48c] hover:text-[#6eb48c]">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center border border-white/20 transition hover:border-[#6eb48c] hover:text-[#6eb48c]">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center border border-white/20 transition hover:border-[#6eb48c] hover:text-[#6eb48c]">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-[24px] font-semibold">Categories</h3>
            <div className="mt-6 grid grid-cols-1 gap-3">
              {travelCategories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="border-b border-white/10 pb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-neutral-300 transition last:border-b-0 hover:text-[#6eb48c]"
                >
                  {category}
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-sm text-neutral-300">
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#6eb48c]" />
                hello@soledad-demo.test
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-[24px] font-semibold">From The Journal</h3>
            <div className="mt-6 grid grid-cols-3 gap-[6px]">
              {footerGallery.map((post) => (
                <a key={post.id} href="#" className="block overflow-hidden bg-white/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-square w-full object-cover transition duration-500 hover:scale-110"
                  />
                </a>
              ))}
            </div>

            <form className="mt-8" onSubmit={handleSubmit}>
              <label className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                Newsletter
              </label>
              <div className="mt-3 flex">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubmitted(false);
                  }}
                  placeholder="Email address"
                  className="h-11 min-w-0 flex-1 bg-white px-4 text-sm text-neutral-950 outline-none"
                />
                <button className="h-11 bg-[#6eb48c] px-5 text-[11px] font-bold uppercase tracking-[0.14em] transition hover:bg-white hover:text-neutral-950">
                  Join
                </button>
              </div>
              {submitted && <p className="mt-3 text-sm text-[#6eb48c]">Subscribed.</p>}
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-[12px] text-neutral-400">
        Copyright 2021 - All Right Reserved
      </div>
    </footer>
  );
}
