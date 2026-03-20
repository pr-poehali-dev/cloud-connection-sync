import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Елена Родригес",
    role: "Директор нейронауки, Quantum Dynamics",
    avatar: "/professional-woman-scientist.png",
    content:
      "После внедрения SynapseAI результаты реабилитации пациентов с параплегией выросли на 340%. Это не просто инструмент — это прорыв.",
  },
  {
    name: "Маркус Уильямс",
    role: "Главный исследователь, NeuroLab EU",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Протоколы безопасности и клиническая точность SynapseAI вывели наши испытания на новый уровень. Ни одна система не дала такого результата.",
  },
  {
    name: "Анна Ковальски",
    role: "Нейрохирург, Центр передовой медицины",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Имплантация заняла 2 часа, а уже на третий день пациент управлял протезом силой мысли. Адаптивный ИИ понимает намерения лучше, чем я ожидала.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Говорят те, кто проверил на практике</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Учёные, врачи и исследователи, которые уже работают с SynapseAI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}