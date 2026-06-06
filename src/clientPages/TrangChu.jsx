import React from "react";
import {
  featuredPosts,
  listPosts,
  sidePosts,
  travelCategories,
} from "./mockTravelData";

const CategoryLabels = ({ post }) => (
  <div className="mb-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
    <span className="text-[11px] font-bold text-[#6eb48c]">
      {post.category}
    </span>
    {post.secondCategory && (
      <span className="text-[11px] font-bold text-[#6eb48c]">
        {post.secondCategory}
      </span>
    )}
  </div>
);

const StandardPost = ({ post, large = false }) => (
  <article className="group text-center">
    <a href="#" className="block overflow-hidden bg-neutral-100">
      <img
        src={post.image}
        alt={post.title}
        className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
          large ? "aspect-[1.5]" : "aspect-[1.5]"
        }`}
      />
    </a>
    <div className={large ? "px-4 pt-7" : "px-2 pt-5"}>
      <CategoryLabels post={post} />
      <h2
        className={`mx-auto font-serif font-semibold leading-tight text-neutral-950 ${
          large ? "max-w-[650px] text-3xl md:text-[34px]" : "text-[24px]"
        }`}
      >
        <a href="#" className="transition hover:text-[#6eb48c]">
          {post.title}
        </a>
      </h2>
      <p className="mt-3 text-[12px] text-neutral-500">
        written by{" "}
        <a href="#" className="font-semibold text-neutral-800 hover:text-[#6eb48c]">
          {post.author}
        </a>
      </p>
      {large && (
        <>
          <p className="mx-auto mt-6 max-w-[610px] text-[15px] leading-7 text-neutral-600">
            {post.excerpt}
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center border border-neutral-900 px-7 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-900 transition hover:border-[#6eb48c] hover:bg-[#6eb48c] hover:text-white"
          >
            Continue Reading
          </a>
        </>
      )}
    </div>
  </article>
);

const SideList = () => (
  <aside className="space-y-0">
    {sidePosts.map((title) => (
      <article key={title} className="border-b border-[#ececec] py-[15px] first:pt-0 last:border-b-0">
        <h4 className="font-serif text-[18px] font-semibold leading-snug text-neutral-950">
          <a href="#" className="transition hover:text-[#6eb48c]">
            {title}
          </a>
        </h4>
        <p className="mt-2 text-xs text-neutral-500">
          by <span className="font-semibold text-neutral-800">Penci Design</span>
        </p>
      </article>
    ))}
  </aside>
);

const SectionTitle = ({ children }) => (
  <div className="mb-8 flex items-center gap-5">
    <h3 className="font-serif text-[26px] font-semibold text-neutral-950">{children}</h3>
    <div className="h-px flex-1 bg-neutral-200">
      <div className="h-[2px] w-12 bg-[#6eb48c]" />
    </div>
  </div>
);

const SmallPost = ({ post }) => (
  <article className="grid grid-cols-[118px_1fr] gap-5 border-b border-[#ececec] pb-6 md:grid-cols-[210px_1fr]">
    <a href="#" className="block overflow-hidden bg-neutral-100">
      <img src={post.image} alt={post.title} className="aspect-[1.5] w-full object-cover transition duration-500 hover:scale-105" />
    </a>
    <div>
      <span className="text-[11px] font-bold text-[#6eb48c]">
        {post.category}
      </span>
      <h4 className="mt-2 font-serif text-[22px] font-semibold leading-snug text-neutral-950">
        <a href="#" className="transition hover:text-[#6eb48c]">
          {post.title}
        </a>
      </h4>
      <p className="mt-2 text-xs text-neutral-500">{post.date}</p>
    </div>
  </article>
);

export default function TrangChu() {
  const [leftOne, leftTwo, centerPost] = featuredPosts;

  return (
    <main className="bg-white text-neutral-900">
      <section className="mx-auto grid max-w-[1170px] grid-cols-1 gap-10 px-5 py-10 md:px-0 lg:grid-cols-[270px_1fr_270px] lg:gap-[30px]">
        <div className="space-y-10">
          <StandardPost post={leftOne} />
          <StandardPost post={leftTwo} />
        </div>

        <StandardPost post={centerPost} large />

        <SideList />
      </section>

      <section className="bg-[#f6f6f3] py-9">
        <div className="mx-auto max-w-[1170px] px-5 md:px-0">
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
            {listPosts.slice(0, 3).map((post) => (
              <article key={post.id} className="grid grid-cols-[120px_1fr] gap-4">
                <img src={post.image} alt={post.title} className="aspect-[1.25] w-full object-cover" />
                <div>
                  <span className="text-[11px] font-bold text-[#6eb48c]">
                    {post.category}
                  </span>
                  <h4 className="mt-1 font-serif text-[18px] font-semibold leading-snug">
                    <a href="#" className="hover:text-[#6eb48c]">
                      {post.title}
                    </a>
                  </h4>
                  <p className="mt-2 text-xs text-neutral-500">{post.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1170px] grid-cols-1 gap-10 px-5 py-14 md:px-0 lg:grid-cols-[2fr_1fr]">
        <div>
          <SectionTitle>Latest Stories</SectionTitle>
          <div className="space-y-6">
            {listPosts.map((post) => (
              <SmallPost key={post.id} post={post} />
            ))}
          </div>
        </div>

        <aside>
          <SectionTitle>Explore</SectionTitle>
          <div className="grid grid-cols-2 gap-3">
            {travelCategories.map((category) => (
              <a
                key={category}
                href="#"
                className="border border-[#ececec] px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-700 transition hover:border-[#6eb48c] hover:text-[#6eb48c]"
              >
                {category}
              </a>
            ))}
          </div>

          <div className="mt-10 bg-neutral-950 p-7 text-white">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6eb48c]">
              Newsletter
            </p>
            <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight">
              Weekly travel inspiration for curious readers.
            </h3>
            <form className="mt-6 flex flex-col gap-3" onSubmit={(event) => event.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="h-12 bg-white px-4 text-sm text-neutral-950 outline-none"
              />
              <button className="h-12 bg-[#6eb48c] text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-neutral-950">
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </section>
    </main>
  );
}
