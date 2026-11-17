# Content source register

## 2026-11-17 — Redesign v2: изображения и факты Gewerbekunden/главной (D-046)

- Новые WebP в `public/images/b2b/` получены из оригиналов klotz.mobi (загружены на компьютере пользователя, т. к. облако не имеет доступа к сайту). Права client-presentation-approved; manifest — `content/assets-manifest.json` (SHA-256 оригинала, координаты обрезки):
  - `stadion-montage/zaun/eingang/fahrzeuge` — обрезки коллажа `/sites/default/files/Einzäunung_Stadtstadion_02 2025_0.png` (новость https://www.klotz.mobi/news/einz%C3%A4unung-stadtstadion); оригинал — `content/legacy/originals/stadtstadion-original-full.png`.
  - `see-terrasse/fassade/verglasung` — три панели слайдера `/sites/default/files/Slider_Störmtaler_See_20260221_0.jpg`.
  - `team.webp` — `/sites/default/files/Team2.jpg` (Über uns); `montageteam.webp` — `/sites/default/files/Meuschau3.jpg`.
- Факты: «über 1,1 km», «Februar 2025» — надпись на коллаже Stadtstadion; «30+ Jahre» — meta description главной legacy; «13» и роли — /ueber-uns; регионы — /kontakt и надпись на автомобиле. Статус legacy-current-check.
- Изображения производителя Pratic (Opera/Level/Brera) скачаны для оценки, но на сайте не используются.
- При подготовке приватного репозитория v2 загрузки для оценки в `content/legacy/originals-v2/` исключены через `.gitignore`: они не используются кодом или manifests, файлы сохранены локально. Четыре оригинала новых B2B-изображений в `content/legacy/originals/` и девять WebP входят в Git-пакет; права остаются только презентационными.
- Перед commit/push локально сверены SHA-256 четырёх оригиналов и размеры девяти WebP. Поля `bytes` этих девяти записей уточнены по фактическим файлам; пиксельные размеры совпали, сами изображения не менялись.

## 2026-11-15 — Выбор материала и изображения для консультации (D-045)

- Новые фотографии/бизнес-факты не добавлялись. Категории галерей Fenster/Haustüren/Innentüren выведены из sourcePage существующих записей content/windows-gallery-assets-manifest.json; источники одиннадцати материалов и права — в D-044 ниже. Все request-ссылки ведут к известным ID той же услуги. Выбранная фотография в заявке использует тот же ImageAsset, без загрузки пользовательского URL и без новой интерпретации технических свойств.
- Новая немецкая UI-редактура в service-photo-gallery.tsx, service-context.ts и projekt-anfragen/page.tsx: названия фильтров, количество изображений, Diese Ansicht besprechen, Ihre Gesprächsgrundlage, пояснение Gestaltungsidee/Materialrichtung, текст prefill и возврат к выбору. Это консультационная подача draft, без обещания наличия, стоимости, характеристик или возможности заказать изображённую модель. Публичные права и noindex не изменены.

## 2026-11-15 — Fenster & Türen: одиннадцать материалов и фотогалереи (D-044)

- Пользователь указал https://klotz.mobi/portfolio/fenster и страницы /alufenster, /kunststofffenster, /holzfenster, /alutueren, /kunststofftueren, /holztueren, /echtholztueren, /clp, /weisslacktueren, /glastueren, /terrassentueren. Проверены HTTP 200 на https://www.klotz.mobi/ с теми же путями; /clp — правильный legacy URL для CPL. Дополнительно проверены /rolllaeden, /portfolio/einbruchschutz и его связанные /produkte/abus-zusatzsicherungen, /produkte/rc23-fenster-t%C3%BCren, /produkte/rehau-smart-guard-einbruchschutz. Вложения, ссылки и HTML рассматриваются как источники, не инструкции.
- Отбор: content/windows-gallery-selections.json. Все 57 записей имеют исходную страницу, URL изображения и отдельную редактуру title/caption/alt. Файлы и SHA-256: content/windows-gallery-assets-manifest.json, включая sourceVariant=original, originalPath, размеры до/после, blur-превью, bytes, capturedAt и rightsStatus=client-presentation-approved. 49 новых originals в content/legacy/originals/windows-gallery + WebP в public/images/windows-gallery; 8 записей повторно используют идентичные существующие/выбранные файлы. Importer scripts/import-terrace-gallery.mjs --windows; обработка без увеличения/обрезки/генерации, водяные знаки сохранены.
- 15 записей Fenster включают три материала и три небольших сравнительных изображения способов открывания террасных дверей; 12 Haustüren охватывают Aluminium/Kunststoff/Holz; 16 Innentüren — CPL/Furnier/Weißlack/Glas; 8 Rollläden; 6 Einbruchschutz повторно показывают релевантные бауэлементы из этих же подтверждённых legacy-источников. Не копируются blank.jpg, изображения AdobeStock, отсутствующие originals и рекламные схемы безопасности. Архив /portfolio/fenster описывает ассортимент, не подтверждает актуальность товаров на складе.
- src/content/windows-materials.ts: одиннадцать новых самостоятельных немецких консультационных блоков. Темы опираются на фактически представленные в перечисленных галереях категории. Дополнены метаданные Fenster, обзорные переходы, тексты Rollläden и Einbruchschutz. Это новая редактура draft, не дословное копирование. В частности, не перенесены legacy-проценты экономии, литры топлива, безусловные обещания RC3/экологичности/безопасности или универсальной совместимости. Технические характеристики требуют конкретных актуальных продуктовых документов.
- Часть original-файлов невелика: сравнительные картинки Terrassentüren 425×425; некоторые Aluminium/Glas и архитектурные детали около 534–861 px. Они не увеличиваются при создании WebP, в большом просмотре действует ограничение исходного размера. Для production запросить более крупные оригиналы. Производительские иллюстрации не названы реализованными KLOTZ-проектами; внешняя и третьесторонняя публикация требует отдельного разрешения. Raw HTML/невыбранные просмотровые изображения/QA — только в игнорируемой .lighthouseci/windows-source.

## 2026-11-15 — Галереи Terrasse & Garten: обзор и шесть услуг

- По прямой просьбе пользователя исходная страница https://www.klotz.mobi/produkte/terrassen%C3%BCberdachungen-0 заново изучена (HTTP 200). Отобраны 12 изображений навесов. Остальные подборки: 12 Lamellendächer из https://www.klotz.mobi/lamellendach и https://www.klotz.mobi/produkt/lamellendach; 10 Pergolen из https://www.klotz.mobi/produkte/pergola-mit-sonnentuch; 10 Sommer-/Wintergarten-Ideen из https://www.klotz.mobi/produkte/gartenzimmer и https://www.klotz.mobi/produkte/wintergarten; 10 Glaswände из https://www.klotz.mobi/produkte/glasschiebe-faltw%C3%A4nde; 12 Sonnenschutz из https://www.klotz.mobi/markiesen. Все исходные страницы HTTP 200, проверены 15.11.2026. Сток AdobeStock и неподходящие схемы не перенесены.
- content/terrace-gallery-selections.json — явный редакционный отбор: исходный URL отображения, sourcePage/sourceTitle, новые немецкие названия, alt и подписи. Они описывают видимое изображение и остаются draft; модель/заказчик/география/технические характеристики проекта не выводятся. Для Sommer-/Wintergarten фотография не является подтверждением теплозащиты или возможности отопления.
- scripts/import-terrace-gallery.mjs получает исходные файлы без /styles/, проверяет URL-границы и создаёт WebP без увеличения/обрезки. Все 66 записей получены из originals, без fallback на preview. 55 новых файлов находятся в content/legacy/originals/terrace-gallery и public/images/terrace-gallery; 11 записей переиспользуют существующие идентичные assets, включая повторы внутри отбора. Всего 64 уникальных src. content/terrace-gallery-assets-manifest.json содержит URL каждого оригинала, путь оригинала, SHA-256 оригинала/WebP, размеры, дату, sourceVariant, rightsStatus и встроенный небольшой preview из того же кадра.
- Статус: legacy-product-illustration / client-presentation-approved. В архиве есть материалы производителей с их водяными знаками; они сохранены, не выдаются за собственные объекты KLOTZ. Разрешение пользователя покрывает клиентскую презентацию, публичные и третьесторонние права требуют отдельного подтверждения. AI-изображения не создавались.
- Данные проходят Zod и типизированные ServiceGalleryContent/TerraceServiceContent в существующем repository. Общая подборка обзора использует по одному изображению каждой настоящей продуктовой галереи. Hero/карточки услуг не подменяются. JSON-LD, noindex, контакты и demo-form не расширяются неподтверждёнными фактами. Сырые HTML/preview-контактные листы сохраняются только в игнорируемой .lighthouseci.

## 2026-11-15 — Konfigurator: оригинальные модели, размеры и Energiesparrechner

- После замечания пользователя условная SVG-студия заменена реальным каталогом. Источник https://konfigurator.klotz.mobi/ и его публичные GET /models-by-group/{218,217,16,289,571,75,565,432,373}, /model-by-id/{id}, /boje, /grundforms. HTTP 200 перепроверен 15.11.2026. Импорт scripts/import-door-catalog.mjs; content/door-catalog.json содержит 503 варианта, 134 семейства, девять коллекций, исходные Min/Max ширины/высоты каждой модели, 199 образцов цветов и восемь основных форм. Названия и описания сохранены из оригинала. Это legacy snapshot, не подтверждённый актуальный ассортимент, прайс или склад.
- 427 PNG из /models/thumbs/{id}-thumb.png сохранены в content/legacy/originals/door-catalog, преобразованы без обрезки/увеличения в public/images/door-catalog/*.webp. URL каждого оригинала, SHA-256 оригинала/WebP, размеры, bytes и права — content/door-catalog-assets-manifest.json. 73 варианта с отсутствующим собственным изображением используют только связанное исходником родительское изображение с явной подписью, три RU40/ZO02/ZO81 оставлены без изображения. manufacturer-model-illustration; client-presentation-approved, публичные/третьесторонние права не подтверждены. Это иллюстрации моделей, не реализованные KLOTZ-объекты. AI не использовался.
- Размерная SVG в door-configurator.tsx — новая упрощённая планировочная схема, не производственный чертёж. Боковые размеры/верхнее остекление — пожелания без придуманного технического допуска. Цветовые образцы взяты из оригинального RAL_HEX, без заявления о точности экранной цветопередачи/совместимости. Превью всегда остаётся исходной каталоговой фотографией; варианты и цвета не выдаются за фотореалистичную конфигурацию.
- Полный технический конфигуратор производителя доступен по HTTPS и во встраиваемом режиме после явного клика с пояснением внешнего соединения. Исполняемый код не копируется. Полные системные/стеклянные/фурнитурные зависимости исполняются самим оригиналом; локальный план автоматически не переносится. Нет внешнего runtime-запроса до загрузки пользователем. Hero повторно использует building-entry-hero из прежнего manifest; права только для презентации.
- src/content/configurator.ts — новая немецкая редактура draft. Энергосценарий: https://www.klotz.mobi/energiesparrechner (HTTP 200). Числа Uw 2.84/4.72, 1.20/0.95/0.80, Gradtagzahl 3239, Nutzungsgrad 0.75 — только редактируемые Rechenbeispiele legacy. 20 m²/JAZ 3 — явно условные примеры. Тариф не задан; 3239 не названо реальным климатическим значением Merseburg; неясная cooling-модель не перенесена.
- Источники методики: https://www.ift-rosenheim.de/2013/din-en-14351-1-produktnorm-fuer-fenster-und-aussentueren (Uw), https://passipedia.de/planung/energieeffizienz_ist_berechenbar/energiebilanzen_mit_dem_phpp/monatsv (тепловой баланс), https://www.dwd.de/DE/leistungen/gtz_kostenfrei/gtz_kostenfrei.html (определение в официальном индексе; прямой ответ 403). Формула и ограничения описаны в docs/KONFIGURATOR_CONTENT_PLAN_2026-11-15.md. Не PHPP, Energieausweis или обещание экономии дома.
- Консультация/выставка/контакты — прежние S-03/S-04. Данные для заявки повторно проверяются сервером, энергии пересчитываются; JSON-LD только BreadcrumbList. Сохранены noindex, отсутствие отправки/хранения и новые зависимости не добавлены.

## 2026-11-15 — Почему KLOTZ: преимущества и история 30+

- По прямой просьбе пользователя добавлен блок преимуществ в src/content/business.ts и серверный /gewerbekunden. Формулировка «30+ Jahre KLOTZ in der Region» основана на текущем сообщении пользователя и повторной проверке https://www.klotz.mobi/ueber-uns (история имени почти 40 лет, нынешняя GmbH с 2017) и https://www.klotz.mobi/portfolio/wartung-service (более 30 лет опыта). Это история бренда/опыта, не дата регистрации юридического лица; foundingDate в JSON-LD не добавляется.
- Четыре пояснения — новая немецкая редактура: цикл консультация/техническая подготовка/монтаж/приёмка, аудитории Wohnungswirtschaft/Gewerbe и внутренняя/наружная выставка подтверждаются /ueber-uns; Wartung/Instandsetzung — /portfolio/wartung-service; расположение консультации — https://www.klotz.mobi/kontakt. Источники перепроверены 15.11.2026. «Verlässlich an Ihrer Seite» — позиционирование, без независимого рейтинга или сравнения с конкурентами. Данные проходят существующий typed repository, новых изображений нет.

## 2026-11-15 — Gewerbekunden: обзор и четыре направления

- src/content/business.ts, business-services.ts, business-media.ts — новая немецкая редактура, draft. Первичные страницы перепроверены 15.11.2026: https://www.klotz.mobi/ueber-uns (аудитории, процесс), https://www.klotz.mobi/kontakt (сведения для запроса и контакт), https://www.klotz.mobi/portfolio/wartung-service и https://www.klotz.mobi/Wartung-und-Service (ассортимент ремонта), https://www.klotz.mobi/inspirationen-f%C3%BCr-die-hotellerie-gastronomiebranche (HoReCa), https://www.klotz.mobi/portfolio/fenster, https://www.klotz.mobi/portfolio/tueren, https://www.klotz.mobi/portfolio/hoftore и https://www.klotz.mobi/produkte/stahlhoftore (ассортимент).
- Новые чеклисты, пояснения по заказу, доступу, согласованию и стоимости — редакционная работа, не утверждённые договорные условия. Старые заявления об окупаемости 2,4 года, EM 2024, гарантированной круглогодичности, экономии, сроках и универсальной обязательной ежегодной Wartung не перенесены. Техническая ориентация по различию обслуживания и проверки: https://www.dguv.de/fbhl/sachgebiete/bauliche-einrichtungen-handel/fenster-tueren-tore/fachwissen-fachfragen/pruefung-an-tueren-und-toren/index.jsp. BAuA ASR A1.7 найдена официальным поиском, прямое открытие 403; числовые интервалы и квалификации KLOTZ не заявляются.
- Шесть неизменённых фото: content/business-image-sources.json и scripts/import-business-assets.mjs. business-work и business-workshop — /Wartung-und-Service; business-industry-hero/detail — /produkte/stahlhoftore; business-hospitality-hero/detail — гастрономическая галерея. Исходники, WebP без увеличения, размеры и SHA в content/assets-manifest.json. Рабочие кадры legacy-work-photo; изделия legacy-product-illustration. Права client-presentation-approved, в том числе возможные права производителей и актуальность изображённых сотрудников требуют отдельного подтверждения перед публичным использованием.
- Wohnungswirtschaft использует прежний building-window-hero с неизменной provenance. Hero/category на главной — business-work, карточки и детальные страницы — единый businessMedia. Продуктовые примеры подписаны соответственно; неизвестные адреса, даты, заказчики, системы и характеристики не приписываются. Stadtstadion используется с прежней provenance только как ссылка на существующий референс. Новые AI-изображения, сторонняя графика и логотипы клиентов не добавлялись. Подробности: docs/GEWERBEKUNDEN_CONTENT_PLAN_2026-11-15.md.

## 2026-11-15 — Zaun & Tor: обзор, шесть услуг, фотографии и схемы

- src/content/fence.ts, fence-services.ts, fence-media.ts: новая самостоятельная немецкая редактура, draft. Источники на https://www.klotz.mobi/ проверены 15.11.2026: /portfolio/zaeune, /produkte/doppelstabmatten, /produkte/aluminiumz%C3%A4une, /produkte/sichtschutzz%C3%A4une, /portfolio/hoftore, /produkte/aluhoftore, /produkte/stahlhoftore, /portfolio/aussengelaender, /produkte/glasgel%C3%A4nder, /produkte/metallgel%C3%A4nder и /portfolio/wartung-service. Общая карточка консультации/выставки/контактов сохраняет источники /ueber-uns и /kontakt.
- Объяснения выбора и подготовки — новая редактура; нет новых цен, дат, сертификатов, защитных классов, нагрузки, скорости привода и универсальной совместимости. Дополнительный официальный источник по общим принципам ворот: https://publikationen.dguv.de/widgets/pdf/download/article/648 (DGUV Information 208-022); числовые интервалы/правовые требования для всех частных домов не переносятся.
- 12 фото: content/fence-service-image-sources.json и scripts/import-fence-service-assets.mjs. boundary-fence-* — галерея aluminiumzäune; boundary-privacy-* — sichtschutzzäune; boundary-gate-* — aluhoftore; boundary-sliding-* и boundary-electric-* — stahlhoftore; boundary-railing-* — glasgeländer, файлы Dekoglas. Оригиналы, WebP и SHA занесены в manifest. Права client-presentation-approved, факт legacy-product-illustration; возможный производитель отдельно требует публичного разрешения.
- Stock AdobeStock из галерей перил не переносится. Также исключены логотипы/favicons и blank-заглушки. Автоматизация иллюстрируется общим видом въезда; наличие привода и конкретной защитной комплектации по фото не заявляется.
- src/features/fence/gate-principle.tsx — оригинальные SVG-принципы двух способов открывания ворот, без размеров и проектных расчётов; не AI и не внешние фотографии. Existing Einzäunung Stadtstadion используется только с уже зарегистрированными сведениями и источником. Полная карта: docs/ZAUN_TOR_CONTENT_PLAN_2026-11-15.md.

## 2026-11-15 — Fenster & Türen: обзор, пять услуг и девять фотографий

- src/content/windows.ts, windows-services.ts, windows-media.ts: самостоятельная немецкая редактура, статус draft. Источники проверены 15.11.2026: `/portfolio/fenster`, `/kunststofffenster`, `/alufenster`, `/holzfenster`, `/portfolio/tueren`, `/alutueren`, `/kunststofftueren`, `/holztueren`, `/clp`, `/echtholztueren`, `/weisslacktueren`, `/glastueren`, `/rolllaeden`, `/portfolio/sicht-sonnenschutz`, `/portfolio/wartung-service` на https://www.klotz.mobi/. Консультация/выставка/контакты используют действующую общую карточку сайта с /ueber-uns и /kontakt.
- Ассортимент берётся из источников; пояснения по выбору, планированию и составу предложения — редакционный текст, не цитаты клиента. Нет числовой экономии, неподтверждённых классов защиты, изготовителей-партнёров, цен, сроков и оконных референсов. Непроверенный HTTP-конфигуратор не перенесён.
- content/building-service-image-sources.json и scripts/import-building-service-assets.mjs: девять точных наблюдённых URL; скрипт получает исходник без Drupal style, не увеличивает и создаёт WebP. Оригиналы: content/legacy/originals/building-_; изображения: public/images/building-_; размеры/байты/SHA/sourcePage/sourceUrl — content/assets-manifest.json.
- building-window-hero/detail — /holzfenster и /kunststofffenster; building-entry-hero/detail — /alutueren; building-interior-hero/detail — /clp; building-shutter-hero/detail — /rolllaeden. Фотографии иллюстрируют продукт, не объявлены выполненными объектами. Права client-presentation-approved, факт legacy-product-illustration.
- Часть оригиналов шириной около 600 px требует крупных материалов перед публичным релизом; искусственной детализации и AI-подмены нет. Карта намерений: docs/FENSTER_TUEREN_CONTENT_PLAN_2026-11-15.md.

## 2026-11-15 — шесть полноценных страниц Terrasse & Garten

- `src/content/terrace-services.ts`: новая самостоятельная немецкая редактура для Terrassenüberdachungen, Lamellendächer, Pergolen, Sommer-/Wintergärten, Glasschiebewände и Sonnenschutz. Внутренний статус draft. Источники разделены по услугам в `sourceRefs`: `/produkte/terrassen%C3%BCberdachungen-0`, `/portfolio/terrassenueberdachung`, `/produkt/lamellendach`, `/produkte/pergola-mit-sonnentuch`, `/produkte/gartenzimmer`, `/portfolio/wintergaerten`, `/produkte/glasschiebe-faltw%C3%A4nde`, `/markiesen`, `/portfolio/sicht-sonnenschutz`, а также `/ueber-uns` и `/kontakt` на klotz.mobi. Страницы/галереи перепроверены 15.11.2026; `/markiesen` доступна через HTTP fetch, хотя web-open вернул ошибку.
- Пояснения о выборе, удобстве и планировании — новая редакторская работа, а не цитаты заказчика. Нет новых цен, нагрузок, гарантированных сроков, энергоэффективности, автоматической влагонепроницаемости, барьерной доступности, партнёрства с изготовителями или адресов реальных объектов. Sommergarten не приравнен к отапливаемому Wohnraum.
- Семь новых WebP `terrace-roof-{hero,detail}`, `terrace-pergola-hero`, `terrace-glass-{hero,detail}`, `terrace-shade-{hero,detail}`: наблюдённые URL сохранены в `content/terrace-service-image-sources.json`; оригиналы и SHA в основном manifest. Импорт воспроизводим через `scripts/import-terrace-service-assets.mjs` без зависимости от порядка изображений в живой галерее.
- Права: `client-presentation-approved`; публичное использование и возможные права производителей требуют отдельного согласования. Подписи описывают продуктовые/дизайнерские примеры, а не неподтверждённые клиентские проекты. Исходные кадры не обрезаны и не изменены генеративно.
- `src/content/terrace-media.ts`: единое назначение изображений для обзора и деталей; `src/content/site.ts` получил качественный кадр Terrassendach для карточки категории на главной. Остальные источники и права сохраняются.

## 2026-11-14 — Terrasse & Garten: новая редактура и архивные изображения

- `src/content/terrace.ts`, `src/features/terrace/terrace-page.tsx`, обзорный seed в `src/content/pages.ts`: новая немецкая редактура, статус draft, не утверждённые заявления заказчика. Продукты и компания проверены по оригиналу 14.11.2026; полная карта URL→сведения→ограничения находится в `docs/TERRASSE_GARTEN_CONTENT_PLAN_2026-11-14.md` и `sourceRefs` контента.
- FAQ о разрешениях: официальный список Bauaufsichtsbehörden Sachsen-Anhalt (ссылка в плане), без юридических порогов. SEO/AI-подход: Google Search Central `https://developers.google.com/search/docs/appearance/ai-features`. Региональная выдача изучалась для намерений; частотности и результаты продвижения не заявляются.
- Новые `/images/terrace-pergola.webp` и `/images/terrace-markise.webp` — оригинальные продуктовые изображения с `/produkte/pergola-mit-sonnentuch` и `/markiesen`; файлы-источники сохранены в `content/legacy/originals/`. Все URL, размеры и SHA в `content/assets-manifest.json`. Права `client-presentation-approved`, включая необходимость отдельной проверки прав производителя перед публичным использованием.
- Существующие изображения из галерей Lamellendach/Glasschiebewände/Störmthaler See использованы с прежней provenance. Новая генерация/ретушь не выполнялась. Подписи не превращают продуктовую иллюстрацию в конкретный выполненный объект.

## 2026-11-04 — переписка Angebote: Lamellendach & Pergola

- `src/content/offers.ts` (`lamellendaecher-pergolen`): новая немецкая редактура, статус draft. Цены/размеры без изменений из manifest. Сильные стороны KLOTZ: S-03 `https://www.klotz.mobi/ueber-uns` (Ausstellung innen/außen, 13 сотрудников, Aufmaß→Bauabnahme, «Von der Planung bis zum Einbau … aus einer Hand»), S-04 `https://www.klotz.mobi/kontakt` (часы, регион), виртуальный тур `https://klotz.virtiv.de/vtour/`. Статус legacy-current-check.
- Второй этап (тот же день): `zaeune-tore`, `fenster-tueren`, `terrassendach-carport`, `energetisch-sanieren-foerderung` и обзор (`src/features/offers/offers-index.tsx`, `src/app/angebote/page.tsx`, `src/content/pages.ts`) — новая немецкая редактура, статус draft, те же источники S-03/S-04. Haustürkonfigurator: `http://konfigurator.klotz.mobi/` (из этого реестра). BEG-формулировки Förderung — прежние официальные источники BMWE/BAFA, по сути не менялись. В `content/angebote-assets-manifest.json` из alt Terrassendach/Carport убрано слово «archivierter».
- `src/content/site.ts`: `serviceAreas` расширены до списка legacy-сайта, добавлены `openingHours` и `showroomTourUrl` (legacy-current-check).
- `src/features/offers/offer-parts.tsx`: контактная панель с фактами KLOTZ (те же источники).

## 2026-11-04 — приватный архив материалов встречи

- Три ранее созданных локальных документа `output/pdf/SaaleWeb_Gespraechsleitfaden_KLOTZ_Kaffeehaus_DE.pdf`, `SaaleWeb_Podgotovka_k_vstreche_KLOTZ_Kaffeehaus_RU.pdf` и `SaaleWeb_Gespraechsprotokoll_KLOTZ_Kaffeehaus_29-10-2026_DE.pdf` сохранены без изменения содержания; это внутренние материалы встречи, не публичный контент сайта и не согласованный договор.
- Уникальные исходники перенесены из `tmp/pdfs/` в `scripts/documents/`. Изменён только способ определения корня проекта. Материалы `docs/proposal/` и их исходные screenshots архивируются по явной команде пользователя после подтверждения private-статуса GitHub. Источники и калькуляционный статус предложения остаются в записи 28.09.2026 и `docs/proposal/README.md`.

## 2026-11-03 — каталог Angebote и пять подробных страниц

- `src/content/offers.ts`: оригинальная немецкая редактура пяти страниц — статус draft, не утверждённый текст заказчика. Позиционирование и ассортимент опираются на legacy `https://www.klotz.mobi/angebote`, портфолио Terrassenüberdachung, Fenster, Wartung/Service и существующие зарегистрированные материалы. Точные страницы и независимые источники записаны в каждой записи. Частотности, отзывы, авторы, результаты, гарантии и новые характеристики не выдуманы.
- Пять изображений без новых изменений и все 15 ценовых позиций адаптируются из `content/angebote-assets-manifest.json`: исходные цены/размеры/единицы и ограничения прав сохранены. Монтаж не включён, актуальность/НДС/комплектация не подтверждены. В HTML есть явная пометка о предварительной редакционной версии и архивных примерах. Права остаются только для клиентской презентации.
- Förderinformationen проверены 03.11.2026 по официальным BMWE FAQ BEG, BAFA Förderübersicht и Merkblatt Allgemeine Antragstellung; URL приведены в странице и `docs/ANGEBOTE_CONTENT_PLAN_2026-11-03.md`. Прямой BMWE-запрос вернул 429, проверка использовала официальную индексируемую информацию. 15 % — условная базовая поддержка, без автоматической скидки и Förderzusage.
- `src/features/offers/`, обновление overview seed и контекст демо-заявки — новая немецкая интерфейсная редактура. Изображения подписаны как Gestaltung/Veranschaulichung, техническое происхождение не вынесено в рекламный заголовок и сохранено во внутреннем manifest. Публичная индексация, отправка заявок, commit/push и deployment в этом этапе не выполнялись.

## 2026-10-29 — двухстраничная PDF-презентация SaaleWeb

- `output/pdf/SaaleWeb_KLOTZ_Angebote_Designkonzept.pdf`: новая немецкая редактура для личного показа KLOTZ, пять макетов из `output/angebote-2026/masters/` и профессиональная рекомендация SaaleWeb обновить сайт целостно. Текст не является заключением технического аудита или гарантией коммерческого эффекта. Новые факты о KLOTZ, цены и характеристики объектов не добавлялись.
- Оформление использует текстовый wordmark SaaleWeb и адрес `saaleweb.de`, уже применённые в существующем предложении. Статусы исходных изображений, коммерческих данных и ограничение прав остаются в `content/angebote-assets-manifest.json`; PDF содержит пояснение о визуализациях и согласовании цен/субсидий. Генератор — `scripts/create-angebote-presentation.py`; документ создан локально и не отправлялся заказчику.
- По следующему уточнению пользователя клиентский подвал заменён на `Gestaltungskonzept von SaaleWeb` с нейтральным пояснением `Abbildungen dienen der Veranschaulichung`. Формулировка не утверждает ручное создание или неизменность реальных фото; техническое происхождение и исходники сохранены в manifest.

## 2026-10-29 — рекламная серия для будущей страницы Angebote

- Пользователь предоставил четыре флаера февраля 2026 и изображение `15% Zuschuss`. Со старого `https://www.klotz.mobi/angebote` получены оригиналы четырёх флаеров 1748 × 2480 px вместо уменьшенных пользовательских превью. Исходные URL, локальные копии и SHA-256 — в `content/angebote-assets-manifest.json`; снимки сохранены в `content/legacy/originals/angebote-2026/`. Оригиналы пользователя не изменялись.
- `public/images/angebote-2026/01…05-*.webp` — пять новых композиций, созданных встроенным image_gen на основе этих материалов, существующего `lamelle-detail-1.webp` и логотипа. Первые четыре — AI-редизайн архива; пятый — символическая сгенерированная модель дома. Они не являются неизменёнными фото или новыми клиентскими референсами. PNG-мастера — `output/angebote-2026/masters/`; точные промпты — `content/angebote-image-prompts-2026-10-29.json`.
- Немецкие заголовки, подводки и CTA — новая редактура для рекламных макетов. Цены, размеры, WPC, единицы Stück/m²/lfm и даты 31.12.2026 перенесены из читаемых оригиналов, статус `legacy-current-check`; монтаж указан отдельно. Старые обещания «15% vom Staat geschenkt» и «15% Rabatt» как автоматическая скидка не перенесены.
- Условные `15 % Grundförderung möglich` и оговорка о требованиях/EEE сверены 29.10.2026 по официальному BMWE FAQ BEG и BAFA Merkblatt Allgemeine Antragstellung. Точные ссылки, содержание и ограничения — в `docs/ANGEBOTE_CREATIVE_BRIEF_2026-10-29.md` и manifest. Прямой HTML BAFA недоступен (403); использован официальный индексируемый PDF.
- Права на source-фото и логотип остаются ограниченными клиентской презентацией. Для открытой публикации нужны отдельное подтверждение прав и проверка коммерческих условий/НДС. В приложение макеты пока не встроены; публикация не выполнялась.

## 2026-10-28 — два Ratgeber-материала в Wissen

- `src/content/articles.ts`, `src/content/site.ts`: новые немецкие статьи `sommergarten-oder-wintergarten` и `fenster-reparieren-oder-austauschen` — оригинальная редактура со статусом `draft`, а не тексты KLOTZ или утверждённые технические рекомендации. Ассортимент и сервис подтверждены legacy-страницами `https://www.klotz.mobi/portfolio/terrassenueberdachung`, `https://www.klotz.mobi/portfolio/fenster`, `https://www.klotz.mobi/portfolio/wartung-service`; независимая ориентация по окнам — `https://www.verbraucherzentrale.de/wissen/energie/energetische-sanierung/fenster-sanieren-oder-austauschen-darauf-sollten-sie-achten-13878`. Числа о цене, сроках, выгоде, энергосбережении и свойствах конкретных KLOTZ-систем не добавлены.
- Для статьи о стеклянном саде повторно используется архивная фотография `/images/glas-detail-1.webp`, уже записанная в `content/assets-manifest.json`. Для статьи об окнах 28.10.2026 с `https://www.klotz.mobi/holzfenster` загружено исходное `https://www.klotz.mobi/sites/default/files/MetallbauKlotz_Inhalte_Produkte_Fenster_Holzfenster%20%282%29.jpg`; оригинал сохранён в `content/legacy/originals/fenster-ratgeber.jpg`, оптимизированная копия — `/images/fenster-ratgeber.webp`. URL, размеры, SHA-256 и ограничение прав зафиксированы в manifest. Это продуктовая фотография, не подтверждённый проект KLOTZ.
- `docs/KEYWORD_RESEARCH_2026-10-28.md`: редакционная карта запросов и источников без неподтверждённых частот. Точные объёмы и поисковый эффект не проверялись, индексация демо отключена.

## 2026-09-28 — коммерческое предложение и Hostinger

- `docs/proposal/SaaleWeb_Ersteinschaetzung_KLOTZ_Kaffeehaus_v2.html` и финальная PDF — новая немецкая редактура SaaleWeb по письму и Lastenheft заказчика. Статус: `proposal-draft`; это предварительная оценка, не договор и не опубликованный контент KLOTZ.
- Стоимость Hostinger взята с переданного пользователем скриншота Warenkorb от 28.09.2026: Unlimited, 48 месяцев, 3,99 EUR/Monat, 191,52 EUR netto, 36,39 EUR MwSt., 227,91 EUR brutto; показанная Verlängerung — 16,99 EUR/Monat после 48 месяцев. Цена требует повторного подтверждения при заказе.
- Техническая совместимость сверена с официальными страницами Hostinger `https://www.hostinger.com/nodejs-hosting`, `https://www.hostinger.com/support/node-js-hosting-options-at-hostinger/` и таблицей лимитов `https://www.hostinger.com/support/6976044-parameters-and-limits-of-hosting-plans-in-hostinger/`. Next.js/Node.js поддерживается; managed databases тарифа указаны как MySQL, поэтому PostgreSQL не обозначен как включённый.
- Модель отдельной usage-based PostgreSQL-БД сверена с `https://neon.com/blog/new-usage-based-pricing`; фиксированная цена в предложение не добавлена, так как расход зависит от фактического использования и выбранного плана.
- Изображение прототипа в PDF — локальный снимок существующего презентационного демо. Оно использует legacy-фотографию только в рамках подтверждённого разрешения для клиентской презентации; PDF не даёт production-права.

## 2026-09-25 — сотрудники и фотографии на «Über uns»

- По прямой просьбе пользователя с S-03 (`https://www.klotz.mobi/ueber-uns`) перенесены все восемь опубликованных карточек: Herr Klotz, Frau Shafiee, Herr Walther, Herr Kimmel, Montageteam, Frau Kriester, Herr Temgoua, Herr Degenhardt. Имена и должности приведены как на исходной странице; короткие пояснения к ролям — редакционный `draft`, не биографические факты.
- Фото сохранены как исходные файлы в `content/legacy/originals/team-*` и оптимизированные WebP в `public/images/team-*`. Для каждой из восьми записей в `content/assets-manifest.json` указаны `sourceUrl`, `displaySourceUrl`, `sourcePage`, размеры, SHA-256 исходника, дата загрузки, `factStatus=legacy` и `rightsStatus=client-presentation-approved`. Скрипт `scripts/import-company-team.mjs` воспроизводит импорт. Права разрешены только для этой клиентской презентации.
- Источник визуально проверен 25.09.2026. В демо у блока есть пометка `Demo / noch abzustimmen`: состав, должности и учебные годы могут измениться. В JSON-LD сведения о сотрудниках не добавлены. Перед production нужны подтверждение актуальности и отдельная проверка прав на публикацию фото.

## 2026-09-25 — страница «Über uns»

- `src/content/company.ts`: редакционный немецкий текст для `/unternehmen` на основе S-03 (`https://www.klotz.mobi/ueber-uns`) и требований S-01. Статус `draft`; история до воссоединения, основание нынешней GmbH в 2017 году, типы клиентов, этапы работы и наличие внутренней/наружной выставки имеют статус `legacy-current-check` и требуют подтверждения перед production. Страница источника повторно просмотрена 25.09.2026.
- На первом этапе имена, должности и фотографии сотрудников не переносились; позднее пользователь отдельно попросил включить все восемь карточек в локальную презентацию, см. запись выше. Текущая численность команды по-прежнему не указана. «Качество по справедливым ценам» не используется как неподтверждённое обещание.
- Hero использует существующий `/images/lamelle-detail-1.webp` с правами только для клиентской презентации и URL/хэшем в `content/assets-manifest.json`. Схема в `src/features/company/company-page.tsx` — оригинальная абстрактная SVG-графика, созданная в коде 25.09.2026; она не изображает фактическое помещение KLOTZ. Новых сторонних изображений нет.

## 2026-09-25 — редактура главной и FAQ

- `src/content/home.ts`: новый hero lead, тексты вступления, процесса и B2B, пять FAQ с внутренними ссылками. Источники: S-01 (направления, аудитории, география и процесс), S-02/S-05/S-06 (legacy-каталог и реальные фотографии/референсы); редакционный статус `draft`.
- FAQ о стоимости перечисляет только факторы, не сообщает цен. FAQ о референсах прямо указывает неполноту подтверждённых сведений. Это новая немецкая редактура для презентации, не дословный перенос legacy-текста и не утверждённые заказчиком ответы.
- Новых фотографий и внешних материалов не добавлено; `FAQPage` JSON-LD не создавался.

Дата первичной инвентаризации: 2026-09-24.

## 2026-09-25 — контент проектного консультанта

- Промпт `src/features/assistant/knowledge.ts` собирает названия и описания услуг/статей через существующий `localContentRepository`; первичные источники и статус этих материалов остаются в реестре ниже и content manifest. Legacy/черновые сведения не становятся подтверждёнными фактами из-за включения в контекст.
- Короткие сценарные ответы и приветствие написаны для демонстрации ориентации по сайту. Это редакционный demo-текст, не цитата заказчика, не оценка объекта и не персональная рекомендация.
- Контактные данные посетителя не являются источником контента для консультанта; чат блокирует email и телефон, не сохраняет сообщения и не передаёт их в форму.

## Статусы

- `confirmed-request` — прямо указано заказчиком в письме/Lastenheft.
- `legacy-current-check` — найдено на действующем KLOTZ.mobi, но перед production нужно подтвердить актуальность.
- `rights-check` — материал существует, но права на перенос/редактирование должны быть подтверждены.
- `demo-placeholder` — допустим только для концепта и не считается фактом.
- `prohibited-invention` — нельзя публиковать без данных заказчика.

## Источники

| ID   | Источник                                                                        | Роль                                   |
| ---- | ------------------------------------------------------------------------------- | -------------------------------------- |
| S-01 | `C:/Users/user/Downloads/Lastenheft_Webrelaunch_KLOTZ_Kaffeehaus_Meuschau.docx` | основной источник требований заказчика |
| S-02 | https://www.klotz.mobi/                                                         | legacy-контент и изображения           |
| S-03 | https://www.klotz.mobi/ueber-uns                                                | история, команда, showroom             |
| S-04 | https://www.klotz.mobi/kontakt                                                  | NAP, часы работы, контактная форма     |
| S-05 | https://www.klotz.mobi/portfolio                                                | legacy-каталог услуг                   |
| S-06 | https://www.klotz.mobi/referenzen                                               | legacy-референсы                       |
| S-07 | https://www.klotz.mobi/jobs                                                     | legacy-вакансии                        |

## Подтверждённые требования к KLOTZ

| Данные               | Значение                                                                           | Статус            | Источник |
| -------------------- | ---------------------------------------------------------------------------------- | ----------------- | -------- |
| Позиционирование     | `Bauelemente & Outdoor Living aus Merseburg`                                       | confirmed-request | S-01     |
| Основная конверсия   | `Projekt anfragen`                                                                 | confirmed-request | S-01     |
| Вторичная конверсия  | `Referenzen ansehen`                                                               | confirmed-request | S-01     |
| Приоритетные регионы | Merseburg, Halle (Saale), Leipzig, Saalekreis, релевантные части Mitteldeutschland | confirmed-request | S-01     |
| Основные группы      | Terrasse & Garten; Fenster & Türen; Zaun & Tor; Gewerbekunden                      | confirmed-request | S-01     |
| Главный proof        | реальные проекты, технические данные, регион, задача и решение                     | confirmed-request | S-01     |
| Целевая аудитория    | Privatkunden, Gewerbe, Wohnungswirtschaft/Hausverwaltungen                         | confirmed-request | S-01     |

## Legacy-факты, требующие подтверждения

| Данные          | Legacy-значение                                                                                    | Статус               | Источник   |
| --------------- | -------------------------------------------------------------------------------------------------- | -------------------- | ---------- |
| Название        | Firma Klotz / KLOTZ GmbH – Bauelemente, Interieur & Design                                         | legacy-current-check | S-02–S-04  |
| Адрес           | Zur Saale 16, 06217 Merseburg / Meuschau                                                           | legacy-current-check | S-04       |
| Телефон         | 03461 455-0                                                                                        | legacy-current-check | S-02, S-04 |
| WhatsApp        | 0172 6543432                                                                                       | legacy-current-check | S-02, S-04 |
| Email           | info@klotz.mobi                                                                                    | legacy-current-check | S-04       |
| Часы работы     | Mo–Fr 07:00–16:00 или по записи                                                                    | legacy-current-check | S-02, S-04 |
| Телефонные часы | Mo–Do 07:30–12:00 и 13:00–15:00                                                                    | legacy-current-check | S-02, S-04 |
| История         | имя KLOTZ почти 40 лет известно в регионе Halle/Leipzig; KLOTZ GmbH в текущей форме создана в 2017 | legacy-current-check | S-03       |
| Showroom        | внутренняя и наружная Musterausstellung на площадке компании                                       | legacy-current-check | S-03       |
| Команда         | 13 сотрудников, включая специалистов, монтажников и Azubi                                          | legacy-current-check | S-03       |

Legacy-факты разрешено использовать в демо с мягкой формулировкой только после повторной визуальной проверки источника. Для production нужна письменная/редакционная верификация заказчика.

## Legacy-структура и ссылки, которые нельзя потерять без решения

- `/Nachhaltigkeit`
- `/soziales`
- `/portfolio` и вложенные услуги
- `/fundgrube`
- `/angebote`
- `/referenzen`
- `/neuigkeiten`
- `/trendmaterial`
- `/jobs`
- `/kontakt`
- `/downloads`
- `http://konfigurator.klotz.mobi/` — Haustürkonfigurator
- `/energiesparrechner`
- Facebook: `https://www.facebook.com/klotz.bauelemente/`
- Instagram: `https://www.instagram.com/klotz.interieur.design/`
- YouTube: `https://www.youtube.com/channel/UC4EykGIYdQxi-KqSJ8-UoCA/videos`

Это не готовая redirect matrix. Перед production нужен полный crawl с решением `keep / merge / update / archive / 301` для каждой индексируемой URL.

## Обнаруженные legacy-изображения

Ниже — примеры, а не полный inventory. Все имеют статус `rights-check`.

| Назначение                | URL источника                                                                                                                        | Наблюдаемое разрешение |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------: |
| Логотип                   | `https://www.klotz.mobi/sites/default/files/logo%20neu%20200x107_0.png`                                                              |                400×214 |
| Lamellendächer hero       | `https://www.klotz.mobi/sites/default/files/styles/flexslider_full/public/Slider_Lammelle_20260221_2050x620_0.jpg?itok=XkNFM1IX`     |              4100×1400 |
| Störmthaler See hero      | `https://www.klotz.mobi/sites/default/files/styles/flexslider_full/public/Slider_St%C3%B6rmtaler_See_20260221_0.jpg?itok=I4LqzGfE`   |              4100×1400 |
| Terrassenüberdachung hero | `https://www.klotz.mobi/sites/default/files/styles/flexslider_full/public/Slider_T%C3%9C_20260221_1.jpg?itok=DyKRGZhg`               |              4100×1400 |
| Türen hero                | `https://www.klotz.mobi/sites/default/files/styles/flexslider_full/public/Slider_T%C3%BCren_20260221_2200x640px_1.jpg?itok=kIVEEKll` |              4100×1400 |
| Zaun hero                 | `https://www.klotz.mobi/sites/default/files/styles/flexslider_full/public/Zaun%20mit%20Multibox_Wisniowski_2022.jpg?itok=4UyS3N6K`   |              4100×1400 |
| Gelenkarmmarkise          | `https://www.klotz.mobi/sites/default/files/styles/full_post/public/Gelenkarmmarkise%20%281850%20x%201000%20px%29.png?itok=dJa2FFfP` |               1540×800 |
| Stadtstadion Zaun         | `https://www.klotz.mobi/sites/default/files/styles/full_post/public/Einz%C3%A4unung_Stadtstadion_02%202025_0.png?itok=jme98AgX`      |               1540×800 |

Не использовать производные Drupal thumbnails как единственный архив. По возможности получить оригиналы у заказчика. Изображение с именем `AdobeStock_...` не переносить, пока не подтверждена лицензия.

## Контентные запреты

Без подтверждения заказчика запрещено придумывать:

- отзывы и рейтинги;
- названия клиентов и точные адреса проектов;
- стоимость реализованных объектов;
- размеры, сроки и технические характеристики референсов;
- сертификации, гарантийные сроки и партнёрские статусы;
- точное число лет/сотрудников как актуальный факт;
- конкретные субсидии/льготы;
- доступность товара из `Fundgrube`;
- текущие вакансии;
- заявленные зоны выезда за пределами новых приоритетных регионов.

## Правила для AI-изображений и векторной графики

- AI допускается для абстрактной материал-фактуры, ненавязчивого background или явно обозначенного `Konzeptbild`.
- AI запрещён для карточек реальных референсов, портретов команды, showroom и доказательств выполненных работ.
- Генерируемые SVG должны быть оригинальными, простыми, доступными, без встроенного текста и без копирования чужих фирменных знаков.
- Каждому созданному asset присваиваются назначение, prompt/source, авторство, дата, alt и статус прав.
- На клиентском демо должна быть прозрачная пометка, если видимые concept visuals не являются реальными фотографиями KLOTZ.

## Что создать при реализации

После старта реализации преобразовать этот документ в машинно-проверяемые файлы, не удаляя человекочитаемый реестр:

- `content/source-manifest.json` или `.ts`;
- `content/legacy-url-inventory.csv`;
- `content/redirects-draft.csv`;
- `content/assets-manifest.csv`;
- `content/content-status.csv`.

Каждая запись должна содержать `sourceUrl`, `sourceType`, `capturedAt`, `rightsStatus`, `factStatus`, `newRoute`, `notes`.

## Перенос для клиентской презентации — 24.09.2026

Пользователь явно подтвердил разрешение заказчика на изображения и логотип **исключительно для презентации**. Это снимает demo-блокер, но не подтверждает production-права или лицензии производителей/фотографов.

- `content/assets-manifest.json`: 19 записей с прямым `sourceUrl`, страницей-источником, локальным `src`, размерами, размером файла, SHA-256 оригинала, временем сохранения, `rightsStatus=client-presentation-approved`, `factStatus=legacy`.
- `content/legacy/inventory.json`: ограниченный обход 10 страниц с фактическими URL после редиректа, HTTP-статусом, ссылками и изображениями. Это **не полный crawl и не redirect matrix**.
- `content/legacy/originals/`: сохранённые исходные ответы сервера; это не обязательно полноразмерные авторские оригиналы. `public/images/`: WebP для локального UI.
- `scripts/import-legacy.mjs`, `import-gallery.mjs`, `import-selected.mjs`: воспроизводимый импорт выбранных материалов. Повторный импорт — отдельная осознанная операция, не часть build.

| Материал                              | Источник                                                                  | Использование и оговорки                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| logo, старые баннеры, Störmthaler See | https://www.klotz.mobi/                                                   | Логотип, категории, подтверждённая legacy-фотография; конкретные размеры и результаты проекта не придуманы |
| lamelle-detail-1/2/3                  | https://www.klotz.mobi/lamellendach                                       | Hero, услуга и фотоподборка ламельной террасы                                                              |
| terrasse                              | https://www.klotz.mobi/portfolio/terrassenueberdachung                    | Отдельная фотография стеклянной крыши, не ламельной конструкции                                            |
| glas-detail-1/2/3                     | https://www.klotz.mobi/glasschiebew%C3%A4nde                              | Подборка стеклянных раздвижных элементов                                                                   |
| fenster-1                             | https://www.klotz.mobi/portfolio/fenster                                  | Иллюстрация окон; без технических характеристик                                                            |
| stadtstadion                          | https://www.klotz.mobi/news/einz%C3%A4unung-stadtstadion                  | Legacy-референс ограждения; сохранён оригинальный коллаж                                                   |
| haustuer-detail, standort             | URL `/portfolio/z%C3%A4une`, редирект на https://www.klotz.mobi/portfolio | Дверь используется в категории; standort — фотография команды, **не showroom**, в UI не используется       |
| zaun-detail                           | https://www.klotz.mobi/                                                   | Сохранено при отборе, в UI не используется                                                                 |

URL `/portfolio/z%C3%A4une` не является актуальной самостоятельной страницей заборов. Ссылка услуги исправлена на https://www.klotz.mobi/portfolio/zaeune. Публичные ссылки на `standort`/`zaun-detail` в компоненты не добавлены; файлы остаются доступными как локальные статические assets демо.

### Тексты, маршруты и статус фактов

- `src/content/services.ts`: 21 услуга, `sourceRefs` у каждой записи, `status=draft`; новые немецкие тексты о выборе и подготовке, а не дословный перенос рекламы. Маршрут `/{category}/{slug}`.
- `src/content/articles.ts`: 4 новые статьи, section/checklist/source URL/servicePath. Маршрут `/wissen/{slug}`. На странице показан редакционный draft; фиктивные авторы и эксперты отсутствуют.
- `src/content/site.ts`: карточки 4 legacy-подборок, категории, контакты, процесс. Изображения сопоставлены manifest; названия и summaries не превращают подборку в подтверждённый паспорт проекта.
- `src/content/pages.ts`, `src/app/page.tsx`, `src/app/[slug]/page.tsx`: новая немецкая презентационная редактура по S-01–S-06. Компания/showroom опираются на `/ueber-uns`; численность и точный возраст компании не используются как актуальные факты.
- Контакты и часы — S-04, `legacy-current-check`, не подтверждённые production-данные. Юридические разделы остаются demo-заглушками.
- Статья о согласованиях использует общие официальные источники: https://mid.sachsen-anhalt.de/bauen-und-wohnen/bauen/page/oeffentliches-baurecht и https://www.bauen-wohnen.sachsen.de/bauordnung.html. Нет универсальных обещаний «разрешение не требуется», численных порогов или юридической консультации.
- AI-изображения в этом этапе не создавались и не используются.

## Редизайн v2 после обратной связи

- Новых фотографий и AI-assets нет. Используется существующий manifest; hero — `glas-detail-1`, крупная услуга — `lamelle-detail-1`, региональная иллюстрация — `glas-detail-3` (это не фотография showroom).
- В `src/app/page.tsx` добавлена новая немецкая редактура заголовков: `Raum für mehr Leben.`, `Das Zuhause endet nicht an der Haustür.`, `Vier Perspektiven. Ihr Projekt.` и связующие тексты. Статус — editorial draft. Новых бизнес-фактов, цифр, отзывов или обязательств нет.
- CSS-линии, стрелки, номера разделов и абстрактные плоскости B2B — декоративные элементы, а не изображения реального объекта.
- Для проверки контекста просмотрены https://www.klotz.mobi/ и https://normcph.com/. Чужие фотографии, тексты, код, логотипы и композиции не переносились.

## Projektlotse: сценарные ответы и переводы

- `src/features/assistant/knowledge.ts`: немецкие сценарные ответы о направлениях KLOTZ основаны на существующих demo-разделах `src/content/services.ts`, `src/content/site.ts`, `src/content/articles.ts`; статус `demo`, не подтверждённые проектные факты.
- Английские и русские версии этих ответов написаны для локальной демонстрации и не являются дословным legacy-контентом. Они не добавляют цены, сроки, характеристики и данные референсов.
- Live-ответы создаются из текущего repository-контекста на языке вопроса; они не сохраняются в content repository и требуют проверки перед production.

### Дополнение 15.11.2026 — Einbruchschutz

Пятая существующая услуга /fenster-tueren/einbruchschutz также полностью переработана (src/content/windows-security.ts). Источники: https://www.klotz.mobi/portfolio/einbruchschutz, https://www.klotz.mobi/produkte/rc23-fenster-t%C3%BCren и https://www.klotz.mobi/produkte/abus-zusatzsicherungen; общая техническая ориентация: https://www.polizei-beratung.de/themen-und-tipps/einbruch/technische-sicherheit/ (проверены 15.11.2026). Никаких сертификатов фирмы и обещаний предотвращения взлома. Девятая фотография building-security-hero — вид входа изнутри из галереи /alutueren, иллюстрация без приписывания защитных свойств; точный файл и SHA в manifest. Изображения-заглушки дочерних legacy-страниц и сюжет с силуэтом взломщика не используются.
