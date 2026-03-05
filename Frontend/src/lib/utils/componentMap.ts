import type { Component } from 'svelte';
import TextBlock from '../components/TextBlock.svelte';
import ImageGallery from '../components/ImageGallery.svelte';
import VideoEmbed from '../components/VideoEmbed.svelte';
import CodeEmbed from '../components/CodeEmbed.svelte';
import HeroBlock from '../components/HeroBlock.svelte';
import BlogListing from '../components/BlogListing/BlogListing.svelte';
import CallToActionBlock from '../components/CallToActionBlock.svelte';
import CallToActionPageHeader from '../components/PageHeaders/CallToActionPageHeader.svelte';
import ImageOffsetPageHeader from '../components/PageHeaders/ImageOffsetPageHeader.svelte';

/**
 * Shared component map linking Umbraco ContentType aliases to Svelte components.
 * Used by both BlockList (for blocklist properties) and SingleBlock (for single-block properties).
 */
export const componentMap: Record<string, Component<any>> = {
    textBlock: TextBlock,
    imageGalleryBlock: ImageGallery,
    videoEmbedBlock: VideoEmbed,
    codeEmbedBlock: CodeEmbed,
    heroBlock: HeroBlock,
    blogListingBlock: BlogListing,
    callToActionBlock: CallToActionBlock,
    callToActionPageHeader: CallToActionPageHeader,
    imageOffsetPageHeader: ImageOffsetPageHeader
};
