# Абрис+ Landing

Современный адаптивный сайт компании "Абрис+" на React + TypeScript + Vite.

## Демо

- GitHub Pages: [https://sunfaced.github.io/abris-landing/](https://sunfaced.github.io/abris-landing/)

## Стек

- React 19
- TypeScript
- Vite
- SCSS Modules
- React Router (`HashRouter` для GitHub Pages)
- Embla Carousel

## Локальный запуск

```bash
npm install
npm run dev
```

По умолчанию Vite поднимается на `http://localhost:5173`.

## Сборка

```bash
npm run build
npm run preview
```

## Деплой в GitHub Pages

В проекте уже настроены:

- `vite.config.ts` -> `base: "/abris-landing/"`
- скрипты в `package.json`:
  - `predeploy`: `npm run build`
  - `deploy`: `gh-pages -d dist`

Запуск деплоя:

```bash
npm run deploy
```

## Структура проекта

- `src/components` - UI-компоненты
- `src/pages` - страницы для роутинга
- `src/data` - локальные данные (например, слайды и новости)
- `src/styles` - глобальные стили и переменные SCSS
- `src/assets` - изображения и статические ресурсы
