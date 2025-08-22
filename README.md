# ASSOCON - Sistema Web Completo

Sistema web full-stack para a Associação dos Contabilistas (ASSOCON) com autenticação JWT, painel administrativo e API REST.

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS v4
- **Backend**: Next.js API Routes, Prisma ORM
- **Banco de Dados**: PostgreSQL
- **Autenticação**: JWT com bcrypt
- **UI Components**: Radix UI, Lucide React
- **Validação**: Zod + React Hook Form

## 📋 Funcionalidades

### Área Pública

✅ **Home**: Página inicial moderna com seções de destaque  
✅ **Sobre**: História, missão, visão e valores da ASSOCON  
✅ **Notícias**: Sistema de publicação de notícias  
✅ **Eventos**: Calendário e inscrições para eventos  
✅ **Associar-se**: Formulário de solicitação de associação  
✅ **Contato**: Formulário de contato e informações

### Área Administrativa

✅ **Dashboard**: Visão geral com estatísticas  
✅ **Gerenciamento de Membros**: CRUD completo  
✅ **Gerenciamento de Posts**: Sistema de publicação  
✅ **Mensagens de Contato**: Visualização e resposta  
✅ **Autenticação**: Sistema seguro com JWT

### API REST

✅ **Auth**: Login, logout e registro  
✅ **Members**: CRUD de membros  
✅ **Posts**: CRUD de notícias/eventos  
✅ **Contact**: Envio de mensagens

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- PostgreSQL
- npm/yarn/pnpm

### 1. Clone o repositório

```bash
git clone https://github.com/sandrovendeth/assocon-website.git
cd assocon-website
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `env.example` para `.env.local`:

```bash
cp env.example .env.local
```

**⚠️ IMPORTANTE**: Edite o arquivo `.env.local` com suas configurações reais. Consulte `env.example` para ver quais variáveis são necessárias. **NUNCA** commite arquivos `.env*`!

### 4. Configure o banco de dados

```bash
npx prisma generate
npx prisma db push
```

### 5. (Opcional) Popule com dados iniciais

```bash
npm run db:seed
```

### 6. Inicie o servidor

```bash
npm run dev
```

Acesse http://localhost:3000 para ver o resultado.

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js 15
│   ├── admin/             # Painel administrativo
│   ├── api/               # API Routes
│   ├── associar-se/       # Página de associação
│   ├── contato/           # Página de contato
│   ├── eventos/           # Página de eventos
│   ├── noticias/          # Página de notícias
│   ├── sobre/             # Página sobre
│   └── ...
├── components/            # Componentes React
│   ├── layout/           # Componentes de layout
│   └── ui/               # Componentes UI reutilizáveis
├── lib/                  # Utilitários e configurações
└── types/               # Tipos TypeScript
```

## 🔐 Autenticação

O sistema utiliza JWT para autenticação. O usuário administrador inicial é criado via seed:

- **Email**: admin@assocon.com.br
- **Senha**: definida via `ADMIN_PASSWORD` no `.env.local`

## 📱 Responsividade

Totalmente responsivo para:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # Verificar lint
npm run db:generate  # Gerar cliente Prisma
npm run db:push      # Aplicar mudanças no banco
npm run db:seed      # Popular banco com dados iniciais
npm run db:studio    # Interface visual do banco
```

## 🚀 Deploy

Consulte o arquivo `deploy.md` para instruções completas de deploy no Vercel com Supabase.

## 🛡️ Segurança

- ✅ Senhas hasheadas com bcrypt
- ✅ JWT tokens seguros
- ✅ Validação de entrada com Zod
- ✅ Proteção contra CSRF
- ✅ Variáveis de ambiente protegidas
- ✅ Arquivos sensíveis no .gitignore

⚠️ **Consulte `SECURITY.md` para informações importantes de segurança antes do deploy em produção.**

## 📄 Licença

Este projeto está sob a licença MIT.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

**Desenvolvido com ❤️ para a ASSOCON**
