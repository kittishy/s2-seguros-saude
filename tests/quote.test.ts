import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createMessage, whatsappUrl, cleanText, PLAN_OPTIONS } from '../src/quote.ts';
const input = { plan: 'Familiar', name: 'Teste', city: 'Rio de Janeiro / RJ', people: '2 pessoas' };
test('mensagem preserva acentos, perfil, cidade e destinatário verificado', () => {
  const message = createMessage(input);
  const url = new URL(whatsappUrl(message));
  assert.equal(url.hostname, 'wa.me');
  assert.equal(url.pathname, '/5521990852819');
  assert.equal(url.searchParams.get('text'), message);
  assert.match(message, /Interesse: Familiar/);
  assert.match(message, /Pessoas: 2 pessoas/);
});
test('todos os caminhos comerciais geram mensagem', () => {
  for (const plan of PLAN_OPTIONS) assert.ok(createMessage({ ...input, plan }).includes(plan));
});
test('não aceita perfil arbitrário ou campos vazios', () => {
  assert.throws(() => createMessage({ ...input, plan: 'inválido' }));
  assert.throws(() => createMessage({ ...input, name: '   ' }));
  assert.throws(() => createMessage({ ...input, city: '' }));
  assert.throws(() => createMessage({ ...input, people: 'valor arbitrário' }));
});
test('normaliza espaços, limita tamanho e omite quantidade opcional', () => {
  assert.equal(cleanText(' Ana\n Maria ', 60), 'Ana Maria');
  assert.equal(cleanText('a'.repeat(100), 60).length, 60);
  assert.ok(!createMessage({ ...input, people: '' }).includes('Pessoas:'));
});
test('caracteres de URL não viram parâmetros adicionais', () => {
  const message = createMessage({ ...input, name: 'Ana & João #1' });
  const url = new URL(whatsappUrl(message));
  assert.equal(url.searchParams.size, 1);
  assert.equal(url.searchParams.get('text'), message);
  assert.equal(url.hash, '');
});
