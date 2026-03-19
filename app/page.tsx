export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-500 to-lime-400" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">OptiFlow AI</div>
              <div className="text-xs text-slate-500">AI automation bureau</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#solutions" className="transition hover:text-slate-900">Oplossingen</a>
            <a href="#results" className="transition hover:text-slate-900">Resultaten</a>
            <a href="#process" className="transition hover:text-slate-900">Proces</a>
            <a href="#faq" className="transition hover:text-slate-900">Veelgestelde vragen</a>
          </nav>

          <a
            href="#contact"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Plan een gesprek
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(163,230,53,0.20),_transparent_24%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-lime-400" />
                Slimmere workflows. Snellere groei.
              </div>
              <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Automatiseer repetitief werk met AI.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Wij ontwerpen en implementeren AI-workflows die repetitief werk elimineren,
                reactietijden versnellen en teams helpen opschalen zonder extra operationele druk.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
                >
                  Plan een strategiegesprek
                </a>
                <a
                  href="#results"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400"
                >
                  Bekijk toepassingen
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-slate-500">
                <div>
                  <div className="text-2xl font-semibold text-slate-950">30+ uur</div>
                  <div>bespaard per team / week</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-slate-950">3x</div>
                  <div>snellere leadopvolging</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-slate-950">24/7</div>
                  <div>geautomatiseerde supportflows</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/60">
                <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-slate-900">Overzicht automatisering</div>
                      <div className="text-xs text-slate-500">Lead intake → kwalificatie → opvolging</div>
                    </div>
                    <div className="rounded-full bg-gradient-to-r from-blue-500 to-lime-400 px-3 py-1 text-xs font-medium text-white">
                      Live workflow
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      ["Websiteformulier ingestuurd", "Direct vastgelegd"],
                      ["AI leadkwalificatie", "Intentie- en budgetscore"],
                      ["CRM-synchronisatie", "Automatisch verrijkt profiel"],
                      ["Gepersonaliseerde opvolging", "E-mail- en WhatsApp-sequentie"],
                      ["Overdracht naar sales", "Direct ingepland in de agenda"],
                    ].map(([title, subtitle]) => (
                      <div key={title} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500/15 to-lime-400/20" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-900">{title}</div>
                          <div className="text-xs text-slate-500">{subtitle}</div>
                        </div>
                        <div className="text-xs font-medium text-emerald-600">Geautomatiseerd</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 text-center text-sm text-slate-500 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            <div>Leadautomatisering</div>
            <div>Klantsupport-workflows</div>
            <div>CRM- en operatie-automatisering</div>
            <div>AI-gestuurde rapportagesystemen</div>
          </div>
        </section>

        <section id="solutions" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Oplossingen</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Gebouwd voor founders en teams die slimmer willen opschalen.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Wij zetten handmatige, repetitieve processen om in gestroomlijnde systemen met AI en slimme automatiseringen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Leadautomatisering",
                text: "Vang leads automatisch op, kwalificeer ze, routeer ze en volg ze slim op.",
              },
              {
                title: "AI-chatbots",
                text: "Zet intelligente assistenten in voor kwalificatie, support en overdracht.",
              },
              {
                title: "Workflowsystemen",
                text: "Koppel je tools zodat administratief werk op de achtergrond gebeurt.",
              },
              {
                title: "Rapportage-automatisering",
                text: "Genereer live dashboards en samenvattingen zonder spreadsheet-chaos.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500/15 to-lime-400/20" />
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="results" className="bg-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">Resultaten</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Concrete resultaten, geen vage AI-beloftes.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  metric: "42 uur",
                  title: "bespaard per week",
                  text: "Door lead intake, CRM-updates en interne meldingen te automatiseren.",
                },
                {
                  metric: "68%",
                  title: "snellere eerste reactie",
                  text: "Met AI-gestuurde kwalificatie en directe opvolgsequenties.",
                },
                {
                  metric: "2,4x",
                  title: "meer ingeplande calls",
                  text: "Door betere routing, timing en gepersonaliseerde nurturing.",
                },
              ].map((item) => (
                <div key={item.metric} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <div className="text-4xl font-semibold tracking-tight">{item.metric}</div>
                  <div className="mt-2 text-lg font-medium text-slate-100">{item.title}</div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Proces</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Een simpel proces om je beste automatiseringen te vinden, bouwen en opschalen.
              </h2>
            </div>
            <div className="space-y-5">
              {[
                ["01", "Analyse", "We brengen knelpunten, repetitieve taken en gemiste omzetkansen in kaart."],
                ["02", "Ontwerp", "We ontwerpen de workflow, integraties, prompts en overdrachtslogica."],
                ["03", "Implementatie", "We bouwen het systeem, koppelen je tools en testen elke stap."],
                ["04", "Optimalisatie", "We monitoren prestaties en verbeteren resultaten doorlopend."],
              ].map(([num, title, text]) => (
                <div key={num} className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                    {num}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="rounded-[32px] border border-slate-200 bg-gradient-to-r from-blue-500 to-lime-400 p-[1px] shadow-xl shadow-slate-200/50">
            <div className="rounded-[31px] bg-white px-8 py-10 lg:px-12 lg:py-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Volgende stap</div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    Stop met mensen betalen voor werk dat software beter kan doen.
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg text-slate-600">
                    Laten we één high-impact workflow vinden die je in de komende 30 dagen kunt automatiseren.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
                >
                  Plan je analyse
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Veelgestelde vragen</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Veelgestelde vragen.
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {[
              ["Met wat voor bedrijven werken jullie?", "We ondersteunen vooral dienstverleners, bureaus, consultants en kleine teams die handmatig werk willen verminderen en sneller willen werken."],
              ["Hoe snel kunnen we live?", "De meeste eerste workflows kunnen binnen 2 tot 4 weken worden uitgewerkt en live gezet, afhankelijk van complexiteit en integraties."],
              ["Vervangen jullie onze huidige tools?", "Meestal niet. We koppelen en optimaliseren de tools die je al gebruikt en voegen AI toe waar het echt meerwaarde oplevert."],
            ].map(([q, a]) => (
              <div key={q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">{q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Contact</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Laten we je meest waardevolle automatisering bouwen.
              </h2>
              <p className="mt-4 max-w-lg text-lg text-slate-600">
                Vertel ons wat in je bedrijf onnodig veel tijd kost, dan laten we zien waar AI direct rendement kan opleveren.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 placeholder:text-slate-400" placeholder="Voornaam" />
                <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 placeholder:text-slate-400" placeholder="Achternaam" />
              </div>
              <input className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-slate-400" placeholder="Zakelijk e-mailadres" />
              <input className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-slate-400" placeholder="Bedrijf" />
              <textarea className="mt-4 min-h-[140px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-slate-400" placeholder="Welke workflow wil je automatiseren?" />
              <button className="mt-4 w-full rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                Vraag een analyse aan
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
