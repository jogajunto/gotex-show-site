"use client";

import React from "react";
import ReactDOMServer from "react-dom/server";

import "swiper/css";
import "swiper/css/effect-fade";

import { cn } from "@/lib/utils";

import { A11y, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import { Testimonial } from "@/components/testimonial";

export function Testimonials() {
  const heroSwiperOptions: SwiperProps = {
    modules: [Pagination, A11y, EffectFade],
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: (index, className) =>
        ReactDOMServer.renderToStaticMarkup(
          <span className={cn("aria-current:bg-default block size-4 cursor-pointer rounded-full bg-transparent outline-2 outline-offset-3 outline-white transition-colors duration-300", className)}>
            <span className="sr-only">Página {index + 1}</span>
          </span>,
        ),
    },
  };

  return (
    <section className="bg-brand-secondary bg-[url('/2025/images/bg-blue-flying-fabric-left.webp')] bg-center bg-no-repeat py-24">
      <div className="container max-w-4xl space-y-8">
        <h2 className="text-on-brand heading text-center">Depoimentos</h2>
        <Swiper {...heroSwiperOptions}>
          <SwiperSlide className="!h-auto">
            <Testimonial name="William Ribeiro" role="Estilista de Moda" company="Reluz Fitness">
              Minha empresa tem três anos e uma feira como essa ajuda muito a gente que está começando. Vir para um evento do tamanho da Gotex para poder buscar coisas novas e tendências possibilita que a gente esteja sempre inovando, sempre na frente no mercado da moda.
            </Testimonial>
          </SwiperSlide>
          <SwiperSlide className="!h-auto">
            <Testimonial name="Tony Habib" role="Expositor" company="Save-A-Lot Import & Export Co.">
              Até agora, o dia tem sido fantástico! Estou muito feliz e só se passaram quatro horas desde que o evento começou. Esse é um grande mercado. Minha expectativa é sair daqui com ainda mais clientes.
            </Testimonial>
          </SwiperSlide>
          <div className="swiper-pagination flex justify-center gap-4 pt-10 pb-2"></div>
        </Swiper>
      </div>
    </section>
  );
}
