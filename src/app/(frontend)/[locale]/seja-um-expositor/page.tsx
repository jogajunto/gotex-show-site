import Image from "next/image";
import Link from "next/link";

import { CheckCircle, CircleDollarSign, CircleX, Download, Eye, Handshake, MicVocal, Rocket, Star, User } from "lucide-react";

import { Button, Buttons } from "@/components/button";
import { CallToAction } from "@/components/call-to-action";
import { CardIcon } from "@/components/card-icon";
import { ColoredLine } from "@/components/colored-line";
import { EventAttributes } from "@/components/event-attributes";
import { IconList } from "@/components/icon-list";
import { Partners } from "@/components/partners";
import { Table } from "@/components/table";
import { BeAnExhibitorForm } from "@/components/be-an-exhibitor-form";
import { Testimonials } from "@/components/testimonials";

import imageHero from "@/public/2025/images/seja-um-expositor/hero.webp";
import { useTranslations } from "next-intl";

export default function Page() {
  return (
    <main>
      <section className="bg-secondary relative z-0">
        <div className="relative -z-10">
          <Image className="h-60 w-full object-cover md:h-80" src={imageHero} placeholder="blur" alt="Pessoas no evento da Gotex Show" width={1200} height={320} />
          <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black"></div>
        </div>
        <div className="bg-default container -mt-24 md:bg-transparent">
          <div className="bg-default md:border-default grid items-end rounded md:grid-cols-12 md:border md:shadow">
            <div className="space-y-4 pt-10 md:col-span-6 md:p-10 lg:col-span-7">
              <h1 className="text-default subtitle">
                <span className="text-brand">Seja um expositor</span> no maior evento têxtil do Brasil!
              </h1>
              <p>A Gotex Show reúne compradores, lojistas, confeccionistas e importadores do Brasil e do exterior em busca das últimas tendências e inovações da indústria têxtil.</p>
              <IconList className="space-y-2">
                <IconList.Item icon={CheckCircle} classname="icon-brand">
                  <strong className="text-default">+5.000 visitantes qualificados</strong> em busca de fornecedores e parceiros
                </IconList.Item>
                <IconList.Item icon={CheckCircle} classname="icon-brand">
                  <strong className="text-default">Mais de 150 expositores</strong> nacionais e internacionais
                </IconList.Item>
                <IconList.Item icon={CheckCircle} classname="icon-brand">
                  Oportunidades de <strong className="text-default">networking e negócios globais</strong>
                </IconList.Item>
              </IconList>
              <Buttons>
                <Button size="md" variant="primary" asChild>
                  <Link href="/">Quero ser expositor</Link>
                </Button>
                <Button size="md" variant="outline" asChild>
                  <Link href="/"> Ver opções de patrocínio</Link>
                </Button>
              </Buttons>
            </div>
            <div className="p-10 pb-0 md:col-span-6 lg:col-span-5">
              <Image src="/2025/images/seja-um-expositor/seja-um-expositor.webp" alt="Pessoas no evento da Gotex Show" width={370} height={414} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24" id="contato">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-8">
            <div className="space-y-10 md:col-span-4 lg:col-span-5">
              <div className="space-y-2">
                <h2 className="text-overline text-brand-secondary">Contato</h2>
                <p className="text-default heading">
                  Fale com um de nossos consultores e <strong className="text-brand-secondary">reserve o seu estande</strong>
                </p>
              </div>
              <BeAnExhibitorForm />
            </div>
            <div className="md:col-span-4 lg:col-span-3">
              <div className="bg-brand-secondary text-on-brand-secondary overflow-hidden rounded-lg">
                <ColoredLine />
                <div className="space-y-6 p-10">
                  <h2 className="text-3xl font-semibold">
                    Gotex Show <br /> 12ª edição
                  </h2>
                  <p>Encontro Internacional Têxtil, de Moda e Negócios</p>
                  <EventAttributes />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" id="beneficios">
        <div className="flex flex-col gap-y-12">
          <div className="container space-y-2 text-center">
            <h2 className="text-brand text-overline">Benefícios</h2>
            <p className="text-default heading">
              <span className="text-brand">Por que participar</span> do Encontro Internacional Têxtil, de Moda e Negócios?
            </p>
          </div>
          <div className="container max-w-7xl">
            <div className="flex flex-wrap justify-center gap-4">
              <Image className="h-auto w-14 md:w-20" src="/2025/images/seja-um-expositor/flag-bangladesh.svg" alt="Bandeira Bangladesh" width={83} height={40} loading="lazy" />
              <Image className="h-auto w-14 md:w-20" src="/2025/images/seja-um-expositor/flag-bolivia.svg" alt="Bandeira Bolivia" width={83} height={40} loading="lazy" />
              <Image className="h-auto w-14 md:w-20" src="/2025/images/seja-um-expositor/flag-brazil.svg" alt="Bandeira Brasil" width={83} height={40} loading="lazy" />
              <Image className="h-auto w-14 md:w-20" src="/2025/images/seja-um-expositor/flag-china.svg" alt="Bandeira China" width={83} height={40} loading="lazy" />
              <Image className="h-auto w-14 md:w-20" src="/2025/images/seja-um-expositor/flag-egypt.svg" alt="Bandeira Egito" width={83} height={40} loading="lazy" />
              <Image className="h-auto w-14 md:w-20" src="/2025/images/seja-um-expositor/flag-usa.svg" alt="Bandeira estadoos Unidos da America" width={83} height={40} loading="lazy" />
              <Image className="h-auto w-14 md:w-20" src="/2025/images/seja-um-expositor/flag-italy.svg" alt="Bandeira Italia" width={83} height={40} loading="lazy" />
              <Image className="h-auto w-14 md:w-20" src="/2025/images/seja-um-expositor/flag-india.svg" alt="Bandeira India" width={83} height={40} loading="lazy" />
              <Image className="h-auto w-14 md:w-20" src="/2025/images/seja-um-expositor/flag-mexico.svg" alt="Bandeira Mexico" width={83} height={40} loading="lazy" />
              <Image className="h-auto w-14 md:w-20" src="/2025/images/seja-um-expositor/flag-coreia.svg" alt="Bandeira Coreia" width={83} height={40} loading="lazy" />
              <Image className="h-auto w-14 md:w-20" src="/2025/images/seja-um-expositor/flag-peru.svg" alt="Bandeira Peru" width={83} height={40} loading="lazy" />
              <Image className="h-auto w-14 md:w-20" src="/2025/images/seja-um-expositor/flag-turkey.svg" alt="Bandeira Turquia" width={83} height={40} loading="lazy" />
            </div>
          </div>
          <div className="container space-y-6">
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
              <li className="lg:col-span-3">
                <CardIcon icon={Rocket} title="Lançamento de produtos" description="Evento ideal para lançar novos produtos e obter feedback direto dos consumidores e especialistas do setor." />
              </li>
              <li className="lg:col-span-3">
                <CardIcon icon={User} title="Prospecção e geração de leads" description="Colete contatos valiosos e leads qualificados que podem se transformar em futuras vendas." />
              </li>
              <li className="lg:col-span-3">
                <CardIcon icon={CircleDollarSign} title="Promoções e ofertas" description="Aproveite para oferecer promoções exclusivas e atrair mais visitantes ao seu estande." />
              </li>
              <li className="lg:col-span-3">
                <CardIcon icon={Eye} title="Grande visibilidade" description="Alcance mais de 5.000 visitantes*, além de poder aparecer nos veículos de imprensa que cobrem o evento." />
              </li>
              <li className="lg:col-span-4">
                <CardIcon icon={Star} title="Business Lounge exclusivo" description="Além do espaço para negociação, você também terá acesso a assessoria e consultoria técnica em comércio exterior." />
              </li>
              <li className="lg:col-span-4">
                <CardIcon icon={Handshake} title="Networking e parcerias" description="Você terá contato direto com administradores e decisores de empresas têxteis nacionais e internacionais." />
              </li>
              <li className="md:col-span-2 lg:col-span-4">
                <CardIcon icon={MicVocal} title="Serviço gratuito de intérpretes" description="Ofereceremos o serviço gratuito de intérpretes durante os três dias de evento." />
              </li>
            </ul>
            <p className="text-right text-sm">*Número de visitantes esperado na Gotex Show 2025 com base no público da última edição.</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary relative z-0 overflow-hidden py-24" id="publico">
        <div className="container">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-brand text-overline">Público</span>
                <h2 className="text-default text-3xl font-semibold">Perfil dos visitantes</h2>
              </div>
              <p>A Gotex Show atrai um público qualificado do setor têxtil, incluindo empresários, varejistas, atacadistas, e-commerce e indústrias.</p>
              <p>Com visitantes nacionais e internacionais, o evento reúne decisores e influenciadores do mercado e seus principais interesses são tecidos, vestuário, moda praia, acessórios e aviamentos.</p>
              <Buttons>
                <Button size="md" variant="primary" asChild>
                  <Link href="/">Quero expor</Link>
                </Button>
                <Button size="md" variant="outline" asChild>
                  <Link href="/">
                    <Download className="size-4" />
                    Perfil completo dos visitantes
                  </Link>
                </Button>
              </Buttons>
            </div>
            <div className="relative">
              <Image className="m-auto" src="/2025/images/seja-um-expositor/perfil-dos-visitantes.webp" alt="Mosaico de fotos sobre o publico dentro do evento da Gotex" width={518} height={475} loading="lazy" />
              <div className="absolute top-0 -z-10 h-[100%] w-[100%] scale-[500%] rotate-180 bg-[#60C8B3] [clip-path:polygon(0_0,100%_0,100%_100%)] md:origin-center md:rotate-0"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/2025/images/bg-green-flying-fabric-right.webp')] bg-cover bg-no-repeat py-24" id="tipos-de-cotas">
        <div className="container flex flex-col gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="space-y-2">
              <h2 className="text-brand text-overline">Tipos de cotas</h2>
              <p className="text-default heading">Conheça as opções de patrocínio disponíveis</p>
            </div>
            <p>Temos estandes disponíveis que vão de 9 m² até uma ilha completa de 72 m². Você pode escolher o tamanho ideal para sua empresa e também decidir qual das três opções de patrocínio prefere:</p>
          </div>
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Header>Tipo de patrocínio</Table.Header>
                <Table.Header className="text-center">Malha</Table.Header>
                <Table.Header className="text-center">Algodão</Table.Header>
                <Table.Header className="text-center">Seda</Table.Header>
              </Table.Row>
            </Table.Head>
            <tbody>
              <Table.Row>
                <Table.Cell>Logo na identidade visual do evento</Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Ações de marketing nas redes sociais</Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Inclusão de brindes no kit de boas-vindas dos participantes</Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Destaque no Business Lounge</Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Não</span>
                  <CircleX className="icon-danger mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Acesso VIP ao Business Lounge</Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Não</span>
                  <CircleX className="icon-danger mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Destaque no palco das palestras</Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Não</span>
                  <CircleX className="icon-danger mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Não</span>
                  <CircleX className="icon-danger mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Ações de marketing por e-mail</Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Não</span>
                  <CircleX className="icon-danger mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Não</span>
                  <CircleX className="icon-danger mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Workshops no Business Lounge</Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Não</span>
                  <CircleX className="icon-danger mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Não</span>
                  <CircleX className="icon-danger mx-auto" />
                </Table.Cell>
                <Table.Cell>
                  <span className="sr-only">Sim</span>
                  <CheckCircle className="icon-brand mx-auto" />
                </Table.Cell>
              </Table.Row>
            </tbody>
          </Table>
          <Buttons>
            <Button size="md" variant="primary" asChild>
              <Link href="/">Quero expor</Link>
            </Button>
            <Button size="md" variant="outline" asChild>
              <Link href="/">
                <Download className="size-4" />
                Detalhes dos estandes
              </Link>
            </Button>
          </Buttons>
        </div>
      </section>

      <Testimonials />
      <CallToAction />
      <Partners />
    </main>
  );
}
