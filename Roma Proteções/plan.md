# Roma Proteções — direção aprovada

## Direção visual

A página segue uma estética de engenharia industrial premium: precisão, confiança e clareza comercial. A paleta estrutural é restrita a branco (#FFFFFF) e azul-marinho corporativo (#0A192F / #1E3A8A), usando o verde apenas no WhatsApp. O layout evita uma grade centralizada rígida: o hero ocupa a largura total, as seções alternam alinhamento e os conteúdos entram lateralmente durante a rolagem.

A tipografia usa Inter/Arial como fallback, com títulos compactos, peso alto e tracking levemente negativo para transmitir precisão. Os elementos assinatura são uma barra técnica fina, cartões com bordas discretas em azul-marinho e marcadores numerados para guiar a jornada de triagem. A marca deve soar consultiva, objetiva e industrial — nunca genérica.

A animação é composta por fade-in com deslocamento lateral alternado, transições curtas e suaves e respeito a `prefers-reduced-motion`. O hero usa vídeo em autoplay, muted, loop e `playsinline`, com sobreposição azul-marinho para preservar contraste e fallback visual em caso de indisponibilidade.

## Implementação

A aplicação será uma página estática servida por Vite em `0.0.0.0:3000`. `src/App.jsx` concentra a composição das quatro seções e a lógica do formulário/WhatsApp; `src/styles.css` concentra tokens, responsividade, animações e acessibilidade; `public/assets/` guarda vídeo, fotos e marca fornecidos pelo usuário; `public/manus-routes.json` declara a rota `/`. A publicação será feita como build estático em `dist/`.

O formulário não persiste dados: ao submeter, valida os campos obrigatórios, monta uma mensagem em português e abre `https://wa.me/551199565593?text=...`. O mapa usa um iframe de busca pública do Google Maps para Terra Preta, Mairiporã - SP, sem exigir chave. Os links sociais permanecem clicáveis e com fallback explícito quando o URL exato do Facebook não estiver disponível no material.
