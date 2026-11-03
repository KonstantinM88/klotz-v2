# Angebote — структура и подготовка к публикации

Дата: 03.11.2026. Пользователь выбрал пять тематических страниц с ценовыми вариантами внутри.

| URL                                         | Основной поисковый интерес                          | Роль страницы                                      |
| ------------------------------------------- | --------------------------------------------------- | -------------------------------------------------- |
| `/angebote`                                 | Bauelemente Angebote Merseburg                      | Обзор пяти направлений                             |
| `/angebote/lamellendaecher-pergolen`        | Lamellendach Angebot, Pergola Preis Merseburg       | Сравнить стартовые цены и условия двух систем      |
| `/angebote/zaeune-tore`                     | Zaun Angebot, Hoftor Preis Merseburg                | Различить метр, изделие и комплект                 |
| `/angebote/fenster-tueren`                  | Fenster Angebote, Haustür Preis Merseburg           | Сопоставить единицы, комплектацию и монтаж         |
| `/angebote/terrassendach-carport`           | Terrassenüberdachung Angebot, Carport Merseburg     | Сравнить назначение и строительные предпосылки     |
| `/angebote/energetisch-sanieren-foerderung` | Fenster Förderung, energetische Sanierung Merseburg | Понять условия возможной поддержки и следующий шаг |

Это редакционная карта намерений, а не подтверждённые частотности. Объёмы запросов, позиции и будущие заявки не измерены. Услуги объясняют системы, Wissen помогает принять решение, Angebote разбирает примеры и условия предложения. Массовые городские дубли не создаются. URL без года сохраняются при обновлении условий; архивные изображения можно заменить независимо от маршрута.

## Контент и изображения

Пять ранее подготовленных WebP 1086 × 1448 используются полностью, без обрезки. Alt описывает иллюстративный макет. Подпись сообщает, что это Gestaltung на основе KLOTZ-материалов, а не новая референсная съёмка. Техническое происхождение остаётся во внутреннем manifest. Права по-прежнему ограничены презентацией.

Цены, размеры и единицы адаптируются из `content/angebote-assets-manifest.json` в типизированную модель через content repository. Новые тексты — редакционный draft: краткий прямой ответ, объяснение выбора и стоимости, подготовка к разговору, FAQ, источники и дата проверки. Цены названы архивными примерами, монтаж отдельно, НДС и актуальность на согласовании. Дата 31.12.2026 выводится только для двух шаблонов, где она есть в источнике. Страница Förderung не обещает автоматические 15 % скидки.

Условная BEG-Grundförderung и необходимость соответствия требованиям повторно проверены по официальным индексируемым материалам BMWE/BAFA 03.11.2026. Прямой запрос BMWE временно вернул HTTP 429; использована официальная поисковая выдача и официальный PDF. Тексты не подменяют индивидуальную энергетическую консультацию.

- [BMWE FAQ BEG](https://www.energiewechsel.de/KAENEF/Redaktion/DE/FAQ/FAQ-Uebersicht/BEG/faq-bundesfoerderung-fuer-effiziente-gebaeude.html)
- [BAFA Förderübersicht](https://www.bafa.de/SharedDocs/Downloads/DE/Energie/beg_em_foerderuebersicht.pdf?__blob=publicationFile&v=10)
- [BAFA Antragstellung](https://www.bafa.de/SharedDocs/Downloads/DE/Energie/beg_merkblatt_allgemein_antragstellung.pdf?__blob=publicationFile&v=4)

## SEO / GEO / AIO

У каждой страницы собственные title, description, canonical и Open Graph. Ключевые сведения доступны без JavaScript, ссылки ведут на услуги, Wissen и другие предложения. Контекст известной страницы передаётся в демо-форму через проверенный slug; неизвестный параметр игнорируется.

Google указывает, что для AI-функций применяются обычные основы SEO; специального AI schema или файла не требуется. Поэтому используются понятный текст, первичные источники, внутренние ссылки и реальные региональные сведения. JSON-LD содержит только BreadcrumbList; неподтверждённые цены, права, коммерческие утверждения и авторство не превращаются в Product/Offer/Review-факты. Наличие FAQ само по себе не является основанием для обещания rich results.

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

## Допуск будущей индексации

Глобальный запрет индексации остаётся принудительным. Sitemap демо пустой, robots.txt разрешает обход, HTTP и meta передают noindex. После отдельного разрешения на запуск предложения дополнительно требуют `status=verified`, три флага `contentApproved`, `commercialApproved`, `rightsApproved` и неистёкший `validUntil`, если он задан. Просроченная акция должна быть обновлена либо осознанно переведена в полезный архив, после редакционного решения. Проставить только NEXT_PUBLIC_SITE_URL недостаточно.

При SSG проверка срока выполняется во время сборки. На production нужно запланировать обновление и пересборку к окончанию акции; текущий guard не является фоновым планировщиком.

До production: подтвердить цены/НДС, комплектацию, доступность и сроки; проверить тексты специалистом KLOTZ; получить права на публичные изображения и логотип; повторно проверить Förderbedingungen; принять отдельное решение о canonical-домене, индексации и реальной форме. Подготовка страниц не гарантирует индексацию, позиции или цитирование AI-системами.
