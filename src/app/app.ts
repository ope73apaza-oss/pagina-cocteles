import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { SearchBarComponent } from './components/search-bar/search-bar';
import { DrinkCardComponent } from './components/drink-card/drink-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SearchBarComponent, DrinkCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  cocteles = [
    {
      id: 1,
      name: 'Negroni clásico',
      category: 'coctel',
      badge: 'Más vendido',
      description: 'Ginebra, vermut rojo y bitter. Intenso, equilibrado y con un final cítrico.',
      price: 12.00,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      name: 'Margarita de la casa',
      category: 'coctel',
      description: 'Tequila blanco, triple sec y lima fresca. El clásico que nunca falla.',
      price: 11.00,
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      name: 'Espresso Martini',
      category: 'coctel',
      description: 'Vodka, licor de café y espresso. Sedoso, aromático y lleno de carácter.',
      price: 12.00,
      image: 'https://images.unsplash.com/photo-1545438102-799c3991ff02?auto=format&fit=crop&q=80&w=400'
    }
  ];

  mocteles = [
    {
      id: 4,
      name: 'Berry Fizz',
      category: 'moctel',
      badge: 'Favorito sin alcohol',
      description: 'Frutos rojos, limón y soda. Fresco, afrutado y con burbujas irresistibles.',
      price: 8.00,
      image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 5,
      name: 'Cítrico Spritz',
      category: 'moctel',
      description: 'Naranja, pomelo y tónica. Un aperitivo luminoso con un toque amargo.',
      price: 8.00,
      image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 6,
      name: 'Jardín de menta',
      category: 'moctel',
      description: 'Lima, menta fresca y agua con gas. Ligero, herbal y muy refrescante.',
      price: 7.00,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400'
    }
  ];
}

// Alias requerido para que main.ts y main.server.ts reconozcan la exportación
export { AppComponent as App };