import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

export default function NoticiasPage() {
  // This would normally fetch from API
  const mockNews = [
    {
      id: 1,
      title: "Novas Regras Contábeis entram em vigor em 2024",
      excerpt:
        "Conselho Federal de Contabilidade anuncia mudanças importantes nas normas brasileiras de contabilidade...",
      category: "Regulamentação",
      publishedAt: "2024-01-15",
      author: "João Silva",
      imageUrl: null,
    },
    {
      id: 2,
      title: "ASSOCON promove workshop sobre Contabilidade Digital",
      excerpt:
        "Evento exclusivo para associados abordará as principais ferramentas digitais para escritórios contábeis...",
      category: "Eventos",
      publishedAt: "2024-01-10",
      author: "Maria Santos",
      imageUrl: null,
    },
    {
      id: 3,
      title: "Prazo para entrega da DIRF 2024 é definido",
      excerpt:
        "Receita Federal estabelece cronograma para declaração de imposto de renda retido na fonte...",
      category: "Tributário",
      publishedAt: "2024-01-08",
      author: "Carlos Oliveira",
      imageUrl: null,
    },
    {
      id: 4,
      title: "Curso de Auditoria Interna alcança 100% de aprovação",
      excerpt:
        "Programa de capacitação da ASSOCON registra excelente índice de satisfação entre os participantes...",
      category: "Educação",
      publishedAt: "2024-01-05",
      author: "Ana Costa",
      imageUrl: null,
    },
    {
      id: 5,
      title: "Parcerias estratégicas fortalecem a ASSOCON",
      excerpt:
        "Novos convênios com instituições de ensino e empresas do setor ampliam benefícios para associados...",
      category: "Institucional",
      publishedAt: "2024-01-03",
      author: "Pedro Almeida",
      imageUrl: null,
    },
    {
      id: 6,
      title: "Simplificação fiscal beneficia pequenas empresas",
      excerpt:
        "Governo federal anuncia medidas para reduzir burocracia no cumprimento de obrigações tributárias...",
      category: "Tributário",
      publishedAt: "2023-12-28",
      author: "Lucia Ferreira",
      imageUrl: null,
    },
  ];

  const categories = [
    "Todas",
    "Regulamentação",
    "Eventos",
    "Tributário",
    "Educação",
    "Institucional",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Notícias</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Mantenha-se atualizado com as últimas novidades do mundo contábil
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todas" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockNews.map((article) => (
              <Card
                key={article.id}
                className="hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(article.publishedAt).toLocaleDateString(
                          "pt-BR"
                        )}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 hover:text-blue-600">
                    <Link href={`/noticias/${article.id}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 mb-4">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href={`/noticias/${article.id}`}>Leia mais →</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" disabled>
                Anterior
              </Button>
              <Button>1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Próximo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não perca nenhuma novidade
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Assine nossa newsletter e receba as principais notícias do setor
            contábil diretamente em seu email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Assinar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

