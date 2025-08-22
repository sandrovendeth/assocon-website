# 🚀 SETUP - ASSOCON Website

Guia passo a passo para configurar e rodar o projeto ASSOCON.

## ✅ Pré-requisitos Instalados

- ✅ Node.js 18+
- ✅ npm/yarn/pnpm
- ⚠️ PostgreSQL (necessário instalar)

## 📦 Dependências Já Instaladas

Todas as dependências já estão instaladas:

```json
{
  "dependencies": {
    "@hookform/resolvers": "^5.2.1",
    "@prisma/client": "^6.14.0",
    "@radix-ui/react-slot": "^1.2.3",
    "@types/bcryptjs": "^2.4.6",
    "@types/jsonwebtoken": "^9.0.10",
    "bcryptjs": "^3.0.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "jsonwebtoken": "^9.0.2",
    "lucide-react": "^0.541.0",
    "next": "15.5.0",
    "prisma": "^6.14.0",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-hook-form": "^7.62.0",
    "tailwind-merge": "^3.3.1",
    "zod": "^4.0.17"
  }
}
```

## 🗄️ Setup do Banco PostgreSQL

### Opção 1: PostgreSQL Local

1. Instale PostgreSQL: https://www.postgresql.org/download/
2. Crie um banco: `CREATE DATABASE assocon_db;`
3. Crie um usuário: `CREATE USER assocon_user WITH PASSWORD 'sua_senha';`
4. Dê permissões: `GRANT ALL PRIVILEGES ON DATABASE assocon_db TO assocon_user;`

### Opção 2: PostgreSQL com Docker

```bash
docker run --name assocon-postgres \
  -e POSTGRES_DB=assocon_db \
  -e POSTGRES_USER=assocon_user \
  -e POSTGRES_PASSWORD=sua_senha \
  -p 5432:5432 \
  -d postgres:15
```

### Opção 3: Serviços Cloud (Gratuitos)

- **Railway**: https://railway.app/
- **Supabase**: https://supabase.com/
- **Vercel Postgres**: https://vercel.com/storage/postgres

## 🔧 Configuração Rápida

### 1. Configure as variáveis de ambiente

```bash
# Copie o arquivo de exemplo
cp env.example .env.local

# Edite .env.local com suas configurações
DATABASE_URL="postgresql://assocon_user:sua_senha@localhost:5432/assocon_db?schema=public"
JWT_SECRET="sua-chave-super-secreta-aqui"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="sua-nextauth-secret"
```

### 2. Configure o banco de dados

```bash
# Gerar o cliente Prisma
npm run db:generate

# Aplicar as migrações
npm run db:push

# Popular com dados de exemplo (opcional)
npm run db:seed
```

### 3. Inicie o servidor

```bash
npm run dev
```

🎉 **Pronto!** Acesse http://localhost:3000

## 👤 Login Administrativo

Após rodar o seed, use estas credenciais:

- **Email**: `admin@assocon.com.br`
- **Senha**: `admin123`
- **URL**: http://localhost:3000/admin/login

## 📱 URLs Principais

- 🏠 **Home**: http://localhost:3000
- 📋 **Sobre**: http://localhost:3000/sobre
- 📰 **Notícias**: http://localhost:3000/noticias
- 📅 **Eventos**: http://localhost:3000/eventos
- 👥 **Associar-se**: http://localhost:3000/associar-se
- 📞 **Contato**: http://localhost:3000/contato
- 🔐 **Admin**: http://localhost:3000/admin/login

## 🛠️ Scripts Úteis

```bash
# Desenvolvimento
npm run dev              # Servidor de desenvolvimento

# Build e produção
npm run build            # Build para produção
npm run start            # Servidor de produção

# Banco de dados
npm run db:generate      # Gerar cliente Prisma
npm run db:push          # Aplicar migrações
npm run db:seed          # Popular dados
npm run db:studio        # Interface visual do banco

# Qualidade de código
npm run lint             # Verificar ESLint
```

## 🐛 Resolução de Problemas

### Erro: "Module not found: Can't resolve '@prisma/client'"

```bash
npm run db:generate
```

### Erro: "PrismaClientValidationError"

```bash
npm run db:push
```

### Erro: "Environment variable not found: DATABASE_URL"

- Verifique se o arquivo `.env.local` existe
- Confirme se a `DATABASE_URL` está correta

### Banco não conecta

- Verifique se o PostgreSQL está rodando
- Teste a conexão: `psql -U assocon_user -d assocon_db -h localhost`

## 🌟 Próximos Passos

1. **Personalizar conteúdo**: Edite textos, imagens e informações
2. **Configurar email**: Configure SMTP para formulários
3. **Deploy**: Faça deploy na Vercel, Railway ou similar
4. **SSL**: Configure HTTPS em produção
5. **Backup**: Configure backup automático do banco

## 🎨 Customização

### Cores e Tema

Edite `src/app/globals.css` para alterar:

- Cores primárias e secundárias
- Fontes
- Espaçamentos

### Componentes

Personalize em `src/components/ui/`:

- Botões
- Cards
- Formulários
- Layouts

### Conteúdo

Atualize:

- Textos das páginas
- Informações de contato
- Links das redes sociais
- Logos e imagens

## 🔒 Segurança em Produção

1. **Mude as senhas padrão**
2. **Use chaves JWT seguras** (32+ caracteres)
3. **Configure HTTPS**
4. **Ative backup automático**
5. **Configure monitoramento**

---

✨ **Precisa de ajuda?** Consulte a documentação completa no README.md

