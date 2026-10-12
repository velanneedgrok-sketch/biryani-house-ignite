# Biryani House Ignite

# Build a Premium, High-Energy Biryani House Website
Create a visually striking, responsive, single-page website for a newly opened restaurant called **Biryani House**.

The visual direction is **Street Food Energy × International Premium**, with rich but purposeful animations, cinematic food photography, bold typography, and an intuitive ordering experience.

The website should feel like a premium contemporary food brand, not a generic restaurant template. Make the biryani imagery, brand personality, and ordering experience the primary focus.

## 1. Technology Stack

- React with Vite
- TypeScript
- Modern CSS with custom CSS variables
- Framer Motion (`motion`) for animations
- Lucide React for icons
- Reusable, responsive React components

Use CSS animations for lightweight ambient effects and SVG for custom vector decorations. Do not use unnecessary animation libraries or heavy WebGL effects.

## 2. Visual Design System

Use this color palette:

- Charcoal: `#171717`
- Chili Orange: `#FF5722`
- Saffron Gold: `#FFC247`
- Warm Ivory: `#F5F0E8`
- Herb Green: `#315747`
- White: `#FFFFFF`

Use charcoal backgrounds for hero sections, menu showcases, and promotional banners. Use warm ivory for selected content sections to create visual contrast.

Typography:
- Headings: Space Grotesk or a similar bold geometric sans-serif.
- Body: Inter.
- Use large editorial headings, bold short statements, clear price typography, and compact supporting descriptions.

Design characteristics:
- Oversized food photography
- Strong visual hierarchy
- Asymmetrical image compositions
- Rounded food cards
- Sticker-inspired offer labels
- Subtle grain and spice-inspired accents
- Clean layouts with generous spacing
- Responsive layouts for desktop, tablet, and mobile

Avoid excessive gradients, generic stock-dashboard layouts, cartoon food illustrations, and overly decorative Indian motifs. The result should feel energetic but professionally art-directed.

## 3. Navbar

Create a sticky, responsive navigation bar with:
- Biryani House wordmark or a simple original logo concept
- Home
- Menu
- Our Story
- Specials
- Gallery
- Contact
- A prominent Order Now button

Animations:
- Transparent or unobtrusive initial state where appropriate
- Smooth transition to a charcoal background on scroll
- Animated underline for navigation links
- Button background-fill hover transition
- Mobile navigation drawer with staggered link entrances

All links should scroll to their corresponding sections.

## 4. Hero Section — Cinematic Appetite Trigger

Create a visually dominant hero section with a large, appetizing photograph of chicken dum biryani served in a premium bowl or handi.

Use a dark charcoal background with chili-orange and saffron accents.

Suggested headline:

"BIG FLAVOUR. REAL BIRYANI."

Supporting text:

"Bold spices, fragrant rice, and a biryani experience made to be remembered."

Use this copy as initial placeholder content and make it easy to customize.

Add:
- Primary CTA: Order Now
- Secondary CTA: Explore the Menu
- A small brand or food-quality tagline
- An optional authentic opening-offer badge
- Decorative saffron-colored particles
- A subtle steam effect above the food image

Hero animations:
- Staggered word-by-word headline reveal
- Smooth fade-and-rise subtitle
- Biryani image scale-in
- Sequential CTA entrance
- Gentle ambient steam loop
- Subtle background parallax, where performant

Keep the heading readable and the food image prominent. Do not let animations obstruct the CTAs.

## 5. Animated Brand Marquee

Add a horizontal text strip between major sections.

Example text:

"FRESHLY PREPARED · BOLD FLAVOURS · MADE TO SHARE ·"

Use a slow, seamless horizontal marquee with repeating content and no abrupt jump at the loop boundary.

Use CSS animation, respect reduced-motion settings, and prevent the strip from causing horizontal page overflow.

## 6. Interactive Menu Section

Create an interactive menu with categories such as:
- All
- Biryani
- Starters
- Combos
- Drinks

Use reusable dish cards with:
- Food photograph
- Dish name
- Short description
- Actual price
- Portion information where relevant
- Dietary information where applicable
- Add to Order button

Populate the first version with clearly editable mock data. Example dishes may include Chicken Dum Biryani, Mutton Biryani, Egg Biryani, Veg Biryani, Chicken 65, and Family Biryani Combo. Clearly mark all example prices as placeholders for replacement.

Interactions:
- Smooth category-filter transitions
- Staggered card reveals on scroll
- Image zoom on hover
- Subtle card lift and shadow
- Animated add-to-order feedback
- Clear empty states for filters
- Accessible keyboard focus styles

Keep all dish information readable on mobile. Hover effects must not be required to reveal essential information.

If an actual ordering backend is not configured, provide a functional frontend selection flow and a configurable WhatsApp ordering action. Do not claim that orders have been submitted or payments completed when no such integration exists.

## 7. Our Story Section

Create an editorial layout with text on one side and large food photography on the other.

Suggested heading:

"CRAFTED WITH SPICE. SERVED WITH SOUL."

Include editable content about the restaurant's philosophy, cooking approach, ingredients, and signature flavour.

Animations:
- Scroll-triggered text reveal
- Image clip-path reveal
- Subtle parallax between image and text
- SVG line drawing around a small decorative accent

Avoid making unsupported claims about ingredients, heritage, cooking methods, or freshness. Keep all brand copy editable.

## 8. Signature Specials

Create one large featured-dish card and a row or grid of supporting dish cards.

Use a premium editorial composition with bold headings and striking food imagery.

Animations:
- Featured image reveals through a rounded or diagonal mask
- House Special label enters with a subtle scale animation
- Supporting cards reveal with staggered motion
- CTA arrow shifts slightly on hover

Use real dish names and actual restaurant offerings once provided. Avoid invented awards, ratings, or popularity statistics.

## 9. Opening Offers and Combos

Create a bold promotional section using charcoal, chili orange, and saffron gold.

Include editable cards for:
- Opening offer
- Lunch combo
- Family pack
- Group order

Animations:
- Offer badge scale-in
- Subtle animated border
- CTA hover transition
- Scroll-triggered card entrances

Make prices, offer terms, and validity configurable. Do not include fake countdowns, misleading discounts, or automatically expiring offers.

## 10. Food Gallery

Build an asymmetric responsive food-image grid with photographs of biryani, starters, accompaniments, and the restaurant interior.

Features:
- Smooth image reveal
- Gentle image zoom on hover
- Click-to-open lightbox
- Previous and next controls
- Keyboard navigation
- Escape-to-close
- Mobile swipe support
- Descriptive alt text

Use optimized images, lazy-load off-screen content, and provide graceful image fallbacks.

## 11. Visit Us and Contact

Create a contrasting contact section with:
- Restaurant address
- Opening hours
- Phone number
- WhatsApp link
- Google Maps directions
- Dine-in or takeaway information, where applicable

Use editable placeholder values until the real business details are supplied.

Animations:
- Contact cards fade in on scroll
- Icons respond subtly to interaction
- Map or map embed loads only when needed
- Clear hover and focus states on action links

Use actual contact information and valid URLs once provided.

## 12. Footer

Create a dark, premium footer with:
- Biryani House branding
- Short tagline
- Section navigation
- Contact details
- Social media links
- Copyright text

Use a subtle logo or SVG decorative-line animation. Keep the footer clean and functional.

## 13. Animation Architecture

Use Framer Motion for:
- Hero text and CTA sequencing
- Scroll-triggered reveals
- Staggered food-card entrances
- Menu filtering transitions
- Gallery and lightbox interactions
- Mobile navigation transitions

Use CSS keyframes for:
- Gentle steam wisps
- Ambient spice particles
- Marquee text
- Small decorative accents

Use Intersection Observer or Framer Motion viewport features for scroll reveals.

Animation principles:
- Prefer transform and opacity.
- Use short, purposeful entrance animations.
- Keep looping effects subtle and limited.
- Avoid scroll-jacking and excessive parallax.
- Avoid animating large numbers of elements simultaneously.
- Support `prefers-reduced-motion`.
- Ensure all content remains available if animation is disabled.
- Never allow decorative effects to block buttons, links, or text.

## 14. Responsive Design

Desktop:
- Large cinematic hero
- Asymmetrical food imagery
- Multi-column menu grid
- Wide editorial story section

Tablet:
- Balanced two-column layouts
- Reduced parallax
- Comfortable touch targets

Mobile:
- Single-column hero where appropriate
- Readable typography without horizontal overflow
- Two-column menu grid only when cards remain legible
- Touch-friendly category filters
- Accessible mobile navigation
- Optional fixed bottom Order Now / WhatsApp action
- Reduced decorative animation intensity

## 15. Functional Requirements

- All navbar links scroll to the correct section.
- Menu filters work.
- Add-to-order interactions work in the frontend.
- WhatsApp links use a configurable phone number.
- Order Now buttons lead to the configured ordering flow.
- Gallery lightbox supports keyboard interaction.
- All interactive elements have visible focus states.
- Contact links use valid link formats.
- No dead buttons or misleading success messages.
- No fabricated reviews, ratings, prices, offers, or business details.

## 16. Performance and Accessibility

- Optimize and lazy-load food photography.
- Reserve image dimensions to avoid layout shifts.
- Use semantic HTML and descriptive alt text.
- Ensure sufficient color contrast.
- Support keyboard navigation.
- Respect reduced-motion preferences.
- Keep animations lightweight and smooth.
- Avoid unnecessary dependencies.
- Test on current desktop and mobile browsers.

## Final Deliverable

Build a complete, polished, responsive single-page Biryani House website with all sections implemented, a consistent design system, working frontend interactions, rich but restrained motion, and clearly editable mock content.
Prioritize the quality of the hero, menu cards, signature dishes, and ordering flow. The final result should look like a distinctive contemporary restaurant brand rather than a generic AI-generated landing page.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d51bef6c-5498-41bf-a154-a889cd026140).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
