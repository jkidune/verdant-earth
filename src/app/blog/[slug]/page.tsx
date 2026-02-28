import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';

export const revalidate = 0;

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Fetch the main article
  const { data: post, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !post) notFound();

  // Fetch related articles
  const { data: relatedPosts } = await supabase
    .from('blogs')
    .select('*')
    .neq('slug', slug)
    .limit(3);

  // Split content by double newlines for paragraphs
  const paragraphs = post.content.split('\n\n');

  return (
    <main className="min-h-screen bg-[#F7F7F7] pt-24 pb-32">
      
      {/* Massive Hero Image */}
      <div className="max-w-[1380px] mx-auto px-6 mb-16">
        <div className="w-full h-[500px] md:h-[758px] relative overflow-hidden bg-slate-200">
          <Image src={post.image_url || '/placeholder.jpg'} alt={post.title} fill className="object-cover" />
        </div>
      </div>

      {/* Top Container: Title & Meta */}
      <div className="max-w-[1380px] mx-auto px-6 mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <h1 className="text-[50px] md:text-[80px] font-medium leading-[1] tracking-[-4px] text-[#19474E] max-w-[910px]">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 text-[16px] font-normal tracking-[-0.5px] text-[#166534]">
          <span>{post.category}</span>
          <span className="w-1 h-1 rounded-full bg-[#166534]"></span>
          <span className="text-[#5D6A6A]">{post.published_date}</span>
        </div>
      </div>

      {/* Editorial Content Column */}
      <article className="max-w-[910px] mx-auto px-6 flex flex-col gap-8 mb-32">
        <h2 className="text-[32px] md:text-[40px] font-medium leading-[1] tracking-[-2px] text-[#19474E] mb-6">
          {post.excerpt}
        </h2>
        
        <div className="flex flex-col gap-8 text-[16px] font-normal text-[#5D6A6A] leading-[1.6] tracking-[-0.5px]">
          {paragraphs.map((para: string, idx: number) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </article>

      {/* Related Articles Section */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="max-w-[1380px] mx-auto px-6 pt-24 border-t border-slate-200">
          <h2 className="text-[40px] font-medium leading-none tracking-[-2px] text-[#19474E] mb-16">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-16">
            {relatedPosts.map((related) => (
              <Link href={`/blog/${related.slug}`} key={related.id} className="group flex flex-col gap-[30px]">
                <div className="w-full h-[384px] relative bg-[#DAF3E6] overflow-hidden">
                  <Image 
                    src={related.image_url || '/placeholder.jpg'} 
                    alt={related.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-[16px] font-normal tracking-[-0.5px] text-[#166534]">
                    <span>{related.category}</span>
                    <span className="w-1 h-1 rounded-full bg-[#166534]"></span>
                    <span className="text-[#5D6A6A]">{related.published_date}</span>
                  </div>
                  <h3 className="text-[24px] font-medium leading-[1.1] tracking-[-1px] text-[#19474E] group-hover:text-[#166534] transition-colors">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}