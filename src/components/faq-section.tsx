import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Насколько безопасна имплантация SynapseAI?",
      answer:
        "Процедура проводится с использованием прецизионного хирургического робота и прошла обширное клиническое тестирование. Все материалы биосовместимы и одобрены FDA. Риски сопоставимы с рутинными нейрохирургическими вмешательствами.",
    },
    {
      question: "Сколько времени занимает операция и восстановление?",
      answer:
        "Малоинвазивная процедура занимает 2–3 часа под местной анестезией с седацией. Большинство пациентов возвращаются домой на следующий день. Полная калибровка системы под пользователя занимает 1–2 недели.",
    },
    {
      question: "Можно ли удалить имплант, если я передумаю?",
      answer:
        "Да. SynapseAI изначально проектировался как полностью обратимое устройство. Удаление выполняется той же малоинвазивной процедурой и не оставляет необратимых изменений.",
    },
    {
      question: "Что чувствует человек с имплантом?",
      answer:
        "От самого импланта нет никаких физических ощущений. Управление устройствами через мысль воспринимается как естественное движение руки — после короткого периода обучения большинство пользователей перестают замечать разницу.",
    },
    {
      question: "Как заряжается устройство?",
      answer:
        "Беспроводная зарядка через внешний патч, который размещается рядом с головой на ночь. Одного заряда хватает на полный активный день. Внешних проводов или видимых элементов нет.",
    },
    {
      question: "Для кого доступен SynapseAI прямо сейчас?",
      answer:
        "На первом этапе мы работаем с пациентами с тяжёлым параличом и нейродегенеративными заболеваниями. Клинический отбор проводится индивидуально. Оставьте заявку — наша команда свяжется для первичной оценки.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что важно знать перед тем, как сделать шаг в будущее — о безопасности, процедуре и жизни с имплантом.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}