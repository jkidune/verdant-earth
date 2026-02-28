import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export const revalidate = 0;

export default async function BlogPage() {
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*')
    .order('published_date', { ascending: false });

  if (error || !blogs) {
    return <div className="min-h-screen bg-[#F7F7F7] pt-32 text-center text-[#19474E]">Error loading articles.</div>;
  }

  return (
    <main className="min-h-screen bg-[#F7F7F7] pt-32 pb-32">
      {/* Hero Container */}
      <section className="max-w-[1380px] mx-auto px-6 mb-24 pb-12">
        <h1 className="text-[60px] md:text-[80px] lg:text-[100px] font-medium leading-none tracking-[-4px] text-[#19474E] uppercase">
          Insights & <br /> Articles
        </h1>
      </section>

      {/* 3-Column Grid */}
      <section className="max-w-[1380px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[80px]">
          {blogs.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col gap-[30px]">
              
              {/* Image Block */}
              <div className="w-full h-[384px] relative bg-[#DAF3E6] overflow-hidden">
                <Image 
                  src={post.image_url || '/placeholder.jpg'} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              {/* Text Block */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[16px] font-normal tracking-[-0.5px] text-[#166534]">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-[#166534]"></span>
                  <span className="text-[#5D6A6A]">{post.published_date}</span>
                </div>
                
                <h3 className="text-[24px] font-medium leading-[1.1] tracking-[-1px] text-[#19474E] group-hover:text-[#166534] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-[16px] font-normal text-[#5D6A6A] leading-[1.6] tracking-[-0.5px] line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
              
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}