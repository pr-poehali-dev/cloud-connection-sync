import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Нейронная адаптация",
    description: "Имплант самостоятельно обучается вашим нейронным паттернам — точность интерпретации сигналов растёт с каждым днём использования.",
    icon: "brain",
    badge: "ИИ",
  },
  {
    title: "Клиническая безопасность",
    description: "Биосовместимые материалы, сквозное шифрование нейроданных и соответствие стандартам FDA для медицинских имплантов.",
    icon: "lock",
    badge: "FDA",
  },
  {
    title: "Отклик < 1 мс",
    description: "Мысль мгновенно становится действием: задержка менее миллисекунды, точность перевода намерений — 99,7%.",
    icon: "globe",
    badge: "Точность",
  },
  {
    title: "Предиктивный ИИ",
    description: "Алгоритмы предугадывают намерения до завершения мысли и оптимизируют нейронные пути в реальном времени.",
    icon: "zap",
    badge: "Smart",
  },
  {
    title: "Мониторинг здоровья",
    description: "Непрерывная синхронизация с биометрическими показателями — давление, ЧСС, активность мозга — всё в одном интерфейсе.",
    icon: "link",
    badge: "Здоровье",
  },
  {
    title: "AR / VR нейтив",
    description: "Встроенная поддержка расширенной и виртуальной реальности — управление XR-средами напрямую сигналами мозга.",
    icon: "target",
    badge: "XR Ready",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Технологии, опережающие разум</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            SynapseAI — это первый нейроинтерфейс, который не просто считывает сигналы мозга, а понимает вас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}