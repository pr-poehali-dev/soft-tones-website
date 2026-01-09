import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const portfolioImages = [
    'https://cdn.poehali.dev/projects/cdb1695f-7416-4202-b21d-880bd0185eac/files/28374455-f6cf-47e5-b57a-9d3abf33c16b.jpg',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
    'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800',
    'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800',
    'https://images.unsplash.com/photo-1615529162924-f9605b199a6a?w=800'
  ];

  const services = [
    { icon: 'Palette', title: 'Дизайн интерьера', description: 'Создаём уникальные пространства, отражающие вашу индивидуальность' },
    { icon: 'Home', title: 'Архитектура', description: 'Проектируем функциональные и эстетичные решения' },
    { icon: 'Sparkles', title: 'Декорирование', description: 'Подбираем детали, которые создают атмосферу' },
    { icon: 'Lightbulb', title: 'Консультации', description: 'Помогаем воплотить ваши идеи в реальность' }
  ];

  const blogPosts = [
    { title: 'Тренды интерьера 2024', date: '15 января 2024', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400' },
    { title: 'Как выбрать цветовую палитру', date: '10 января 2024', image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400' },
    { title: 'Минимализм в деталях', date: '5 января 2024', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 shimmer backdrop-blur-sm border-b border-border/50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-cormorant font-bold text-foreground">Творческая Студия</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'portfolio', 'services', 'about', 'blog', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'services' && 'Услуги'}
                  {section === 'about' && 'О нас'}
                  {section === 'blog' && 'Блог'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" />
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.poehali.dev/projects/cdb1695f-7416-4202-b21d-880bd0185eac/files/28374455-f6cf-47e5-b57a-9d3abf33c16b.jpg"
              alt="Интерьер студии"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
          </div>
          <div className="relative z-10 text-center px-6 animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-cormorant font-light mb-6 text-foreground">
              Создаём пространства<br />с душой
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-2xl mx-auto">
              Воплощаем ваши мечты в уникальные интерьерные решения
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
              onClick={() => scrollToSection('portfolio')}
            >
              Смотреть портфолио
            </Button>
          </div>
        </section>

        <section id="portfolio" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-5xl font-cormorant font-semibold text-center mb-4 text-foreground">Портфолио</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Наши последние работы</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in border-border/50">
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={image}
                            alt={`Проект ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img
                      src={image}
                      alt={`Проект ${index + 1}`}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-5xl font-cormorant font-semibold text-center mb-4 text-foreground">Услуги</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Что мы предлагаем</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow border-border/50 bg-card/50">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                    <Icon name={service.icon} size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-cormorant font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-cormorant font-semibold mb-6 text-foreground">О нас</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Мы — команда профессионалов, влюблённых в искусство создания пространств. 
              Каждый проект для нас — это возможность воплотить уникальную историю и характер наших клиентов.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              С 2015 года мы создали более 200 интерьеров, каждый из которых стал отражением индивидуальности 
              и стиля жизни его владельцев. Наш подход — сочетание эстетики, функциональности и внимания к деталям.
            </p>
          </div>
        </section>

        <section id="blog" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-5xl font-cormorant font-semibold text-center mb-4 text-foreground">Блог</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Идеи и вдохновение</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border-border/50">
                  <CardContent className="p-0">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                      <h3 className="text-xl font-cormorant font-semibold text-foreground">{post.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 px-6 bg-primary/10">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-5xl font-cormorant font-semibold mb-6 text-foreground">Контакты</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full">
                <Icon name="Mail" className="mr-2" />
                info@studio.ru
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-border">
                <Icon name="Phone" className="mr-2" />
                +7 (999) 123-45-67
              </Button>
            </div>
            <div className="flex gap-6 justify-center">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/20">
                <Icon name="Instagram" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/20">
                <Icon name="Facebook" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/20">
                <Icon name="Send" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Творческая Студия. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
