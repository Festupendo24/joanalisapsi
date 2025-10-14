# joanalisapsi

Site minimalista em **React + Vite + Tailwind** para presença profissional.

## Como correr localmente
1. Instala o Node.js (https://nodejs.org)
2. No terminal:
   ```bash
   npm install
   npm run dev
   ```
3. Abre o endereço que o Vite indicar (ex.: http://localhost:5173)

## Personalização rápida
- Substitui `src/assets/logo.svg` pelo teu logotipo (mesmo nome do ficheiro para não mudares o código).
- Edita os textos em `src/App.jsx`: terapias, morada, telefone, email.
- Altera o link do botão **Entrar no Teams** para a tua reunião ou página de agendamento.
- Cores e tipografia podem ser ajustadas em `tailwind.config.js` e `src/index.css`.

## Deploy
```bash
npm run build
```
Sobe a pasta `dist/` para a Vercel ou Netlify, ou liga o repositório do GitHub para deploy automático.
