# Bevi Logos

**Uma bibioteca React interna da Bevi, com todos os logos da Bevi e de parceiros Bevi.**

## Iniciando

### Pré requisitos

É necessário ter um gestor de pacotes npm instalado como por exemplo `npm`, `pnpm` ou `yarn` 

### Instalação

Na raiz do seu projeto React, basta executar a instalação do pacotes

```bash
pnpm i bevi-logo
```

### Utilização

Basta realizar a importação do componente e utilizar com o nome do banco que deseja.

```typescript
import { BvLogo } from "bevi-logo";

const App = () => {
  return (
    <BvLogo name="Bevi" />
  );
}

export default App;
```

## Roadmap
- [x] Componente base
- [x] Tamanho em escala e ajustável
- [x] Tratamento de erro com fallback
- [x] Adição de tipagem dinâmica para autocomplete
- [x] Informações para acessibilidade
- [x] Cadastro de logos Bevi
- [ ] Cadastro de logos parceiro

## Arquitetura
```
📁 src/
│
├── 📁 BvLogo/                 # Componente principal
│   ├──📄 BvLogo.constants.ts
│   ├──📄 BvLogo.tsx
│   ├──📄 BvLogo.types.tsx
│   └──📄 index.tsx
│
├── 📁 core/
│   ├── 📁 errors/
│   ├── 📁 logo/
│   └── 📁 svg/
│
├── 📁 data/                   # Array de objetos com todos os logos cadastrados
│   └──📄 logos.ts
│
├── 📁 hooks/                  # Array de objetos com todos os logos cadastrados
│
├── 📁 logos/                  # Arquivos .svg de todos os logos
│   └── 📁 bevi/
│       ├──📄 dark.svg
│       ├──📄 default.svg
│       ├──📄 icon.svg
│       └──📄 icon-dark.svg
│
├── 📁 types/                  # Tipagem global do projeto
│
├── 📁 utils/                  # Funções auxiliares
│
├──📄 App.tsx                  # Componente para testes
├──📄 index.ts                 # Todos os exports da biblioteca
└──📄 main.tsx                 # Raizo do React
```

## License

A Biblioteca de Ícones da Bevi é licenciada sob os termos da
[Licença MIT](https://github.com/BeviProjects/bevi-icon/blob/main/LICENSE).
