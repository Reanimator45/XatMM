import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: { text: string, sender: string }[] = [
    { text: 'Hola, mi amor. ¡Feliz aniversario! ❤️', sender: 'bot' }
  ];

  responses = [
    ['Tú eres mi todo 💖', 'Yo más, mi amor 😘'],
    ['¿Sabes cuánto te amo?', '¿Quieres saber un secreto?'],
    ['Más que a mi propia vida 😍', 'Es un secreto de amor 💕'],
    ['Siempre estaré a tu lado 💏', 'Eres lo mejor que me ha pasado 💓'],
    ['Gracias por hacerme tan feliz 💖', 'Sin ti mi mundo no sería igual 🌎❤️'],
    ['Espero que siempre estemos juntos 💑', 'Eres el amor de mi vida 😘']
  ];

  step = 0;

  sendMessage(option: number) {
    if (this.step >= this.responses.length) return;

    // Mensaje del usuario
    const userText = option === 1 ? "Gracias, mi vida 💕" : "Awww, te amo 😍";
    this.messages.push({ text: userText, sender: 'user' });

    // Simular respuesta del bot
    setTimeout(() => {
      this.messages.push({ text: this.responses[this.step][0], sender: 'bot' });
      this.step++;
    }, 1000);
  }
}
