import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

export default function SobrePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sobre a ASSOCON
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Conheça nossa história, missão e valores que nos guiam na
              valorização da classe contábil
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  A ASSOCON foi fundada em 1985 por um grupo de contabilistas
                  visionários que acreditavam na importância da união da classe
                  para o fortalecimento da profissão.
                </p>
                <p>
                  Desde então, temos trabalhado incansavelmente para promover a
                  valorização do profissional contábil, oferecendo capacitação,
                  networking e representatividade em discussões importantes do
                  setor.
                </p>
                <p>
                  Hoje, somos uma das principais associações do país, com mais
                  de 2.000 associados e reconhecimento nacional pela qualidade
                  de nossos serviços e eventos.
                </p>
              </div>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Missão, Visão e Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Promover o desenvolvimento profissional dos contabilistas,
                  fortalecendo a classe através da capacitação, networking e
                  representatividade.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Ser a principal referência nacional na representação e
                  desenvolvimento da classe contábil, reconhecida pela
                  excelência e inovação.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Ética, transparência, excelência, inovação, união da classe,
                  desenvolvimento contínuo e compromisso com a sociedade.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diretoria */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Diretoria
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça os profissionais que lideram a ASSOCON com dedicação e
              expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                nome: "Maria Silva",
                cargo: "Presidente",
                crc: "CRC-SP 123456",
              },
              {
                nome: "João Santos",
                cargo: "Vice-Presidente",
                crc: "CRC-SP 234567",
              },
              {
                nome: "Ana Costa",
                cargo: "Diretora Financeira",
                crc: "CRC-SP 345678",
              },
              {
                nome: "Carlos Oliveira",
                cargo: "Diretor de Ensino",
                crc: "CRC-SP 456789",
              },
              {
                nome: "Lucia Ferreira",
                cargo: "Diretora de Eventos",
                crc: "CRC-SP 567890",
              },
              {
                nome: "Pedro Almeida",
                cargo: "Diretor de Comunicação",
                crc: "CRC-SP 678901",
              },
            ].map((membro, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="mx-auto w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
                  <CardTitle>{membro.nome}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {membro.cargo}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-500">{membro.crc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ASSOCON em Números
            </h2>
            <p className="text-xl text-blue-100">
              Nosso impacto na comunidade contábil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { numero: "2000+", label: "Associados" },
              { numero: "38", label: "Anos de História" },
              { numero: "150+", label: "Eventos Realizados" },
              { numero: "50+", label: "Cursos Oferecidos" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.numero}
                </div>
                <div className="text-xl text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
