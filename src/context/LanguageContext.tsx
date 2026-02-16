
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
          desc: 'mühərrikin müstəsna təmizliyini, ümumi istismar xüsusiyyətlərini və aşınmadan qorunmasını təmin etmək üçün hazırlanmış, təkmilləşdirilmiş işçi xüsusiyyətlərinə malik sintetik mühərrik yağıdır. Mobil 1 ESP 5W-30 yağı, dizel və benzinlə işləyən avtomobillərin işlənmiş qazlarının toksikliyini azaldan sistemlərin xidmət müddətini uzatmaq və səmərəliliyini qorumaq üçün şirkətin ekspertləri tərəfindən hazırlanmışdır. Mobil 1 ESP 5W-30, müasir dizel və benzinli minik avtomobillərinə qoyulan bir çox sahə standartlarının və qabaqcıl avtomobil istehsalçılarının tələblərinə cavab verir və ya onları üstələyir.',
          benefits: [
            'Dizel mühərriklərinin qurum filtrlərində hissəciklərin yığılmasını azaltmağa kömək edir',
            'Benzin mühərriklərinin katalitik neytrallaşdırıcılarının "zəhərlənməsini" azaltmağa kömək edir',
            'Çöküntü və şlamın əmələ gəlməsini azaldır, mühərrikin uzun ömürlü olmasını və təmizliyini təmin edir',
            'Yağın köhnəlmə prosesini yavaşlatmağa kömək edir, yağdəyiшmə intervalı artırıldıqda mühərrikin qorunmasını təmin edir',
            'Ətraf mühitin karbohidrogenlərlə çirklənməsini azaldır',
            'Yanacaq qənaətinə kömək edir',
            'Soyuq havada sürətli işə düşmə və anında qorunma mühərrikin xidmət müddətini uzatmağa kömək edir'
          ],
        },
        '2': {
          name: 'Castrol EDGE 5W-30 C3',
          type: 'TITANIUM FST™ Texnologiyası',
          desc: 'Tam sintetik mühərrik yağı, titan birləşmələri sayəsində yağ təbəqəsinə əlavə davamlılıq verən ən son TITANIUM FST™ texnologiyasından istifadə edilməklə istehsal edilmişdir. TITANIUM FST™ ekstremal yüklər şəraitində yağın davranışını kökündən dəyiшdirərək əlavə zərbə uducu qat yaradır. Sınaqlar təsdiq etdi ki, TITANIUM FST™ təbəqənin möhkəmliyini 2 dəfə artırır, onun qırılmasının qarşısını alır və mühərrikin maksimum məhsuldarlığı üçün sürtünməni azaldır.',
          benefits: [
            'Həm qısa, həm də uzunmüddətli dövrdə mühərrikin maksimum səmərəliliyini təmin edir',
            'Çöküntülərin yaranmasını qarшısını alır, mühərrikin akselerator pedalına reaksiya sürətini artırmağa kömək edir',
            'Hətta yüksək yüklər şəraitində mühərrikin maksimum gücünü saxlayır',
            'Mühərrikin FİƏ-ni artırır (müstəqil sınaqlarla təsdiqlənib)',
            'Müxtəlif hərəkət şəraitində və geniş temperatur diapazonunda detalların misilsiz qorunmasını təmin edir'
          ],
        },
        '3': {
          name: 'Top Tec 4200 5W-30',
          type: 'HC-Sintetik Mid SAPS',
          desc: 'İkili işlənmiş qazların neytrallaşdırılması sistemi (o cümlədən DPF) ilə təchiz edilmiş minik avtomobilləri üçün HC-sintetik az küllü (Mid SAPS) mühərrik yağı. EURO 4 və daha yüksək ekoloji standartlara uyğundur.',
          benefits: [
            'Dizel mühərrikləri, qurum filtrləri və turbinlər üçün tövsiyə olunur',
            'Mühərrik təmizliyini təmin edir',
            'Mühərrik detallarına sürətli yağ ötürülməsi',
            'İstənilən dövrlərdə optimal təzyiq',
            'Aşağı və yüksək temperaturlarda etibarlı yağlama',
            'Yanacaq sərfiyyatının və zərərli tullantıların azaldılması'
          ],
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
      check1: 'İstehsalçı icazələrini nəзərə alır',
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
      desc1: 'MasloGuru sadəcə bir mağaza deyil, öz işinə sadiq peшəkarlar komandasıdır. Biz inanırıq ki, avtomobilin düzgün saxlanılması keyfiyyətli sərfiyyat materiallarından başlayır.',
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
      desc: 'Yağ seçimi və ya mövcudluq barədə məsləҳət lazımdır? Müraciət qoyun, 15 dəqiqə ərzində sizə zəng edək.',
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
      desc: 'Professional mühərrik yağlarının seçimi və satışı. 2012-ci ildən mühərrikinizin sağlıkın keşiyindəyik.',
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
          desc: 'синтетическое моторное масло с улучшенными рабочими свойствами, разработанное для обеспечения исключительного уровня чистоты двигателя, общих эксплуатационных характеристик и защиты от износа. Масло Mobil 1 ESP 5W-30 было разработано экспертами компании для продления срока службы и поддержания эффективности систем снижения токсичности выхлопных газов дизельных и бензиновых автомобилей. Масло Mobil 1 ESP 5W-30 соответствует требованиям многих отраслевых стандартов и передовых автопроизводителей, которые предъявляются к современным дизельным и бензиновым легковым автомобилям, или превосходит такие требования.',
          benefits: [
            'Помогает снизить отложение частиц в сажевых фильтрах дизельных двигателей',
            'Помогает снизить «отравление» каталитических нейтрализаторов бензиновых двигателей',
            'Снижает образование отложений и шлама, что обеспечивает длительный срок службы и чистоту двигателя',
            'Помогает замедлить процесс старения масла, обеспечивая защиту двигателя при увеличенном интервале замены масла',
            'Снижение загрязнения окружающей среды углеводородами',
            'Способствует экономии топлива',
            'Быстрый запуск и моментальная защита при пуске в холодную погоду помогают продлить срок службы двигателя'
          ],
        },
        '2': {
          name: 'Castrol EDGE 5W-30 C3',
          type: 'Технология TITANIUM FST™',
          desc: 'полностью синтетическое моторное масло, произведено с использованием новейшей технологии TITANIUM FST™, придающей масляной пленке дополнительную прочность благодаря соединениям титана. TITANIUM FST™ радикально меняет поведение масла в условиях экстремальных нагрузок, формируя дополнительный ударопоглощающий слой. Испытания подтвердили, что TITANIUM FST™ в 2 раза увеличивает прочность пленки, предотвращая ее разрыв и снижая трение для максимальной производительности двигателя.',
          benefits: [
            'Обеспечивает максимальную эффективность работы мотора как в краткосрочном периоде времени, так и в течение длительного срока службы;',
            'Подавляет образование отложений, способствуя повышению скорости реакции двигателя на нажатие педали акселератора;',
            'Поддерживает максимальную мощность мотора, даже в условиях повышенных нагрузок;',
            'Повышает КПД двигателя (подтверждено независимыми испытаниями);',
            'Обеспечивает непревзойдённый уровень защиты деталей в разных условиях движения и широком диапазоне температур.'
          ],
        },
        '3': {
          name: 'Top Tec 4200 5W-30',
          type: 'HC-синтетическое Mid SAPS',
          desc: 'HC-синтетическое малозольное (Mid SAPS) моторное масло для легковых автомобилей, оснащенных двойной системой нейтрализации отработавших газов (в том числе DPF). Cоответствует экологическим нормам EURO 4 и выше.',
          benefits: [
            'Рекомендовано к применению на дизельных двигателях оснащенных сажевыми фильтрами и турбинами;',
            'Обеспечивает чистоту двигателя;',
            'Максимально быстрое поступление по масляной магистрали к деталям двигателя;',
            'Оптимальное давление на любых оборотах двигателя;',
            'Надежная смазка при низких и высоких температурах;',
            'Снижение расхода топлива и вредных компонентов выхлопа.'
          ],
        },
        '4': {
          name: 'TRUCK HD',
          type: 'High Performance Blend',
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
          desc: 'advanced full synthetic engine oil designed to help provide exceptional cleaning power, wear protection and overall performance. Mobil 1 ESP 5W-30 has been expert engineered to help prolong the life and maintain the efficiency of emission systems in both diesel and gasoline powered automobiles. Mobil 1 ESP 5W-30 meets or exceeds the requirements of many leading industry and car manufacturers\' standards required for newer modern diesel and gasoline powered passenger car engines.',
          benefits: [
            'Helps to reduce particulate build up in Diesel Particulate Filters',
            'Helps to reduce poisoning of Gasoline Catalytic Converters',
            'Reduces deposits and sludge build-up to enable long and clean engine life',
            'Helps to reduce oil aging allowing extended drain interval protection',
            'Less hydrocarbon pollution',
            'Aids fuel economy',
            'Quick cold weather starting and ultra-fast protection helps to extend engine life'
          ],
        },
        '2': {
          name: 'Castrol EDGE 5W-30 C3',
          type: 'TITANIUM FST™ Technology',
          desc: 'Full synthetic engine oil produced using the latest TITANIUM FST™ technology, which gives the oil film extra strength thanks to titanium compounds. TITANIUM FST™ radically changes the behavior of the oil under extreme loads, forming an additional shock-absorbing layer. Tests have confirmed that TITANIUM FST™ doubles the strength of the film, preventing it from breaking and reducing friction for maximum engine performance.',
          benefits: [
            'Provides maximum engine efficiency in both the short and long term',
            'Suppresses the formation of deposits, helping to increase the speed of the engine response to the accelerator pedal',
            'Maintains maximum engine power, even under high load conditions',
            'Improves engine efficiency (confirmed by independent tests)',
            'Provides an unsurpassed level of part protection in different driving conditions and a wide range of temperatures'
          ],
        },
        '3': {
          name: 'Top Tec 4200 5W-30',
          type: 'HC-Synthetic Mid SAPS',
          desc: 'HC-synthetic low-ash (Mid SAPS) engine oil for passenger cars equipped with a double exhaust gas neutralization system (including DPF). Complies with EURO 4 environmental standards and above.',
          benefits: [
            'Recommended for diesel engines with particulate filters and turbochargers',
            'Ensures engine cleanliness',
            'Rapid oil delivery to engine components',
            'Optimal pressure at all engine speeds',
            'Reliable lubrication at low and high temperatures',
            'Reduced fuel consumption and emissions'
          ],
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
