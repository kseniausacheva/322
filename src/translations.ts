export const translations = {
  ru: {
    nav: {
      home: 'Главная',
      about: 'О компании',
      services: 'Услуги',
      egypt: 'Египет',
      uae: 'ОАЭ',
      russia: 'Россия',
      portfolio: 'Кейсы',
      delegations: 'Делегации',
      blog: 'Блог',
      contact: 'Контакты',
    },
    hero: {
      tag: 'Royal Event Group — Искусство безупречности',
      title: 'МЫ СОЗДАЕМ',
      titleAccent: 'ИСТОРИЮ',
      subtitle: 'Организация корпоративных мероприятий в Египте, ОАЭ и России. 20+ лет опыта в арабском регионе. MICE агентство полного цикла.',
      cta: 'ОБСУДИТЬ ПРОЕКТ',
    },
    whyUs: {
      title: 'ПОЧЕМУ ВЫБИРАЮТ НАС',
      subtitle: 'Наши преимущества',
      items: [
        { title: '20+ лет опыта', desc: 'Глубокое понимание специфики и культуры арабского региона.' },
        { title: 'Собственная база', desc: 'Свое производство декораций и мебели в Египте.' },
        { title: 'Прямые контракты', desc: 'Эксклюзивные условия в Four Seasons, Kempinski и других топ-отелях.' },
        { title: 'Полный цикл', desc: 'От идеи и логистики до технического продакшена и букинга звезд.' }
      ]
    },
    production: {
      title: 'СОБСТВЕННОЕ ПРОИЗВОДСТВО',
      subtitle: 'Мы не зависим от посредников',
      desc: 'У нас собственная база в Египте по производству конструкций и мебели для мероприятий. Мы обеспечиваем полный цикл технического оснащения.',
      items: [
        { title: 'Мебель и декор', desc: 'Собственные цеха по производству дизайнерской мебели.' },
        { title: 'Свет и звук', desc: 'Профессиональное оборудование мировых брендов.' },
        { title: 'LED экраны', desc: 'Любые конфигурации и высокое разрешение.' },
        { title: 'Конструкции', desc: 'Застройка стендов и сцен любой сложности.' }
      ]
    },
    cases: {
      title: 'НАШИ КЕЙСЫ',
      subtitle: 'Масштабные проекты',
      items: [
        {
          id: 'carlsberg',
          client: 'Carlsberg',
          people: '1000 человек',
          desc: 'Грандиозная конференция в Domina Coral Bay: 1000 участников и безупречный сервис.',
          fullDesc: 'Масштабная конференция для компании Carlsberg, объединившая 1000 участников в легендарном отеле Domina Coral Bay. Мы обеспечили полный цикл технического продакшена, разработали эксклюзивную развлекательную программу и организовали высококлассный кейтеринг. Наша команда также предоставила профессиональных хостес и обеспечила комплексную координацию всех этапов мероприятия. От сложной логистики до финального гала-ужина — каждый элемент был проработан до мелочей, чтобы создать атмосферу истинного триумфа бренда.',
          image: '/carlsberg-1.jpg',
          gallery: [
            '/carlsberg-1.jpg', '/carlsberg-2.jpg', '/carlsberg-3.jpg', '/carlsberg-4.jpg', '/carlsberg-5.jpg',
            '/carlsberg-6.jpg', '/carlsberg-7.jpg', '/carlsberg-8.jpg', '/carlsberg-9.jpg', '/carlsberg-10.jpg',
            '/carlsberg-11.jpg', '/carlsberg-12.jpg', '/carlsberg-13.jpg', '/carlsberg-14.jpg', '/carlsberg-15.jpg',
            '/carlsberg-16.jpg', '/carlsberg-17.jpg', '/carlsberg-18.jpg', '/carlsberg-19.jpg', '/carlsberg-20.jpg'
          ]
        },
        {
          id: 'nl-international',
          client: 'NL International',
          people: '300 человек',
          desc: 'Корпоративное событие длительностью 7 дней. Полное сопровождение.',
          fullDesc: 'Масштабный и амбициозный проект, объединивший 300 участников на 7 дней в роскошном отеле Park Regency. Мы обеспечили полную техническую поддержку и комплексную организацию события. Программа была насыщена разнообразными активностями: от профессиональных мастер-классов по йоге, визажу, танцам и изобразительному искусству до захватывающих тимбилдинг-квестов, направленных на сплочение команды. Деловая часть форума прошла в современных конференц-залах отеля, а кульминацией стали эксклюзивные вечеринки: атмосферный вечер в стиле «Luxury Egypt» и элегантная «Белая вечеринка» на живописной скале под открытым небом. Мы взяли на себя всё: от сложной логистики и размещения до организации уникальных экскурсионных маршрутов.',
          image: '/nl-7.jpg',
          videos: [
            { url: '/videos/nl-horizontal.mp4', type: 'horizontal' },
            { url: '/videos/nl-vertical1.mp4', type: 'vertical' },
            { url: '/videos/nl-vertical3.mp4', type: 'vertical' },
            { url: '/videos/nl-vertical3-1.mp4', type: 'vertical' }
          ],
          gallery: [
            '/nl-7.jpg',
            '/nl-2.jpg',
            '/nl-3.jpg',
            '/nl-4.jpg',
            '/nl-5.jpg',
            '/nl-6.jpg',
            '/nl-8.jpg',
            '/nl-9.jpg',
            '/nl-10.jpg',
            '/nl-11.jpg',
            '/nl-12.jpg',
            '/nl-13.jpg',
            '/nl-14.jpg',
            '/nl-15.jpg',
            '/nl-16.jpg',
            '/nl-17.jpg',
            '/nl-18.jpg',
            '/nl-19.jpg',
            '/nl-20.jpg',
            '/nl-21.jpg',
            '/nl-22.jpg',
            '/nl-23.jpg',
            '/nl-24.jpg',
            '/nl-25.jpg',
            '/nl-26.jpg',
            '/nl-27.jpg',
            '/nl-28.jpg',
            '/nl-29.jpg',
            '/nl-30.jpg'
          ]
        },
        {
          id: 'ewa-product',
          client: 'EWA product',
          people: '200 человек',
          desc: '5 дней драйва, инсайтов и безупречной организации в Rixos Seagate.',
          fullDesc: 'Мы превратили корпоративный выезд EWA Product в незабываемое 5-дневное путешествие в Шарм-эль-Шейхе. Проект охватил лучшие локации: от высокотехнологичных конференц-залов отеля Rixos Seagate до атмосферных площадок Marlin и Space. Наша команда обеспечила полный технический продакшн, создание эксклюзивных декораций и разработку креативной концепции развлечений. Программа была наполнена глубокими воркшопами, вдохновляющими мастер-классами и активным тимбилдингом. Мы создали среду для роста, где каждый элемент декора и каждая минута шоу работали на общую цель и сплочение команды.',
          image: '/ewa-1.jpeg',
          videos: [
            { url: '/videos/ewa-horizontal.mp4', type: 'horizontal', poster: '/ewa-1.jpeg' },
            { url: '/videos/ewa-vertical1.mp4', type: 'vertical', poster: '/ewa-5.jpg' },
            { url: '/videos/ewa-vertical5.MP4', type: 'vertical', poster: '/ewa-6.jpg' },
            { url: '/videos/IMG_7742.MP4', type: 'vertical', poster: '/ewa-7.jpg' }
          ],
          gallery: [
            '/ewa-1.jpeg', '/ewa-4.jpg', '/ewa-5.jpg', '/ewa-6.jpg', '/ewa-7.jpg', '/ewa-8.jpg', '/ewa-9.jpg', '/ewa-10.jpg',
            '/ewa-11.jpg', '/ewa-12.jpg', '/ewa-13.jpg', '/ewa-14.jpg', '/ewa-15.jpg',
            '/ewa-16.jpg', '/ewa-17.jpg', '/ewa-18.jpg', '/ewa-19.jpg', '/ewa-20.jpg',
            '/ewa-21.jpg', '/ewa-22.jpg', '/ewa-23.jpg', '/ewa-24.jpg', '/ewa-25.jpg',
            '/ewa-26.jpg', '/ewa-27.jpg', '/ewa-28.jpg'
          ]
        },
        {
          id: 'afa-agricultural',
          client: 'AFA conference',
          people: '250 человек',
          desc: 'Сельскохозяйственная конференция в Grand Rotana и Savoy: мост между российским бизнесом и арабскими партнерами.',
          fullDesc: 'Конференция AFA стала важной платформой для укрепления деловых связей в сельскохозяйственном секторе. Мы организовали событие на 250 участников, задействовав лучшие площадки отелей Grand Rotana и Savoy. Наша команда обеспечила полный технический цикл (звук, свет, LED-экраны, сцена), а также создала изысканную атмосферу через декор, флористику и профессиональный кейтеринг. Особое внимание было уделено работе с делегациями: мы координировали встречи российских участников с арабскими партнерами, обеспечивали профессиональный перевод и протоколирование переговоров. Мы взяли на себя всю логистику — от трансферов и размещения до детального планирования деловой программы и подведения итогов встреч.',
          image: '/afa-1.jpg',
          gallery: [
            '/afa-1.jpg', '/afa-2.jpg', '/afa-3.jpg', '/afa-4.jpg', '/afa-5.jpg', '/afa-6.jpg'
          ]
        },
        {
          id: 'myway',
          client: 'MYway Conference',
          people: '500 человек',
          desc: 'Масштабный бизнес-форум в Каире: 6 языков, уникальное шоу и безупречный продакшн.',
          fullDesc: 'Конференция MYway в Каире стала эталоном комплексного подхода к организации бизнес-событий. Мы объединили 500 участников в элегантных интерьерах отеля Kempinski, обеспечив безупречную техническую поддержку и сложнейшую систему синхронного перевода на 6 языков. Наша команда разработала уникальную шоу-программу, которая стала живым воплощением философии компании, и создала впечатляющий визуальный контент для LED-экранов. Мы взяли на себя всё: от полиграфии и перевода сценариев на арабский до строительства масштабных конструкций и координации работы хостес и хелперов. Это был проект, где технологии встретились с искусством гостеприимства.',
          image: '/myway-1.jpg',
          gallery: [
            '/myway-1.jpg', '/myway-2.jpg', '/myway-3.jpg', '/myway-4.jpg', '/myway-5.jpg',
            '/myway-6.jpg', '/myway-7.jpg', '/myway-8.jpg', '/myway-9.jpg', '/myway-10.jpg',
            '/myway-11.jpg', '/myway-12.jpg', '/myway-13.jpg', '/myway-14.jpg', '/myway-15.jpg'
          ]
        },
        {
          id: 'world-stars',
          client: 'Мировые звезды',
          people: 'VIP проекты',
          desc: 'Букинг и организация концертов артистов мирового уровня: от переговоров до шоу.',
          fullDesc: 'Мы обладаем уникальным опытом и ресурсами для организации выступлений артистов любого масштаба. Наша команда берет на себя весь цикл: от прямых переговоров с менеджментом звезд до безупречного выполнения сложнейших технических и бытовых райдеров. В нашем портфолио — успешная организация приезда в Египет таких имен, как David Guetta, Son of Son, Tom Enzy, Koroleva и многих других. Мы гарантируем полную конфиденциальность, безопасность и высочайший уровень технического продакшена, превращая каждое выступление в грандиозное шоу мирового уровня.',
          image: '/stars-1.jpg',
          gallery: [
            '/stars-1.jpg', '/stars-2.jpg', '/stars-3.jpg', '/stars-4.jpg', '/stars-5.jpg',
            '/stars-6.jpg', '/stars-7.jpg', '/stars-8.jpg', '/stars-9.jpg', '/stars-10.jpg'
          ]
        },
        {
          id: 'bedouin-dinner',
          client: 'VIP Бедуинский ужин',
          people: 'VIP',
          desc: 'VIP Бедуинский ужин в отеле Four Seasons: дизайн-концепция, развлекательная программа, техническое сопровождение и подарочная продукция.',
          fullDesc: 'Эксклюзивный проект для VIP-гостей в роскошном отеле Four Seasons. Мы разработали уникальную дизайн-концепцию, объединяющую аутентичные бедуинские традиции с современным люксом. Наша команда обеспечила полное техническое сопровождение мероприятия, создала захватывающую развлекательную программу и подготовила брендированную подарочную продукцию высочайшего качества. Каждый элемент ужина был продуман до мелочей, чтобы создать атмосферу истинного восточного гостеприимства и статуса.',
          image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000',
          gallery: [
            'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000'
          ]
        }
      ]
    },
    team: {
      title: 'НАША КОМАНДА',
      subtitle: 'Лидеры индустрии',
      ceos: [
        { name: 'Ксения Усачева', role: 'CEO / Основатель', image: '/ksenia-usacheva.jpg' },
        { name: 'Екатерина Гайдук', role: 'CEO / Партнер', image: '/ekaterina-gaiduk.jpg' }
      ],
      desc: 'Наша команда — это 40+ профессиональных сотрудников. Многие из нас свободно владеют английским и арабским языками, обеспечивая безупречную коммуникацию на международном уровне.',
      fullTeam: 'Наша команда в сборе'
    },
    videos: {
      title: 'ПОЧУВСТВУЙТЕ МАСШТАБ',
      subtitle: 'Жизнь Royal Event',
      instruction: 'Перетащите или нажмите, чтобы увидеть наши моменты',
      videoLabel: 'Видео',
      featuredLabel: 'FEATURED',
      items: [
        { id: 1, url: '/videos/ewa-vertical1.mp4', poster: '/ewa-1.jpeg', label: 'Главное событие года' },
        { id: 2, url: '/videos/ewa-vertical5.MP4', poster: '/ewa-5.jpg', label: 'Яркие моменты' },
        { id: 3, url: '/videos/IMG_7742.MP4', poster: '/ewa-6.jpg', label: 'Наши проекты' },
        { id: 4, url: '/videos/IMG_7743.MP4', poster: '/ewa-7.jpg', label: 'Эмоции' },
        { id: 5, url: '', poster: '/ewa-8.jpg', label: 'Команда' },
        { id: 6, url: '', poster: '/ewa-9.jpg', label: 'Локации' },
        { id: 7, url: '', poster: '/ewa-10.jpg', label: 'Партнеры' },
        { id: 8, url: '', poster: '/ewa-11.jpg', label: 'Шоу' },
        { id: 9, url: '', poster: '/ewa-12.jpg', label: 'Детали' },
        { id: 10, url: '', poster: '/ewa-13.jpg', label: 'Атмосфера' },
        { id: 11, url: '', poster: '/ewa-14.jpg', label: 'Финал' },
      ]
    },
    servicesOverview: {
      title: 'ЧТО МЫ ДЕЛАЕМ',
      titleAccent: 'ЛУЧШЕ ВСЕГО',
      cta: 'ВСЕ УСЛУГИ',
      items: [
        { title: 'Конференции', desc: 'Полный цикл организации деловых мероприятий, форумов и саммитов.' },
        { title: 'Тимбилдинг', desc: 'Уникальные программы для укрепления корпоративной культуры и командного духа.' },
        { title: 'Международный протокол', desc: 'Проведение дипломатических и государственных мероприятий высокого уровня.' },
        { title: 'Делегации', desc: 'Перевод, протокол, культурные программы. Арабские делегации в России и российские на Ближнем Востоке.' }
      ]
    },
    locations: {
      title: 'ГЕОГРАФИЯ ПРИСУТСТВИЯ',
      subtitle: 'Наши локации',
      items: [
        { name: 'Каир', country: 'Египет' },
        { name: 'Шарм-эль-шейх', country: 'Египет' },
        { name: 'Дубай', country: 'ОАЭ' },
        { name: 'Абу-Даби', country: 'ОАЭ' },
        { name: 'Москва', country: 'Россия' },
        { name: 'Вся Россия', country: 'РФ' }
      ]
    },
    philosophy: {
      title: 'ИСКУССТВО ДЕТАЛЕЙ',
      subtitle: 'Наша философия',
      items: [
        { title: 'Конфиденциальность', desc: 'Полная защита информации и приватность.' },
        { title: 'Статус', desc: 'События, подчеркивающие ваш уровень.' },
        { title: 'Мультикультурность', desc: 'Глубокое понимание традиций и этикета.' }
      ]
    },
    aboutPage: {
      title: 'ROYAL EVENT GROUP',
      subtitle: 'Ваш стратегический DMC партнер в арабском мире и России',
      description: 'Мы специализируемся на организации мероприятий в арабских странах, выступая в роли надежного DMC (Destination Management Company) партнера. Наша экспертиза охватывает как проведение событий для иностранных компаний в Египте и ОАЭ, так и организацию мероприятий для арабских компаний в России.',
      history: 'Основанная на принципах совершенства и культурной синергии, Royal Event Group уже более двух десятилетий является мостом между международными стандартами и местного опыта. Мы понимаем тонкости ведения бизнеса в обоих регионах и обеспечиваем безупречную коммуникацию и логистику.',
      mission: {
        title: 'НАША МИССИЯ',
        desc: 'Создавать события, которые становятся легендами. Мы стремимся к тому, чтобы каждое мероприятие не просто соответствовало ожиданиям, а превосходило их, становясь мощным инструментом для развития бизнеса наших клиентов.'
      },
      values: {
        title: 'НАШИ ЦЕННОСТИ',
        items: [
          { title: 'Безупречность', desc: 'Внимание к каждой детали, от первого звонка до финального отчета.' },
          { title: 'Инновации', desc: 'Использование передовых технологий и креативных подходов в организации.' },
          { title: 'Партнерство', desc: 'Мы строим долгосрочные отношения, основанные на доверии и прозрачности.' }
        ]
      },
      seo: {
        title: 'О компании Royal Event Group | MICE агентство с 20-летним опытом',
        description: 'Узнайте больше о Royal Event Group: наша история, команда и почему мы являемся лидерами в организации мероприятий в Египте, ОАЭ и России. Профессиональный подход к MICE.'
      }
    },
    servicesPage: {
      title: 'НАША ЭКСПЕРТИЗА',
      process: {
        title: 'КАК МЫ РАБОТАЕМ',
        items: [
          { step: '01', title: 'Брифинг', desc: 'Глубокое погружение в цели и задачи вашего проекта.' },
          { step: '02', title: 'Концепция', desc: 'Разработка уникальной идеи и детального плана реализации.' },
          { step: '03', title: 'Производство', desc: 'Техническое оснащение, застройка и подготовка локации.' },
          { step: '04', title: 'Реализация', desc: 'Безупречное проведение мероприятия под ключ.' }
        ]
      },
      seo: {
        title: 'Услуги MICE агентства: конференции, тимбилдинги, инсентив-туры',
        description: 'Полный спектр услуг по организации корпоративных событий: от деловых конференций и делегаций до развлекательных шоу и VIP-ретритов. Технический продакшн и логистика.'
      },
      items: [
        { title: 'Корпоративные конференции', desc: 'Полный цикл организации деловых мероприятий, форумов и саммитов.' },
        { title: 'Тимбилдинг', desc: 'Уникальные программы для укрепления корпоративной культуры и командного духа.' },
        { title: 'Международный протокол', desc: 'Проведение дипломатических и государственных мероприятий высокого уровня.' },
        { title: 'Делегации', desc: 'Перевод, протокол, культурные программы. Арабские делегации в России и российские на Ближнем Востоке.' },
        { title: 'Технический продакшн', desc: 'Собственное звуковое, световое и LED оборудование для безупречного исполнения.' },
        { title: 'Безопасность и приватность', desc: 'Обеспечение полной конфиденциальности и высокого уровня безопасности для VIP-гостей.' },
        { title: 'Премиальный Консьерж', desc: 'Премиальный тревел и лайфстайл менеджмент для участников мероприятий.' }
      ]
    },
    portfolioPage: {
      title: 'КРУПНЫЕ ПРОЕКТЫ',
    },
    delegationsPage: {
      title: 'ДЕЛЕГАЦИИ',
      subtitle: 'Безупречный protocol, профессиональный перевод и VIP-сервис мирового уровня. Мы обеспечиваем сопровождение, которое подчеркивает ваш статус.',
      backToHome: 'Назад на главную',
      sections: [
        {
          title: 'Что входит в услугу',
          items: [
            { title: 'Перевод', desc: 'Арабский, английский, русский. Синхронный и последовательный перевод.' },
            { title: 'Протокол', desc: 'Соблюдение дипломатических норм, логистика и безопасность.' },
            { title: 'Логистика', desc: 'Визовое сопровождение, VIP-трансферы и бронирование отелей.' },
            { title: 'VIP Сервис', desc: 'Культурные программы и персональное обслуживание 24/7.' }
          ]
        },
        {
          title: 'Уникальность подхода',
          desc: 'Мы первые выводим услугу делегаций в формате полного сопровождения: от момента приглашения до финального отчета.',
          features: [
            'Глубокое знание этикета',
            'Собственный парк авто',
            'Конфиденциальность 100%',
            'Международная команда'
          ]
        }
      ],
      cta: {
        title: 'ЛУЧШЕЕ ПРЕДЛОЖЕНИЕ',
        desc: 'Свяжитесь с нами для получения индивидуального плана приема вашей делегации.',
        button: 'ОТПРАВИТЬ ЗАПРОС'
      },
      seo: {
        title: 'Сопровождение делегаций | Профессиональный протокол и перевод',
        description: 'Организация приема иностранных делегаций в России и российских за рубежом. Полный спектр услуг: от виз до VIP-сопровождения.'
      }
    },
    contactPage: {
      title: 'СВЯЖИТЕСЬ С НАМИ',
      formTitle: 'Отправить сообщение',
      labels: {
        email: 'Email',
        phone: 'Телефон',
        location: 'Локация',
        name: 'Полное имя',
        emailAddr: 'Электронная почта',
        message: 'Сообщение',
        submit: 'Отправить запрос'
      },
      locations: 'Шарм-эль-Шейх, Египет \n Дубай, ОАЭ'
    },
    accessibleSection: {
      header: "ROYAL EVENT",
      title: "event, доступный каждому",
      cards: [
        {
          number: "1",
          title: "без рисков",
          desc: "Мы — ваши глаза и уши на локации. На нас можно положиться на 100%. Команда живёт в Египте и контролирует каждую деталь лично"
        },
        {
          number: "2",
          title: "без посредников",
          desc: "Собственное производство, своё оборудование, прямые контракты с отелями. Вы работаете напрямую",
          partners: "Прямые партнёры Four Seasons, Kempinski, Domina"
        },
        {
          number: "3",
          title: "без ограничений",
          desc: "Любые площадки, концепции, бюджеты. От камерного ужина на 20 человек в пустыне до конференции на 1000+ гостей"
        }
      ],
      footer: "Никаких лимитов. Во всём."
    },
    destinations: {
      stats: {
        events: 'Мероприятия',
        guests: 'Гости',
        rating: 'Рейтинг',
        venues: 'Площадки'
      },
      egypt: {
        name: 'ЕГИПЕТ',
        tagline: 'НАШ ПРОИЗВОДСТВЕННЫЙ ХАБ',
        description: 'Египет — идеальное направление для масштабных MICE-мероприятий с круглогодичным солнцем и развитой инфраструктурой. Наш производственный хаб в Шарм-эль-Шейхе и Каире позволяет реализовывать проекты любой сложности: от конференций на 1000+ человек до эксклюзивных тимбилдингов в пустыне и на Красном море. Мы предлагаем лучшие площадки, отели и полную техническую поддержку без посредников.',
        seo: {
          title: 'Организация корпоративных мероприятий и тимбилдингов в Египте',
          description: 'MICE в Египте: организация конференций, корпоративов и бизнес-ретритов в Шарм-эль-Шейхе и Каире. Собственное производство и 20 лет опыта.'
        }
      },
      uae: {
        name: 'ОАЭ',
        tagline: 'РОСКОШЬ И ИННОВАЦИИ',
        description: 'Дубай и Абу-Даби — это вершина MICE-индустрии, где роскошь встречается с инновациями. Мы организуем статусные корпоративные форумы, саммиты и инсентив-программы в ОАЭ, используя наш доступ к VIP-площадкам и глубокое знание локального рынка. От футуристических конференц-залов до премиальных ретритов — мы создаем события мирового уровня.',
        seo: {
          title: 'Организация мероприятий и конференций в ОАЭ (Дубай, Абу-Даби)',
          description: 'Проведение корпоративных мероприятий и бизнес-форумов в ОАЭ. Премиальный сервис, лучшие площадки Дубая и Абу-Даби от Royal Event Group.'
        }
      },
      russia: {
        name: 'РОССИЯ',
        tagline: 'СТРАТЕГИЧЕСКОЕ ПАРТНЕРСТВО',
        description: 'Мы строим надежный мост для вашего бизнеса между Россией и арабским миром. Наша команда обеспечивает комплексную поддержку российским компаниям, планирующим мероприятия в арабском регионе, а также сопровождает арабские делегации в России. Мы берем на себя все вопросы: от логистики и протокола до культурной программы и технического оснащения, гарантируя безупречный результат на стыке двух культур.',
        seo: {
          title: 'Сопровождение арабских делегаций и мероприятия в Москве',
          description: 'Организация мероприятий в Москве для иностранных компаний и сопровождение арабских делегаций в России. Профессиональный протокол и перевод.'
        }
      }
    },
    footer: {
      rights: '© 2026 ROYAL EVENT GROUP. ВСЕ ПРАВА ЗАЩИЩЕНЫ.',
      legal: {
        ip: 'ИП УСАЧЕВА КСЕНИЯ ОЛЕГОВНА',
        inn: 'ИНН 772206846997',
        ogrnip: 'ОГРНИП 324774600436282',
        privacy: 'Условия обработки персональных данных',
        offer: 'Оферта',
        disclaimer: '* Facebook/Instagram — проекты Meta Platforms Inc. (признана экстремистской организацией на территории РФ)'
      }
    },
    partners: {
      title: 'НАШИ ПАРТНЕРЫ',
      subtitle: 'Нам доверяют лидеры',
    },
    ctaSection: {
      title: 'СТАНЬ ЧАСТЬЮ НОВОЙ БОЛЬШОЙ И КРАСИВОЙ ИСТОРИИ',
      subtitle: 'Расскажите о вашем мероприятии — мы подготовим индивидуальное предложение',
      button: 'НАПИСАТЬ НАМ',
    },
    blogPage: {
      title: 'БЛОГ И СТАТЬИ',
      subtitle: 'Инсайты индустрии событий, тренды и наши новости',
      readMore: 'Читать далее',
      backToBlog: 'Назад в блог',
      share: 'Поделиться',
      articles: [
        {
          id: 'trends-2024',
          title: 'Тренды MICE-индустрии в 2024 году',
          date: '15 Марта, 2024',
          category: 'Тренды',
          excerpt: 'Как меняется формат корпоративных мероприятий и на что стоит обратить внимание при планировании.',
          content: 'В 2024 году MICE-индустрия продолжает трансформироваться, делая акцент на персонализации, экологичности и интеграции высоких технологий. Гибридные форматы становятся стандартом, а участники все больше ценят аутентичный опыт и глубокое погружение в культуру региона. Мы в Royal Event Group активно внедряем эти тренды, предлагая нашим клиентам инновационные решения для их событий.',
          image: 'https://images.unsplash.com/photo-1540575861501-7ad05823c23d?auto=format&fit=crop&q=80&w=1000'
        },
        {
          id: 'egypt-events',
          title: 'Почему Египет — идеальное место для конференций',
          date: '10 Февраля, 2024',
          category: 'Локации',
          excerpt: 'Преимущества проведения масштабных событий в Шарм-эль-Шейхе и Каире.',
          content: 'Египет предлагает уникальное сочетание развитой инфраструктуры, благоприятного климата и богатого культурного наследия. Наличие собственной производственной базы Royal Event в Шарм-эль-Шейхе позволяет нам реализовывать проекты любой сложности без посредников, обеспечивая контроль качества на каждом этапе. От роскошных отелей до уникальных площадок в пустыне — возможности безграничны.',
          image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=1000'
        },
        {
          id: 'team-building-culture',
          title: 'Тимбилдинг как инструмент развития культуры',
          date: '25 Января, 2024',
          category: 'Корпоративная культура',
          excerpt: 'Как правильно организованный выезд может сплотить команду и повысить эффективность.',
          content: 'Современный тимбилдинг — это не просто совместный отдых, а стратегический инструмент. Мы разрабатываем программы, которые помогают сотрудникам раскрыть свой потенциал, наладить коммуникации и почувствовать причастность к общим целям компании. Наши кейсы в ОАЭ и Египте доказывают, что смена обстановки и необычные задачи творят чудеса с командным духом.',
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000'
        }
      ]
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      egypt: 'Egypt',
      uae: 'UAE',
      russia: 'Russia',
      portfolio: 'Portfolio',
      delegations: 'Delegations',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      tag: 'Royal Event Group — The Art of Perfection',
      title: 'WE CREATE',
      titleAccent: 'HISTORY',
      subtitle: 'Corporate event organization in Egypt, UAE, and Russia. 20+ years of experience in the Arab region. Full-cycle MICE agency.',
      cta: 'DISCUSS PROJECT',
    },
    whyUs: {
      title: 'WHY CHOOSE US',
      subtitle: 'Our Advantages',
      items: [
        { title: '20+ Years Experience', desc: 'Deep understanding of the Arab region\'s specifics and culture.' },
        { title: 'In-house Production', desc: 'Our own production facilities for decor and furniture in Egypt.' },
        { title: 'Direct Contracts', desc: 'Exclusive terms at Four Seasons, Kempinski, and other top hotels.' },
        { title: 'Full Cycle', desc: 'From concept and logistics to technical production and celebrity booking.' }
      ]
    },
    production: {
      title: 'OWN PRODUCTION',
      subtitle: 'No Intermediaries',
      desc: 'We have our own production base in Egypt for structures and furniture. We provide a full cycle of technical equipment.',
      items: [
        { title: 'Furniture & Decor', desc: 'In-house workshops for designer furniture production.' },
        { title: 'Light & Sound', desc: 'Professional equipment from world-leading brands.' },
        { title: 'LED Screens', desc: 'Any configurations and high resolution.' },
        { title: 'Structures', desc: 'Construction of stands and stages of any complexity.' }
      ]
    },
    cases: {
      title: 'OUR CASES',
      subtitle: 'Large-scale Projects',
      items: [
        {
          id: 'carlsberg',
          client: 'Carlsberg',
          people: '1000 people',
          desc: 'Grand conference at Domina Coral Bay: 1000 participants and flawless service.',
          fullDesc: 'A large-scale conference for Carlsberg, bringing together 1000 participants at the legendary Domina Coral Bay Hotel. We provided a full cycle of technical production, developed an exclusive entertainment program, and organized high-class catering. Our team also provided professional hostesses and ensured comprehensive coordination of all stages of the event. From complex logistics to the final gala dinner, every element was worked out to the smallest detail to create an atmosphere of true brand triumph.',
          image: '/carlsberg-1.jpg',
          gallery: [
            '/carlsberg-1.jpg', '/carlsberg-2.jpg', '/carlsberg-3.jpg', '/carlsberg-4.jpg', '/carlsberg-5.jpg',
            '/carlsberg-6.jpg', '/carlsberg-7.jpg', '/carlsberg-8.jpg', '/carlsberg-9.jpg', '/carlsberg-10.jpg',
            '/carlsberg-11.jpg', '/carlsberg-12.jpg', '/carlsberg-13.jpg', '/carlsberg-14.jpg', '/carlsberg-15.jpg',
            '/carlsberg-16.jpg', '/carlsberg-17.jpg', '/carlsberg-18.jpg', '/carlsberg-19.jpg', '/carlsberg-20.jpg'
          ]
        },
        {
          id: 'nl-international',
          client: 'NL International',
          people: '300 people',
          desc: '7-day corporate event. Full support and logistics.',
          fullDesc: 'This was a challenging but very large-scale project. 300 people attended, and the conference lasted for 7 days. It took place at the Park Regency Hotel, where the guests were accommodated. Our tasks included technical support, product preparation, and a wide variety of workshops—yoga, makeup, dancing, and fine arts. We organized various team-building quests to unite the team. Of course, there were business sessions in the Park Regency conference hall. The event concluded with entertainment activities: a luxury Egyptian-style party and a \'White Party\' at an open-air location on a cliff. We also handled logistics, excursions, and everything else.',
          image: '/nl-7.jpg',
          videos: [
            { url: '/videos/nl-horizontal.mp4', type: 'horizontal' },
            { url: '/videos/nl-vertical1.mp4', type: 'vertical' },
            { url: '/videos/nl-vertical3.mp4', type: 'vertical' },
            { url: '/videos/nl-vertical3-1.mp4', type: 'vertical' }
          ],
          gallery: [
            '/nl-7.jpg',
            '/nl-2.jpg',
            '/nl-3.jpg',
            '/nl-4.jpg',
            '/nl-5.jpg',
            '/nl-6.jpg',
            '/nl-8.jpg',
            '/nl-9.jpg',
            '/nl-10.jpg',
            '/nl-11.jpg',
            '/nl-12.jpg',
            '/nl-13.jpg',
            '/nl-14.jpg',
            '/nl-15.jpg',
            '/nl-16.jpg',
            '/nl-17.jpg',
            '/nl-18.jpg',
            '/nl-19.jpg',
            '/nl-20.jpg',
            '/nl-21.jpg',
            '/nl-22.jpg',
            '/nl-23.jpg',
            '/nl-24.jpg',
            '/nl-25.jpg',
            '/nl-26.jpg',
            '/nl-27.jpg',
            '/nl-28.jpg',
            '/nl-29.jpg',
            '/nl-30.jpg'
          ]
        },
        {
          id: 'ewa-product',
          client: 'Ewa Product',
          people: '200 people',
          desc: '5 days of drive, insights, and flawless organization at Rixos Seagate.',
          fullDesc: 'We transformed the EWA Product corporate retreat into an unforgettable 5-day journey in Sharm El Sheikh. The project covered the best locations: from the high-tech conference halls of the Rixos Seagate hotel to the atmospheric Marlin and Space venues. Our team provided full technical production, creation of exclusive decorations, and development of a creative entertainment concept. The program was filled with deep workshops, inspiring masterclasses, and active team building. We created an environment for growth, where every decor element and every minute of the show worked towards the common goal and team unity.',
          image: '/ewa-1.jpeg',
          videos: [
            { url: '/videos/ewa-horizontal.mp4', type: 'horizontal', poster: '/ewa-1.jpeg' },
            { url: '/videos/ewa-vertical1.mp4', type: 'vertical', poster: '/ewa-5.jpg' },
            { url: '/videos/ewa-vertical5.MP4', type: 'vertical', poster: '/ewa-6.jpg' },
            { url: '/videos/IMG_7742.MP4', type: 'vertical', poster: '/ewa-7.jpg' }
          ],
          gallery: [
            '/ewa-1.jpeg', '/ewa-4.jpg', '/ewa-5.jpg', '/ewa-6.jpg', '/ewa-7.jpg', '/ewa-8.jpg', '/ewa-9.jpg', '/ewa-10.jpg',
            '/ewa-11.jpg', '/ewa-12.jpg', '/ewa-13.jpg', '/ewa-14.jpg', '/ewa-15.jpg',
            '/ewa-16.jpg', '/ewa-17.jpg', '/ewa-18.jpg', '/ewa-19.jpg', '/ewa-20.jpg',
            '/ewa-21.jpg', '/ewa-22.jpg', '/ewa-23.jpg', '/ewa-24.jpg', '/ewa-25.jpg',
            '/ewa-26.jpg', '/ewa-27.jpg', '/ewa-28.jpg'
          ]
        },
        {
          id: 'afa-agricultural',
          client: 'AFA Agricultural',
          people: '250 people',
          desc: 'Agricultural conference at Grand Rotana and Savoy: a bridge between Russian business and Arab partners.',
          fullDesc: 'The AFA conference became an important platform for strengthening business ties in the agricultural sector. We organized an event for 250 participants, utilizing the best venues of the Grand Rotana and Savoy hotels. Our team provided a full technical cycle (sound, light, LED screens, stage), as well as created a refined atmosphere through decor, floristry, and professional catering. Special attention was paid to working with delegations: we coordinated meetings between Russian participants and Arab partners, provided professional translation, and took minutes of the negotiations. We handled all logistics — from transfers and accommodation to detailed planning of the business program and summarizing the results of the meetings.',
          image: '/afa-1.jpg',
          gallery: [
            '/afa-1.jpg', '/afa-2.jpg', '/afa-3.jpg', '/afa-4.jpg', '/afa-5.jpg', '/afa-6.jpg'
          ]
        },
        {
          id: 'myway',
          client: 'MYway Conference',
          people: '500 people',
          desc: 'Large-scale business forum in Cairo: 6 languages, unique show, and flawless production.',
          fullDesc: 'The MYway conference in Cairo set a new standard for comprehensive business event organization. We brought together 500 participants in the elegant interiors of the Kempinski Hotel, providing flawless technical support and a complex simultaneous interpretation system for 6 languages. Our team developed a unique show program that became a living embodiment of the company\'s philosophy and created impressive visual content for LED screens. We handled everything: from printing and Arabic script translation to the construction of large-scale structures and coordination of hostesses and helpers. It was a project where technology met the art of hospitality.',
          image: '/myway-1.jpg',
          gallery: [
            '/myway-1.jpg', '/myway-2.jpg', '/myway-3.jpg', '/myway-4.jpg', '/myway-5.jpg',
            '/myway-6.jpg', '/myway-7.jpg', '/myway-8.jpg', '/myway-9.jpg', '/myway-10.jpg',
            '/myway-11.jpg', '/myway-12.jpg', '/myway-13.jpg', '/myway-14.jpg', '/myway-15.jpg'
          ]
        },
        {
          id: 'world-stars',
          client: 'World-class Stars',
          people: 'VIP Projects',
          desc: 'Booking and organizing concerts for world-class artists: from negotiations to the show.',
          fullDesc: 'We possess unique experience and resources to organize performances by artists of any scale. Our team handles the entire cycle: from direct negotiations with star management to the flawless execution of the most complex technical and hospitality riders. Our portfolio includes the successful organization of visits to Egypt by names such as David Guetta, Son of Son, Tom Enzy, Koroleva, and many others. We guarantee complete confidentiality, security, and the highest level of technical production, turning every performance into a grand world-class show.',
          image: '/stars-1.jpg',
          gallery: [
            '/stars-1.jpg', '/stars-2.jpg', '/stars-3.jpg', '/stars-4.jpg', '/stars-5.jpg',
            '/stars-6.jpg', '/stars-7.jpg', '/stars-8.jpg', '/stars-9.jpg', '/stars-10.jpg'
          ]
        },
        {
          id: 'bedouin-dinner',
          client: 'VIP Bedouin Dinner',
          people: 'VIP',
          desc: 'VIP Bedouin Dinner at Four Seasons Hotel: design concept, entertainment program, technical support, and gift products.',
          fullDesc: 'An exclusive project for VIP guests at the luxurious Four Seasons Hotel. We developed a unique design concept blending authentic Bedouin traditions with modern luxury. Our team provided full technical support for the event, created a captivating entertainment program, and prepared high-quality branded gift products. Every element of the dinner was meticulously planned to create an atmosphere of true oriental hospitality and status.',
          image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000',
          gallery: [
            'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000'
          ]
        }
      ]
    },
    team: {
      title: 'OUR TEAM',
      subtitle: 'Industry Leaders',
      ceos: [
        { name: 'Ksenia Usacheva', role: 'CEO / Founder', image: '/ksenia-usacheva.jpg' },
        { name: 'Ekaterina Gaiduk', role: 'CEO / Partner', image: '/ekaterina-gaiduk.jpg' }
      ],
      desc: 'Our team consists of 40+ professional employees. Many of us are fluent in English and Arabic, ensuring flawless communication at an international level.',
      fullTeam: 'Our Team Together'
    },
    videos: {
      title: 'FEEL THE SCALE',
      subtitle: 'Royal Event Life',
      instruction: 'Drag or click to explore our moments',
      videoLabel: 'Video',
      featuredLabel: 'FEATURED',
      items: [
        { id: 1, url: '/videos/ewa-vertical1.mp4', poster: '/ewa-1.jpeg', label: 'Main Event of the Year' },
        { id: 2, url: '/videos/ewa-vertical5.MP4', poster: '/ewa-5.jpg', label: 'Event Highlights' },
        { id: 3, url: '/videos/IMG_7742.MP4', poster: '/ewa-6.jpg', label: 'Our Projects' },
        { id: 4, url: '/videos/IMG_7743.MP4', poster: '/ewa-7.jpg', label: 'Emotions' },
        { id: 5, url: '', poster: '/ewa-8.jpg', label: 'Team' },
        { id: 6, url: '', poster: '/ewa-9.jpg', label: 'Locations' },
        { id: 7, url: '', poster: '/ewa-10.jpg', label: 'Partners' },
        { id: 8, url: '', poster: '/ewa-11.jpg', label: 'Show' },
        { id: 9, url: '', poster: '/ewa-12.jpg', label: 'Details' },
        { id: 10, url: '', poster: '/ewa-13.jpg', label: 'Atmosphere' },
        { id: 11, url: '', poster: '/ewa-14.jpg', label: 'Finale' },
      ]
    },
    servicesOverview: {
      title: 'WHAT WE DO',
      titleAccent: 'BEST',
      cta: 'VIEW ALL SERVICES',
      items: [
        { title: 'Conferences', desc: 'Full-cycle organization of business events, forums, and summits.' },
        { title: 'Team Building', desc: 'Unique programs designed to strengthen corporate culture and team spirit.' },
        { title: 'International Protocol', desc: 'Handling high-level diplomatic and government events with precision.' },
        { title: 'Delegations', desc: 'Translation, protocol, cultural programs. Arab delegations in Russia and Russian ones in the Middle East.' }
      ]
    },
    locations: {
      title: 'GLOBAL PRESENCE',
      subtitle: 'Our Locations',
      items: [
        { name: 'Cairo', country: 'Egypt' },
        { name: 'Sharm El Sheikh', country: 'Egypt' },
        { name: 'Dubai', country: 'UAE' },
        { name: 'Abu Dhabi', country: 'UAE' },
        { name: 'Moscow', country: 'Russia' },
        { name: 'All of Russia', country: 'RF' }
      ]
    },
    philosophy: {
      title: 'ART OF DETAILS',
      subtitle: 'Our Philosophy',
      items: [
        { title: 'Confidentiality', desc: 'Full information protection and privacy.' },
        { title: 'Status', desc: 'Events that emphasize your level.' },
        { title: 'Multiculturalism', desc: 'Deep understanding of traditions and etiquette.' }
      ]
    },
    aboutPage: {
      title: 'ROYAL EVENT GROUP',
      subtitle: 'Your Strategic DMC Partner in the Arab World and Russia',
      description: 'We specialize in organizing events in Arab countries, serving as a reliable DMC (Destination Management Company) partner. Our expertise covers both hosting events for foreign companies in Egypt and the UAE, and organizing events for Arab companies in Russia.',
      history: 'Founded on the principles of excellence and cultural synergy, Royal Event Group has been the bridge between international standards and local expertise for over two decades. We understand the nuances of doing business in both regions and ensure flawless communication and logistics.',
      mission: {
        title: 'OUR MISSION',
        desc: 'To create events that become legends. We strive to ensure that every event not only meets expectations but exceeds them, becoming a powerful tool for our clients\' business development.'
      },
      values: {
        title: 'OUR VALUES',
        items: [
          { title: 'Perfection', desc: 'Attention to every detail, from the first call to the final report.' },
          { title: 'Innovation', desc: 'Using cutting-edge technology and creative approaches in organization.' },
          { title: 'Partnership', desc: 'We build long-term relationships based on trust and transparency.' }
        ]
      },
      seo: {
        title: 'About Royal Event Group | MICE Agency with 20 Years of Experience',
        description: 'Learn more about Royal Event Group: our history, team, and why we are leaders in event organization in Egypt, UAE, and Russia. Professional MICE approach.'
      }
    },
    servicesPage: {
      title: 'OUR EXPERTISE',
      process: {
        title: 'HOW WE WORK',
        items: [
          { step: '01', title: 'Briefing', desc: 'Deep dive into the goals and objectives of your project.' },
          { step: '02', title: 'Concept', desc: 'Development of a unique idea and a detailed implementation plan.' },
          { step: '03', title: 'Production', desc: 'Technical equipment, construction, and location preparation.' },
          { step: '04', title: 'Execution', desc: 'Flawless turnkey event management.' }
        ]
      },
      seo: {
        title: 'MICE Agency Services: Conferences, Team Building, Incentive Tours',
        description: 'A full range of corporate event organization services: from business conferences and delegations to entertainment shows and VIP retreats. Technical production and logistics.'
      },
      items: [
        { title: 'Corporate Conferences', desc: 'Full-cycle organization of business events, forums, and summits.' },
        { title: 'Team Building', desc: 'Unique programs designed to strengthen corporate culture and team spirit.' },
        { title: 'International Protocol', desc: 'Handling high-level diplomatic and government events with precision.' },
        { title: 'Delegations', desc: 'Translation, protocol, cultural programs. Arab delegations in Russia and Russian ones in the Middle East.' },
        { title: 'Technical Production', desc: 'Own sound, light, and LED equipment for flawless execution.' },
        { title: 'Security & Privacy', desc: 'Ensuring complete confidentiality and high-level security for VIP guests.' },
        { title: 'Luxury Concierge', desc: 'Premium travel and lifestyle management for event participants.' }
      ]
    },
    portfolioPage: {
      title: 'LARGE-SCALE PROJECTS',
    },
    delegationsPage: {
      title: 'DELEGATIONS',
      subtitle: 'Flawless protocol, professional translation, and world-class VIP service. We provide support that highlights your status.',
      backToHome: 'Back to home',
      sections: [
        {
          title: 'What\'s included',
          items: [
            { title: 'Translation', desc: 'Arabic, English, Russian. Simultaneous and consecutive translation.' },
            { title: 'Protocol', desc: 'Compliance with diplomatic norms, logistics, and security.' },
            { title: 'Logistics', desc: 'Visa support, VIP transfers, and hotel bookings.' },
            { title: 'VIP Service', desc: 'Cultural programs and personal service 24/7.' }
          ]
        },
        {
          title: 'Unique Approach',
          desc: 'We are the first to launch a delegation service in a full-support format: from the moment of invitation to the final report.',
          features: [
            'Deep knowledge of etiquette',
            'Own car fleet',
            '100% Confidentiality',
            'International team'
          ]
        }
      ],
      cta: {
        title: 'BEST OFFER',
        desc: 'Contact us for a personalized reception plan for your delegation.',
        button: 'SEND REQUEST'
      },
      seo: {
        title: 'Delegation Support | Professional Protocol and Translation',
        description: 'Organization of foreign delegations in Russia and Russian delegations abroad. A full range of services: from visas to VIP support.'
      }
    },
    contactPage: {
      title: 'GET IN TOUCH',
      formTitle: 'Send a Message',
      labels: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        name: 'Full Name',
        emailAddr: 'Email Address',
        message: 'Message',
        submit: 'Submit Request'
      },
      locations: 'Sharm El Sheikh, Egypt \n Dubai, UAE'
    },
    accessibleSection: {
      header: "ROYAL EVENT",
      title: "event, accessible to everyone",
      cards: [
        {
          number: "1",
          title: "no risks",
          desc: "We are your eyes and ears on location. You can rely on us 100%. The team lives in Egypt and controls every detail personally"
        },
        {
          number: "2",
          title: "no intermediaries",
          desc: "Own production, own equipment, direct contracts with hotels. You work directly",
          partners: "Direct partners of Four Seasons, Kempinski, Domina"
        },
        {
          number: "3",
          title: "no limits",
          desc: "Any venues, concepts, budgets. From an intimate dinner for 20 people in the desert to a conference for 1000+ guests"
        }
      ],
      footer: "No limits. In everything."
    },
    destinations: {
      stats: {
        events: 'Events',
        guests: 'Guests',
        rating: 'Rating',
        venues: 'Venues'
      },
      egypt: {
        name: 'EGYPT',
        tagline: 'OUR PRODUCTION HUB',
        description: 'Egypt is the perfect destination for large-scale MICE events with year-round sun and developed infrastructure. Our production hub in Sharm El Sheikh and Cairo allows us to implement projects of any complexity: from conferences for 1000+ people to exclusive team buildings in the desert and on the Red Sea. We offer the best venues, hotels, and full technical support without intermediaries.',
        seo: {
          title: 'Corporate Events and Team Building in Egypt | MICE Organizer',
          description: 'MICE in Egypt: organizing conferences, corporate retreats, and business events in Sharm El Sheikh and Cairo. 20 years of experience and in-house production.'
        }
      },
      uae: {
        name: 'UAE',
        tagline: 'LUXURY & INNOVATION',
        description: 'Dubai and Abu Dhabi represent the pinnacle of the MICE industry, where luxury meets innovation. We organize high-status corporate forums, summits, and incentive programs in the UAE, leveraging our access to VIP venues and deep knowledge of the local market. From futuristic conference halls to premium retreats — we create world-class events.',
        seo: {
          title: 'Corporate Events and Conferences in UAE (Dubai, Abu Dhabi)',
          description: 'Hosting corporate events and business forums in the UAE. Premium service and best venues in Dubai and Abu Dhabi by Royal Event Group.'
        }
      },
      russia: {
        name: 'RUSSIA',
        tagline: 'STRATEGIC PARTNERSHIPS',
        description: 'We build a reliable bridge for your business between Russia and the Arab world. Our team provides comprehensive support for Russian companies planning events in the Arab region, and also accompanies Arab delegations in Russia. We handle everything from logistics and protocol to cultural programs and technical equipment, ensuring flawless results at the intersection of two cultures.',
        seo: {
          title: 'Arabic Delegation Support and Events in Moscow | Royal Event Group',
          description: 'Organizing events in Moscow for international companies and supporting Arabic delegations in Russia. Professional protocol and translation services.'
        }
      }
    },
    footer: {
      rights: '© 2026 ROYAL EVENT GROUP. ALL RIGHTS RESERVED.',
      legal: {
        ip: 'IE USACHEVA KSENIA OLEGOVNA',
        inn: 'INN 772206846997',
        ogrnip: 'OGRNIP 324774600436282',
        privacy: 'Privacy Policy',
        offer: 'Public Offer',
        disclaimer: '* Facebook/Instagram are projects of Meta Platforms Inc. (recognized as an extremist organization in the Russian Federation)'
      }
    },
    partners: {
      title: 'OUR PARTNERS',
      subtitle: 'Trusted by Leaders',
    },
    ctaSection: {
      title: 'BECOME PART OF A NEW BIG AND BEAUTIFUL STORY',
      subtitle: 'Tell us about your event — we will prepare an individual proposal',
      button: 'WRITE TO US',
    },
    blogPage: {
      title: 'BLOG & ARTICLES',
      subtitle: 'Event industry insights, trends, and our news',
      readMore: 'Read More',
      backToBlog: 'Back to Blog',
      share: 'Share',
      articles: [
        {
          id: 'trends-2024',
          title: 'MICE Industry Trends in 2024',
          date: 'March 15, 2024',
          category: 'Trends',
          excerpt: 'How corporate event formats are changing and what to look for when planning.',
          content: 'In 2024, the MICE industry continues to transform, focusing on personalization, sustainability, and high-tech integration. Hybrid formats are becoming the standard, and participants increasingly value authentic experiences and deep immersion in the regional culture. At Royal Event Group, we actively implement these trends, offering our clients innovative solutions for their events.',
          image: 'https://images.unsplash.com/photo-1540575861501-7ad05823c23d?auto=format&fit=crop&q=80&w=1000'
        },
        {
          id: 'egypt-events',
          title: 'Why Egypt is the Perfect Place for Conferences',
          date: 'February 10, 2024',
          category: 'Locations',
          excerpt: 'Advantages of holding large-scale events in Sharm El Sheikh and Cairo.',
          content: 'Egypt offers a unique combination of developed infrastructure, a favorable climate, and a rich cultural heritage. The presence of Royal Event\'s own production base in Sharm El Sheikh allows us to implement projects of any complexity without intermediaries, ensuring quality control at every stage. From luxury hotels to unique desert venues, the possibilities are endless.',
          image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=1000'
        },
        {
          id: 'team-building-culture',
          title: 'Team Building as a Culture Development Tool',
          date: 'January 25, 2024',
          category: 'Corporate Culture',
          excerpt: 'How a well-organized trip can unite a team and increase efficiency.',
          content: 'Modern team building is not just a joint vacation, but a strategic tool. We develop programs that help employees reach their potential, establish communication, and feel involved in the company\'s common goals. Our cases in the UAE and Egypt prove that a change of scenery and unusual tasks work wonders for team spirit.',
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000'
        }
      ]
    }
  }
};
