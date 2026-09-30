# Клиент

Сайт TI Code: разработка, SEO и обучение. Интерфейс на Next.js (App Router), тексты на русском и английском. Формы не ходят в API: после проверки они открывают почтовый клиент.

Серверная часть лежит в `server/` и описана в `server/doc/Info.md`. С клиентом она пока не связана.

## Стек

- Next.js 16.3, React 19, TypeScript
- Стили: Sass (глобальные слои и CSS Modules у кнопок и полей)
- ESLint: `eslint-config-next` (core web vitals и TypeScript)

В `package.json` указан `@web3-fullstack/layer-saas`. Исходники клиента его не импортируют.

## Запуск

Команды выполняются из каталога `client/`.

```bash
npm install
npm run dev
```

Dev-сервер Next.js по умолчанию слушает `http://localhost:3000`. В `next.config.ts` в `allowedDevOrigins` добавлен адрес `26.165.10.108`, чтобы открывать dev-сервер с этой машины в локальной сети.

| Скрипт | Что делает |
| --- | --- |
| `npm run dev` | Режим разработки |
| `npm run build` | Production-сборка |
| `npm run start` | Запуск собранного приложения |
| `npm run lint` | ESLint |

Алиас импортов: `@/*` указывает на корень `client/` (`tsconfig.json`). Sass ищет partials в `styles/` (`sassOptions.loadPaths`).

## Структура

```
client/
  app/                  маршруты App Router
    layout.tsx          корневой layout и метаданные
    page.tsx            главная
    [...slug]/page.tsx  внутренние страницы
    not-found.tsx       404
  components/           каркас сайта и экраны
    ui/buttons/         кнопки, CSS Modules
    ui/inputs/          поля, CSS Modules
  lib/
    dictionary.ts       тексты интерфейса и страниц (en / ru)
    types.ts            типы контента
    site.ts             контакты
  styles/               глобальный Sass
  utils/                модель полей, валидация, mailto, хуки
  public/               статика
```

## Маршруты

| Путь | Экран |
| --- | --- |
| `/` | Главная: карточки услуг и вкладки направлений |
| `/{slug}` | Внутренняя страница из словаря |
| неизвестный адрес | 404 |

Внутренние адреса собирает `generateStaticParams` из ключей `pageSlugs` в `lib/dictionary.ts`. Catch-all `[...slug]` склеивает сегменты в ключ (`blog/python-vs-javascript`). Если ключа нет в `pages.ru`, страница отдаёт `notFound()`.

Страницы словаря:

- Разработка: `website-development`, `mobile-app-development`, `chatbot-development`, `desktop-app-development`, `services/development`
- Продвижение: `services/seo`
- Обучение: `services/education`, `individual-programming-lessons`, `group-programming-lessons`, `programming-assignment-help`, `career-and-education-guidance`
- Компания: `blog`, `blog/python-vs-javascript`, `team`, `reviews`
- Продукт: `products/ai-consultant`
- Юридические: `privacy-policy`, `terms-of-use`

`reviews` описана с пустым списком блоков. На экране показывается пустое состояние и кнопка, которая открывает форму контакта. Карточки блога с заголовками «Python vs JavaScript» и «Python или JavaScript» ведут на `/blog/python-vs-javascript`.

Метаданные `<title>` и description для внутренних страниц берутся из русской версии (`pages.ru`). Шаблон заголовка в корневом layout: `%s — TI Code`. Заголовок вкладки на клиенте дополнительно выставляет `useDocumentTitle`, когда пользователь меняет язык.

## Язык

Два языка: `ru` и `en`. Тип `Locale` и форма текстов — в `lib/types.ts`, строки — в `lib/dictionary.ts`.

`LanguageProvider` держит локаль в состоянии React. Стартовое значение — `ru`. Выбор не пишется в URL и не сохраняется между перезагрузками. При смене языка `document.documentElement.lang` обновляется в эффекте. Тексты читаются через `useLanguage()`: поле `t` — текущий `UiCopy`, `localeModel` — модель для переключателя.

Внутренняя страница берёт контент как `pages[locale][slug]`. Новая страница добавляется функцией `page(...)` в `pagePairs`: сначала английские заголовок, лид и блоки, затем русские. Хелпер кладёт обе версии в одну запись, а экспорт `pages` раскладывает их по языкам.

Тексты оболочки (меню, герой, вкладки, подвал, ошибки форм, 404) живут в объектах `en` и `ru` типа `UiCopy` и экспортируются как `copy`.

## Каркас

`app/layout.tsx` оборачивает страницы в `SiteFrame`:

1. `LanguageProvider`
2. `ContactProvider`
3. Ссылка «к содержанию», шапка, левая колонка контактов, `<main id="main">`, подвал и кнопка чата

Кнопка чата вызывает `openContact()` и открывает диалог консультации.

Шапка: логотип, навигация из `t.nav`, переключатель языка, бургер на узком экране. Пункт с `children` — выпадающий список, пункт с `href` — ссылка. Открытое меню и раскрытый пункт сбрасываются при смене маршрута (`useRouteModel`). Ниже `1024px` (`NAV_MOBILE_QUERY`) меню становится выезжающим; класс `nav-open` на `body` вешает `useBodyClass`.

Левая колонка и подвал берут ссылки из `lib/site.ts`: Telegram, Instagram, почта, телефон. Поле `instagram` сейчас пустая строка — иконка ведёт на пустой `href`.

## Модель полей

Интерактивные значения передаются объектом `Model<T>`: `{ value, onChange }`.

| Функция | Назначение |
| --- | --- |
| `useModel` | Локальное состояние в виде модели |
| `useBoundModel` | Берёт переданную модель или заводит свою |
| `bindOption` | Булево «выбран этот вариант» для вкладки или переключателя |
| `useRouteModel` | Как `useModel`, но значение откатывается к начальному при смене пути |

Кнопки меню, вкладок и переключателя языка принимают `model` и сами вызывают `onChange`. Поля ввода делают то же: без `model` держат локальное значение.

## UI

Кнопки (`components/ui/buttons`):

| Компонент | Роль |
| --- | --- |
| `Button` | Кнопка или ссылка (`href`). Варианты `primary`, `secondary`, `ghost`, размеры `md` и `sm` |
| `IconButton` | Кнопка-иконка |
| `ToggleButton` | Переключатель по модели |
| `TabButton` | Вкладка (`role="tab"`) |
| `DropdownButton` | Раскрытие пункта меню |
| `BurgerButton` | Мобильное меню |
| `ChatButton` | Плавающая кнопка диалога |

Поля (`components/ui/inputs`): `TextInput`, `EmailInput`, `TextareaInput`. У каждого есть подпись, необязательные `hint` и `error`. `useField` связывает `aria-describedby`, `aria-invalid` и id ошибки.

Стили этих компонентов — CSS Modules рядом с файлом компонента. Остальной интерфейс — глобальные классы из `styles/`.

## Стили

`styles/globals.scss` подключает слои по порядку:

- `abstracts` — токены и миксины, наружу через `@forward`
- `base` — reset, типографика, утилиты, формы
- `layout` — шапка, рельс контактов, подвал, диалог
- `sections` — герой, блок вкладок, призыв к действию, внутренняя страница

Токены в `styles/abstracts/_tokens.scss`: цвета, шкала отступов, радиусы, брейкпоинты `640 / 860 / 1024 / 1200`, ширина контейнера `1280px`. Миксины: `up`, `down`, `hover`, `focus-ring`, `container`. В модулях и секциях токены подключаются как `@use "tokens" as *` или через `abstracts`.

## Формы и контакты

Контакты правятся в `lib/site.ts`: `telegram`, `instagram`, `email`, `phone`, `phoneLabel`.

Диалог консультации (`ContactProvider`):

- имя обязательно;
- email проверяется шаблоном `isEmail`;
- сообщение не короче `CONTACT_MESSAGE_MIN` (10 символов);
- первое ошибочное поле получает фокус;
- при успехе `openMailto` открывает письмо на `contacts.email`.

Подписка в подвале проверяет только email и так же открывает `mailto` с темой `Newsletter`. Состояние «успех» ставится локально через 300 мс. Письмо на сервер не отправляется: бэкенд маршрутов для этих форм не предоставляет.

## Что сознательно не сделано

- Локаль не в адресе и не в `localStorage`. Метаданные для поисковиков остаются русскими.
- Нет запросов к `server/`: сообщения и подписка уходят в почтовую программу пользователя.
- Instagram в `lib/site.ts` без URL.
