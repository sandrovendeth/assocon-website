import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed do banco de dados...");

  // Create admin user (CHANGE PASSWORD IN PRODUCTION!)
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  const adminUser = await prisma.user.upsert({
    where: { email: "admin@assocon.com.br" },
    update: {},
    create: {
      name: "Administrador ASSOCON",
      email: "admin@assocon.com.br",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("✅ Usuário administrador criado:", adminUser.email);

  // Create sample posts
  const samplePosts = [
    {
      title: "Novas Regras Contábeis entram em vigor em 2024",
      content: `
        <p>O Conselho Federal de Contabilidade (CFC) anunciou importantes mudanças nas normas brasileiras de contabilidade que entrarão em vigor a partir de janeiro de 2024.</p>
        
        <p>As principais alterações incluem:</p>
        <ul>
          <li>Novos critérios para reconhecimento de receitas</li>
          <li>Mudanças na contabilização de instrumentos financeiros</li>
          <li>Atualizações nas normas de consolidação</li>
          <li>Novos padrões para relatórios de sustentabilidade</li>
        </ul>
        
        <p>Recomendamos que todos os profissionais se mantenham atualizados através dos cursos oferecidos pela ASSOCON.</p>
      `,
      excerpt:
        "Conselho Federal de Contabilidade anuncia mudanças importantes nas normas brasileiras de contabilidade...",
      category: "NEWS" as const,
      published: true,
      publishedAt: new Date("2024-01-15"),
      authorId: adminUser.id,
    },
    {
      title: "ASSOCON promove workshop sobre Contabilidade Digital",
      content: `
        <p>A ASSOCON realizará no próximo mês um workshop exclusivo para associados sobre as principais ferramentas digitais para escritórios contábeis.</p>
        
        <p>O evento abordará:</p>
        <ul>
          <li>Automação de processos contábeis</li>
          <li>Inteligência artificial na contabilidade</li>
          <li>Ferramentas de gestão digital</li>
          <li>Segurança da informação</li>
        </ul>
        
        <p>As inscrições já estão abertas no portal do associado.</p>
      `,
      excerpt:
        "Evento exclusivo para associados abordará as principais ferramentas digitais para escritórios contábeis...",
      category: "EVENT" as const,
      published: true,
      publishedAt: new Date("2024-01-10"),
      authorId: adminUser.id,
    },
    {
      title: "Prazo para entrega da DIRF 2024 é definido",
      content: `
        <p>A Receita Federal estabeleceu o cronograma oficial para a entrega da Declaração do Imposto de Renda Retido na Fonte (DIRF) referente ao ano-calendário de 2023.</p>
        
        <p>Principais prazos:</p>
        <ul>
          <li>Entrega: até 31 de março de 2024</li>
          <li>Retificação: até 31 de maio de 2024</li>
          <li>Multa por atraso: R$ 200,00 por mês</li>
        </ul>
        
        <p>A ASSOCON oferece suporte técnico para seus associados no cumprimento dessas obrigações.</p>
      `,
      excerpt:
        "Receita Federal estabelece cronograma para declaração de imposto de renda retido na fonte...",
      category: "NEWS" as const,
      published: true,
      publishedAt: new Date("2024-01-08"),
      authorId: adminUser.id,
    },
  ];

  for (const post of samplePosts) {
    const slug = post.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    await prisma.post.upsert({
      where: { slug },
      update: {},
      create: {
        ...post,
        slug,
      },
    });
  }

  console.log("✅ Posts de exemplo criados");

  // Create sample members
  const sampleMembers = [
    {
      name: "João Silva Santos",
      email: "joao.silva@email.com",
      phone: "(11) 99999-1111",
      cpf: "123.456.789-00",
      profession: "Contador",
      company: "Contabilidade Silva & Associados",
      membershipType: "ASSOCIATE" as const,
      status: "ACTIVE" as const,
    },
    {
      name: "Maria Oliveira Costa",
      email: "maria.costa@email.com",
      phone: "(11) 99999-2222",
      cpf: "987.654.321-00",
      profession: "Técnica em Contabilidade",
      company: "Escritório Costa Contabilidade",
      membershipType: "ASSOCIATE" as const,
      status: "ACTIVE" as const,
    },
    {
      name: "Pedro Almeida",
      email: "pedro.almeida@email.com",
      phone: "(11) 99999-3333",
      profession: "Estudante de Ciências Contábeis",
      membershipType: "COLLABORATOR" as const,
      status: "PENDING" as const,
    },
  ];

  for (const member of sampleMembers) {
    await prisma.member.upsert({
      where: { email: member.email },
      update: {},
      create: member,
    });
  }

  console.log("✅ Membros de exemplo criados");

  // Create sample contact messages
  const sampleMessages = [
    {
      name: "Ana Paula Rodrigues",
      email: "ana.rodrigues@email.com",
      phone: "(11) 98888-4444",
      subject: "Dúvida sobre associação",
      message:
        "Gostaria de saber mais informações sobre os benefícios da associação e como proceder para me tornar membro.",
    },
    {
      name: "Carlos Fernando",
      email: "carlos.fernando@email.com",
      subject: "Sugestão de curso",
      message:
        "Sugiro a realização de um curso sobre contabilidade internacional, pois há muita demanda no mercado.",
    },
  ];

  for (const message of sampleMessages) {
    await prisma.contactMessage.create({
      data: message,
    });
  }

  console.log("✅ Mensagens de contato de exemplo criadas");

  console.log("🎉 Seed concluído com sucesso!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Erro durante o seed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
