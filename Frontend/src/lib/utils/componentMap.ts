import type { Component } from 'svelte';
import HeadingBlock from '../components/HeadingBlock.svelte';
import TextBlock from '../components/TextBlock.svelte';
import ImageGallery from '../components/ImageGallery.svelte';
import VideoEmbed from '../components/VideoEmbed.svelte';
import CodeEmbed from '../components/CodeEmbed.svelte';
import HeroBlock from '../components/HeroBlock.svelte';
import BlogListing from '../components/BlogListing/BlogListing.svelte';
import CallToActionBlock from '../components/CallToActionBlock.svelte';
import ServicesBlock from '../components/ServicesBlock/ServicesBlock.svelte';
import LogoCloud from '../components/LogoCloud.svelte';
import CallToActionPageHeader from '../components/PageHeaders/CallToActionPageHeader.svelte';
import ImageOffsetPageHeader from '../components/PageHeaders/ImageOffsetPageHeader.svelte';
import ProcessBlock from '../components/ProcessBlock/ProcessBlock.svelte';
import AccordionBlock from '../components/AccordionBlock/AccordionBlock.svelte';
import TestimonialsBlock from '../components/TestimonialsBlock/TestimonialsBlock.svelte';
import StatsBlock from '../components/StatsBlock.svelte';
import TwoColumnBlock from '../components/TwoColumnBlock.svelte';
import FeaturedProjectBlock from '../components/FeaturedProjectBlock.svelte';
import NewsletterSignup from '../components/NewsletterSignup.svelte';

/**
 * Shared component map linking Umbraco ContentType aliases to Svelte components.
 * Used by both BlockList (for blocklist properties) and SingleBlock (for single-block properties).
 */
export const componentMap: Record<string, Component<any>> = {
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
	newsletterSignup: NewsletterSignup
};
