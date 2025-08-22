# ASSOCON - Sistema Web Completo

Sistema web full-stack para a Associação dos Contabilistas (ASSOCON) com autenticação JWT, painel administrativo e API REST.

## 🚀 Tecnologias Utilizadas

- **Frontend:** Next.js 15, TypeScript, Tailwind CSS v4
- **Backend:** Next.js API Routes, Prisma ORM
- **Banco de Dados:** PostgreSQL
- **Autenticação:** JWT com bcrypt
- **UI Components:** Radix UI, Lucide React
- **Validação:** Zod + React Hook Form

## 📋 Funcionalidades

### Área Pública

- ✅ **Home:** Página inicial moderna com seções de destaque
- ✅ **Sobre:** História, missão, visão e valores da ASSOCON
- ✅ **Notícias:** Sistema de publicação de notícias
- ✅ **Eventos:** Calendário e inscrições para eventos
- ✅ **Associar-se:** Formulário de solicitação de associação
- ✅ **Contato:** Formulário de contato e informações

### Área Administrativa

- ✅ **Dashboard:** Visão geral com estatísticas
- ✅ **Gerenciamento de Membros:** CRUD completo
- ✅ **Gerenciamento de Posts:** Sistema de publicação
- ✅ **Mensagens de Contato:** Visualização e resposta
- ✅ **Autenticação:** Sistema seguro com JWT

### API REST

- ✅ **Auth:** Login, logout e registro
- ✅ **Members:** CRUD de membros
- ✅ **Posts:** CRUD de notícias/eventos
- ✅ **Contact:** Envio de mensagens

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- PostgreSQL
- npm/yarn/pnpm

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/assocon-website.git
cd assocon-website
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configure o banco de dados PostgreSQL

Crie um banco de dados PostgreSQL e anote as credenciais.

### 4. Configure as variáveis de ambiente

Copie o arquivo `env.example` para `.env.local`:

```bash
cp env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:

```env
# Database
DATABASE_URL="postgresql://usuario:senha@localhost:5432/assocon_db?schema=public"

# JWT
JWT_SECRET="sua-chave-secreta-super-segura"

# Next.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="sua-nextauth-secret"

# Email (opcional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="seu-email@gmail.com"
SMTP_PASS="sua-senha-app"

# Redes Sociais
FACEBOOK_URL="https://facebook.com/assocon"
INSTAGRAM_URL="https://instagram.com/assocon"
WHATSAPP_URL="https://wa.me/5511999999999"
```

### 5. Execute as migrações do banco

```bash
npx prisma generate
npx prisma db push
```

### 6. (Opcional) Popule o banco com dados de exemplo

```bash
npx prisma db seed
```

### 7. Inicie o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

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
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── layout/           # Componentes de layout
│   └── ui/               # Componentes UI reutilizáveis
├── lib/                  # Utilitários e configurações
│   ├── auth.ts          # Funções de autenticação
│   ├── db.ts            # Configuração Prisma
│   ├── utils.ts         # Funções utilitárias
│   └── validations.ts   # Schemas Zod
└── types/               # Tipos TypeScript
```

## 🔐 Autenticação

O sistema utiliza JWT para autenticação. Para criar um usuário administrador:

```sql
-- Conecte ao banco PostgreSQL e execute:
INSERT INTO users (id, name, email, password, role, "createdAt", "updatedAt")
VALUES (
  'admin001',
  'Administrador',
  'admin@assocon.com.br',
  '$2b$12$hash_da_senha_aqui', -- Use bcrypt para gerar o hash
  'ADMIN',
  NOW(),
  NOW()
);
```

Ou use o script de seed (se implementado).

## 🎨 Customização

### Cores e Tema

As cores principais podem ser alteradas no arquivo `src/app/globals.css`.

### Componentes

Os componentes UI estão em `src/components/ui/` e podem ser customizados conforme necessário.

### API

As rotas da API estão em `src/app/api/` e seguem o padrão REST.

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

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
npx prisma studio    # Interface visual do banco
npx prisma generate  # Gerar cliente Prisma
npx prisma db push   # Aplicar mudanças no banco
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório no Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Docker

```dockerfile
# Exemplo de Dockerfile será fornecido se necessário
```

## 📞 Suporte

Para dúvidas ou suporte:

- 📧 Email: dev@assocon.com.br
- 📱 WhatsApp: (11) 99999-9999
- 🌐 Site: https://assocon.com.br

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

Desenvolvido com ❤️ para a ASSOCON
