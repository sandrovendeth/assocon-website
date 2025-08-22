"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Users, Star, Award } from "lucide-react";
import { membershipSchema, type MembershipInput } from "@/lib/validations";

export default function AssociarSePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MembershipInput>({
    resolver: zodResolver(membershipSchema),
  });

  const onSubmit = async (data: MembershipInput) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage(
          "Solicitação enviada com sucesso! Entraremos em contato para finalizar sua associação."
        );
        reset();
      } else {
        const error = await response.json();
        setSubmitMessage(
          error.error || "Erro ao enviar solicitação. Tente novamente."
        );
      }
    } catch {
      setSubmitMessage("Erro ao enviar solicitação. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Acesso a eventos exclusivos e workshops",
    "Descontos em cursos e certificações",
    "Networking com profissionais da área",
    "Acesso ao portal do associado",
    "Consultoria jurídica especializada",
    "Revistas e publicações técnicas",
    "Participação em grupos de estudo",
    "Representação em órgãos de classe",
  ];

  const membershipTypes = [
    {
      type: "ASSOCIATE",
      name: "Associado",
      description: "Para profissionais contábeis registrados no CRC",
      price: "R$ 80,00/mês",
      features: [
        "Todos os benefícios básicos",
        "Acesso a eventos",
        "Consultoria técnica",
        "Portal do associado",
      ],
    },
    {
      type: "COLLABORATOR",
      name: "Colaborador",
      description: "Para estudantes e profissionais da área",
      price: "R$ 40,00/mês",
      features: [
        "Benefícios básicos",
        "Acesso limitado a eventos",
        "Descontos em cursos",
      ],
    },
    {
      type: "HONORARY",
      name: "Honorário",
      description: "Por convite especial da diretoria",
      price: "Gratuito",
      features: [
        "Todos os benefícios",
        "Acesso VIP a eventos",
        "Consultoria premium",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Associar-se</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Faça parte da maior comunidade de contabilistas do país
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefícios Exclusivos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra todas as vantagens de ser um associado ASSOCON
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Associação
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha o plano que melhor se adequa ao seu perfil profissional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTypes.map((membership, index) => (
              <Card
                key={index}
                className={`relative ${
                  index === 0 ? "border-blue-500 border-2" : ""
                }`}
              >
                {index === 0 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    {index === 0 && <Users className="w-8 h-8 text-blue-600" />}
                    {index === 1 && <Star className="w-8 h-8 text-blue-600" />}
                    {index === 2 && <Award className="w-8 h-8 text-blue-600" />}
                  </div>
                  <CardTitle className="text-2xl">{membership.name}</CardTitle>
                  <CardDescription>{membership.description}</CardDescription>
                  <div className="text-3xl font-bold text-blue-600 mt-4">
                    {membership.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {membership.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Formulário de Associação
            </h2>
            <p className="text-xl text-gray-600">
              Preencha seus dados para solicitar sua associação
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Dados Pessoais</CardTitle>
              <CardDescription>
                Todas as informações são confidenciais e utilizadas apenas para
                fins de associação.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      {...register("name")}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cpf"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      CPF
                    </label>
                    <Input
                      id="cpf"
                      {...register("cpf")}
                      placeholder="000.000.000-00"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="profession"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Profissão
                    </label>
                    <Input
                      id="profession"
                      {...register("profession")}
                      placeholder="Contador, Técnico em Contabilidade, etc."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Empresa
                    </label>
                    <Input id="company" {...register("company")} />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Endereço
                  </h3>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Endereço Completo
                    </label>
                    <Input
                      id="address"
                      {...register("address")}
                      placeholder="Rua, número, complemento"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Cidade
                      </label>
                      <Input id="city" {...register("city")} />
                    </div>

                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Estado
                      </label>
                      <Input
                        id="state"
                        {...register("state")}
                        placeholder="SP"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="zipCode"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        CEP
                      </label>
                      <Input
                        id="zipCode"
                        {...register("zipCode")}
                        placeholder="00000-000"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="membershipType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tipo de Associação
                  </label>
                  <select
                    id="membershipType"
                    {...register("membershipType")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="ASSOCIATE"
                  >
                    <option value="ASSOCIATE">Associado - R$ 80,00/mês</option>
                    <option value="COLLABORATOR">
                      Colaborador - R$ 40,00/mês
                    </option>
                  </select>
                </div>

                {submitMessage && (
                  <div
                    className={`p-4 rounded-md ${
                      submitMessage.includes("sucesso")
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                <div className="flex justify-end">
                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
