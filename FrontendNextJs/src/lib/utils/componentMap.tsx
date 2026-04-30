import type { ComponentType } from 'react';

// Component imports — populated as each component is converted
import HeadingBlock from '@/lib/components/HeadingBlock/HeadingBlock';
import TextBlock from '@/lib/components/TextBlock/TextBlock';
import ImageGallery from '@/lib/components/ImageGallery/ImageGallery';
import VideoEmbed from '@/lib/components/VideoEmbed/VideoEmbed';
import CodeEmbed from '@/lib/components/CodeEmbed/CodeEmbed';
import HeroBlock from '@/lib/components/HeroBlock/HeroBlock';
import BlogListing from '@/lib/components/BlogListing/BlogListing';
import CallToActionBlock from '@/lib/components/CallToActionBlock/CallToActionBlock';
import ServicesBlock from '@/lib/components/ServicesBlock/ServicesBlock';
import LogoCloud from '@/lib/components/LogoCloud/LogoCloud';
import CallToActionPageHeader from '@/lib/components/PageHeaders/CallToActionPageHeader';
import ImageOffsetPageHeader from '@/lib/components/PageHeaders/ImageOffsetPageHeader';
import ProcessBlock from '@/lib/components/ProcessBlock/ProcessBlock';
import AccordionBlock from '@/lib/components/AccordionBlock/AccordionBlock';
import TestimonialsBlock from '@/lib/components/TestimonialsBlock/TestimonialsBlock';
import StatsBlock from '@/lib/components/StatsBlock/StatsBlock';
import TwoColumnBlock from '@/lib/components/TwoColumnBlock/TwoColumnBlock';
import FeaturedProjectBlock from '@/lib/components/FeaturedProjectBlock/FeaturedProjectBlock';
import NewsletterSignup from '@/lib/components/NewsletterSignup/NewsletterSignup';

/**
 * Shared component map linking Umbraco ContentType aliases to React components.
 * Used by both BlockList (for blocklist properties) and SingleBlock (for single-block properties).
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentMap: Record<string, ComponentType<any>> = {
  heading: HeadingBlock,
  textBlock: TextBlock,
  imageGalleryBlock: ImageGallery,
  videoEmbedBlock: VideoEmbed,
  codeEmbedBlock: CodeEmbed,
  heroBlock: HeroBlock,
  blogListingBlock: BlogListing,
  callToActionBlock: CallToActionBlock,
  servicesBlock: ServicesBlock,
  logoCloudBlock: LogoCloud,
  callToActionPageHeader: CallToActionPageHeader,
  imageOffsetPageHeader: ImageOffsetPageHeader,
  processBlock: ProcessBlock,
  accordionBlock: AccordionBlock,
  testimonialsBlock: TestimonialsBlock,
  statsBlock: StatsBlock,
  twoColumnBlock: TwoColumnBlock,
  featuredProjectBlock: FeaturedProjectBlock,
  newsletterSignup: NewsletterSignup,
};
