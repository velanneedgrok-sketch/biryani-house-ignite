import { useEffect } from 'react';

/** Only visible photo layers move; text and controls stay anchored. */
export function useParallax() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const photos = Array.from(document.querySelectorAll<HTMLImageElement>('[data-parallax]'));
    const visible = new Set<HTMLImageElement>();
    let frame = 0;

    const update = () => {
      frame = 0;
      if (preference.matches) return;
      const viewportHeight = window.innerHeight;
      const compact = window.innerWidth <= 850;
      visible.forEach(photo => {
        const bounds = photo.parentElement?.getBoundingClientRect();
        if (!bounds) return;
        const progress = Math.max(-1, Math.min(1, (viewportHeight / 2 - bounds.top - bounds.height / 2) / ((viewportHeight + bounds.height) / 2)));
        const distance = Math.min(compact ? 14 : 48, bounds.height * .055);
        photo.style.setProperty('--parallax-y', `${progress * distance}px`);
      });
    };
    const schedule = () => {
      if (!frame && !preference.matches) frame = window.requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const photo = entry.target;
        if (!(photo instanceof HTMLImageElement)) return;
        if (entry.isIntersecting) visible.add(photo);
        else visible.delete(photo);
      });
      schedule();
    });
    const reset = () => {
      photos.forEach(photo => photo.style.removeProperty('--parallax-y'));
      schedule();
    };
    photos.forEach(photo => observer.observe(photo));
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    preference.addEventListener('change', reset);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      preference.removeEventListener('change', reset);
      photos.forEach(photo => photo.style.removeProperty('--parallax-y'));
    };
  }, []);
}