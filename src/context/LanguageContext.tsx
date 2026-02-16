
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'AZ' | 'RU' | 'EN';

type Translations = {
  [key in Language]: {
    [key: string]: any;
  };
};

const translations: Translations = {
  AZ: {
    nav: {
      collection: 'Kolleksiya',
      intelligence: 'İntellekt',
      history: 'Tarix',
      concierge: 'Konsyerj',
    },
    hero: {
      molecular: 'Molekulyar Mühərrik Qoruması',
      title: 'TƏMİZ\nENERJİ',
      subtitle: 'Mütləq qorunma memarlığı. Yeni nəsil mühərriklər üçün müstəsna yağlar.',
      labs: 'Yüksək Texnoloji Laboratoriyalar',
      performance: 'Maksimum Performans',
      health: 'Mühərrik Sağlamlığı',
      mastery: 'Mühəndislik Ustalığı',
    },
    products: {
      tag: 'Seçilmiş Kolleksiya',
      title: 'MÜHƏNDİSLİK\nESTETİKASI.',
      desc: 'Sıramızdakı hər bir məhsul çoxillik tədqiqatların və mütləq kamillik axtarışının nəticəsidir.',
      specs: 'Seriya xüsusiyyətləri',
      more: 'Ətraflı',
      items: {
        '1': {
          name: 'Mobil 1 ESP 5W-30',
          type: 'Saf Sintetik Sürtkü Yağı',
          desc: 'Sintetik texnologiyaların zirvəsi. Mühərrikin qorunması məsələsində kompromisə yer verməyənlər üçün yaradılmışdır.',
          benefits: ['Səthlərin nano-qoruması', '+150°C-də stabillik', '20,000 km-ə qədər resurs'],
        },
        '2': {
          name: 'ARCTIC FLOW',
          type: 'Ekstremal İqlim Formulu',
          desc: 'Ekstremal aşağı temperaturlarda qüsursuz işə düşmə üçün hazırlanmışdır. İlk saniyədən anında qorunma.',
          benefits: ['-45°C-də işə düşmə', '4% yanacaq qənaəti', 'Porsşen qrupunun təmizliyi'],
        },
        '3': {
          name: 'CLASSIC PRO',
          type: 'Yüksək Performanslı Qarışıq',
          desc: 'Zamanla sınaqdan keçmiş etibarlılıq. Klassik ənənələr və müasir qatqılar arasında mükəmməl balans.',
          benefits: ['Mühərrik səsini azaltma', 'Dəm qatının təmizlənməsi', 'Oksidləşmədən qorunma'],
        },
        '4': {
          name: 'TRUCK HD',
          type: 'Ağır Rejim Gücü',
          desc: 'Kommersiya texnikası üçün güc və dözümlülük. Başqalarının təslim olduğu yerdə işləyir.',
          benefits: ['Hədsiz yüklər üçün', 'Özlülük nəzarəti', 'Korroziyadan qorunma'],
        },
      }
    },
    selector: {
      tag: 'AI Texnologiyaları',
      title: 'İntellektual\nyağ seçimi',
      desc: 'Bizim AI-assistentimiz mühərrikin ideal qorunma formulunu seçmək üçün avtomobilinizin texniki xüsusiyyətlərini və istismar şəraitini təhlil edəcək.',
      check1: 'İstehsalçı icazələrini nəzərə alır',
      check2: 'Sürücülük tərzi və iqlimi təhlil edir',
      check3: 'Seçimin ətraflı əsaslandırılmasını verir',
      cardTitle: 'Avtomobil parametrləri',
      cardDesc: 'Tövsiyə almaq üçün formanı doldurun',
      make: 'Marka',
      model: 'Model',
      year: 'Buraxılış ili',
      conditions: 'Sürücülük şəraiti',
      btn: 'Yağ seçmək',
      analyzing: 'Təhlil edilir...',
      resultTitle: 'AI Tövsiyəsi',
      resultDesc: 'Avtomobiliniz üçün optimal seçim',
      reasoning: 'Əsaslandırma',
      specs: 'Spesifikasiyalar',
      notes: 'Əlavə',
      catalogBtn: 'Kataloqda tapmaq',
      error: 'Yağ seçimində xəta baş verdi. Zəhmət olmasa, sonra yenidən cəhd edin.',
    },
    about: {
      tag: 'Şirkət haqqında',
      title: 'Avtokimya dünyasında\nsizin etibarlı tərəfdaşınız',
      desc1: 'MasloGuru sadəcə bir mağaza deyil, öz işinə sadiq peşəkarlar komandasıdır. Biz inanırıq ki, avtomobilin düzgün saxlanılması keyfiyyətli sərfiyyat materiallarından başlayır.',
      desc2: 'Missiyamız avtomobil sahiblərinə orijinal və yüksək keyfiyyətli mühərrik yağlarına çıxış təmin etmək, saxtakarlıq riskini aradan qaldırmaq və hər bir mühərrikin uzun ömürlü olmasını təmin etməkdir.',
      stats: {
        s1: '10+ il bazarda',
        s1d: 'Yağlarla iş təcrübəsi',
        s2: '15,000+ müştəri',
        s2d: 'Bizə etibar edirlər',
        s3: 'Yalnız orijinal',
        s3d: 'Birbaşa işləyirik',
        s4: '2 saata çatdırılma',
        s4d: 'Öz logistikamız',
      },
      feedback: 'Daimi müştərilərimizdən 99.8% müsbət rəy',
    },
    contact: {
      title: 'Sualınız qaldı?\nBiz əlaqədəyik!',
      desc: 'Yağ seçimi və ya mövcudluq barədə məsləhət lazımdır? Müraciət qoyun, 15 dəqiqə ərzində sizə zəng edək.',
      phone: 'Telefon',
      email: 'Email',
      office: 'Ofis',
      officeAddr: 'Bakı ş., Avtomobil prospekti, 42',
      nameLabel: 'Adınız',
      messageLabel: 'Mesaj',
      sendBtn: 'Müraciəti göndər',
      success: 'Mesaj göndərildi!',
      successDesc: 'Menecerimiz tezliklə sizinlə əlaqə saxlayacaq.',
    },
    footer: {
      desc: 'Professional mühərrik yağlarının seçimi və satışı. 2012-ci ildən mühərrikinizin sağlamlığının keşiyindəyik.',
      nav: 'Naviqasiya',
      support: 'Dəstək',
      newsletter: 'Xəbərlər',
      newsDesc: 'Avtomobil baxımı üçün məsləhətlər və xüsusi təkliflər alın.',
      rights: '© 2024 MasloGuru. Bütün hüquqlar qorunur.',
    }
  },
  RU: {
    nav: {
      collection: 'Коллекция',
      intelligence: 'Интеллект',
      history: 'История',
      concierge: 'Консьерж',
    },
    hero: {
      molecular: 'Molecular Engine Protection',
      title: 'ЧИСТАЯ\nЭНЕРГИЯ',
      subtitle: 'Архитектура абсолютной защиты. Исключительные масла для двигателей нового поколения.',
      labs: 'High-Tech Labs',
      performance: 'Peak Performance',
      health: 'Engine Health',
      mastery: 'Engineering Mastery',
    },
    products: {
      tag: 'Curated Selection',
      title: 'ЭСТЕТИКА\nИНЖЕНЕРИИ.',
      desc: 'Каждый продукт в нашей линейке — это результат многолетних исследований и стремления к абсолютному совершенству.',
      specs: 'Характеристики серии',
      more: 'Подробнее',
      items: {
        '1': {
          name: 'Mobil 1 ESP 5W-30',
          type: 'Pure Synthetic Lubricant',
          desc: 'Вершина синтетических технологий. Создано для тех, кто не приемлет компромиссов в вопросах защиты двигателя.',
          benefits: ['Нано-защита поверхностей', 'Стабильность при +150°C', 'Ресурс до 20,000 км'],
        },
        '2': {
          name: 'ARCTIC FLOW',
          type: 'Extreme Climate formula',
          desc: 'Разработано для безупречного пуска в условиях экстремально низких температур. Мгновенная защита с первой секунды.',
          benefits: ['Пуск при -45°C', 'Экономия топлива 4%', 'Чистота поршневой группы'],
        },
        '3': {
          name: 'CLASSIC PRO',
          type: 'High Performance Blend',
          desc: 'Надежность проверенная временем. Идеальный баланс между классическими традициями и современными присадками.',
          benefits: ['Снижение шума двигателя', 'Удаление нагара', 'Защита от окисления'],
        },
        '4': {
          name: 'TRUCK HD',
          type: 'Heavy Duty Power',
          desc: 'Мощь и выносливость для коммерческой техники. Работает там, где другие сдаются.',
          benefits: ['Для сверхвысоких нагрузок', 'Контроль вязкости', 'Защита от коррозии'],
        },
      }
    },
    selector: {
      tag: 'AI Технологии',
      title: 'Интеллектуальный\nподбор масла',
      desc: 'Наш AI-ассистент проанализирует технические характеристики вашего автомобиля и условия эксплуатации, чтобы подобрать идеальную формулу защиты двигателя.',
      check1: 'Учитывает допуски производителя',
      check2: 'Анализирует стиль вождения и климат',
      check3: 'Дает подробное обоснование выбора',
      cardTitle: 'Параметры автомобиля',
      cardDesc: 'Заполните форму для получения рекомендации',
      make: 'Марка',
      model: 'Модель',
      year: 'Год выпуска',
      conditions: 'Условия вождения',
      btn: 'Подобрать масло',
      analyzing: 'Анализируем...',
      resultTitle: 'Рекомендация AI',
      resultDesc: 'Оптимальный выбор для вашего автомобиля',
      reasoning: 'Обоснование',
      specs: 'Спецификации',
      notes: 'Дополнительно',
      catalogBtn: 'Найти подходящее в каталоге',
      error: 'Произошла ошибка при подборе масла. Пожалуйста, попробуйте позже.',
    },
    about: {
      tag: 'О компании',
      title: 'Ваш надежный партнер\nв мире автохимии',
      desc1: 'МаслоГуру — это не просто магазин, а команда профессионалов, увлеченных своим делом. Мы верим, что правильное обслуживание автомобиля начинается с качественных расходных материалов.',
      desc2: 'Наша миссия — обеспечить автовладельцев доступом к оригинальным моторным маслам высшего качества, исключая риск подделок и гарантируя долгую жизнь каждого двигателя.',
      stats: {
        s1: '10+ лет на рынке',
        s1d: 'Опыт работы с маслами',
        s2: '15,000+ клиентов',
        s2d: 'Доверяют нам свои авто',
        s3: 'Только оригинал',
        s3d: 'Работаем напрямую',
        s4: 'Доставка за 2 часа',
        s4d: 'Собственная логистика',
      },
      feedback: 'Положительных отзывов от наших постоянных покупателей',
    },
    contact: {
      title: 'Остались вопросы?\nМы на связи!',
      desc: 'Нужна консультация по выбору масла или хотите уточнить наличие? Оставьте заявку, и мы перезвоним в течение 15 минут.',
      phone: 'Телефон',
      email: 'Email',
      office: 'Офис',
      officeAddr: 'г. Москва, ул. Автомобильная, д. 42',
      nameLabel: 'Ваше имя',
      messageLabel: 'Сообщение',
      sendBtn: 'Отправить заявку',
      success: 'Сообщение отправлено!',
      successDesc: 'Наш менеджер свяжется с вами в ближайшее время.',
    },
    footer: {
      desc: 'Профессиональный подбор и продажа моторных масел. Заботимся о здоровье вашего двигателя с 2012 года.',
      nav: 'Навигация',
      support: 'Поддержка',
      newsletter: 'Рассылка',
      newsDesc: 'Получайте советы по уходу за авто и спецпредложения.',
      rights: '© 2024 МаслоГуру. Все права защищены.',
    }
  },
  EN: {
    nav: {
      collection: 'Collection',
      intelligence: 'Intelligence',
      history: 'History',
      concierge: 'Concierge',
    },
    hero: {
      molecular: 'Molecular Engine Protection',
      title: 'PURE\nENERGY',
      subtitle: 'Architecture of absolute protection. Exceptional oils for next-generation engines.',
      labs: 'High-Tech Labs',
      performance: 'Peak Performance',
      health: 'Engine Health',
      mastery: 'Engineering Mastery',
    },
    products: {
      tag: 'Curated Selection',
      title: 'ENGINEERING\nAESTHETICS.',
      desc: 'Every product in our lineup is the result of years of research and a pursuit of absolute perfection.',
      specs: 'Series Specifications',
      more: 'Details',
      items: {
        '1': {
          name: 'Mobil 1 ESP 5W-30',
          type: 'Pure Synthetic Lubricant',
          desc: 'The pinnacle of synthetic technology. Created for those who accept no compromises in engine protection.',
          benefits: ['Nano-surface protection', 'Stability at +150°C', 'Service life up to 20,000 km'],
        },
        '2': {
          name: 'ARCTIC FLOW',
          type: 'Extreme Climate formula',
          desc: 'Developed for flawless start-up in extremely low temperatures. Instant protection from the first second.',
          benefits: ['Start at -45°C', '4% fuel economy', 'Piston group cleanliness'],
        },
        '3': {
          name: 'CLASSIC PRO',
          type: 'High Performance Blend',
          desc: 'Time-tested reliability. The perfect balance between classic traditions and modern additives.',
          benefits: ['Engine noise reduction', 'Carbon deposit removal', 'Oxidation protection'],
        },
        '4': {
          name: 'TRUCK HD',
          type: 'Heavy Duty Power',
          desc: 'Power and endurance for commercial vehicles. Works where others give up.',
          benefits: ['For ultra-high loads', 'Viscosity control', 'Corrosion protection'],
        },
      }
    },
    selector: {
      tag: 'AI Technologies',
      title: 'Intelligent\nOil Selection',
      desc: 'Our AI assistant will analyze your vehicle\'s technical characteristics and operating conditions to pick the ideal engine protection formula.',
      check1: 'Considers manufacturer approvals',
      check2: 'Analyzes driving style and climate',
      check3: 'Provides detailed reasoning for the choice',
      cardTitle: 'Vehicle Parameters',
      cardDesc: 'Fill out the form to get a recommendation',
      make: 'Make',
      model: 'Model',
      year: 'Year of Manufacture',
      conditions: 'Driving Conditions',
      btn: 'Select Oil',
      analyzing: 'Analyzing...',
      resultTitle: 'AI Recommendation',
      resultDesc: 'Optimal choice for your vehicle',
      reasoning: 'Reasoning',
      specs: 'Specifications',
      notes: 'Notes',
      catalogBtn: 'Find in Catalog',
      error: 'An error occurred during oil selection. Please try again later.',
    },
    about: {
      tag: 'About Us',
      title: 'Your Trusted Partner\nin Auto Chemicals',
      desc1: 'MasloGuru is not just a store, but a team of professionals passionate about their craft. We believe that proper car maintenance starts with quality consumables.',
      desc2: 'Our mission is to provide car owners with access to original high-quality engine oils, excluding the risk of counterfeits and guaranteeing the long life of every engine.',
      stats: {
        s1: '10+ Years in Market',
        s1d: 'Oil industry experience',
        s2: '15,000+ Customers',
        s2d: 'Trust us with their cars',
        s3: 'Only Original',
        s3d: 'We work directly',
        s4: '2h Delivery',
        s4d: 'Own logistics',
      },
      feedback: 'Positive feedback from our regular customers',
    },
    contact: {
      title: 'Any Questions?\nWe are here!',
      desc: 'Need a consultation on oil selection or want to check availability? Leave a request, and we will call you back within 15 minutes.',
      phone: 'Phone',
      email: 'Email',
      office: 'Office',
      officeAddr: '42 Automobile St, Moscow',
      nameLabel: 'Your Name',
      messageLabel: 'Message',
      sendBtn: 'Send Request',
      success: 'Message Sent!',
      successDesc: 'Our manager will contact you shortly.',
    },
    footer: {
      desc: 'Professional selection and sale of motor oils. Taking care of your engine health since 2012.',
      nav: 'Navigation',
      support: 'Support',
      newsletter: 'Newsletter',
      newsDesc: 'Get car care tips and special offers.',
      rights: '© 2024 MasloGuru. All rights reserved.',
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('RU');

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[language];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
