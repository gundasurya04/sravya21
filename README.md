# OmniFood Landing Page

A responsive landing page for a fictional healthy food delivery service called OmniFood.

## What's in Here

- **index.html** - The page structure. I used semantic HTML elements like `<header>`, `<nav>`, `<section>`, `<article>`, `<blockquote>`, and `<footer>` because they make the page easier to understand for both people reading the code and screen readers that help people with visual disabilities.
- **style.css** - All the visual design and layout. I built it mobile-first, meaning I wrote the base styles for small screens, then added larger breakpoints for tablets (834px) and desktops (1200px+).
- **script.js** - The hamburger menu toggle. Simple click handlers that toggle CSS classes to show/hide the navigation on mobile.
- **assets/** - Images used throughout the page (hero background, city photos, testimonial images, app store badges).

## How to View It

1. Open `index.html` directly in your browser. No server needed.
2. Or use a local server if you prefer:
   - VS Code: Install Live Server extension and click "Go Live"
   - Terminal: `npx http-server` from this folder

That's it. No build tools, no dependencies to install.

## Responsive Design Approach

I built this with mobile-first design, meaning every screen size works, starting from small phones:

- **Mobile (≤390px)** - Single column layouts, stacked buttons, hamburger menu for navigation
- **Tablet (834px)** - Two-column grids start appearing, nav becomes a horizontal menu
- **Desktop (1200px+)** - Full four-column grids, optimized spacing, premium plan gets a slight scale boost

The key breakpoints in the CSS are:
- `@media (min-width: 834px)` - Tablet and above
- `@media (min-width: 1200px)` - Desktop and above  
- `@media (max-width: 390px)` - Extra small phones

## The Hamburger Menu

On screens ≤390px, the navigation hides and a hamburger button (three horizontal lines) appears. Click it to toggle the menu open/closed.

The JavaScript is straightforward:
1. Listen for clicks on the hamburger button → toggle the menu
2. Listen for clicks on nav links → close the menu so users stay focused
3. Listen for Escape key → close the menu (standard web practice)
4. Listen for clicks outside the menu → close it

This keeps the experience predictable across devices.

## What I Learned Building This

### Understanding Semantic HTML
At first, I just wanted any HTML that worked. But building this from scratch, I realized **semantic elements aren't just labels**—they communicate *intent*. Using `<nav>` for navigation, `<section>` for major content blocks, and `<blockquote>` for testimonials makes the code tell a story. Screen readers and search engines rely on this. It's worth thinking about.

### Mobile-First Is Different
I approached mobile-first by picking the smallest screen (390px) and building from there. The difference from desktop-first: instead of adding media queries to *remove* things, I add queries to *add* things (wider grids, bigger fonts, richer layouts). This feels backwards at first but ends up cleaner—base styles are simpler, and I only override what needs to change.

### CSS Grid Made This Easy
I used CSS Grid for all the layout sections (cities, testimonials, pricing). In the base mobile style, everything is `grid-template-columns: 1fr` (one column). Then in breakpoints, it becomes `repeat(2, 1fr)` or `repeat(4, 1fr)`. Just one line changes the entire layout. This would have been much messier with floats or flexbox alone.

### The Hamburger Menu Is Simple When You Think About State
The hardest part of the menu was thinking about **state**—is it open or closed? Once I realized I'm just toggling a CSS class (`.active`), everything clicked. The CSS handles the visual appearance, JavaScript only manages the state. This separation made debugging easy.

### Responsive Testing Matters
I tested this at 390px, 834px, and 1200px in DevTools. The variations in margin, font sizes, and grid layouts are small individually but compound to create completely different experiences. A 3rem font looks great on desktop but crushes small screens. A 4-column grid isn't just pretty—on small screens it causes horizontal scrolling. Testing each breakpoint early caught these issues.

## Next Time

- **Containers could be smarter** - I used max-width on one container, but nested containers could better control spacing in complex sections
- **Font sizing has room to breathe** - The jump from mobile to desktop font sizes is pretty steep; intermediate breakpoints might smooth this
- **Images need optimization** - The background images are full-res; smaller screens serve oversized files unnecessarily
- **Navigation could use active states** - Highlighting which section the user is currently viewing would improve UX
- **The testimonials and pricing could have more interactive features** - Tabs, filters, or clicks could make them feel more like a real product

## Final Note

This project is intentionally straightforward—one page, no JavaScript framework, no build process. The goal was to understand the fundamentals: semantic structure, responsive CSS, and simple interactivity. It's not production-ready (error handling, browser support, accessibility edge cases), but it's a clean foundation to build on.

