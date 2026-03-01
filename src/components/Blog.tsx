"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image_url: string | null;
  published_date: string;
}

const CATEGORIES = ['All', 'Community', 'Conservation', 'Climate Change', 'Education', 'Advocacy'];

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('published_date', { ascending: false });
      
      if (!error && data) {
        setPosts(data);
      } else if (error) {
        console.error("Error fetching blogs for homepage:", error.message);
      }
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsHeaderVisible(true);
      },
      { threshold: 0.5 } 
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredPosts = (
    activeCategory === 'All' 
      ? posts 
      : posts.filter(post => post.category === activeCategory)
  ).slice(0, 4);

  return (
    <section className="bg-surface w-full flex flex-col items-center py-16 sm:py-24 px-6 sm:px-8">
      <div className="w-full max-w-[1280px] flex flex-col gap-16">
        
        {/* Animated heading */}
        <div 
          ref={headerRef}
          className="w-full max-w-3xl mx-auto text-center flex flex-col gap-3"
        >
          <p className="eyebrow justify-center">From the Field</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
            <span 
              className={`transition-colors duration-1000 ease-in-out ${
                isHeaderVisible ? "text-teal" : "text-border-dark"
              }`}
            >
              Stories from the field.{' '}
            </span>
            <br />
            <span className="text-teal">
              Insights, updates, and impact.
            </span>
          </h2>
        </div>

        {/* Sidebar + Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Categories sidebar */}
          <aside className="w-full lg:w-56 flex-shrink-0">
            <h3 className="text-[0.65rem] tracking-[0.2em] uppercase font-medium text-muted mb-5">
              Categories
            </h3>
            <ul className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0">
              {CATEGORIES.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`font-display text-lg transition-all duration-200 whitespace-nowrap ${
                      activeCategory === category
                        ? "text-teal font-semibold border-b border-teal pb-0.5"
                        : "text-muted hover:text-ink font-normal"
                    }`}
                  >
                    {category === 'All' ? 'Latest' : category}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Articles grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <article key={post.id} className="flex flex-col gap-4 group cursor-pointer">
                  {/* Image */}
                  <Link href={`/blog/${post.slug}`} className="relative w-full h-56 rounded-lg overflow-hidden bg-surface-alt">
                    <Image
                      src={post.image_url || '/placeholder.jpg'}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  
                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    {/* Category tag */}
                    <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-sage">
                      {post.category}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="font-display text-2xl font-semibold text-teal leading-snug group-hover:text-teal-mid transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2 font-light">
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-[0.7rem] tracking-[0.15em] uppercase font-medium text-green mt-2 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                    >
                      Read Article <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <p className="text-muted text-sm col-span-2 py-10">
                No posts found in this category yet.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}