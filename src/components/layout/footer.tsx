import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">ASSOCON</span>
            </Link>
            <p className="text-gray-300 text-sm leading-6 max-w-md">
              Associação dos Contabilistas comprometida com o desenvolvimento
              profissional e a valorização da classe contábil.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com/assocon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/assocon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Notícias
                </Link>
              </li>
              <li>
                <Link
                  href="/eventos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/associar-se"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Associar-se
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contato
            </h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Email: contato@assocon.com.br</p>
              <p>Telefone: (11) 9999-9999</p>
              <p>
                Endereço: Rua das Flores, 123
                <br />
                São Paulo - SP
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} ASSOCON. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacidade"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
