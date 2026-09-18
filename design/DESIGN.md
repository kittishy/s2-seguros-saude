# S2 — direção de implementação

Projeto independente da Raquel, criado para apresentação à cliente. Site original e DNS não serão alterados. Publicação nova na Vercel sem indexação até revisão da cliente.

## Sistema visual
Conceitos internos desenvolvidos com Image Gen como direção de implementação; não constituem aprovação da cliente. Fundo branco #fff, faixa gelo #eff8fc, tinta #10334a, ciano #0096c7, vermelho da marca #e7353f. Botões #007fa9 e links escurecidos para contraste. Manrope local, títulos 56–64 desktop / 38 mobile, corpo 17–18. Container 1200px, gutters 24 mobile / 48 desktop, seções 88–100px. Cantos 12 em controles, mídia em arco superior; nada de grades de caixas repetitivas, gradientes ou números inventados.

## Composição e copy permitida
1. Cabeçalho: logo original, Planos, Como funciona, Sobre a S2, Fale com a gente, Pedir cotação.
2. Hero: Seu plano de saúde. Sua vida em primeiro lugar. Texto sobre você/família/empresa, MEIs e pequenas empresas. Encontrar meu plano; Conversar pelo WhatsApp. Foto ilustrativa gerada, nunca apresentada como equipe/cliente real. Faixa discreta com cinco operadoras já divulgadas no site original e ressalva de disponibilidade.
3. Planos: quatro colunas abertas, MEI/pequenas empresas, Individual, Familiar, Odontológico; botões preenchem interesse na cotação. Faixa Reavaliar meu plano.
4. Processo 01 escuta / 02 compara / 03 acompanha; sobre a S2 em faixa azul-escura.
5. Dois depoimentos já publicados no site de origem, sem avaliações/estrelas inventadas. FAQ acessível nativo em fundo gelo.
6. Conversão: formulário mínimo com nome, cidade, interesse e pessoas opcional; mensagem revisável e saída consciente para WhatsApp. Rodapé com logo original e contatos.

## Correções intencionais dos conceitos
- Logo sempre o PNG original do site, nunca a aproximação do mockup.
- Foto derivada em asset próprio: mesma composição, sem alegar pessoas reais.
- Botões e links escurecidos para contraste; nenhum texto promocional foi acrescido acima do H1.
- Texto de operadoras qualificado como marcas divulgadas no site original; não representa validação de parceria ou oferta vigente.
- FAQ revisado para informação genérica responsável e formulário com estado de revisão antes de abrir WhatsApp (necessidade funcional e privacidade).
- Formulário e footer brancos conforme conceito final quote; primeiro conceito quote escuro descartado.
- Fluidez responsiva e quebra de linhas adaptadas ao conteúdo real. Não forçar uma tela única no celular.

## Componentes e comportamento
HTML semântico pré-renderizado, Vite e TypeScript estrito apenas para menu, pré-seleção de interesse e preparo de mensagem. Navegação e contato direto funcionam sem JS. Details/summary para FAQ, sem carrossel. Formulário não armazena nem envia dados ao servidor. Sem pixels, analytics, cookies opcionais, diagnóstico, CPF, login ou chatbot.

## Ícones
SVG inline outline 24px, stroke 1.7, currentColor; seta, telefone, mala, pessoa, família e sorriso. Decorativos aria-hidden. Marca não é redesenhada.
