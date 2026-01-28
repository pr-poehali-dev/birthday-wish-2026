import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [clickedHearts, setClickedHearts] = useState<number[]>([]);

  const handleHeartClick = (index: number) => {
    if (!clickedHearts.includes(index)) {
      setClickedHearts([...clickedHearts, index]);
    }
  };

  const dreams = [
    {
      icon: 'Home',
      title: 'Наш дом',
      description: 'Создадим уютное гнёздышко, где каждый уголок будет наполнен теплом и любовью'
    },
    {
      icon: 'Plane',
      title: 'Путешествия',
      description: 'Исследуем мир вместе, открывая новые места и создавая незабываемые воспоминания'
    },
    {
      icon: 'Heart',
      title: 'Семья',
      description: 'Построим крепкую семью, полную счастья, смеха и взаимной поддержки'
    },
    {
      icon: 'Sparkles',
      title: 'Мечты',
      description: 'Воплотим все наши самые заветные желания и мечты в реальность'
    }
  ];

  const floatingHearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${3 + Math.random() * 2}s`
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-muted overflow-hidden relative">
      {floatingHearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute opacity-20 cursor-pointer hover:opacity-40 transition-opacity"
          style={{
            left: heart.left,
            top: '-50px',
            animationDelay: heart.delay,
            animationDuration: heart.duration
          }}
          onClick={() => handleHeartClick(heart.id)}
        >
          <Icon 
            name={clickedHearts.includes(heart.id) ? "HeartCrack" : "Heart"} 
            size={32} 
            className={`${
              clickedHearts.includes(heart.id) 
                ? 'text-destructive animate-pulse-soft' 
                : 'text-primary-foreground animate-float'
            }`}
          />
        </div>
      ))}

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-6">
              <Icon name="Heart" size={48} className="text-primary-foreground animate-pulse-soft" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
              С Днём Рождения!
            </h1>
            
            <div className="text-3xl md:text-4xl font-semibold text-foreground/80 mb-8">
              06.02.2026
            </div>

            <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                Мой любимый! В этот особенный день хочу сказать, как ты важен для меня. 
                Ты делаешь каждый мой день ярче и наполняешь жизнь смыслом. 
                С тобой я верю в чудеса и мечтаю о прекрасном будущем!
              </p>
            </div>
          </div>

          <div className="mb-12 text-center animate-scale-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Наши мечты и планы
            </h2>
            <p className="text-xl text-foreground/70">
              Всё, что мы воплотим вместе
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {dreams.map((dream, index) => (
              <Card 
                key={index}
                className="p-6 bg-white/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon name={dream.icon} size={28} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {dream.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {dream.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center animate-scale-in">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl max-w-2xl mx-auto">
              <Icon name="Sparkles" size={40} className="text-primary-foreground mx-auto mb-4 animate-pulse-soft" />
              <p className="text-2xl md:text-3xl text-foreground font-medium leading-relaxed mb-6">
                Я люблю тебя больше, чем вчера, но меньше, чем завтра. 
                Пусть этот год принесёт тебе счастье, здоровье и исполнение всех желаний!
              </p>
              <Button 
                size="lg" 
                className="text-xl px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Icon name="Heart" size={24} className="mr-2" />
                Ты — моё всё!
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/50 text-sm">
              Нажми на плавающие сердечки, чтобы они изменились 💝
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
