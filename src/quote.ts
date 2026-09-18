export const WHATSAPP_NUMBER = '5521990852819';
export const PLAN_OPTIONS = ['Empresarial / MEI', 'Individual', 'Familiar', 'Odontológico', 'Reavaliar meu plano', 'Ainda não sei'] as const;
export type Plan = typeof PLAN_OPTIONS[number];
export const PEOPLE_OPTIONS = ['', '1 pessoa', '2 pessoas', '3 a 5 pessoas', '6 a 29 pessoas', '30 ou mais pessoas', 'Ainda não sei'] as const;
export interface QuoteInput { plan: string; name: string; city: string; people: string; }
export function cleanText(value: string, limit: number): string {
  return value.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, limit);
}
export function createMessage(input: QuoteInput): string {
  if (!PLAN_OPTIONS.includes(input.plan as Plan)) throw new Error('Selecione um tipo de plano.');
  const name = cleanText(input.name, 60);
  const city = cleanText(input.city, 100);
  if (!name || !city) throw new Error('Preencha seu nome e sua cidade.');
  if (!PEOPLE_OPTIONS.includes(input.people as typeof PEOPLE_OPTIONS[number])) throw new Error('Selecione uma quantidade válida.');
  const people = input.people;
  return [`Olá! Conheci a S2 pelo site e gostaria de conversar sobre um plano.`, '', `Nome: ${name}`, `Interesse: ${input.plan}`, `Cidade / UF: ${city}`, ...(people ? [`Pessoas: ${people}`] : []), '', 'Gostaria de conhecer as opções disponíveis para o meu perfil.'].join('\n');
}
export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
