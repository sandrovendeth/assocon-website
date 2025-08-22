import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export default function EventosPage() {
  // This would normally fetch from API
  const mockEvents = [
    {
      id: 1,
      title: "Congresso Nacional de Contabilidade 2024",
      description:
        "O maior evento de contabilidade do país reunindo profissionais, estudantes e empresários do setor...",
      date: "2024-03-15",
      time: "08:00",
      location: "Centro de Convenções Anhembi - São Paulo/SP",
      capacity: 2000,
      registered: 1234,
      price: "R$ 450,00",
      category: "Congresso",
      featured: true,
    },
    {
      id: 2,
      title: "Workshop: Contabilidade Digital e IA",
      description:
        "Aprenda como a inteligência artificial está transformando a contabilidade e como aplicar em seu escritório...",
      date: "2024-02-20",
      time: "14:00",
      location: "Auditório ASSOCON - São Paulo/SP",
      capacity: 100,
      registered: 78,
      price: "R$ 120,00",
      category: "Workshop",
      featured: false,
    },
    {
      id: 3,
      title: "Seminário: Reforma Tributária",
      description:
        "Análise completa das mudanças na legislação tributária e seus impactos na prática contábil...",
      date: "2024-02-28",
      time: "19:00",
      location: "Online (Transmissão ao vivo)",
      capacity: 500,
      registered: 234,
      price: "R$ 80,00",
      category: "Seminário",
      featured: false,
    },
    {
      id: 4,
      title: "Curso: Auditoria Interna Avançada",
      description:
        "Programa intensivo de 40 horas sobre auditoria interna com certificação internacional...",
      date: "2024-04-10",
      time: "08:00",
      location: "Campus ASSOCON - São Paulo/SP",
      capacity: 40,
      registered: 12,
      price: "R$ 890,00",
      category: "Curso",
      featured: true,
    },
    {
      id: 5,
      title: "Mesa Redonda: Sustentabilidade Empresarial",
      description:
        "Discussão sobre relatórios de sustentabilidade e responsabilidade social corporativa...",
      date: "2024-03-05",
      time: "15:30",
      location: "Sala de Conferências FIESP - São Paulo/SP",
      capacity: 80,
      registered: 45,
      price: "Gratuito",
      category: "Mesa Redonda",
      featured: false,
    },
    {
      id: 6,
      title: "Encontro Regional: Interior de SP",
      description:
        "Evento regional para associados do interior paulista com networking e palestras técnicas...",
      date: "2024-03-22",
      time: "13:00",
      location: "Centro de Eventos Ribeirão Preto/SP",
      capacity: 200,
      registered: 89,
      price: "R$ 60,00",
      category: "Encontro",
      featured: false,
    },
  ];

  const categories = [
    "Todos",
    "Congresso",
    "Workshop",
    "Seminário",
    "Curso",
    "Mesa Redonda",
    "Encontro",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Eventos</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Participe dos melhores eventos de contabilidade do país
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
                variant={category === "Todos" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Eventos em Destaque
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {mockEvents
              .filter((event) => event.featured)
              .map((event) => (
                <Card
                  key={event.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {event.category}
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        {event.price}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString(
                          "pt-BR"
                        )} às {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {event.registered}/{event.capacity} inscritos
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button asChild className="flex-1">
                        <Link href={`/eventos/${event.id}`}>Ver Detalhes</Link>
                      </Button>
                      <Button variant="outline">Inscrever-se</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* All Events */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Todos os Eventos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEvents.map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                    <span className="text-sm font-bold text-green-600">
                      {event.price}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2 mb-4">
                    {event.description}
                  </CardDescription>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.date).toLocaleDateString("pt-BR")}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {event.registered}/{event.capacity} vagas
                    </span>
                    <Button asChild size="sm">
                      <Link href={`/eventos/${event.id}`}>Ver mais</Link>
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Organize seu próprio evento
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A ASSOCON oferece suporte completo para realização de eventos
            profissionais
          </p>
          <Button size="lg">Saiba Como</Button>
        </div>
      </section>
    </div>
  );
}
