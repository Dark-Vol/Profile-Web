import type { Locale, SitePage, UiCopy } from "./types";

const stack = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vue.js",
  "Angular",
  "Next.js",
  "Node.js",
  "Python",
  "Django",
  "Flask",
  "FastAPI",
  "Pandas",
  "Java",
  "Spring",
  ".NET",
  "Unity",
  "C++",
  "Qt",
  "Flutter",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "SQLite",
  "MS SQL",
  "DevOps",
  "Docker",
  "Git",
  "CI/CD",
  "React Native",
  "Kotlin",
  "NumPy",
  "Scikit-learn",
];

const en: UiCopy = {
  skip: "Skip to content",
  logoAria: "TI Code, home",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  language: "Language",
  nav: [
    {
      label: "Development",
      children: [
        { label: "Websites", href: "/website-development" },
        { label: "Mobile Apps", href: "/mobile-app-development" },
        { label: "Chatbots", href: "/chatbot-development" },
        { label: "Desktop Apps", href: "/desktop-app-development" },
        { label: "All development", href: "/services/development" },
      ],
    },
    { label: "SEO", href: "/services/seo" },
    {
      label: "Education",
      children: [
        { label: "1-on-1 Lessons", href: "/individual-programming-lessons" },
        { label: "Group Lessons", href: "/group-programming-lessons" },
        { label: "Academic Work Help", href: "/programming-assignment-help" },
        { label: "Interview Preparation", href: "/career-and-education-guidance" },
        { label: "All education", href: "/services/education" },
      ],
    },
    {
      label: "Company",
      children: [
        { label: "Blog", href: "/blog" },
        { label: "Our Team", href: "/team" },
        { label: "Reviews", href: "/reviews" },
      ],
    },
    {
      label: "Products",
      children: [{ label: "AI Consultant", href: "/products/ai-consultant" }],
    },
  ],
  heroTitle: "IT education, development, and promotion",
  heroAccent: "full cycle of services",
  heroTurnkey: "turnkey",
  cards: [
    {
      title: "Development",
      href: "/services/development",
      links: [
        { label: "Websites", href: "/website-development" },
        { label: "Mobile applications", href: "/mobile-app-development" },
        { label: "Chatbots", href: "/chatbot-development" },
        { label: "Desktop applications", href: "/desktop-app-development" },
      ],
    },
    {
      title: "SEO",
      href: "/services/seo",
      links: [
        { label: "SEO promotion", href: "/services/seo" },
        { label: "Contextual advertising", href: "/services/seo" },
        { label: "Targeted advertising", href: "/services/seo" },
        { label: "Social media advertising", href: "/services/seo" },
      ],
    },
    {
      title: "Education",
      href: "/services/education",
      links: [
        { label: "Individual lessons", href: "/individual-programming-lessons" },
        { label: "Group lessons", href: "/group-programming-lessons" },
        { label: "Help with theses/coursework", href: "/programming-assignment-help" },
        { label: "Preparation for admission or interview", href: "/career-and-education-guidance" },
      ],
    },
  ],
  solutionsTitle: "IT Solutions for Growing Your Business",
  solutionsLead:
    "Professional development, SEO promotion, and IT education with guaranteed results. We turn your ideas into successful digital products.",
  tabsLabel: "Service areas",
  tabs: [
    {
      id: "development",
      label: "Development",
      icon: "💻",
      heading: "Full-Cycle Development Expertise",
      lead: "We create modern, scalable, and secure digital products using proven and advanced technologies. We handle the entire development cycle—from analysis and planning to launch and support—delivering websites, mobile apps, and custom software focused on business growth and sustainability.",
      techTitle: "Modern Technology Stack",
      tech: [
        { name: "React.js — web application interfaces", level: "Expert level" },
        { name: "Next.js — SEO-oriented websites and SaaS", level: "Expert level" },
        { name: "TypeScript — scalable frontend solutions", level: "Expert level" },
        { name: "Node.js — backend and APIs", level: "Expert level" },
        { name: "Python — server logic and automation", level: "Expert level" },
        { name: "Flutter / React Native — iOS and Android apps", level: "Expert level" },
      ],
      processTitle: "Digital Product Development Process",
      steps: [
        {
          title: "Analysis and Planning",
          text: "In-depth analysis of business requirements, target audience, and market, forming the technical solution and project architecture.",
        },
        {
          title: "UI/UX Design",
          text: "Designing intuitive and user-friendly interfaces based on user scenarios and best UX practices.",
        },
        {
          title: "Development and Testing",
          text: "Iterative development with automated testing, code review, and strict quality control.",
        },
        {
          title: "Deployment and Launch",
          text: "Preparing and launching the product in the production environment with performance and stability optimization.",
        },
        {
          title: "Support and Growth",
          text: "Technical support, updates, scaling, and continuous product development.",
        },
      ],
      benefitsTitle: "Key Advantages of Collaboration",
      benefits: [
        "Custom digital solutions tailored to business goals and company needs",
        "Scalable architecture ensuring stable growth and product evolution",
        "Modern technologies and best engineering practices for high performance and security",
        "Clean and SEO-optimized code for effective search engine promotion",
        "Cross-platform compatibility and responsive design for all devices",
        "Complete technical documentation and knowledge transfer to your team",
      ],
    },
    {
      id: "seo",
      label: "SEO & Marketing",
      icon: "🚀",
      heading: "SEO and Data-Driven Digital Marketing",
      lead: "We deliver measurable business results through strategic SEO, targeted advertising, and comprehensive data-driven digital campaigns. Increasing search visibility, attracting target audiences, and boosting conversions.",
      servicesTitle: "Marketing Services for Business Growth",
      services: [
        {
          title: "SEO Promotion",
          text: "Comprehensive search engine optimization to increase organic traffic, improve visibility, and maintain strong rankings.",
          points: [
            "Technical SEO audit and site optimization",
            "Content strategy and creation of SEO-focused materials",
            "Link building and domain authority growth",
          ],
        },
        {
          title: "Contextual Advertising (PPC)",
          text: "Effective PPC campaigns in Google Ads and search networks focused on conversions and ROI.",
          points: [
            "Keyword analysis and campaign setup",
            "Ad optimization and A/B testing",
            "Conversion tracking, analytics, and ROI measurement",
          ],
        },
        {
          title: "Social Media Targeted Advertising",
          text: "Precisely targeted campaigns on Facebook, Instagram, LinkedIn, and other platforms to reach the right audience.",
          points: [
            "Audience segmentation and precise targeting",
            "Creative development and hypothesis testing",
            "Optimization, scaling, and performance monitoring",
          ],
        },
        {
          title: "SMM and Social Media Management",
          text: "Strategic growth and management of social media to increase brand awareness and audience engagement.",
          points: [
            "Content strategy and publishing calendar",
            "Community management and audience engagement",
            "Analytics, reporting, and performance evaluation",
          ],
        },
      ],
      resultsTitle: "Proven Results",
      results: [
        "Significant increase in organic traffic through comprehensive SEO strategies",
        "Growth in customer conversions after optimizing user flows and interfaces",
        "Increased ROI through precise targeting and campaign analytics",
        "High search engine rankings through quality content and technical optimization",
      ],
    },
    {
      id: "education",
      label: "Education",
      icon: "🎓",
      heading: "Professional Programming Courses and Mentorship",
      lead: "Comprehensive programming education with personalized learning paths, real projects, and career support. Learn from industry experts and build your IT career.",
      programsTitle: "Educational Programs",
      programs: [
        {
          title: "Individual Lessons",
          text: "One-on-one personalized learning with a flexible curriculum tailored to your goals and pace.",
          fit: "Program adapts to your rhythm and skill level",
          level: "From beginner to advanced",
        },
        {
          title: "Group Lessons",
          text: "Interactive sessions in small groups with collaborative projects and peer learning.",
          fit: "Adjusted based on group pace and participant progress",
          level: "From beginner to intermediate",
        },
        {
          title: "Corporate Training",
          text: "Customized programs for teams aimed at improving technical skills and collaborative efficiency.",
          fit: "Individually tailored to company needs",
          level: "Custom",
        },
        {
          title: "Intensive Bootcamp",
          text: "Accelerated programs to quickly master key skills and gain practical experience for your career.",
          fit: "Tailored to student intensity and goals",
          level: "Intermediate",
        },
      ],
      stackTitle: "Relevant Programming Languages and Frameworks for IT Careers",
      stack,
      outcomesTitle: "Results Our Students Achieve",
      outcomes: [
        {
          title: "Professional portfolio",
          text: "Building real projects to showcase skills to employers.",
        },
        {
          title: "Mastery of modern technologies",
          text: "Learning in-demand languages and frameworks for web, mobile, and backend development.",
        },
        {
          title: "Analytical thinking",
          text: "Problem-solving, algorithmic thinking, and handling complex projects.",
        },
        {
          title: "Industry-standard experience",
          text: "Practice with the methodologies, tools, and approaches used in IT companies.",
        },
        {
          title: "Career support",
          text: "Help with resumes, interviews, and starting an IT career.",
        },
      ],
    },
  ],
  ctaTitle: "Ready to Start Your Project?",
  ctaText:
    "Contact us today for a free consultation and let's discuss how we can help you achieve your business goals.",
  ctaButton: "Get a Free Consultation",
  footerDescription:
    "Premium development services with innovative solutions for your business growth. We transform ideas into powerful digital experiences.",
  footerColumns: [
    {
      title: "Development",
      links: [
        { label: "Website Development", href: "/website-development" },
        { label: "Mobile Apps", href: "/mobile-app-development" },
        { label: "Chatbots", href: "/chatbot-development" },
        { label: "Desktop Apps", href: "/desktop-app-development" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "All Development Services", href: "/services/development" },
        { label: "SEO Promotion", href: "/services/seo" },
        { label: "IT Education", href: "/services/education" },
      ],
    },
    {
      title: "Education",
      links: [
        { label: "Individual Lessons", href: "/individual-programming-lessons" },
        { label: "Group Lessons", href: "/group-programming-lessons" },
        { label: "Academic Work Help", href: "/programming-assignment-help" },
        { label: "Interview Preparation", href: "/career-and-education-guidance" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Team TICode", href: "/team" },
        { label: "Reviews", href: "/reviews" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-use" },
      ],
    },
  ],
  newsletterTitle: "Subscribe to Newsletter",
  newsletterText: "Get the latest news and special offers",
  newsletterPlaceholder: "Email address",
  newsletterButton: "Subscribe",
  newsletterInvalid: "Enter a valid email address, for example name@email.com.",
  newsletterSuccess: "Open your mail app to confirm the subscription request.",
  rights: "Premium development services with innovative solutions.",
  rightsReserved: "All rights reserved.",
  contactTitle: "Free consultation",
  contactText: "Tell us about the task. We reply by email or Telegram.",
  contactName: "Name",
  contactEmail: "Email",
  contactMessage: "Message",
  contactSend: "Send Message",
  contactSending: "Opening mail…",
  contactClose: "Close dialog",
  contactNameError: "Enter your name.",
  contactEmailError: "Enter a valid email, for example name@email.com.",
  contactMessageError: "Describe the task in at least 10 characters.",
  contactMessageHint: "What you need, rough deadline, and links if you have them.",
  contactSuccess: "Your mail app is opening with this message.",
  navLabel: "Main",
  homeTitle: "Development, SEO, and Education — TI Code",
  cardMore: "All services",
  contactsLabel: "Contacts",
  chatOpen: "Open a chat with a consultant",
  socialTelegram: "Go to Telegram",
  socialInstagram: "Go to Instagram",
  socialEmail: "Send an email",
  socialPhone: "Make a phone call",
  emptyReviews:
    "Published reviews will appear here. Write to us and tell us about your project.",
  notFoundTitle: "Page not found",
  notFoundText: "This address is not on the TI Code site.",
  notFoundAction: "Back to home",
};

const ru: UiCopy = {
  skip: "К содержанию",
  logoAria: "TI Code, на главную",
  openMenu: "Открыть меню",
  closeMenu: "Закрыть меню",
  language: "Язык",
  nav: [
    {
      label: "Разработка",
      children: [
        { label: "Сайты", href: "/website-development" },
        { label: "Мобильные приложения", href: "/mobile-app-development" },
        { label: "Чат-боты", href: "/chatbot-development" },
        { label: "Десктопные приложения", href: "/desktop-app-development" },
        { label: "Вся разработка", href: "/services/development" },
      ],
    },
    { label: "SEO", href: "/services/seo" },
    {
      label: "Обучение",
      children: [
        { label: "Индивидуальные занятия", href: "/individual-programming-lessons" },
        { label: "Групповые занятия", href: "/group-programming-lessons" },
        { label: "Помощь с учебными работами", href: "/programming-assignment-help" },
        { label: "Подготовка к собеседованию", href: "/career-and-education-guidance" },
        { label: "Все программы", href: "/services/education" },
      ],
    },
    {
      label: "Компания",
      children: [
        { label: "Блог", href: "/blog" },
        { label: "Команда", href: "/team" },
        { label: "Отзывы", href: "/reviews" },
      ],
    },
    {
      label: "Продукты",
      children: [{ label: "AI Consultant", href: "/products/ai-consultant" }],
    },
  ],
  heroTitle: "IT-обучение, разработка и продвижение",
  heroAccent: "полный цикл услуг",
  heroTurnkey: "под ключ",
  cards: [
    {
      title: "Разработка",
      href: "/services/development",
      links: [
        { label: "Сайты", href: "/website-development" },
        { label: "Мобильные приложения", href: "/mobile-app-development" },
        { label: "Чат-боты", href: "/chatbot-development" },
        { label: "Десктопные приложения", href: "/desktop-app-development" },
      ],
    },
    {
      title: "SEO",
      href: "/services/seo",
      links: [
        { label: "SEO-продвижение", href: "/services/seo" },
        { label: "Контекстная реклама", href: "/services/seo" },
        { label: "Таргетированная реклама", href: "/services/seo" },
        { label: "Реклама в соцсетях", href: "/services/seo" },
      ],
    },
    {
      title: "Обучение",
      href: "/services/education",
      links: [
        { label: "Индивидуальные занятия", href: "/individual-programming-lessons" },
        { label: "Групповые занятия", href: "/group-programming-lessons" },
        { label: "Помощь с дипломными и курсовыми", href: "/programming-assignment-help" },
        { label: "Подготовка к поступлению или собеседованию", href: "/career-and-education-guidance" },
      ],
    },
  ],
  solutionsTitle: "IT-решения для роста вашего бизнеса",
  solutionsLead:
    "Профессиональная разработка, SEO-продвижение и IT-образование с гарантированным результатом. Превращаем ваши идеи в успешные цифровые продукты.",
  tabsLabel: "Направления",
  tabs: [
    {
      id: "development",
      label: "Разработка",
      icon: "💻",
      heading: "Экспертиза полного цикла разработки",
      lead: "Мы создаём современные, масштабируемые и безопасные цифровые продукты на проверенных и актуальных технологиях. Берём весь цикл — от аналитики и проектирования до запуска и поддержки: сайты, мобильные приложения и заказное программное обеспечение для роста бизнеса.",
      techTitle: "Современный технологический стек",
      tech: [
        { name: "React.js — интерфейсы веб-приложений", level: "Экспертный уровень" },
        { name: "Next.js — SEO-ориентированные сайты и SaaS", level: "Экспертный уровень" },
        { name: "TypeScript — масштабируемый frontend", level: "Экспертный уровень" },
        { name: "Node.js — backend и API", level: "Экспертный уровень" },
        { name: "Python — серверная логика и автоматизация", level: "Экспертный уровень" },
        { name: "Flutter / React Native — приложения iOS и Android", level: "Экспертный уровень" },
      ],
      processTitle: "Процесс разработки цифровых продуктов",
      steps: [
        {
          title: "Анализ и планирование",
          text: "Разбираем бизнес-требования, аудиторию и рынок, фиксируем техническое решение и архитектуру.",
        },
        {
          title: "UI/UX дизайн",
          text: "Проектируем понятные интерфейсы по пользовательским сценариям и практикам UX.",
        },
        {
          title: "Разработка и тестирование",
          text: "Итеративная разработка, автотесты, code review и контроль качества.",
        },
        {
          title: "Запуск",
          text: "Выводим продукт в продакшн и доводим производительность и стабильность.",
        },
        {
          title: "Поддержка и развитие",
          text: "Сопровождение, обновления, масштабирование и дальнейшее развитие продукта.",
        },
      ],
      benefitsTitle: "Ключевые преимущества сотрудничества",
      benefits: [
        "Решения под цели и задачи компании, без шаблонной сборки",
        "Архитектура, которая выдерживает рост продукта",
        "Современный стек и инженерные практики для скорости и безопасности",
        "Чистый SEO-ориентированный код",
        "Адаптив и кроссплатформенность на всех устройствах",
        "Документация и передача знаний вашей команде",
      ],
    },
    {
      id: "seo",
      label: "SEO и маркетинг",
      icon: "🚀",
      heading: "SEO и data-driven цифровой маркетинг",
      lead: "Даём измеримый результат: стратегическое SEO, таргетированная реклама и кампании на данных. Растим видимость, приводим целевую аудиторию и повышаем конверсии.",
      servicesTitle: "Маркетинг для роста бизнеса",
      services: [
        {
          title: "SEO-продвижение",
          text: "Комплексная поисковая оптимизация: органический трафик, видимость и устойчивые позиции.",
          points: [
            "Технический SEO-аудит и оптимизация сайта",
            "Контент-стратегия и SEO-материалы",
            "Линкбилдинг и авторитет домена",
          ],
        },
        {
          title: "Контекстная реклама (PPC)",
          text: "Кампании в Google Ads и поисковых сетях с фокусом на конверсии и окупаемость.",
          points: [
            "Анализ запросов и настройка кампаний",
            "Оптимизация объявлений и A/B-тесты",
            "Конверсии, аналитика и ROI",
          ],
        },
        {
          title: "Таргетированная реклама",
          text: "Кампании в Facebook, Instagram, LinkedIn и других сетях под нужную аудиторию.",
          points: [
            "Сегментация и точный таргетинг",
            "Креативы и проверка гипотез",
            "Оптимизация, масштаб и контроль",
          ],
        },
        {
          title: "SMM",
          text: "Стратегия и ведение соцсетей: узнаваемость бренда и вовлечённость аудитории.",
          points: [
            "Контент-стратегия и календарь публикаций",
            "Комьюнити и работа с аудиторией",
            "Аналитика и отчёты",
          ],
        },
      ],
      resultsTitle: "Доказанные результаты",
      results: [
        "Рост органического трафика за счёт комплексной SEO-стратегии",
        "Рост конверсии после оптимизации сценариев и интерфейсов",
        "Выше отдача от рекламы за счёт точного таргетинга и аналитики",
        "Сильные позиции в поиске за счёт контента и технической оптимизации",
      ],
    },
    {
      id: "education",
      label: "Обучение",
      icon: "🎓",
      heading: "Курсы программирования и менторство",
      lead: "Обучение с персональной траекторией, реальными проектами и карьерной поддержкой. Практика с экспертами и понятный путь в IT.",
      programsTitle: "Образовательные программы",
      programs: [
        {
          title: "Индивидуальные занятия",
          text: "Обучение один на один. Программа под ваши цели и темп.",
          fit: "Строится под ваш ритм и уровень",
          level: "От начинающего до продвинутого",
        },
        {
          title: "Групповые занятия",
          text: "Небольшие группы, общие проекты и обмен опытом.",
          fit: "Темп группы и прогресс участников",
          level: "От начинающего до среднего",
        },
        {
          title: "Корпоративное обучение",
          text: "Программы для команд: технические навыки и совместная работа.",
          fit: "Составляется под задачи компании",
          level: "Индивидуальный",
        },
        {
          title: "Интенсивный буткемп",
          text: "Ускоренный формат, чтобы быстро набрать практику для карьеры.",
          fit: "Под интенсивность и цели студента",
          level: "Средний уровень",
        },
      ],
      stackTitle: "Языки и фреймворки для IT-карьеры",
      stack,
      outcomesTitle: "Результаты студентов",
      outcomes: [
        {
          title: "Портфолио",
          text: "Реальные проекты, которые можно показать работодателю.",
        },
        {
          title: "Современный стек",
          text: "Востребованные языки и фреймворки для веба, мобильной и backend-разработки.",
        },
        {
          title: "Аналитическое мышление",
          text: "Решение задач, алгоритмы и работа со сложными проектами.",
        },
        {
          title: "Индустриальная практика",
          text: "Методы и инструменты, которыми пользуются в IT-компаниях.",
        },
        {
          title: "Карьерная поддержка",
          text: "Резюме, собеседования и старт в профессии.",
        },
      ],
    },
  ],
  ctaTitle: "Готовы начать проект?",
  ctaText:
    "Напишите сегодня — бесплатная консультация, и разберём, как прийти к вашей цели.",
  ctaButton: "Получить консультацию",
  footerDescription:
    "Разработка с сильными решениями для роста бизнеса. Превращаем идеи в рабочие цифровые продукты.",
  footerColumns: [
    {
      title: "Разработка",
      links: [
        { label: "Разработка сайтов", href: "/website-development" },
        { label: "Мобильные приложения", href: "/mobile-app-development" },
        { label: "Чат-боты", href: "/chatbot-development" },
        { label: "Десктопные приложения", href: "/desktop-app-development" },
      ],
    },
    {
      title: "Услуги",
      links: [
        { label: "Вся разработка", href: "/services/development" },
        { label: "SEO-продвижение", href: "/services/seo" },
        { label: "IT-обучение", href: "/services/education" },
      ],
    },
    {
      title: "Обучение",
      links: [
        { label: "Индивидуальные занятия", href: "/individual-programming-lessons" },
        { label: "Групповые занятия", href: "/group-programming-lessons" },
        { label: "Учебные работы", href: "/programming-assignment-help" },
        { label: "Подготовка к собеседованию", href: "/career-and-education-guidance" },
      ],
    },
    {
      title: "Компания",
      links: [
        { label: "Главная", href: "/" },
        { label: "Блог", href: "/blog" },
        { label: "Команда TI Code", href: "/team" },
        { label: "Отзывы", href: "/reviews" },
        { label: "Политика конфиденциальности", href: "/privacy-policy" },
        { label: "Условия использования", href: "/terms-of-use" },
      ],
    },
  ],
  newsletterTitle: "Подписка на новости",
  newsletterText: "Новости и специальные предложения",
  newsletterPlaceholder: "Электронная почта",
  newsletterButton: "Подписаться",
  newsletterInvalid: "Укажите корректный email, например name@email.com.",
  newsletterSuccess: "Откроется почта, чтобы подтвердить запрос на подписку.",
  rights: "Разработка и продвижение цифровых продуктов.",
  rightsReserved: "Все права защищены.",
  contactTitle: "Бесплатная консультация",
  contactText: "Опишите задачу. Ответим по почте или в Telegram.",
  contactName: "Имя",
  contactEmail: "Email",
  contactMessage: "Сообщение",
  contactSend: "Отправить сообщение",
  contactSending: "Открываем почту…",
  contactClose: "Закрыть окно",
  contactNameError: "Укажите имя.",
  contactEmailError: "Укажите корректный email, например name@email.com.",
  contactMessageError: "Опишите задачу хотя бы в 10 символах.",
  contactMessageHint: "Что нужно сделать, примерный срок и ссылки, если есть.",
  contactSuccess: "Почтовая программа откроется с этим текстом.",
  navLabel: "Основное меню",
  homeTitle: "Разработка, SEO и обучение — TI Code",
  cardMore: "Все услуги",
  contactsLabel: "Контакты",
  chatOpen: "Открыть чат с консультантом",
  socialTelegram: "Перейти в Telegram",
  socialInstagram: "Перейти в Instagram",
  socialEmail: "Написать письмо",
  socialPhone: "Позвонить",
  emptyReviews: "Опубликованные отзывы появятся здесь. Напишите нам о своём проекте.",
  notFoundTitle: "Страница не найдена",
  notFoundText: "Такого адреса на сайте TI Code нет.",
  notFoundAction: "На главную",
};

function page(
  enTitle: string,
  enLead: string,
  enBlocks: SitePage["blocks"],
  ruTitle: string,
  ruLead: string,
  ruBlocks: SitePage["blocks"],
): Record<Locale, SitePage> {
  return {
    en: { title: enTitle, lead: enLead, blocks: enBlocks },
    ru: { title: ruTitle, lead: ruLead, blocks: ruBlocks },
  };
}

const pagePairs: Record<string, Record<Locale, SitePage>> = {
  "website-development": page(
    "Website Development of Any Complexity",
    "We design, build, and launch modern websites — from the idea and interface to testing and support. Next.js, Nest.js, Django, Laravel, FastAPI, and CMS when a CMS is actually the right tool.",
    [
      {
        title: "Custom solutions, not templates",
        text: "We do not ship a ready-made theme and call it a product. Layout, code, and content structure are built for the task, without unused blocks.",
        points: ["Unique interface", "No theme bloat", "SEO-ready markup"],
      },
      {
        title: "Direct communication",
        text: "You talk to the people who write the code. Fewer handoffs, clearer requirements, faster decisions.",
        points: ["No account-manager layer", "Transparent stages", "Access to prototypes"],
      },
      {
        title: "How long does it take?",
        text: "A landing page or a small chatbot is often 1–3 weeks. A corporate site or a product with integrations is usually 1–3 months, including testing.",
      },
    ],
    "Разработка сайтов любой сложности",
    "Проектируем, разрабатываем и запускаем сайты: от идеи и интерфейса до тестов и поддержки. Next.js, Nest.js, Django, Laravel, FastAPI — и CMS, если она действительно уместна.",
    [
      {
        title: "Свои решения, не шаблоны",
        text: "Не берём готовую тему и не называем это продуктом. Вёрстка, код и структура контента собираются под задачу, без лишних блоков.",
        points: ["Свой интерфейс", "Без раздутого шаблона", "Разметка под SEO"],
      },
      {
        title: "Прямая связь",
        text: "Вы общаетесь с теми, кто пишет код. Меньше передач, яснее требования, быстрее решения.",
        points: ["Без прослойки менеджеров", "Прозрачные этапы", "Доступ к прототипам"],
      },
      {
        title: "Сколько занимает проект?",
        text: "Лендинг или небольшой бот часто укладывается в 1–3 недели. Корпоративный сайт или продукт с интеграциями — обычно 1–3 месяца вместе с тестированием.",
      },
    ],
  ),
  "mobile-app-development": page(
    "Mobile App Development",
    "iOS and Android applications on Flutter and React Native, plus native work when the product needs it. From the scenario and interface to store release and support.",
    [
      {
        title: "What we build",
        text: "Client apps, internal tools, and products that share a backend with the website.",
        points: ["Flutter", "React Native", "API integration", "Store release"],
      },
      {
        title: "How we work",
        text: "Prototype first, then iterative builds you can install and check. Performance and offline behavior are part of the scope, not a surprise at the end.",
      },
    ],
    "Мобильная разработка",
    "Приложения для iOS и Android на Flutter и React Native, натив — когда продукту это нужно. От сценария и интерфейса до публикации и поддержки.",
    [
      {
        title: "Что делаем",
        text: "Клиентские приложения, внутренние инструменты и продукты с общим backend у сайта.",
        points: ["Flutter", "React Native", "Интеграция с API", "Публикация в сторах"],
      },
      {
        title: "Как работаем",
        text: "Сначала прототип, затем сборки, которые можно поставить и проверить. Скорость и офлайн закладываем в объём, а не оставляем на конец.",
      },
    ],
  ),
  "chatbot-development": page(
    "Chatbot Development",
    "Bots for Telegram and other messengers, plus site assistants. Scenarios, integrations, and a backend that does not fall over on the first campaign.",
    [
      {
        title: "Typical scope",
        text: "Leads, support, payments, notifications, and handoff to a person when the dialog needs it.",
        points: ["Telegram", "Scenario design", "CRM and API", "Admin tools"],
      },
    ],
    "Разработка чат-ботов",
    "Боты для Telegram и других мессенджеров, а также ассистенты на сайте. Сценарии, интеграции и backend, который держит первую же рекламную кампанию.",
    [
      {
        title: "Обычный объём",
        text: "Заявки, поддержка, оплаты, уведомления и передача диалога человеку, когда это нужно.",
        points: ["Telegram", "Сценарии", "CRM и API", "Админка"],
      },
    ],
  ),
  "desktop-app-development": page(
    "Desktop App Development",
    "Windows and cross-platform desktop software: internal tools, clients for your service, and utilities that have to feel native.",
    [
      {
        title: "Stack",
        text: "We pick the stack for the product, not the other way around.",
        points: ["WPF / MAUI / WinUI", "Electron", "Python and Django for the server side"],
      },
    ],
    "Десктопные приложения",
    "Программы для Windows и кроссплатформенные клиенты: внутренние инструменты, клиенты сервиса и утилиты, которые должны ощущаться нативными.",
    [
      {
        title: "Стек",
        text: "Стек выбираем под продукт, а не продукт под стек.",
        points: ["WPF / MAUI / WinUI", "Electron", "Python и Django на сервере"],
      },
    ],
  ),
  "services/development": page(
    "Development Services",
    "Websites, mobile apps, chatbots, and desktop software. One team from the brief to launch and the next iteration.",
    [
      {
        title: "Full cycle",
        text: "Analysis, interface, development, testing, release, and support. You see the stage you are in and what is next.",
        points: [
          "Websites",
          "Mobile applications",
          "Chatbots",
          "Desktop applications",
        ],
      },
    ],
    "Услуги разработки",
    "Сайты, мобильные приложения, чат-боты и десктоп. Одна команда от брифа до запуска и следующей итерации.",
    [
      {
        title: "Полный цикл",
        text: "Аналитика, интерфейс, разработка, тесты, релиз и поддержка. Видно, на каком этапе проект и что дальше.",
        points: ["Сайты", "Мобильные приложения", "Чат-боты", "Десктопные приложения"],
      },
    ],
  ),
  "services/seo": page(
    "SEO and Advertising",
    "Search visibility, paid traffic, and social campaigns with numbers you can check: traffic, conversions, and cost.",
    [
      {
        title: "What is included",
        text: "Technical SEO, content, links, Google Ads, and targeted ads. We do not hide the work inside a monthly PDF with no actions.",
        points: [
          "Technical audit",
          "Content and semantics",
          "PPC",
          "Targeted advertising and SMM",
        ],
      },
    ],
    "SEO и реклама",
    "Видимость в поиске, платный трафик и соцсети с цифрами, которые можно проверить: трафик, конверсии и стоимость.",
    [
      {
        title: "Что входит",
        text: "Техническое SEO, контент, ссылки, Google Ads и таргет. Работа не прячется в ежемесячный PDF без действий.",
        points: ["Технический аудит", "Контент и семантика", "PPC", "Таргет и SMM"],
      },
    ],
  ),
  "services/education": page(
    "IT Education",
    "Individual lessons, groups, corporate training, and interview preparation. The program follows the goal: first job, a stronger stack, or a specific project.",
    [
      {
        title: "Formats",
        text: "Pick the format. The curriculum is not a fixed recording.",
        points: [
          "Individual lessons",
          "Group lessons",
          "Academic work help",
          "Admission and interview preparation",
        ],
      },
    ],
    "IT-обучение",
    "Индивидуальные и групповые занятия, корпоративные программы и подготовка к собеседованию. Программа идёт за целью: первая работа, более сильный стек или конкретный проект.",
    [
      {
        title: "Форматы",
        text: "Формат выбираете вы. Это не запись одного и того же курса.",
        points: [
          "Индивидуальные занятия",
          "Групповые занятия",
          "Помощь с учебными работами",
          "Поступление и собеседование",
        ],
      },
    ],
  ),
  "individual-programming-lessons": page(
    "Individual Programming Lessons",
    "One-on-one lessons. The plan follows your pace, from the first program to production-level tasks.",
    [
      {
        title: "How a lesson works",
        text: "Short theory, then a task you write yourself. Homework is reviewed before the next session.",
        points: ["Beginner to advanced", "Your stack and your goal", "Code review on your solutions"],
      },
    ],
    "Индивидуальные занятия по программированию",
    "Занятия один на один. План под ваш темп: от первой программы до задач уровня продакшена.",
    [
      {
        title: "Как проходит занятие",
        text: "Короткая теория, затем задача, которую пишете вы. Домашнюю работу разбираем до следующей встречи.",
        points: ["От начинающего до продвинутого", "Ваш стек и ваша цель", "Разбор вашего кода"],
      },
    ],
  ),
  "group-programming-lessons": page(
    "Group Programming Lessons",
    "Small groups, shared projects, and a pace that follows the people in the room — not a recording.",
    [
      {
        title: "Who it is for",
        text: "Beginners and intermediate students who want practice and feedback, not a solo video course.",
        points: ["Small group", "Shared projects", "Beginner to intermediate"],
      },
    ],
    "Групповые занятия",
    "Небольшие группы, общие проекты и темп людей в группе, а не записи курса.",
    [
      {
        title: "Для кого",
        text: "Начинающие и средний уровень, кому нужна практика и обратная связь, а не видео в одиночку.",
        points: ["Малая группа", "Общие проекты", "От начинающего до среднего"],
      },
    ],
  ),
  "programming-assignment-help": page(
    "Help with Coursework and Theses",
    "We help you understand the assignment and finish a working solution you can explain. The goal is a defended work, not a file you cannot open.",
    [
      {
        title: "What we cover",
        text: "Coursework, theses, and lab assignments in programming: architecture, code, and the story you will tell at the defense.",
        points: ["Topic and structure", "Working code", "Defense preparation"],
      },
    ],
    "Помощь с дипломными и курсовыми",
    "Помогаем разобрать задание и довести рабочее решение, которое вы сможете объяснить. Цель — защита, а не файл, который не открывается.",
    [
      {
        title: "Что разбираем",
        text: "Курсовые, дипломы и лабораторные по программированию: архитектура, код и то, что вы расскажете на защите.",
        points: ["Тема и структура", "Рабочий код", "Подготовка к защите"],
      },
    ],
  ),
  "career-and-education-guidance": page(
    "Admission and Interview Preparation",
    "University admission and technical interviews. We train the topics you will actually be asked and the way you talk about your projects.",
    [
      {
        title: "Preparation",
        text: "Algorithms where they matter, your stack in depth, and a portfolio story that matches the vacancy or the program.",
        points: ["Mock interviews", "Resume", "Project walkthrough"],
      },
    ],
    "Подготовка к поступлению и собеседованию",
    "Поступление и технические собеседования. Тренируем темы, которые реально спрашивают, и рассказ о ваших проектах.",
    [
      {
        title: "Подготовка",
        text: "Алгоритмы там, где они нужны, ваш стек в глубину и история портфолио под вакансию или программу.",
        points: ["Пробные собеседования", "Резюме", "Разбор проектов"],
      },
    ],
  ),
  blog: page(
    "Blog",
    "Notes on technology choices, development, and promotion.",
    [
      {
        title: "Python vs JavaScript",
        text: "Which language fits a goal in 2026: data and automation, or websites and fullstack. Read the comparison.",
        points: ["Data and AI — Python", "Web and fullstack — JavaScript"],
      },
    ],
    "Блог",
    "Заметки о выборе технологий, разработке и продвижении.",
    [
      {
        title: "Python или JavaScript",
        text: "Какой язык ближе к цели: данные и автоматизация или сайты и fullstack.",
        points: ["Данные и AI — Python", "Веб и fullstack — JavaScript"],
      },
    ],
  ),
  "blog/python-vs-javascript": page(
    "Python vs JavaScript",
    "There is no universal winner. The useful question is what you want to build in the next year.",
    [
      {
        title: "Where each language leads",
        text: "Python is the practical default for data, machine learning, automation, and a lot of backend scripts. JavaScript is the language of the browser and, with TypeScript and Node.js, of many fullstack products.",
        points: [
          "Data, AI, automation — Python",
          "Websites, interfaces, fullstack — JavaScript",
          "A faster first web job — JavaScript has more product vacancies",
          "Readable first syntax — Python is easier to start",
        ],
      },
      {
        title: "Pay and prospects",
        text: "Salaries sit in the same range. The gap is the specialization, not the language logo. Both stacks are still hiring.",
      },
      {
        title: "How to choose",
        text: "If the goal is a website or a web service, start with JavaScript. If the goal is data or models, start with Python. Write something small this week and keep the streak.",
      },
    ],
    "Python или JavaScript",
    "Универсального победителя нет. Полезный вопрос — что вы хотите собрать в ближайший год.",
    [
      {
        title: "Где какой язык сильнее",
        text: "Python — практичный выбор для данных, машинного обучения, автоматизации и многих серверных скриптов. JavaScript — язык браузера и, вместе с TypeScript и Node.js, множества fullstack-продуктов.",
        points: [
          "Данные, AI, автоматизация — Python",
          "Сайты, интерфейсы, fullstack — JavaScript",
          "Быстрее первая веб-работа — у JavaScript больше продуктовых вакансий",
          "Проще первый синтаксис — у Python ниже порог входа",
        ],
      },
      {
        title: "Деньги и перспективы",
        text: "Вилки близкие. Разница в специализации, а не в логотипе языка. Оба стека по-прежнему нанимают.",
      },
      {
        title: "Как выбрать",
        text: "Нужен сайт или веб-сервис — начинайте с JavaScript. Нужны данные или модели — с Python. На этой неделе напишите маленькую программу и не бросайте.",
      },
    ],
  ),
  team: page(
    "Team of Experts in Development, Design, and Growth",
    "Strategy, design, and engineering in one process. These are the roles behind TI Code projects.",
    [
      {
        title: "Daniel Titov",
        text: "FullStack and mobile development, mentorship. Designs scalable architecture and keeps the code ready to grow.",
        points: ["Architecture", "Engineering", "Mentorship"],
      },
      {
        title: "Max Nesterenko",
        text: "Desktop applications and chatbots. Cross-platform clients and messenger integrations.",
        points: ["WPF / MAUI / WinUI", "Electron", "discord.js", "aiogram"],
      },
      {
        title: "Alexander Mak",
        text: "SEO and marketing. Technical SEO, content, and paid campaigns aimed at traffic that converts.",
        points: ["SEO", "Google Ads", "GA4", "Ahrefs"],
      },
      {
        title: "Alexander Tkatch",
        text: "Backend and bots. APIs, queues, integrations, parsing, auth, and server-side scaling.",
        points: ["Django", "FastAPI", "aiogram", "Playwright"],
      },
      {
        title: "Vladimir Pavlov",
        text: "Design and mobile interfaces. Prototypes, motion, and journeys that hold retention.",
        points: ["UI/UX", "Android / iOS", "Design systems"],
      },
      {
        title: "Max Gonchar",
        text: "Frontend and microcopy. Interfaces that stay fast and text that helps the user finish the action.",
        points: ["Frontend", "UX copy", "Conversion"],
      },
    ],
    "Команда разработки, дизайна и роста",
    "Стратегия, дизайн и инженерия в одном процессе. Ниже роли, на которых держатся проекты TI Code.",
    [
      {
        title: "Даниил Титов",
        text: "FullStack и мобильная разработка, менторство. Собирает архитектуру, которая выдерживает рост, и следит за качеством кода.",
        points: ["Архитектура", "Инженерия", "Менторство"],
      },
      {
        title: "Макс Нестеренко",
        text: "Десктоп и чат-боты. Кроссплатформенные клиенты и интеграции с мессенджерами.",
        points: ["WPF / MAUI / WinUI", "Electron", "discord.js", "aiogram"],
      },
      {
        title: "Александр Мак",
        text: "SEO и маркетинг. Техническое SEO, контент и платная реклама с прицелом на трафик, который конвертируется.",
        points: ["SEO", "Google Ads", "GA4", "Ahrefs"],
      },
      {
        title: "Александр Ткач",
        text: "Backend и боты. API, очереди, интеграции, парсинг, авторизация и масштабирование сервера.",
        points: ["Django", "FastAPI", "aiogram", "Playwright"],
      },
      {
        title: "Владимир Павлов",
        text: "Дизайн и мобильные интерфейсы. Прототипы, анимация и сценарии, которые держат удержание.",
        points: ["UI/UX", "Android / iOS", "Дизайн-системы"],
      },
      {
        title: "Макс Гончар",
        text: "Frontend и микрокопирайтинг. Быстрые интерфейсы и тексты, которые помогают довести действие до конца.",
        points: ["Frontend", "UX-тексты", "Конверсия"],
      },
    ],
  ),
  reviews: page(
    "Reviews",
    "We publish reviews from real projects. The list is empty until a client sends one.",
    [],
    "Отзывы",
    "Публикуем отзывы с реальных проектов. Список пуст, пока клиент не пришлёт свой.",
    [],
  ),
  "products/ai-consultant": page(
    "AI Consultant",
    "A chat widget for your website. It reads public pages and answers visitors in real time, without an operator on every question.",
    [
      {
        title: "What it is",
        text: "The widget learns the public text of the site: services, products, and questions you already answer. Visitors get a reply from that context.",
        points: ["24/7 on the site", "Your content, not a generic bot", "Handoff when a person is needed"],
      },
      {
        title: "Installation",
        text: "After the site is connected you get a short script for the header. One paste, and the widget is on the page. Shadow DOM keeps it from fighting your styles.",
      },
      {
        title: "Price and early access",
        text: "The plan depends on the site and the traffic. Early access means a custom plan and a direct line to the team before a public launch. Write to us and we will scope it.",
      },
    ],
    "AI Consultant",
    "Чат-виджет для сайта. Читает публичные страницы и отвечает посетителям сразу, без оператора на каждый вопрос.",
    [
      {
        title: "Что это",
        text: "Виджет опирается на публичный текст сайта: услуги, товары и вопросы, на которые вы уже отвечаете. Посетитель получает ответ из этого контекста.",
        points: ["Круглосуточно на сайте", "Ваш контент, не общий бот", "Передача человеку, когда она нужна"],
      },
      {
        title: "Установка",
        text: "После подключения сайта вы получаете короткий скрипт в header. Одна вставка — виджет на странице. Shadow DOM не даёт ему ломать ваши стили.",
      },
      {
        title: "Цена и ранний доступ",
        text: "План зависит от сайта и трафика. Ранний доступ — индивидуальные условия и прямая связь с командой до публичного запуска. Напишите, оценим объём.",
      },
    ],
  ),
  "privacy-policy": page(
    "Privacy Policy",
    "This page describes what this site does with the data you choose to send.",
    [
      {
        title: "What we receive",
        text: "If you write via the consultation form, the message opens in your mail app and is sent only when you send it. We do not run a separate account database on this page.",
        points: ["Name, email, and message — only if you send them", "Newsletter requests go through your mail app"],
      },
      {
        title: "Contacts",
        text: "Questions about personal data: gastariot@gmail.com.",
      },
    ],
    "Политика конфиденциальности",
    "Здесь — что сайт делает с данными, которые вы сами решите отправить.",
    [
      {
        title: "Что мы получаем",
        text: "Форма консультации открывает вашу почту. Письмо уходит только когда вы его отправляете. Отдельной базы аккаунтов на этой странице нет.",
        points: [
          "Имя, email и текст — только если вы их отправите",
          "Запрос на подписку тоже уходит через вашу почту",
        ],
      },
      {
        title: "Контакты",
        text: "Вопросы о персональных данных: gastariot@gmail.com.",
      },
    ],
  ),
  "terms-of-use": page(
    "Terms of Service",
    "The materials on this site describe TI Code services. A project starts after we agree on the scope, timeline, and price in writing.",
    [
      {
        title: "Using the site",
        text: "You may read the pages and contact us. Copying the site design or texts for another commercial project needs permission.",
      },
      {
        title: "Work agreement",
        text: "Estimates on the site are not an offer with a fixed price. The binding terms are the ones we confirm for your project.",
      },
    ],
    "Условия использования",
    "Материалы сайта описывают услуги TI Code. Проект начинается после того, как мы письменно фиксируем объём, срок и стоимость.",
    [
      {
        title: "Пользование сайтом",
        text: "Страницы можно читать и писать нам. Копировать дизайн или тексты в другой коммерческий проект можно только с разрешения.",
      },
      {
        title: "Договорённость о работе",
        text: "Оценки на сайте — не оферта с фиксированной ценой. Обязательны условия, которые мы подтвердим по вашему проекту.",
      },
    ],
  ),
};

export const copy: Record<Locale, UiCopy> = { en, ru };

export const pages: Record<Locale, Record<string, SitePage>> = {
  en: Object.fromEntries(Object.entries(pagePairs).map(([slug, pair]) => [slug, pair.en])),
  ru: Object.fromEntries(Object.entries(pagePairs).map(([slug, pair]) => [slug, pair.ru])),
};

export const pageSlugs = Object.keys(pagePairs);
