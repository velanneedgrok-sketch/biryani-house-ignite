import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, Minus, Plus, Send, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { dishes, gallery, money, restaurant, whatsappUrl } from '@/lib/restaurant';

export type Basket = Record<string, number>;
export function OrderBasket({ open, onOpenChange, basket, update, clear }: { open: boolean; onOpenChange: (open: boolean) => void; basket: Basket; update: (id: string, delta: number) => void; clear: () => void }) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [note, setNote] = useState('');
  const selected = dishes.filter(d => basket[d.id] > 0);
  const total = selected.reduce((sum, d) => sum + d.price * basket[d.id], 0);
  const message = `Hello Biryani House! I'd like to enquire about this order:\n${selected.map(d => `${basket[d.id]} × ${d.name} — ${money(d.price * basket[d.id])}`).join('\n')}\nSample total: ${money(total)}${note ? `\nNote: ${note}` : ''}\nPlease confirm availability, final prices, and collection details.`;
  const url = whatsappUrl(message);
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="basket-dialog"><DialogTitle className="dialog-heading">Your order<span className="text-primary">.</span></DialogTitle><DialogDescription>Good choices. Great flavour.</DialogDescription>
    {selected.length ? <><div className="basket-items">{selected.map(d => <div className="basket-item" key={d.id}><img src={d.image} width={72} height={72} alt={d.alt} /><div className="min-w-0"><h3>{d.name}</h3><p>{money(d.price)} · sample price</p><div className="quantity-control"><Button variant="tool" size="icon" aria-label={`Decrease ${d.name}`} onClick={() => update(d.id, -1)}><Minus /></Button><span aria-live="polite">{basket[d.id]}</span><Button variant="tool" size="icon" aria-label={`Increase ${d.name}`} onClick={() => update(d.id, 1)}><Plus /></Button></div></div><strong>{money(d.price * basket[d.id])}</strong></div>)}</div><div className="basket-total"><span>Sample total</span><strong>{money(total)}</strong></div><label className="order-note">Anything we should know?<textarea value={note} onChange={e => setNote(e.target.value)} placeholder="A note for the restaurant…" maxLength={500} /></label><p className="configuration-note">{url ? 'Final prices and availability are confirmed by the restaurant on WhatsApp. No payment is collected here.' : 'WhatsApp ordering is not connected yet. You can copy your selection; no order has been sent.'}</p>{url ? <Button asChild variant="brand"><a href={url} target="_blank" rel="noopener noreferrer"><Send /> Enquire on WhatsApp <ArrowRight /></a></Button> : <Button variant="brand" onClick={async () => { try { await navigator.clipboard.writeText(message); setCopied(true); setCopyError(false); } catch { setCopyError(true); } }}>{copied ? <Check /> : <ShoppingBag />}{copied ? 'Selection copied' : 'Copy order selection'}</Button>}{copyError && <p role="alert">Could not copy. Select and copy the order details above.</p>}<Button variant="ghost" onClick={clear}><Trash2 /> Clear order</Button></> : <div className="basket-empty"><ShoppingBag size={44} /><h3>A little hungry?</h3><p>Your next favourite is waiting on the menu.</p><Button variant="brand" onClick={() => { onOpenChange(false); document.getElementById('menu')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }}>Explore the menu <ArrowRight /></Button></div>}
  </DialogContent></Dialog>;
}

export function GalleryLightbox({ index, setIndex }: { index: number | null; setIndex: (index: number | null) => void }) {
  const touch = useRef<number | null>(null);
  const change = (delta: number) => setIndex(((index ?? 0) + delta + gallery.length) % gallery.length);
  useEffect(() => {
    if (index === null) return;
    const key = (event: KeyboardEvent) => { if (event.key === 'ArrowRight') setIndex((index + 1) % gallery.length); if (event.key === 'ArrowLeft') setIndex((index - 1 + gallery.length) % gallery.length); };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [index, setIndex]);
  const photo = gallery[index ?? 0];
  return <Dialog open={index !== null} onOpenChange={open => { if (!open) setIndex(null); }}><DialogContent className="gallery-dialog"><DialogTitle className="sr-only">Food gallery</DialogTitle><DialogDescription className="sr-only">{photo.alt}</DialogDescription><div className="lightbox-photo" onTouchStart={e => { touch.current = e.touches[0]?.clientX ?? null; }} onTouchEnd={e => { const end = e.changedTouches[0]?.clientX; if (touch.current !== null && end !== undefined && Math.abs(end - touch.current) > 45) change(end < touch.current ? 1 : -1); touch.current = null; }}><AnimatePresence mode="wait"><motion.img key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} src={photo.image} alt={photo.alt} width={1024} height={1024} /></AnimatePresence></div><div className="lightbox-controls"><Button variant="tool" size="icon" onClick={() => change(-1)} aria-label="Previous photo"><ArrowLeft /></Button><p>{photo.caption}<span>{(index ?? 0) + 1} / {gallery.length}</span></p><Button variant="tool" size="icon" onClick={() => change(1)} aria-label="Next photo"><ArrowRight /></Button></div></DialogContent></Dialog>;
}