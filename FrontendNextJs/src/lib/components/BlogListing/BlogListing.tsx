'use client';

import { useState } from 'react';
import type { components } from '@/lib/types/umbraco';
import BlogArticleCard from '@/lib/components/BlogListing/BlogArticleCard';
import Button from '@/lib/components/Button/Button';

interface BlogListingProps {
  pageSize?: number | null;
  title?: string | null;
  subTitle?: string | null;
  initialBlogPosts?: components['schemas']['BlogArticleContentResponseModel'][];
  initialPageSize?: number;
}

export default function BlogListing({
  pageSize,
  title,
  subTitle,
  initialBlogPosts,
  initialPageSize,
}: BlogListingProps) {
  const [posts, setPosts] = useState(initialBlogPosts ?? []);
  const [skip, setSkip] = useState((initialBlogPosts ?? []).length || 6);
  const [loading, setLoading] = useState(false);
  const [allFetched, setAllFetched] = useState(false);

  const hasMore = !allFetched && posts.length >= (pageSize || 6);

  async function loadMore() {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:blogArticle&sort=createDate:desc&take=${pageSize || 6}&skip=${skip}`
      );

      if (res.ok) {
        const data = await res.json();
        const newPosts = data.items || [];

        setPosts((prev) => [...prev, ...newPosts]);
        setSkip((prev) => prev + (pageSize || 6));

        if (newPosts.length < (pageSize || 6)) {
          setAllFetched(true);
        }
      } else {
        console.error('Failed to load more posts');
      }
    } catch (e) {
      console.error('Error fetching more posts:', e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto py-8 md:py-12">
      {(title || subTitle) && (
        <header className="mb-8 lg:w-1/2">
          {title && (
            <h2 className="font-display text-3xl font-semibold tracking-widest text-zinc-500 uppercase md:text-4xl dark:text-zinc-400">
              {title}
            </h2>
          )}
          {subTitle && (
            <p className="mt-1 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
              {subTitle}
            </p>
          )}
        </header>
      )}

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-4">
        {posts.map((post) => (
          <BlogArticleCard key={post.id} post={post} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-16 flex justify-center">
          <Button
            onClick={loadMore}
            loading={loading}
            variant="primary"
            size="md"
            label="Load older articles"
          />
        </div>
      )}

      {posts.length === 0 && !loading && (
        <div className="py-24 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">No articles found.</p>
        </div>
      )}
    </div>
  );
}
