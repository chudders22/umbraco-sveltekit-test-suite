// The root path "/" is handled here. We delegate to the same logic as [...slug]/page.tsx
// by importing a shared renderer.
import SlugPage from '@/app/[...slug]/page';

export { generateMetadata } from '@/app/[...slug]/page';

export default function RootPage() {
  // Pass an empty slug so the catch-all treats it as "/"
  return SlugPage({ params: Promise.resolve({ slug: undefined }) });
}

