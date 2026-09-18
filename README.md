# S2 Seguros Saúde 🏥

Landing page institucional para corretora de planos de saúde — você, sua família e sua empresa. Feita com Vite + TypeScript puro, sem framework, focada em performance e conversão via WhatsApp.

🌐 **Live:** https://s2-seguros-saude.vercel.app/

## Stack

- **Vite 7** + **TypeScript** (strict)
- HTML + CSS puro (sem framework CSS)
- Fonte Manrope via `@fontsource`
- Testes com runner nativo do Node (`node --test`)

## Rodando localmente

```bash
npm install
npm run dev      # http://127.0.0.1:5173
npm test         # 5 testes de cotação/WhatsApp
npm run build    # tsc --noEmit + vite build → dist/
```

## Estrutura

```
index.html            # landing page
privacidade/          # página de privacidade
src/
  main.ts             # menu, âncoras, header
  quote.ts            # monta link wa.me com a cotação
  privacy.ts
  styles.css
public/images/        # logo e imagens
tests/quote.test.ts
vercel.json           # headers de segurança
```

## Deploy (Vercel + GitHub)

Repositório público conectado na Vercel:

1. Vercel → **Add New → Project** → importe este repo
2. Framework preset: **Vite** (build `npm run build`, output `dist/`)
3. Deploy automático a cada push na `main`

> Nota: o site hoje responde `X-Robots-Tag: noindex` (ver `vercel.json` e a meta `robots` no HTML). Quando quiser indexação no Google, remova essas duas linhas.

## Licença

MIT — livre para estudar e adaptar.
