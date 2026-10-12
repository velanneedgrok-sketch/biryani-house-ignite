import biryani from '@/assets/biryani-menu.jpg';
import chicken65 from '@/assets/chicken-65.jpg';
import story from '@/assets/biryani-story.jpg';
import hero from '@/assets/biryani-hero.jpg';

// Replace sample menu, prices, copy, and business details before going live.
// WhatsApp expects an international number, digits only, without +.
export const restaurant = {
  name: 'Biryani House',
  whatsappNumber: '',
  phone: '',
  address: '',
  hours: '',
  mapsUrl: '',
  instagramUrl: '',
  facebookUrl: '',
  services: '',
  sampleMenu: true,
  tagline: 'Big flavour. Good company.',
  heroDescription: 'Bold spices, fragrant rice, and a biryani experience made to be remembered.',
  story: 'Biryani is more than a meal. It’s the anticipation when the lid lifts. The first aromatic bite. The last spoonful you don’t want to share. Biryani House is our love letter to that feeling — bold, generous, and full of soul.',
  storyNote: 'Our story is just beginning. Pull up a chair.',
};

export const categories = ['All', 'Biryani', 'Starters', 'Combos', 'Drinks'] as const;
export type Category = typeof categories[number];
export type Dish = { id: string; name: string; description: string; price: number; portion: string; category: Category; image: string; alt: string; tag?: string; dietary: string };
export const dishes: Dish[] = [
  { id: 'chicken-dum', name: 'Chicken Dum Biryani', description: 'Fragrant basmati, spiced chicken, and all the right accompaniments.', price: 249, portion: 'Serves 1', category: 'Biryani', image: biryani, alt: 'Sample chicken biryani with saffron rice, roasted chicken and mint', tag: 'HOUSE SIGNATURE', dietary: 'Non-vegetarian · Contains dairy' },
  { id: 'chicken-65', name: 'Chicken 65', description: 'Crispy bites. A fiery kick. A little squeeze of lemon.', price: 199, portion: '6 pieces', category: 'Starters', image: chicken65, alt: 'Sample crispy Chicken 65 with curry leaves, onion and lemon', tag: 'BRING THE HEAT', dietary: 'Non-vegetarian · Allergens to be confirmed' },
  { id: 'family-combo', name: 'Family Biryani Combo', description: 'A generous chicken biryani feast, made for the whole table.', price: 899, portion: 'Serves 3–4', category: 'Combos', image: story, alt: 'Sample family-sized handi of chicken biryani', tag: 'BETTER TOGETHER', dietary: 'Non-vegetarian · Contains dairy' },
];
export const gallery = [
  { image: biryani, alt: 'Chicken dum biryani with aromatic rice and fresh mint', caption: 'The main event.' },
  { image: chicken65, alt: 'Crispy red Chicken 65 with curry leaves and lemon', caption: 'A little fire on the side.' },
  { image: story, alt: 'A chef lifting a lid from a steaming biryani handi', caption: 'That first-lid-lift feeling.' },
  { image: hero, alt: 'A biryani spread with raita, lemon and sliced onions', caption: 'All the right company.' },
];
export const offers = [
  { title: 'The opening celebration', label: 'OPENING OFFER', description: 'A new house. A whole lot of flavour.', terms: 'Offer and validity to be announced.', dishId: 'chicken-dum' },
  { title: 'Lunch, upgraded.', label: 'LUNCH COMBO', description: 'Make a little room for a big lunch.', terms: 'Combo details and price to be confirmed.', dishId: 'chicken-dum' },
  { title: 'Bring the whole family.', label: 'FAMILY PACK', description: 'More plates. More stories. More biryani.', terms: 'Sample pack · ₹899 · serves 3–4.', dishId: 'family-combo' },
  { title: 'A feast for your people.', label: 'GROUP ORDERS', description: 'For get-togethers with good taste.', terms: 'Availability and group pricing to be confirmed.', dishId: 'family-combo' },
];
export const money = (value: number) => `₹${value.toLocaleString('en-IN')}`;
export function whatsappUrl(message: string) {
  const number = restaurant.whatsappNumber.replace(/\D/g, '');
  return /^[1-9]\d{7,14}$/.test(number) ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : null;
}