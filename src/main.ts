import '@fontsource/manrope/latin-400.css';
import '@fontsource/manrope/latin-500.css';
import '@fontsource/manrope/latin-600.css';
import '@fontsource/manrope/latin-700.css';
import '@fontsource/manrope/latin-800.css';
import { createMessage, whatsappUrl, PLAN_OPTIONS, type Plan } from './quote';

function requiredElement<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Elemento necessário ausente: ${selector}`);
  return element;
}
const form = requiredElement<HTMLFormElement>('#quote-form');
const plan = requiredElement<HTMLSelectElement>('#plan');
const name = requiredElement<HTMLInputElement>('#name');
const city = requiredElement<HTMLInputElement>('#city');
const people = requiredElement<HTMLSelectElement>('#people');
const preview = requiredElement<HTMLElement>('#message-preview');
const menu = requiredElement<HTMLButtonElement>('.menu-toggle');
const nav = requiredElement<HTMLElement>('#navigation');
form.hidden = false;
menu.hidden = false;
document.documentElement.classList.add('enhanced');

function closeMenu(restoreFocus = false) {
  menu.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
  if (restoreFocus) menu.focus();
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
nav.addEventListener('click', (event) => {
  if ((event.target as HTMLElement).closest('a')) closeMenu();
});
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') closeMenu(true); });
document.addEventListener('click', event => {
  if (!(event.target instanceof Node)) return;
  if (!nav.contains(event.target) && !menu.contains(event.target)) closeMenu();
});

function editMessage() { preview.hidden = true; form.hidden = false; }
document.querySelectorAll<HTMLAnchorElement>('[data-plan]').forEach(link => {
  link.addEventListener('click', () => {
    const selected = link.dataset.plan;
    if (selected && PLAN_OPTIONS.includes(selected as Plan)) {
      editMessage(); plan.value = selected;
      name.focus({ preventScroll: true });
    }
  });
});
[name, city].forEach(field => field.addEventListener('input', () => field.setCustomValidity('')));
form.addEventListener('submit', event => {
  event.preventDefault();
  for (const field of [name, city]) {
    field.setCustomValidity(field.value.trim() ? '' : 'Preencha este campo.');
  }
  if (!form.reportValidity()) return;
  const message = createMessage({ plan: plan.value, name: name.value, city: city.value, people: people.value });
  requiredElement<HTMLElement>('#message-text').textContent = message;
  requiredElement<HTMLAnchorElement>('#send-whatsapp').href = whatsappUrl(message);
  form.hidden = true; preview.hidden = false;
  requiredElement<HTMLElement>('#preview-title').focus();
});
requiredElement<HTMLButtonElement>('#edit-message').addEventListener('click', () => { editMessage(); name.focus(); });
requiredElement<HTMLElement>('#year').textContent = String(new Date().getFullYear());
