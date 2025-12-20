import { useEffect, useRef, useState } from "react";
import { Menu, X, FlaskConical, Beaker, Atom, Droplet, Award, Shield, Lightbulb, ArrowRight, Mail, Phone, MapPin, Globe, ChevronDown, Pill, Stethoscope, Currency } from 'lucide-react';
import { motion } from "framer-motion";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

import qr1 from "../../src/assets/qr/istina_685576841.png";
import qr2 from "../../src/assets/qr/istina_660882404.png";
import qr3 from "../../src/assets/qr/istina_776944165.png";

import fasieLogo from "../../src/assets/FASIE.svg"
import ourLogo from "../../src/assets/logo.svg"
import scheme_stomach from "../../src/assets/sheme.png"

type Language = 'en' | 'ru';

const translations = {
  en: {
    nav: {
      services: 'Directions',
      howItWorks: 'How It Works',
      innovation: 'Innovation',
      about: 'About',
      contact: 'Contact',
      getStarted: 'Get Started'
    },
    hero: {
      badge: 'SILIKAFER',
      title: "Next-generation drug delivery",
      description: 'We develop drug delivery systems to combat iron-deficiency anemia.',
    },
    services: {
      title: 'Our core directions',
      subtitle: 'We develop iron delivery systems with controlled release where absorption happens.',
      service1: {
        title: 'Delivery system development',
        description: 'We design solutions to carry iron past the stomach and into the intestine.'
      },
      service2: {
        title: 'Formula optimization',
        description: 'We refine composition and parameters to reduce premature release.'
      },
      service3: {
        title: 'Project support',
        description: 'We support development from concept to a working prototype.'
      },
    },
    howItWorks: {
      title: 'Combined delivery: iron + B12',
      subtitle: 'Solution of problems in developing micronutrient delivery systems to support therapies for anemias linked to iron and vitamin B12 deficiencies',
    },
    innovation: {
      title: 'Innovation at Every Molecule',
      description: 'We combine cutting-edge technology with decades of expertise to deliver chemical solutions that drive progress across industries.',
      feature1: {
        title: '50+ Years Experience',
        description: 'Industry-leading expertise'
      },
      feature2: {
        title: 'ISO Certified',
        description: 'Highest quality standards'
      },
      feature3: {
        title: 'Sustainable Innovation',
        description: 'Eco-friendly solutions'
      }
    },
    about: {
      title: 'Shaping the Future of Chemistry',
      description1: "ChemFlow has been at the forefront of chemical innovation since our founding. We're committed to developing sustainable solutions that meet the evolving needs of modern industries.",
      description2: "Our state-of-the-art facilities and dedicated team of scientists work tirelessly to push the boundaries of what's possible in chemical engineering and development.",
      stats: {
        projects: 'Projects',
        clients: 'Clients',
        scientists: 'Scientists'
      }
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to start your next chemical innovation project?',
      email: 'Email Us',
      phone: 'Call Us',
      location: 'Visit Us',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        messagePlaceholder: 'Tell us about your project...',
        submit: 'Send Message'
      }
    },
    footer: {
      rights: '© 2025 ООО "Силикафер". All rights reserved.'
    }
  },
  ru: {
    nav: {
      services: 'Направления',
      howItWorks: 'Как это работает',
      innovation: 'Инновации',
      about: 'О нас',
      contact: 'Контакты',
      getStarted: 'Начать'
    },
    hero: {
      badge: 'СИЛИКАФЕР',
      title: 'Доставка лекарств нового поколения',
      description: 'Разрабатываем системы доставки лекарственных препаратов для противодействия железодефицитной анемии.',
    },
    services: {
      title: 'Наши ключевые направления',
      subtitle: 'Разрабатываем системы доставки железа с контролируемым высвобождением там, где оно всасывается.',
      service1: {
        title: 'Разработка систем доставки',
        description: 'Создаём решения для адресного переноса железа через желудок к кишечнику.'
      },
      service2: {
        title: 'Оптимизация формулы',
        description: 'Подбираем состав и параметры, чтобы снизить преждевременное высвобождение.'
      },
      service3: {
        title: 'Проектное сопровождение',
        description: 'Ведём разработку от идеи до готового прототипа решения.'
      }
    },
    howItWorks: {
      title: 'Комбинированная доставка: железо + B12',
      subtitle: 'Решение проблем разработки систем доставки микронутриентов для поддержки терапии анемий, связанных с дефицитом железа и витамина B12.',
    },
    innovation: {
      title: 'Инновации на уровне каждой молекулы',
      description: 'Мы сочетаем передовые технологии с многолетним опытом для предоставления химических решений, которые стимулируют прогресс в различных отраслях.',
      feature1: {
        title: 'Более 50 лет опыта',
        description: 'Лидирующая экспертиза в отрасли'
      },
      feature2: {
        title: 'Сертификация ISO',
        description: 'Высочайшие стандарты качества'
      },
      feature3: {
        title: 'Устойчивые инновации',
        description: 'Экологически чистые решения'
      }
    },
    about: {
      title: 'Формируем будущее химии',
      description1: 'ChemFlow находится в авангарде химических инноваций с момента своего основания. Мы стремимся разрабатывать устойчивые решения, отвечающие развивающимся потребностям современной промышленности.',
      description2: 'Наши современные объекты и преданная команда ученых неустанно работают над расширением границ возможного в химической инженерии и разработке.',
      stats: {
        projects: 'Проектов',
        clients: 'Клиентов',
        scientists: 'Ученых'
      }
    },
    contact: {
      title: 'Свяжитесь с нами',
      subtitle: 'Готовы начать свой следующий проект химических инноваций?',
      email: 'Напишите нам',
      phone: 'Позвоните нам',
      location: 'Посетите нас',
      form: {
        name: 'Имя',
        namePlaceholder: 'Ваше имя',
        email: 'Email',
        emailPlaceholder: 'ваш@email.com',
        message: 'Сообщение',
        messagePlaceholder: 'Расскажите о вашем проекте...',
        submit: 'Отправить сообщение'
      }
    },
    footer: {
      rights: '© 2025 ООО "Силикафер". Все права защищены.'
    }
  }
};

export const mech = {
  ru: {
    mechanism: {
      title: "Контролируемое высвобождение: желудок → кишечник",
      subtitle:
        "PMSSO-гидрогель с комплексами железа на основе HPCD: повышаем загрузку и замедляем высвобождение в кислой среде.",
      steps: [
        {
          title: "Проблема",
          text:
            "Связка «PMSSO + Fe(II) D-глюконат» в пилотных экспериментах склонна к быстрому высвобождению в кислой среде, а эффективности сорбции может быть недостаточно для терапевтически значимой дозировки.",
        },
        {
          title: "Подход",
          text:
            "Включаем соединения железа в госте-хозяин комплексы с 2-гидроксипропил-β-циклодекстрином (HPCD) и внедряем их в сеть PMSSO-гидрогеля, чтобы получить более контролируемую систему доставки.",
        },
        {
          title: "Проверка в модели ЖКТ",
          text:
            "В средах, имитирующих пищеварительный тракт, последовательная смена буферов «желудок → кишечник» показала замедление высвобождения железа при добавлении циклодекстриновых комплексов.",
        },
      ],
      roadmapTitle: "Roadmap: модуль витамина B12",
      roadmapText:
        "PMSSO-гидрогель исследован как носитель витамина B12; профиль высвобождения изучали в трёх средах (pH 1.1 → 6.8 → 7.4). При этом кривая высвобождения показывает быстрое высвобождение в кислой (желудочной) среде.",
      sourceLabel: "Источник: ИСТИНА (МГУ)",
      openLabel: "Открыть",
    },
  },

  en: {
    mechanism: {
      title: "Controlled release: stomach → intestine",
      subtitle:
        "PMSSO hydrogel with HPCD-based iron complexes: improving loading and slowing release in acidic medium.",
      steps: [
        {
          title: "Challenge",
          text:
            "In pilot experiments, the “PMSSO + Fe(II) D-gluconate” system is prone to rapid release in acidic media, and sorption efficiency may be insufficient for an adequate therapeutic concentration.",
        },
        {
          title: "Approach",
          text:
            "We incorporate iron compounds into host–guest complexes with 2-hydroxypropyl-β-cyclodextrin (HPCD) and embed them into the PMSSO hydrogel network to enable a more controlled delivery system.",
        },
        {
          title: "GI-mimicking validation",
          text:
            "In digestive-tract-simulating media, sequential buffer changes from “stomach → intestinal” highlighted slower iron release when cyclodextrin complexes were introduced.",
        },
      ],
      roadmapTitle: "Roadmap: vitamin B12 module",
      roadmapText:
        "PMSSO hydrogel has been examined as a vitamin B12 carrier; release was studied in three media (pH 1.1 → 6.8 → 7.4). The release curve shows rapid release in the acidic (gastric) medium.",
      sourceLabel: "Source: ISTINA (MSU)",
      openLabel: "Open",
    },
  },
};

const i18n_mech = {
  ru: {
    schemeAlt: "Механизм контролируемого высвобождения",
    schemeCaption: "Механизм контролируемого высвобождения",
  },
  en: {
    schemeAlt: "Controlled release mechanism",
    schemeCaption: "Controlled release mechanism",
  },
} as const;

// lang: "ru" | "en"
const tr_mech = i18n_mech[language];

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

// helper: мягкая анимация
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function MechanismSection({
  t,
  language,
  accent = "var(--chem-coral)",
}: {
  t: any;
  language: "ru" | "en";
  accent?: string;
}) {
  const m = t[language].mechanism;

  return (
    <section id="mechanism" className="py-20 px-4">
      <div className="lg:grid-cols-2 lg:items-start max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-semibold" style={{ color: "var(--chem-dark)" }}>
            {m.title}
          </h2>
          <p className="mt-3 text-lg" style={{ color: "rgba(43,45,66,0.72)" }}>
            {m.subtitle}
          </p>
        </motion.div>

        <div className="lg:sticky lg:top-24 lg:grid-cols-2 lg:items-start flex items-center justify-center relative rounded-3xl bg-white/70 flex items-center justify-center p-6">
          {/* LEFT: schematic card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="rounded-3xl border overflow-hidden bg-white/70"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            <div className="p-8">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium" style={{ color: "rgba(43,45,66,0.7)" }}>
                  {language === "ru" ? "Схема высвобождения" : "Release schematic"}
                </div>
                <div
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    background: "rgba(239,35,60,0.10)",
                    color: "var(--chem-red)",
                    border: "1px solid rgba(217,4,41,0.15)",
                  }}
                >
                  pH 1.1 → 6.8 → 7.4
                </div>
              </div>

              {/* timeline */}
              <div className="mt-6 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">
                <div className="rounded-2xl p-4 border bg-white"
                     style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <div className="flex items-center gap-2">
                    <Pill className="w-4 h-4" style={{ color: accent }} />
                    <div className="font-semibold" style={{ color: "var(--chem-dark)" }}>
                      {language === "ru" ? "Желудок" : "Stomach"}
                    </div>
                  </div>
                  <div className="mt-2 text-sm" style={{ color: "rgba(43,45,66,0.72)" }}>
                    {language === "ru" ? "Снизить раннее высвобождение" : "Reduce early release"}
                  </div>
                </div>

                <ArrowRight className="w-5 h-5" style={{ color: "rgba(43,45,66,0.45)" }} />

                <div className="rounded-2xl p-4 border bg-white"
                     style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <div className="flex items-center gap-2">
                    <FlaskConical className="w-4 h-4" style={{ color: accent }} />
                    <div className="font-semibold" style={{ color: "var(--chem-dark)" }}>
                      {language === "ru" ? "Тонкий кишечник" : "Small intestine"}
                    </div>
                  </div>
                  <div className="mt-2 text-sm" style={{ color: "rgba(43,45,66,0.72)" }}>
                    {language === "ru" ? "Контролируемое высвобождение" : "Controlled release"}
                  </div>
                </div>

                <ArrowRight className="w-5 h-5" style={{ color: "rgba(43,45,66,0.45)" }} />

                <div className="rounded-2xl p-4 border bg-white"
                     style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4" style={{ color: accent }} />
                    <div className="font-semibold" style={{ color: "var(--chem-dark)" }}>
                      {language === "ru" ? "Roadmap" : "Roadmap"}
                    </div>
                  </div>
                  <div className="mt-2 text-sm" style={{ color: "rgba(43,45,66,0.72)" }}>
                    {language === "ru" ? "Модуль B12" : "B12 module"}
                  </div>
                </div>
              </div>

              {/* soft blob */}
              <div className="relative rounded-3xl bg-white/60 p-6">
                <img
                  src={scheme_stomach}
                  alt="Controlled release mechanism"
                  className="mx-auto max-w-full h-auto object-contain select-none pointer-events-none"
                />
              
                <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full center bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur">
                    {tr_mech.schemeCaption}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="rounded-3xl bg-white/70 p-8"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            <div className="space-y-6">
              {m.steps.map((s: any, idx: number) => (
                <div key={idx} className="rounded-2xl border bg-white p-5"
                     style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-semibold"
                      style={{ background: "rgba(239,35,60,0.10)", color: "var(--chem-red)" }}
                    >
                      {idx + 1}
                    </div>
                    <div className="text-base font-semibold" style={{ color: "var(--chem-dark)" }}>
                      {s.title}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(43,45,66,0.78)" }}>
                    {s.text}
                  </p>
                </div>
              ))}

              {/* Roadmap B12 */}
              <div
                className="rounded-2xl border p-5"
                style={{
                  borderColor: "rgba(217,4,41,0.18)",
                  background: "rgba(239,35,60,0.08)",
                }}
              >
                <div className="text-base font-semibold" style={{ color: "var(--chem-red)" }}>
                  {m.roadmapTitle}
                </div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(43,45,66,0.78)" }}>
                  {m.roadmapText}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Благодарность Фонду содействия инновациям (плашка)
// usage: <GrantThanksCard />

export function GrantThanksCard() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* subtle background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-slate-100 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-slate-100 blur-3xl" />
          </div>

          <div className="relative flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            {/* left */}
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Благодарность партнёру
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Спасибо Фонду содействия инновациям
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
                Проект реализуется при поддержке Фонда содействия инновациям.
              </p>

              {/* optional: grant line */}
              <p className="mt-2 text-sm text-slate-500">
                {/* Если нужно — раскомментируй и подставь номер */}
                Грант № <span className="font-medium text-slate-700">XXXXX</span>
              </p>
            </div>

            {/* right */}
            <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
              {/* Logo placeholder */}
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
                <img
                  src={fasieLogo}
                  alt="Фонд содействия инновациям"
                  className="h-10 w-auto shrink-0"
                />
              </div>

              <a
                href="https://fasie.ru/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Перейти на сайт фонда
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-70"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 7H17V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type BaseProps = {
  title: React.ReactNode;
  value: React.ReactNode;
  href?: string;
  variant?: "row" | "stacked";
  iconSize?: "sm" | "md" | "lg";
};

type WithIconNode = BaseProps & {
  icon: React.ReactNode;
  Icon?: never;
};

type WithIconComponent = BaseProps & {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  icon?: never;
};

type ContactCardProps = WithIconNode | WithIconComponent;

const iconSizeClass: Record<NonNullable<BaseProps["iconSize"]>, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
};

const badgeSizeClass: Record<NonNullable<BaseProps["iconSize"]>, string> = {
  sm: "h-12 w-12 rounded-xl",
  md: "h-14 w-14 rounded-2xl",
  lg: "h-20 w-20 rounded-2xl",
};

export function ContactCard(props: ContactCardProps) {
  const variant = props.variant ?? "row";
  const iconSize = props.iconSize ?? "md";

  const IconEl =
    "Icon" in props ? (
      <props.Icon className={iconSizeClass[iconSize]} />
    ) : (
      props.icon
    );

  const content =
    variant === "stacked" ? (
      <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex flex-col items-center text-center">
          <div className={`grid place-items-center bg-slate-100 text-slate-700 ${badgeSizeClass[iconSize]}`}>
            {/* если передали <img>, пусть он сам подчинится размерам */}
            <div className={iconSizeClass[iconSize]}>{IconEl}</div>
          </div>

          <div className="mt-4 text-sm font-semibold tracking-wide text-slate-900">
            {props.title}
          </div>

          <div className="mt-1 text-sm text-slate-600">{props.value}</div>
        </div>
      </div>
    ) : (
      <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-start gap-4">
          <div className={`grid place-items-center bg-slate-100 text-slate-700 ${badgeSizeClass[iconSize]}`}>
            <div className={iconSizeClass[iconSize]}>{IconEl}</div>
          </div>

          <div className="min-w-0">
            <div className="text-sm font-medium text-slate-900">{props.title}</div>
            <div className="mt-1 break-words text-sm text-slate-600">{props.value}</div>
          </div>
        </div>
      </div>
    );

  return props.href ? (
    <a
      href={props.href}
      className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
    >
      {content}
    </a>
  ) : (
    content
  );
}


import type React from "react";
import { ArrowUpRight } from "lucide-react";

type BrandCardProps = {
  logo: React.ReactNode;     // <img .../> или что угодно
  title: React.ReactNode;    // строка/JSX
  subtitle?: React.ReactNode; // мелкий текст
  href?: string;             // куда ведём
  cta?: React.ReactNode;     // текст кнопки
};

export function BrandCard({
  logo,
  title,
  subtitle,
  href = "./",
  cta = "Открыть",
}: BrandCardProps) {
  const content = (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-7">
      {/* мягкий фон, чтобы было “покрасивше”, но не кричаще */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-slate-100 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        {/* left */}
        <div className="flex items-center gap-5">
          <div className="grid h-20 w-20 place-items-center rounded-2xl bg-slate-100 text-slate-700 sm:h-24 sm:w-24">
            <div className="h-14 w-14 sm:h-16 sm:w-16">{logo}</div>
          </div>

          <div className="min-w-0">
            <div className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              {title}
            </div>
            {subtitle && (
              <div className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600">
                {subtitle}
              </div>
            )}
          </div>
        </div>

        {/* right */}
        <div className="flex shrink-0 items-center justify-start sm:justify-end">
          <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition group-hover:bg-slate-50">
            {cta}
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <a
      href={href}
      className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
    >
      {content}
    </a>
  );
}


type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.currentTarget; // <- currentTarget типизирован
    setForm((s) => ({ ...s, [name]: value }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <section id="contact" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Свяжитесь с нами
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-slate-200" />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-1">
          <BrandCard
            href="./"
            logo={<img src={ourLogo} alt="" className="h-full w-full object-contain" />}
            title="СИЛИКАФЕР"
            subtitle="Научные исследования и разработки в области естественных и технических наук (прочие)"
            cta="На главную"
          />

          <ContactCard Icon={Mail} title="Email" value="you@domain.com" href="mailto:you@domain.com" />

          <ContactCard
            Icon={Phone}
            title="Телефон"
            value="+1 (555) 123-4567"
            href="tel:+15551234567"
          />

          <ContactCard
            Icon={MapPin}
            title="Адрес"
            value="119602, город Москва, ул Академика Анохина, д. 42 к. 2, кв. 219"
            href="https://yandex.com/maps/-/CLDNR8Ok"
          />

        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [language, setLanguage] = useState<Language>('en');
  const howCardsWrapRef = useRef<HTMLDivElement | null>(null);

  const t = translations[language];

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ru' : 'en');
  };

  const howCards = language === 'ru'
  ? [
      {
        problemTitle: 'Проблема',
        problemText: 'Железо всасывается в основном в двенадцатиперстной и проксимальной тощей кишке, но при пероральном приёме значимая часть может взаимодействовать с ЖКТ раньше.',
        solutionTitle: 'Решение',
        solutionText: 'Нужны системы доставки с контролируемым/пролонгированным высвобождением; в композитах PMSSO-гидрогель + сшитые наночастицы SBECD показаны усиление сорбции железа и sustained release в моделируемых физиологических условиях.',
        color: 'var(--chem-coral)',
        color20: 'var(--chem-coral-20)',
        color40: 'var(--chem-coral-40)',
        sourceUrl: "https://istina.msu.ru/publications/article/685576841/",
        qr: qr1,
      },
      {
        problemTitle: 'Проблема',
        problemText: 'Пероральные препараты железа связаны с ЖКТ-побочками (например, запор, вздутие), что снижает приверженность лечению.',
        solutionTitle: 'Решение',
        solutionText: 'Подходы с доставкой/высвобождением, рассчитанными на снижение “лишнего” контакта с просветом ЖКТ, рассматриваются как путь к улучшению переносимости; в работе про PMSSO+SBECD композиты заявлена перспектива повышения эффективности и минимизации нежелательных эффектов.',
        color: 'var(--chem-orange)',
        color20: 'var(--chem-orange-20)',
        color40: 'var(--chem-orange-40)',
        sourceUrl: "https://istina.msu.ru/publications/article/660882404/",
        qr: qr2,
      },
      {
        problemTitle: 'Проблема',
        problemText: 'Анемии бывают связаны не только с дефицитом железа: дефицит витамина B12 — одна из ведущих причин мегалобластной анемии.',
        solutionTitle: 'Решение',
        solutionText: 'Расширение платформы на модуль доставки B12. Для PMSSO-гидрогелей показана принципиальная возможность доставки витамина B12 (биосовместимость/сорбционная ёмкость в описании работы).',
        color: 'var(--chem-light-orange)',
        color20: 'var(--chem-light-orange-20)',
        color40: 'var(--chem-light-orange-40)',
        sourceUrl: "https://istina.msu.ru/publications/article/776944165/",
        qr: qr3,
      },
    ]
  : [
      {
        problemTitle: 'Problem',
        problemText: 'Most iron absorption occurs in the duodenum and proximal jejunum, yet with oral intake a substantial fraction can interact with the GI tract earlier.',
        solutionTitle: 'Solution',
        solutionText: 'Controlled / prolonged release delivery is needed; PMSSO hydrogel + cross-linked SBECD nanoparticle composites reported enhanced iron sorption and sustained release under simulated physiological conditions.',
        color: 'var(--chem-coral)',
        color20: 'var(--chem-coral-20)',
        color40: 'var(--chem-coral-40)',
        sourceUrl: "https://istina.msu.ru/publications/article/685576841/",
        qr: qr1,
      },
      {
        problemTitle: 'Problem',
        problemText: 'Oral iron is associated with GI side effects (e.g., constipation, bloating), which can reduce adherence.',
        solutionTitle: 'Solution',
        solutionText: 'Delivery/release strategies aimed at reducing unnecessary GI exposure are pursued to improve tolerability; the PMSSO+SBECD composite paper positions the approach as promising for improved efficacy and minimized adverse effects.',
        color: 'var(--chem-orange)',
        color20: 'var(--chem-orange-20)',
        color40: 'var(--chem-orange-40)',
        sourceUrl: "https://istina.msu.ru/publications/article/660882404/",
        qr: qr2,
      },
      {
        problemTitle: 'Problem',
        problemText: 'Anemias are not limited to iron deficiency: vitamin B12 deficiency is a leading cause of megaloblastic anemia.',
        solutionTitle: 'Solution',
        solutionText: 'Extend the platform with a dedicated B12 delivery module. PMSSO hydrogels have reported feasibility for vitamin B12 delivery (with biocompatibility/sorption capacity described).',
        color: 'var(--chem-light-orange)',
        color20: 'var(--chem-light-orange-20)',
        color40: 'var(--chem-light-orange-40)',
        sourceUrl: "https://istina.msu.ru/publications/article/776944165/",
        qr: qr3,
      },
    ];

    useEffect(() => {
      function onPointerDown(e: MouseEvent) {
        const el = howCardsWrapRef.current;
        if (!el) return;

        // если клик НЕ внутри контейнера — закрываем
        if (!el.contains(e.target as Node)) {
          setOpenCard(null);
        }
      }

      document.addEventListener("mousedown", onPointerDown);
      return () => document.removeEventListener("mousedown", onPointerDown);
    }, []);


  return (
    <div className="min-h-screen bg-background text-[var(--chem-orange)]">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[var(--chem-light-orange)]/95 backdrop-blur-sm border-b border-[var(--chem-coral-20)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img src={ourLogo} className="w-8 h-8" style={{ color: 'var(--chem-coral)' }} />
              <span className="text-[var(--chem-dark)]">СИЛИКАФЕР</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="px-6 py-2 rounded-lg transition-all duration-300 from-[var(--chem-light-orange)] hover:text-[var(--chem-burgundry)] transition-colors" 
              style={{background: `linear-gradient(135deg, var(--chem-coral), var(--chem-orange))`,
                      color: 'var(--chem-dark)'
              }}>{t.nav.services}</a>
              <a href="#how-it-works" className="px-6 py-2 rounded-lg transition-all duration-300 from-[var(--chem-light-orange)] hover:text-[var(--chem-burgundry)] transition-colors" 
              style={{background: `linear-gradient(135deg, var(--chem-coral), var(--chem-orange))`,
                      color: 'var(--chem-dark)'
              }}>{t.nav.howItWorks}</a>
              <a href="#contact" className="px-6 py-2 rounded-lg transition-all duration-300 from-[var(--chem-light-orange)] hover:text-[var(--chem-burgundry)] transition-colors" 
              style={{background: `linear-gradient(135deg, var(--chem-coral), var(--chem-orange))`,
                      color: 'var(--chem-dark)'
              }}>{t.nav.contact}</a>
              
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 hover:bg-[var(--chem-dark)]/5"
                style={{ background: `bg-gradient-to-r, from-[var(--chem-coral)], via-[var(--chem-coral)], to-[var(--chem-orange)])`,
                         color: 'black' }}
              >
                <Globe className="w-4 h-4" style={{ color: 'var(--chem-coral)' }} />
                <span className="from-[var(--chem-coral)]">{language === 'en' ? 'EN' : 'RU'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[var(--chem-dark)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[var(--chem-dark)] border-t border-[var(--chem-coral-20)]">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block from-[var(--chem-coral)] hover:text-[var(--chem-coral)] transition-colors">{t.nav.services}</a>
              <a href="#how-it-works" className="block from-[var(--chem-coral)] hover:text-[var(--chem-coral)] transition-colors">{t.nav.howItWorks}</a>
              <a href="#contact" className="block from-[var(--chem-coral)] hover:text-[var(--chem-coral)] transition-colors">{t.nav.contact}</a>
              
              {/* Language Switcher Mobile */}
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300"
                style={{ borderColor: 'var(--chem-coral-30)', background: 'rgba(255, 255, 255, 0.03)' }}
              >
                <Globe className="w-4 h-4" style={{ color: 'var(--chem-coral)' }} />
                <span className="from-[var(--chem-coral)]">{language === 'en' ? 'English' : 'Русский'}</span>
              </button>

              <button className="w-full px-6 py-2 rounded-lg" style={{ 
                background: `linear-gradient(135deg, var(--chem-coral), var(--chem-orange))`,
                color: 'black'
              }}>
                {t.nav.getStarted}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl" style={{ background: 'var(--chem-coral)' }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: 'var(--chem-coral)' }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
            >
              <div className="inline-block px-4 py-2 rounded-full mb-6 border" style={{ 
                borderColor: 'var(--chem-coral)',
                background: 'rgba(206, 66, 87, 0.1)'
              }}>
                <span style={{ color: 'var(--chem-coral)' }}>{t.hero.badge}</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[var(--chem-dark)] via-[var(--chem-coral)] to-[var(--chem-orange)] bg-clip-text text-transparent">
                {t.hero.title}
              </h1>
              <p className="text-xl from-[var(--chem-red)] mb-8 bg-[var(--chem-red)] bg-clip-text text-transparent">
                {t.hero.description}
              </p>
            </motion.div>
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
            >
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-30" style={{ background: `linear-gradient(135deg, var(--chem-red), var(--chem-orange))` }} />
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjYwMzQ3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Science Laboratory"
                className="relative rounded-2xl w-full h-auto border" 
                style={{ borderColor: 'var(--chem-coral-20)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-[var(--chem-dark)] via-[var(--chem-coral)] to-[var(--chem-orange)] bg-clip-text text-transparent">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-800">
              {t.services.subtitle}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6
                sm:[&>*:last-child]:col-span-2
                sm:[&>*:last-child]:justify-self-center
                sm:[&>*:last-child]:max-w-[520px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: FlaskConical,
                title: t.services.service1.title,
                description: t.services.service1.description,
                color: 'var(--chem-coral)'
              },
              {
                icon: Beaker,
                title: t.services.service2.title,
                description: t.services.service2.description,
                color: 'var(--chem-orange)'
              },
              {
                icon: Atom,
                title: t.services.service3.title,
                description: t.services.service3.description,
                color: 'var(--chem-light-orange)'
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUpVariants}
                  className="p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:translate-y-[-4px] group cursor-pointer"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderColor: `${service.color}40`
                  }}
                >
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110" style={{ 
                    background: `${service.color}20`,
                  }}>
                    <Icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl mb-2 text-[var(--chem-dark)]">{service.title}</h3>
                  <p className="text-gray-800">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section with Tabs */}
      <section id="how-it-works" className="py-20 px-4 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full blur-3xl" style={{
              background:
                openCard !== null ? howCards[openCard].color : 'var(--chem-coral)'
            }}
            />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-[var(--chem-dark)] to-[var(--chem-coral)] bg-clip-text text-transparent">
              {t.howItWorks.title}
            </h2>
            <p className="text-xl text-gray-800">
              {t.howItWorks.subtitle}
            </p>
          </motion.div>

            {/* 3 interactive cards */}
            <div ref={howCardsWrapRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {howCards.map((card, i) => {
                const isOpen = openCard === i;

                return (
                  <motion.button
                  key={i}
                  type="button"
                  layout
                  onClick={() => setOpenCard(prev => (prev === i ? null : i))}
                  className="relative w-full rounded-2xl border p-6 text-left overflow-hidden
                            transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor: isOpen ? card.color40 : "rgba(0,0,0,0.10)",
                    background: isOpen ? card.color20 : "rgba(255,255,255,0.70)",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: isOpen ? card.color : "var(--chem-dark)" }}
                    >
                      {isOpen ? card.solutionTitle : card.problemTitle}
                    </h3>

                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      style={{ color: isOpen ? card.color : "rgba(43,45,66,0.7)" }}
                    />
                  </div>

                  {/* Problem (always visible, but shorter when open) */}
                  <p
                    className={`mt-3 leading-snug ${isOpen ? "text-[rgba(43,45,66,0.65)]" : "text-[rgba(43,45,66,0.8)]"}`}
                    style={
                      isOpen
                        ? { display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }
                        : undefined
                    }
                  >
                    {card.problemText}
                  </p>

                  {/* раскрывашка */}
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="solution"
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4"
                      >
                        <p className="leading-snug text-[rgba(43,45,66,0.9)]">
                          {card.solutionText}
                        </p>

                        {/* Source + QR */}
                        
                        <div className="mt-4 flex items-end justify-between gap-3">
                        <div className="text-xs text-[rgba(43,45,66,0.65)] leading-tight">
                          {language === "ru" ? "Источник: ИСТИНА (МГУ)" : "Source: ISTINA (MSU)"}
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <a
                            href={card.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs px-2 py-1 rounded-lg ring-1 ring-black/5 bg-white/70 hover:bg-white transition"
                            title={language === "ru" ? "Открыть источник" : "Open source"}
                          >
                            {language === "ru" ? "Открыть" : "Open"}
                          </a>

                          <a
                            href={card.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="shrink-0"
                            title={language === "ru" ? "Открыть источник (QR)" : "Open source (QR)"}
                          >
                            <motion.div
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.99 }}
                              transition={{ type: "spring", stiffness: 300, damping: 22 }}
                              className="rounded-xl bg-white p-2 shadow-lg shadow-black/10 ring-1 ring-black/5"
                            >
                              <img
                                src={card.qr}
                                alt={language === "ru" ? "QR на источник" : "QR to source"}
                                className="w-14 h-14 rounded-md"
                                loading="lazy"
                              />
                            </motion.div>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.button>
              );
            })}
          </div>
        </div>
    </section>

      {/* Innovation Section */}

    <MechanismSection t={mech} language={language} />


      {/* About Section */}
      
    <GrantThanksCard />

      {/* Contact Section */}

    <ContactSection />

      {/* Footer */}
      <footer className="py-12 px-4 border-t" style={{ borderColor: 'var(--chem-coral-20)' }}>
        <div className="max-w-7xl mx-auto text-center text-gray-800">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={ourLogo} className="w-6 h-6" style={{ color: 'var(--chem-coral)' }} />
            <span className="text-xl text-[var(--chem-dark)]">СИЛИКАФЕР</span>
          </div>
          <p>{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
