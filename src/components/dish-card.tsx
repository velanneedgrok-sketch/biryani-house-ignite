import { motion } from 'motion/react';
import { Check, Flame, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Dish, money } from '@/lib/restaurant';

export function DishCard({ dish, quantity, add, index }: { dish: Dish; quantity: number; add: () => void; index: number }) {
  return <motion.article layout initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .35, delay: index * .06 }} className="dish-card"><div className="dish-photo"><img src={dish.image} alt={dish.alt} loading="lazy" width={1024} height={1024} />{dish.tag && <span className={`dish-label ${dish.category === 'Starters' ? 'label-hot' : ''}`}><Flame size={12} />{dish.tag}</span>}</div><div className="dish-details"><div className="dish-meta"><span className="diet-marker" aria-hidden="true" />{dish.portion}<span>MEDIUM SPICE</span></div><h3>{dish.name}</h3><p>{dish.description}</p><small>{dish.dietary}</small><div className="dish-bottom"><strong>{money(dish.price)}<span>sample price</span></strong><Button variant="add" onClick={add} aria-label={`Add ${dish.name} to order`}>{quantity > 0 ? <Check /> : <Plus />}{quantity > 0 ? `Add more (${quantity})` : 'Add to order'}</Button></div></div></motion.article>;
}