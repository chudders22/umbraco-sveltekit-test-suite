# Umbraco Block Types — Dev Agency Component Set

This document describes all Umbraco Document Types / Element Types required to support the frontend component set. Create each as an **Element Type** (not a full Document Type) unless noted otherwise. Add each element type to the `pageContent` Block List on the relevant page type.

---

## Existing Blocks (already implemented)

| Content Type Alias | Component |
|---|---|
| `heroBlock` | HeroBlock |
| `servicesBlock` | ServicesBlock |
| `blogListingBlock` | BlogListing |
| `callToActionBlock` | CallToActionBlock |
| `logoCloudBlock` | LogoCloud |
| `heading` | HeadingBlock |
| `textBlock` | TextBlock |
| `imageGalleryBlock` | ImageGallery |
| `videoEmbedBlock` | VideoEmbed |
| `codeEmbedBlock` | CodeEmbed |

---

## New Blocks

---

### 1. Testimonials Block

**Content Type Alias:** `testimonialsBlock`
**Type:** Element Type

| Property Name | Alias | Editor | Notes |
|---|---|---|---|
| Title | `title` | Textstring | Section heading (optional) |
| Sub Title | `subTitle` | Textstring | Section sub-heading (optional) |
| Testimonials | `testimonials` | Block List | Nested list of `testimonialItem` elements |

#### Child Element: Testimonial Item

**Content Type Alias:** `testimonialItem`
**Type:** Element Type (used inside `testimonialsBlock` Block List only)

| Property Name | Alias | Editor | Notes |
|---|---|---|---|
| Quote | `quote` | Textarea | The testimonial text |
| Author Name | `authorName` | Textstring | Person's full name |
| Author Role | `authorRole` | Textstring | Job title |
| Author Company | `authorCompany` | Textstring | Company name |
| Author Image | `authorImage` | Media Picker | Avatar photo (single image) |

---

### 2. Stats Block

**Content Type Alias:** `statsBlock`
**Type:** Element Type

| Property Name | Alias | Editor | Notes |
|---|---|---|---|
| Title | `title` | Textstring | Optional section label (centered) |
| Stats | `stats` | Block List | Nested list of `statItem` elements |

#### Child Element: Stat Item

**Content Type Alias:** `statItem`
**Type:** Element Type (used inside `statsBlock` Block List only)

| Property Name | Alias | Editor | Notes |
|---|---|---|---|
| Value | `value` | Textstring | Large display number/text, e.g. `200+` |
| Label | `label` | Textstring | Short label, e.g. `Projects Delivered` |
| Description | `description` | Textstring | Optional supporting sentence |

---

### 3. Process Block

**Content Type Alias:** `processBlock`
**Type:** Element Type

| Property Name | Alias | Editor | Notes |
|---|---|---|---|
| Title | `title` | Textstring | Section heading (optional) |
| Sub Title | `subTitle` | Textstring | Section sub-heading (optional) |
| Steps | `steps` | Block List | Nested list of `processStep` elements |

#### Child Element: Process Step

**Content Type Alias:** `processStep`
**Type:** Element Type (used inside `processBlock` Block List only)

| Property Name | Alias | Editor | Notes |
|---|---|---|---|
| Title | `title` | Textstring | Step name, e.g. `Discovery` |
| Description | `description` | Textarea | What happens in this step |

> **Note:** Step numbers (01, 02…) are generated automatically by the frontend from the item index. Do not add a number property.

---

### 4. Two Column Block

**Content Type Alias:** `twoColumnBlock`
**Type:** Element Type

| Property Name | Alias | Editor | Notes |
|---|---|---|---|
| Heading | `heading` | Textstring | Column heading |
| Sub Title | `subTitle` | Textstring | Optional supporting tagline |
| Content | `content` | Rich Text Editor | Body copy for the text column |
| Image | `image` | Media Picker | Image for the image column (single) |
| Image Position | `imagePosition` | Dropdown | Options: `left`, `right` (default: `right`) |
| Link | `link` | Multi URL Picker | Optional CTA link (single link used) |

---

### 5. Accordion Block

**Content Type Alias:** `accordionBlock`
**Type:** Element Type

| Property Name | Alias | Editor | Notes |
|---|---|---|---|
| Title | `title` | Textstring | Section heading (optional) |
| Sub Title | `subTitle` | Textstring | Section sub-heading (optional) |
| Items | `items` | Block List | Nested list of `accordionItem` elements |

#### Child Element: Accordion Item

**Content Type Alias:** `accordionItem`
**Type:** Element Type (used inside `accordionBlock` Block List only)

| Property Name | Alias | Editor | Notes |
|---|---|---|---|
| Question | `question` | Textstring | The accordion toggle label / FAQ question |
| Answer | `answer` | Rich Text Editor | Expanded content / FAQ answer |

---

### 6. Featured Project Block

**Content Type Alias:** `featuredProjectBlock`
**Type:** Element Type

| Property Name | Alias | Editor | Notes |
|---|---|---|---|
| Section Label | `sectionLabel` | Textstring | Small eyebrow label, e.g. `Case Study` |
| Project Title | `projectTitle` | Textstring | Name of the project |
| Description | `description` | Textarea | Short project summary |
| Image | `image` | Media Picker | Project screenshot or hero image |
| Tags | `tags` | Tags | Technology/service tags (comma-separated) |
| Client | `client` | Textstring | Client organisation name |
| Link | `link` | Multi URL Picker | Link to the full case study (single link) |

### 7. Newsletter Signup

**Content Type Alias:** `newsletterSignup`
**Type:** Element Type

| Property Name | Alias | Editor | Notes |
|---|---|---|---|
| Heading | `heading` | Textstring | Main heading, e.g. `Stay in the loop` |
| Description | `description` | Textstring | Supporting sentence below the heading |
| Button Label | `buttonLabel` | Textstring | Submit button text (default: `Subscribe`) |
| Placeholder Text | `placeholderText` | Textstring | Input placeholder (default: `you@example.com`) |

> **Note:** Form submission logic (e.g. Mailchimp, ConvertKit) must be wired up in the component's `handleSubmit` function. The block itself only manages the UI copy.

---

| Svelte Component | Umbraco Alias | Child Elements |
|---|---|---|
| `TestimonialsBlock.svelte` | `testimonialsBlock` | `testimonialItem` |
| `StatsBlock.svelte` | `statsBlock` | `statItem` |
| `ProcessBlock.svelte` | `processBlock` | `processStep` |
| `TwoColumnBlock.svelte` | `twoColumnBlock` | — |
| `AccordionBlock.svelte` | `accordionBlock` | `accordionItem` |
| `FeaturedProjectBlock.svelte` | `featuredProjectBlock` | — |
| `NewsletterSignup.svelte` | `newsletterSignup` | — |

---

## Block List Setup

All seven blocks should be added to the **allowed blocks** list on the `pageContent` Block List property on your page Document Types (e.g. `homepage`, `standardPage`).

Child element types (`testimonialItem`, `statItem`, `processStep`, `accordionItem`) should only be allowed within their parent Block List — do not add them to the top-level `pageContent` block list.
