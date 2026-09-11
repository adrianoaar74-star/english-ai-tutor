# English AI Tutor — PWA sem API paga

Protótipo funcional para estudo pessoal de inglês, feito em Next.js e preparado para Vercel.

## O que já funciona
- PWA instalável no celular.
- Tutor em formato de videochamada com avatar animado.
- Entrada por voz via reconhecimento de fala do navegador quando disponível.
- Resposta falada usando a síntese de voz do dispositivo.
- Correções básicas offline por regras locais.
- IA local opcional no navegador com WebLLM/WebGPU, sem chave de API.
- Exercícios diários, histórico de erros e progresso em localStorage.
- Sem banco de dados e sem API paga obrigatória.

## Limitação importante
A IA local precisa de navegador/aparelho com WebGPU e baixa um modelo na primeira utilização. Em aparelhos incompatíveis ou com pouca memória, o app mantém o modo básico, mas não terá a mesma flexibilidade de um grande modelo em nuvem.

## Rodar localmente
```bash
npm install
npm run dev
```
Abra http://localhost:3000

## Hospedar na Vercel
1. Envie esta pasta para um repositório GitHub, ou importe o projeto diretamente na Vercel.
2. Framework: Next.js (detectado automaticamente).
3. Build command: `npm run build`.
4. Depois do deploy, abra a URL HTTPS no Chrome do Android.
5. Menu do Chrome → **Instalar app** ou **Adicionar à tela inicial**.

## IA local
Na tela Tutor, toque **Enable local AI**. O app procura automaticamente um modelo leve compatível na configuração oficial do WebLLM. O primeiro download pode ser grande e deve ser feito preferencialmente em Wi-Fi.

## Privacidade
O progresso e os erros ficam no `localStorage` do navegador. O modelo local, quando disponível, roda no próprio navegador.
