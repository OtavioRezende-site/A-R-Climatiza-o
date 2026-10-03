# A R Climatização — Website Oficial

Website profissional da **A R Climatização** (Cascadura, Rio de Janeiro - RJ), desenvolvido com React, TypeScript, Tailwind CSS e integração nativa com GoHighLevel (Formulário + Chat Widget).

---

## 🚀 Como subir para o GitHub e publicar no GitHub Pages (Sem tela branca)

O projeto já está 100% configurado para rodar no GitHub Pages sem erro de tela branca ou falha de rotas:
- **`base: './'`** configurado no `vite.config.ts` (garante que os arquivos JS e CSS sejam encontrados em qualquer subpasta ou repositório).
- **Roteamento SPA resiliente** com suporte a hash e histórico nativo.
- **Workflow automático do GitHub Actions** incluído em `.github/workflows/deploy.yml`.

### Passo a Passo Rápido:

1. **Crie um novo repositório no GitHub**:
   - Acesse seu GitHub e clique em **New Repository**.
   - Dê um nome (ex: `ar-climatizacao`) e marque como **Public**.

2. **Envie os arquivos para o repositório**:
   ```bash
   git init
   git add .
   git commit -m "feat: site completo A R Climatizacao com integracao GHL"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```

3. **Ative o GitHub Pages**:
   - No seu repositório no GitHub, clique na aba **Settings** (Configurações).
   - No menu lateral esquerdo, clique em **Pages**.
   - Em **Build and deployment > Source**, selecione **GitHub Actions**.
   - Pronto! O workflow vai compilar o site automaticamente e gerar o link público (ex: `https://seu-usuario.github.io/ar-climatizacao/`).

---

## 🛠️ Tecnologias e Recursos
- **React + TypeScript + Vite**
- **Tailwind CSS v4**
- **GoHighLevel Form Integration**: Iframe responsivo com script `form_embed.js`.
- **GoHighLevel Chat Widget**: Carregamento assíncrono via `loader.js`.
- **Animações Fluidas**: Simulação de circulação de ar dinâmica e aparelho de ar-condicionado estilizado em SVG vetorial animado.
