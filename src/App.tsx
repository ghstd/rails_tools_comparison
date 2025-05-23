import miniProfilerImg0 from "./assets/rack-mini-profiler/stars.png";
import miniProfilerImg1 from "./assets/rack-mini-profiler/custom_route.png";
import miniProfilerImg2 from "./assets/rack-mini-profiler/embed_photo.png";
import miniProfilerImg3 from "./assets/rack-mini-profiler/initializer.png";
import miniProfilerImg4 from "./assets/rack-mini-profiler/separate_photo.png";

import rubyProfImg0 from "./assets/ruby-prof/stars.png";
import rubyProfImg1 from "./assets/ruby-prof/call_tree.png";
import rubyProfImg2 from "./assets/ruby-prof/config.png";
import rubyProfImg3 from "./assets/ruby-prof/custom_route.png";
import rubyProfImg4 from "./assets/ruby-prof/graph_photo.png";

import stackprofImg0 from "./assets/stackprof/stars.png";
import stackprofImg1 from "./assets/stackprof/config.png";
import stackprofImg2 from "./assets/stackprof/result.png";

import bulletImg0 from "./assets/bullet/stars.png";
import bulletImg1 from "./assets/bullet/result.png";
import bulletImg2 from "./assets/bullet/config.png";

import skylightImg0 from "./assets/skylight/stars.png";
import skylightImg1 from "./assets/skylight/screenshot_1.png";
import skylightImg2 from "./assets/skylight/screenshot_2.png";

import newRelicImg0 from "./assets/new relic/stars.png";
import newRelicImg1 from "./assets/new relic/dashboard.png";
import newRelicImg2 from "./assets/new relic/databases.png";
import newRelicImg3 from "./assets/new relic/home_index.png";
import newRelicImg4 from "./assets/new relic/logs.png";
import newRelicImg5 from "./assets/new relic/map.png";
import newRelicImg6 from "./assets/new relic/summary.png";
import newRelicImg7 from "./assets/new relic/tracing.png";
import newRelicImg8 from "./assets/new relic/vms.png";

import scoutApmImg0 from "./assets/scout_apm/stars.png";
import scoutApmImg1 from "./assets/scout_apm/overview.png";

import appSignalImg0 from "./assets/app_signal/stars.png";
import appSignalImg1 from "./assets/app_signal/combine.png";
import appSignalImg2 from "./assets/app_signal/screen_1.png";
import appSignalImg3 from "./assets/app_signal/screen_2.png";
import appSignalImg4 from "./assets/app_signal/screen_3.png";
import appSignalImg5 from "./assets/app_signal/screen_4.png";

import prometheusImg0 from "./assets/prometheus/stars.png";

import prometheus_exporterImg0 from "./assets/prometheus_exporter/stars.png";
import prometheus_exporterImg1 from "./assets/prometheus_exporter/initializer.png";

import logrageImg0 from "./assets/lograge/stars.png";
import logrageImg1 from "./assets/lograge/example.png";

import k6Img0 from "./assets/k6/stars.png";
import k6Img1 from "./assets/k6/result.png";
import k6Img2 from "./assets/k6/test.png";

import grafanaImg0 from "./assets/grafana/stars.png";
import grafanaImg1 from "./assets/grafana/screenshot_1.png";
import grafanaImg2 from "./assets/grafana/screenshot_2.png";

import grafanaStackImg1 from "./assets/grafana_stack/urls_commands.png";
import grafanaStackImg2 from "./assets/grafana_stack/run.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { MyItem } from "@/components/my-components/my-item";

import "./App.css";

function App() {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="text-white border-none">
          <AccordionTrigger className="mb-2 ">
            Производительность / Профилирование
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible className="px-8">
              <MyItem
                value="1"
                triggerTitle="rack-mini-profiler"
                toolInfo={`<span style="color: green">+10%</span>`}
                contentTitle="Простой профайлер с выводом в UI (подходит для локальной разработки)"
                starImage={miniProfilerImg0}
                links={[
                  [
                    "github",
                    "https://github.com/MiniProfiler/rack-mini-profiler",
                  ],
                  [
                    "rubygems",
                    "https://rubygems.org/gems/rack-mini-profiler/versions/3.3.1",
                  ],
                ]}
                contentListItems={[
                  `инструмент помогает понять, где тратится время при
									обработке запроса — на рендеринг, SQL-запросы, загрузку
									страницы и т.п.`,
                  "подключается как middleware",
                  `<ul style="padding-left: 1rem; list-style-type: circle">
										собирает метрики:
										<li>Время выполнения запроса в целом</li>
										<li>Время выполнения каждого SQL-запроса</li>
										<li>Время рендеринга шаблонов</li>
										<li>Глубину вложенных вызовов и другие</li>
									</ul>`,
                  "хранит их в файлах в самом проекте локально",
                  `при отдаче ответа из rails (только если отдается html
									страница), встраивает сбоку страницы небольшую сводку по
									этому запросу.`,
                  "через эту сводку можно перейти на страницу с полным отчетом",
                  `rack-mini-profiler перехватит url-запрос на полный отчет
									еще на уровне middleware и отдаст html-страницу с отчетом`,
                  `если ответ не html, то нужно вручную сделать url-запрос на
                  полный отчет, но это уже нужно настраивать`,
                  "будет создавать по файлу с метриками на каждый запрос неконтролируемо, это нужно настраивать",
                ]}
                screenshotsItems={[
                  ["Встроенная в html сводка", miniProfilerImg2],
                  ["Сводка в отдельной странице", miniProfilerImg4],
                  ["Подключение", miniProfilerImg3],
                  [
                    "Дополнительный action если rails используется как Api",
                    miniProfilerImg1,
                  ],
                ]}
              />
              <MyItem
                value="2"
                triggerTitle="ruby-prof"
                toolInfo={`<span style="color: green">+60%</span>`}
                contentTitle="Детализированный CPU/памяти профайлер, используется для глубокого анализа."
                starImage={rubyProfImg0}
                links={[
                  ["github", "https://github.com/ruby-prof/ruby-prof"],
                  [
                    "rubygems",
                    "https://rubygems.org/gems/ruby-prof/versions/1.7.1-x64-mingw-ucrt",
                  ],
                ]}
                contentListItems={[
                  "профилировщик Ruby-кода, не Rails-приложения в целом",
                  "тяжелый по нагрузке на приложение",
                  `<ul style="padding-left: 1rem; list-style-type: circle">
									собирает метрики:
										<li>Может мерять настоящее (реальное) время</li>
										<li>Может мерять CPU-время</li>
										<li>Кол-во аллокаций объектов</li>
										<li>Кол-во байт, выделенных в памяти</li>
										<li>Время выполнения каждого метода</li>
										<li>Количество вызовов методов</li>
										<li>Время самих вызовов и время вложенных вызовов (self vs total)</li>
										<li>Поддерживает разные форматы отчётов (flat, graph, calltree, html и др.)</li>
									</ul>`,
                  "можно вручную оборачивать любой метод и выводить замеры в консоль",
                  "можно подключить через middleware (таким образом обернув все приложение) и смотреть замеры по всему приложению",
                  "в случае с middleware результаты будут сохраняться локально в файл в формате html (можно выбрать другие, или сразу несколько файлов сохранять в разных форматах)",
                  "по-умолчанию новый файл будет создаваться для каждого екшена, а при повторном обращении файл будет перезаписываться",
                  "сами файлы могут быть с десятками тысяч строк",
                  "далее например файл в формате html можно открыть в браузере",
                  "возможно профилирование можно делать не на каждый запрос, а вызывать с помощью добавления параметров в url запроса",
                ]}
                screenshotsItems={[
                  ["Формат отчета", rubyProfImg4],
                  ["Формат графа", rubyProfImg1],
                  ["Подключение", rubyProfImg2],
                  ["Action для просмотра", rubyProfImg3],
                ]}
              />
              <MyItem
                value="3"
                triggerTitle="stackprof"
                toolInfo={`<span style="color: green">+22%</span>`}
                contentTitle="Семплирующий профайлер, подходит даже для продакшна."
                starImage={stackprofImg0}
                links={[
                  ["github", "https://github.com/tmm1/stackprof"],
                  [
                    "rubygems",
                    "https://rubygems.org/gems/stackprof/versions/0.2.27",
                  ],
                ]}
                contentListItems={[
                  "профилировщик Ruby-кода, не Rails-приложения в целом",
                  "относительно не тяжелый по нагрузке на приложение",
                  `<ul style="padding-left: 1rem; list-style-type: circle">
									не меряет точное время, а делает samples (снимки) стека вызовов во время работы программы:
										<li>например каждые 1 мс смотрит какие методы находятся в стеке вызовов</li>
										<li>сохраняет этот "снимок" в память</li>
										<li>потом показывает какие методы чаще всего оказывались в стеке</li>
										<li>Может делать семплы по реальному времени</li>
										<li>Может делать семплы по CPU</li>
									</ul>`,
                  "можно вручную оборачивать любой метод и выводить замеры в консоль",
                  "можно подключить через middleware (таким образом обернув все приложение) и смотреть замеры по всему приложению",
                  "в варианте с middleware будет создавать новый файл на каждый запрос,",
                  "но можно настроить чтобы файл был один каждый раз перезапивался",
                  "результат можно выводит в консоль или использовать внешние инструменты для визуализации",
                ]}
                screenshotsItems={[
                  ["Результат", stackprofImg2],
                  ["Подключение", stackprofImg1],
                ]}
              />
              <MyItem
                value="4"
                triggerTitle="Bullet"
                toolInfo={`<span style="color: green">0%</span>`}
                contentTitle="Инструмент для выявления N+1-запросов и других неэффективностей ActiveRecord."
                starImage={bulletImg0}
                links={[
                  ["github", "https://github.com/flyerhzm/bullet"],
                  [
                    "rubygems",
                    "https://rubygems.org/gems/bullet/versions/8.0.7",
                  ],
                ]}
                contentListItems={[
                  "инструмент для Rails, который помогает выявлять проблемы неэффективных SQL-запросов",
                  "покажет N+1-запросы - то есть когда нужно добавить к запросу includes",
                  "покажет Unused eager loading - то есть когда includes лишний",
                  "покажет когда вместо .count лучше использовать .counter_cache",
                  "результаты может выводить в консоль или встраивать в html ответа как алерты",
                ]}
                screenshotsItems={[
                  ["Результат", bulletImg1],
                  ["Подключение", bulletImg2],
                ]}
              />
            </Accordion>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="text-white border-none">
          <AccordionTrigger className="mb-2">
            Мониторинг (APM - Application Performance Monitoring)
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible className="px-8">
              <MyItem
                value="1"
                triggerTitle="Skylight"
                toolInfo={`<span style="color: green">+17%</span>`}
                contentTitle="Разработан командой Basecamp (создателями Rails)"
                starImage={skylightImg0}
                links={[
                  ["github", "https://github.com/skylightio/skylight-ruby"],
                  [
                    "rubygems",
                    "https://rubygems.org/gems/skylight/versions/6.1.0.beta",
                  ],
                  ["цены", "https://www.skylight.io/pricing"],
                ]}
                contentListItems={[
                  "облачный инструмент для анализа запросов",
                  "есть бесплатный месячный лимит количества запросов к серверам Skylight",
                  `<ul style="padding-left: 1rem; list-style-type: circle">
									показывает графически:
											<li>Распределение времени по слоям запроса (контроллер, SQL, View, и т.д.)</li>
											<li>Конкретные SQL-запросы, вызывающие задержки</li>
											<li>Медленные эндпоинты с детализацией до маршрута</li>
											<li>Часто повторяющиеся проблемы (например, N+1)</li>
											<li>Исторические данные с возможностью анализа по часам, дням, неделям</li>
									</ul>`,
                  `<ul style="padding-left: 1rem; list-style-type: circle">
									установка:
											<li>добавляется гем</li>
											<li>добавляется файл-конфиг (создать config yml-файл с authentication: 'your_token')</li>
											<li>добавляется ключ к API Skylight-серверов</li>
											<li>для использования в режиме development нужно добавить настройку в class Application: <code>config.skylight.environments += ['development']</code></li>
									</ul>`,
                  "подключается как middleware, оборачивая все приложение",
                  "не отправляет каждый запрос — он агрегирует статистику в локальном файле в фоновом процессе (примерно 10 МБ)",
                  "По оценке разработчиковфоновый процесс использует менее 50 МБ оперативной памяти",
                  "периодически отправляет собранные данные на сервера Skylight (по умолчанию каждые 30 секунд)",
                  "работает в проде, не нагружает приложение (работает асинхронно)",
                  "не включают персональные данные или содержимое запросов (params)",
                ]}
                screenshotsItems={[
                  ["", skylightImg1],
                  ["", skylightImg2],
                ]}
              />
              <MyItem
                value="2"
                triggerTitle="New Relic"
                toolInfo={`<span style="color: green">+11.5%</span>`}
                contentTitle="Самый мощный APM, поддерживает множество языков и фреймворков"
                starImage={newRelicImg0}
                links={[
                  ["github", "https://github.com/newrelic/newrelic-ruby-agent"],
                  [
                    "rubygems",
                    "https://rubygems.org/gems/newrelic_rpm/versions/9.19.0",
                  ],
                  ["цены", "https://newrelic.com/pricing"],
                ]}
                contentListItems={[
                  "подключается так же через Middleware и ActiveSupport::Notifications",
                  `<ul style="padding-left: 1rem; list-style-type: circle">
									собирает значительно больше метрик:
											<li>Время каждого запроса, SQL, view, background job</li>
											<li>Использование CPU, памяти, GC, disk I/O</li>
											<li>Метрики VM: Thread count, object allocations, queue latency</li>
											<li>Метрики внешних сервисов: Redis, Memcached, Sidekiq, PostgreSQL</li>
											<li>Custom events и бизнес-метрики (track_custom_event)</li>
											<li>Browser monitoring, RUM (real user monitoring)</li>
									</ul>`,
                  `<ul style="padding-left: 1rem; list-style-type: circle">
									работает не только с Rails, но и с:
											<li>Sidekiq (через отдельные хуки)</li>
											<li>Resque, Delayed Job</li>
											<li>Puma/Unicorn</li>
											<li>Rake tasks</li>
											<li>ActiveJob</li>
									</ul>`,
                  "Использует Ruby-интерфейсы для сбора системной информации: ObjectSpace, GC.stat, Thread.list, Process.times, IO, Etc",
                  "агент в приложении в отдельном потоке собирает данные, буферизует, раз в 30 или 60 секунд (настраивается) отправляет данные в облако New Relic",
                  "не пишет на диск, всё хранит in-memory",
                ]}
                screenshotsItems={[
                  ["dashboard", newRelicImg1],
                  ["summary", newRelicImg6],
                  ["vms", newRelicImg8],
                  ["databases", newRelicImg2],
                  ["home_index", newRelicImg3],
                  ["logs", newRelicImg4],
                  ["map", newRelicImg5],
                  ["tracing", newRelicImg7],
                ]}
              />
              <MyItem
                value="3"
                triggerTitle="ScoutApm"
                toolInfo={`<span style="color: green">+19.5%</span>`}
                contentTitle=""
                starImage={scoutApmImg0}
                links={[
                  ["github", "https://github.com/scoutapp/scout_apm_ruby"],
                  [
                    "rubygems",
                    "https://rubygems.org/gems/scout_apm/versions/5.6.4",
                  ],
                  ["цены", "https://www.scoutapm.com/pricing"],
                ]}
                contentListItems={[
                  "<mark>при использовании этого гема у меня перестал успешно выполняться 1% запросов (development-режим)</mark>",
                  "ставка на простоту и скорость (?)",
                  "Профилирует не только веб, но и background workers",
                  "Есть поддержка memory bloat detection",
                  "Позиционируется как 'дешёвый и понятный аналог New Relic'",
                ]}
                screenshotsItems={[["Обзор", scoutApmImg1]]}
              />
              <MyItem
                value="4"
                triggerTitle="AppSignal"
                toolInfo={`<span style="color: green">+13%</span>`}
                contentTitle="Мне показался самым информативным"
                starImage={appSignalImg0}
                links={[
                  [
                    "github",
                    "https://github.com/appsignal/appsignal-ruby?tab=readme-ov-file",
                  ],
                  [
                    "rubygems",
                    "https://rubygems.org/gems/appsignal/versions/4.5.13-java",
                  ],
                ]}
                contentListItems={[
                  "Нацелен на rails, есть много функционала",
                  `<ul style="padding-left: 1rem; list-style-type: circle">
									с фокусом на:
											<li>Background jobs</li>
											<li>Кастомные события</li>
											<li>Алёрты и метрики на основе логики бизнеса</li>
									</ul>`,
                  "Платный",
                ]}
                screenshotsItems={[
                  ["Сборный скриншот", appSignalImg1],
                  ["screen_1", appSignalImg2],
                  ["screen_2", appSignalImg3],
                  ["screen_3", appSignalImg4],
                  ["screen_4", appSignalImg5],
                ]}
              />
            </Accordion>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="text-white border-none">
          <AccordionTrigger className="mb-2">
            Метрики и визуализация
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible className="px-8">
              <MyItem
                value="1"
                triggerTitle="Prometheus"
                toolInfo={`<span style="color: green">+1.5%</span>`}
                contentTitle="Входит в набор: 'Prometheus + prometheus_exporter + Grafana'"
                starImage={prometheusImg0}
                links={[
                  [
                    "github",
                    "https://github.com/prometheus/prometheus?tab=readme-ov-file",
                  ],
                ]}
                contentListItems={[
                  "Приложение для установки локально на сервер",
                  "Это база данных метрик (кастомная, встроенная бд, язык PromQL), которая умеет опрашивать источники этих метрик, то есть Prometheus (по-умолчанию раз в 15 сек)",
                  "отправляет HTTP-запрос на указанный url (к так называемому экспортеру), скачивает метрики и сохраняет у себя.",
                  "по умолчанию располагается на: <code>http://localhost:9090/query</code>",
                  "метрики на: <code>http://localhost:9090/metrics</code>",
                ]}
                screenshotsItems={[]}
              />
              <MyItem
                value="2"
                triggerTitle="prometheus_exporter"
                toolInfo={`<span style="color: green">+1%</span>`}
                contentTitle="Ruby-экспортер метрик для Prometheus."
                starImage={prometheus_exporterImg0}
                links={[
                  [
                    "github",
                    "https://github.com/discourse/prometheus_exporter?tab=readme-ov-file#rails-integration",
                  ],
                  [
                    "rubygems",
                    "https://rubygems.org/gems/prometheus_exporter/versions/2.2.0",
                  ],
                  [
                    "альтернатива: prometheus client_ruby",
                    "https://github.com/prometheus/client_ruby",
                  ],
                  [
                    "альтернатива: yabeda",
                    "https://github.com/yabeda-rb/yabeda",
                  ],
                ]}
                contentListItems={[
                  "gem для rails",
                  "отдает метрики по адресу: <code>http://localhost:9394/metrics</code>",
                  "подключается к rails через middleware",
                  "имеет клиент (внутри rails) и сервер (запускается отдельно как отдельный процесс)",
                  "при работе самого rails этот клиент передает метрики на сервер, сервер хранит их в оперативке",
                  "у сервера есть endpoint /metrics, к нему обращается prometheus и скачивает эти метрики",
                ]}
                screenshotsItems={[["Подключение", prometheus_exporterImg1]]}
              />
              <MyItem
                value="3"
                triggerTitle="Grafana"
                toolInfo={`<span style="color: green">+4.5%</span>`}
                contentTitle="Визуализация метрик"
                starImage={grafanaImg0}
                links={[
                  ["github", "https://github.com/grafana/grafana"],
                  [
                    "установка",
                    "https://grafana.com/docs/grafana/latest/setup-grafana/installation/",
                  ],
                  [
                    "дашборды для rails, для разных метрик",
                    "https://grafana.com/grafana/dashboards/?search=rails",
                  ],
                ]}
                contentListItems={[
                  "это такое же веб-приложение как и rails - то есть есть сервер и браузерный клиент",
                  "например локально запускаем сервер, в браузере открываем клиент, делаем настройки",
                  "клиент отправляет запрос к свому серверу (можно выставить любое время опрашивания)",
                  "сервер делает запрос к Prometheus по HTTP, скачивает метрики, отдает клиенту",
                  "клиент рисует графики на дашбордах",
                  "адрес по-умолчанию: <code>http://localhost:3000</code>",
                  "адрес можно переопределить в его конфиге",
                ]}
                screenshotsItems={[
                  ["", grafanaImg1],
                  ["", grafanaImg2],
                ]}
              />
            </Accordion>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="text-white border-none">
          <AccordionTrigger className="mb-2">Разное</AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible className="px-8">
              <MyItem
                value="1"
                triggerTitle="Lograge"
                toolInfo={`<span style="color: green">-10%</span>`}
                contentTitle="Логгер с меньшим количеством строк"
                starImage={logrageImg0}
                links={[["github", "https://github.com/roidrage/lograge"]]}
                contentListItems={[
                  "уменьшает количество строк в логах",
                  "и в файлах логов",
                ]}
                screenshotsItems={[["Результат", logrageImg1]]}
              />
              <MyItem
                value="2"
                triggerTitle="k6"
                toolInfo={`<span style="color: green">-</span>`}
                contentTitle="Инструмент нагрузочного тестирования сервера"
                starImage={k6Img0}
                links={[["github", "https://github.com/grafana/k6"]]}
                contentListItems={[
                  "с помощью него я проводил нагрузку и замеры",
                  "использовал нагрузку 20 запросов в секунду в течении 5 мин",
                  `<ul style="padding-left: 1rem; list-style-type: circle">
									другие инструменты и команды, которые я использовал для замеров:
											<li><code>pidstat -rud -p $(pgrep -o -f puma) 5 48 > ./_my_temp_files/pidstat.log</code></li>
											<li><code>sar -u -r -n DEV 5 48 > ./_my_temp_files/sar.log</code></li>
											<li><code>dstat -cdngyt --top-cpu --top-mem 5 48 > ./_my_temp_files/dstat.log</code></li>
									</ul>`,
                ]}
                screenshotsItems={[
                  ["Результат работы k6", k6Img1],
                  ["Сам тест k6", k6Img2],
                  ["Urls и команды запуска Grafana-stack", grafanaStackImg1],
                  [
                    "Как я запускал набор: Prometheus + prometheus_exporter + Grafana",
                    grafanaStackImg2,
                  ],
                ]}
              />
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default App;
