# 🛡️ Guia de Segurança - ASSOCON Website

## ⚠️ INFORMAÇÕES CRÍTICAS DE SEGURANÇA

### 🚨 ANTES DE FAZER DEPLOY EM PRODUÇÃO:

#### 1. **Variáveis de Ambiente Obrigatórias**
```bash
# TROQUE TODOS OS VALORES PADRÃO!
DATABASE_URL="postgresql://user:password@host:port/database"
JWT_SECRET="gere-uma-chave-aleatoria-forte-com-32-caracteres-minimo"
NEXTAUTH_SECRET="outra-chave-aleatoria-forte-diferente-da-jwt"
ADMIN_PASSWORD="senha-forte-para-admin-inicial"
```

#### 2. **Gerar Chaves Seguras**
```bash
# Para JWT_SECRET e NEXTAUTH_SECRET (Linux/Mac)
openssl rand -base64 32

# Para Windows (PowerShell)
[System.Web.Security.Membership]::GeneratePassword(32, 10)
```

#### 3. **Checklist de Segurança**
- [ ] Trocar todas as senhas padrão
- [ ] Usar HTTPS em produção
- [ ] Configurar variáveis no ambiente de produção (Vercel, Railway, etc.)
- [ ] Não commitar arquivos .env*
- [ ] Configurar backup do banco de dados
- [ ] Configurar CORS adequadamente
- [ ] Usar certificados SSL

#### 4. **Arquivos que NUNCA devem ir para o Git**
- `.env.local`
- `.env.production`
- `.env.development`
- `prisma/migrations/` (em alguns casos)
- Qualquer arquivo com senhas, chaves ou tokens

#### 5. **Configurações de Produção**
```bash
# Banco de dados
DATABASE_URL="postgresql://usuario:senha@servidor:5432/banco"

# JWT (CRÍTICO - usar chave forte)
JWT_SECRET="sua-chave-jwt-super-segura-32-caracteres-minimo"

# Next Auth
NEXTAUTH_URL="https://seudominio.com"
NEXTAUTH_SECRET="sua-chave-nextauth-diferente-da-jwt"

# Email (opcional)
SMTP_HOST="smtp.provedor.com"
SMTP_PORT="587"
SMTP_USER="seu-email@provedor.com"
SMTP_PASS="senha-do-email"

# Admin
ADMIN_PASSWORD="senha-super-forte-para-admin"
```

## 🔒 Boas Práticas Implementadas

✅ **Autenticação JWT com cookies httpOnly**
✅ **Senhas hasheadas com bcrypt**
✅ **Validação de entrada com Zod**
✅ **Sanitização de dados**
✅ **Proteção contra ataques CSRF**
✅ **Middleware de autenticação**

## 📞 Reportar Vulnerabilidades

Se encontrar uma vulnerabilidade de segurança, entre em contato por:
- Email: admin@assocon.com.br
- Não divulgue publicamente antes da correção

## 🔄 Atualizações de Segurança

- Mantenha as dependências sempre atualizadas
- Execute `npm audit` regularmente
- Monitore logs de segurança
