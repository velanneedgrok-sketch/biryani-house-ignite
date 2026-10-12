<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep this restaurant experience at the index route with in-page section anchors, because the requested website is explicitly one scrolling page.
- Centralize restaurant copy, menu, prices, offers, and contact configuration in a browser-safe data module so real details can replace samples in one place.
- Keep the order basket in React memory and hand off via a configurable WhatsApp deep link; this is a frontend selection flow, not a submitted order or payment system.
- Use the shared Button and Radix dialog primitives for controls and modal flows so keyboard focus management remains consistent.
- Define visual treatments and semantic OKLCH tokens in the global stylesheet; use Motion for entrances and CSS for ambient loops, honoring reduced motion.
