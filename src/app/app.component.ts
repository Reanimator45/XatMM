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
  messages = [{ text: "Hola, mi amor. ¡Feliz aniversario! ❤️", sender: "bot" }];

  interactions = [
    ["Tú eres mi todo 💖", "Yo más, mi amor 😘"],
    ["¿Sabes cuánto te amo?", "¿Quieres saber un secreto?"],
    ["Más que a mi propia vida 😍", "Es un secreto de amor 💕"],
    ["Siempre estaré a tu lado 💏", "Eres lo mejor que me ha pasado 💓"],
    ["Gracias por hacerme tan feliz 💖", "Sin ti mi mundo no sería igual 🌎❤️"],
    ["Espero que siempre estemos juntos 💑", "Eres el amor de mi vida 😘"]
  ];
  
  step = 0;

  sendMessage(option: number) {
    const userResponse = option === 1 ? "Gracias, mi vida 💕" : "Awww, te amo 😍";
    this.messages.push({ text: userResponse, sender: "user" });

    setTimeout(() => this.nextInteraction(), 1000);
  }

  nextInteraction() {
    if (this.step < this.interactions.length) {
      this.messages.push({ text: this.interactions[this.step][0], sender: "bot" });

      setTimeout(() => {
        this.messages.push({ text: this.interactions[this.step][1], sender: "bot" });
      }, 1000);

      this.step++;
    } else {
      setTimeout(() => {
        this.messages.push({ text: "Eres lo mejor que me ha pasado, mi amor ❤️", sender: "bot" });
        this.messages.push({ text: "❤️", sender: "bot" });
      }, 1000);
    }
  }
}
