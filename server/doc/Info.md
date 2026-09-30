# Сервер

---

Бэкенд сайта-профиля. Сейчас это каркас API на Express и Sequelize: подключение к MySQL и модель сообщения. HTTP-сервер, маршруты и скрипт запуска ещё не собраны.

## Стек

- Node.js, модули CommonJS (`"type": "commonjs"` в `package.json`)
- Express 5
- Sequelize 6
- MySQL через `mysql2` (пакет `mysql` тоже указан в зависимостях)
- nodemon перезапускает процесс при изменении `*.ts`

## Структура

```
server/
  config/db.ts      подключение Sequelize к MySQL
  models/models.ts  модель Message
  types/index.ts    тип Massage
  nodemon.json      слежение за TypeScript
  package.json
  doc/Info.md
```

Точка входа, на которую смотрит nodemon, — `server.ts` в корне `server/`. Этого файла пока нет.

## База данных

Подключение задано в `config/db.ts`:

| Параметр | Значение |
| --- | --- |
| Диалект | `mysql` |
| Хост | `127.0.0.1` |
| Порт | `3306` |
| Пользователь | `root` |
| Пароль | пустой |
| Имя базы | пустая строка |

Имя базы нужно указать перед запуском. Экземпляр Sequelize экспортируется по умолчанию и импортируется в модели как `@config/db`. Алиас `@config` в проекте ещё не настроен: нет `tsconfig.json`.

## Модель Message

Таблица `Message` (`models/models.ts`):

| Поле | Тип | Правило |
| --- | --- | --- |
| `text` | `TEXT` | обязательно |
| `room` | `INTEGER` | обязательно, номер комнаты |
| `status` | `BOOLEAN` | по умолчанию `false` |
| `isRead` | `BOOLEAN` | по умолчанию `false` |

`id` и временные метки Sequelize добавляет сам, если не отключить их в опциях модели.

## Тип Massage

В `types/index.ts` описан интерфейс `Massage`:

- `id` — необязательное число
- `text` — строка
- `number` — строка

Модель типизирована этим интерфейсом (`Model<Message>`), но поля типа (`number`) не совпадают с полями таблицы (`room`, `status`, `isRead`). Имя типа — опечатка от Message.

## Запуск

`nodemon.json`:

- следит за `**/*.ts`
- расширение `ts`
- игнорирует `node_modules` и `dist`
- команда: `ts-node server.ts`

В `package.json` нет скриптов `dev` и `start`, только заглушка `test`. Пакеты `typescript` и `ts-node` в зависимостях не указаны, хотя nodemon вызывает `ts-node`.

## Чего ещё нет

- файла `server.ts` и маршрутов Express
- `tsconfig.json` и алиаса `@config`
- имени базы в `config/db.ts`
- синхронизации моделей с MySQL (`sync` нигде не вызывается)
- связи сервера с клиентом: форма контакта на сайте открывает почтовый клиент и к API не ходит
