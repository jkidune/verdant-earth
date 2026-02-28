"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

// Define the shape of our post data
interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  cover_image: string | null;
}

const CATEGORIES = ['All', 'Conservation', 'Climate Change', 'Community'];

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // 1. Fetch posts from Supabase
  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error && data) {
        setPosts(data);
      }
    }
    fetchPosts();
  }, []);

  // 2. Scroll Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the header comes into view, trigger the animation
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { threshold: 0.5 } // Triggers when 50% of the header is visible
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // 3. Filter the posts based on the clicked category
  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <section className="bg-white w-full flex flex-col items-center py-16 sm:py-24 px-6 sm:px-8">
      <div className="w-full max-w-7xl flex flex-col gap-16">
        
        {/* Animated Header Section */}
        <div 
          ref={headerRef}
          className="w-full max-w-4xl mx-auto text-center flex flex-col gap-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            {/* The grey text that animates to dark slate */}
            <span 
              className={`transition-colors duration-1000 ease-in-out ${
                isHeaderVisible ? "text-slate-900" : "text-slate-400"
              }`}
            >
              Stories from the field. 
            </span>
            <br />
            <span className="text-slate-900">
              Insights, updates, and impact.
            </span>
          </h2>
        </div>

        {/* Main Content Layout (Sidebar + Grid) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Aside: Categories */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
              Categories
            </h3>
            <ul className="flex flex-row lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0">
              {CATEGORIES.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`text-lg transition-all duration-300 whitespace-nowrap ${
                      activeCategory === category
                        ? "text-green-800 font-bold border-b-2 border-green-800 pb-1"
                        : "text-slate-500 hover:text-slate-900 font-normal"
                    }`}
                  >
                    {category === 'All' ? 'Latest' : category}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right Grid: Articles */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <article key={post.id} className="flex flex-col gap-4 group cursor-pointer">
                  {/* Image */}
                  <Link href={`/blog/${post.slug}`} className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Image
                      src={post.cover_image || '/forest-bg.jpg'}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  
                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-green-700">
                      {post.category}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-bold text-slate-900 leading-snug group-hover:text-green-800 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-sm font-bold text-green-800 mt-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read Article <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <p className="text-slate-500 col-span-2 py-10">
                No posts found in this category yet.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}