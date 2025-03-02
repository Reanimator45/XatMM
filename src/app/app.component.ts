import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = [{ text: 'Hola, mi amor. ¡Feliz aniversario! ❤️', sender: 'bot' }];

  // Definir tipo para los botones
  buttonSets: { [key: string]: { text: string; response: string; nextSet: string }[] } = {
    start: [
      { text: 'Gracias, mi vida 💕', response: 'Eres el amor de mi vida ❤️', nextSet: 'set1' },
      { text: 'Awww, te amo 😍', response: 'Yo también te amo infinitamente 💖', nextSet: 'set2' }
    ],
    set1: [
      { text: '¿Por qué me amas tanto? 🥰', response: 'Porque eres mi persona favorita 💘', nextSet: 'final' },
      { text: 'Eres lo mejor 💕', response: 'Tú eres lo mejor que me ha pasado 💓', nextSet: 'final' }
    ],
    set2: [
      { text: 'Te amo hasta el infinito 🚀', response: 'Y yo más allá del universo 🌌', nextSet: 'final' },
      { text: 'Siempre juntos 💑', response: 'Para siempre, mi amor 💍💖', nextSet: 'final' }
    ],
    final: [
      { text: 'Volver a empezar 🔄', response: '¡Hagámoslo de nuevo! 😊', nextSet: 'start' }
    ]
  };

  currentSet: string = 'start';

  sendMessage(index: number) {
    const selectedButton = this.buttonSets[this.currentSet][index];
  
    // Agregar mensaje del usuario al chat
    this.messages.push({ text: selectedButton.text, sender: 'user' });
  
    // Agregar respuesta del bot al chat
    setTimeout(() => {
      this.messages.push({ text: selectedButton.response, sender: 'bot' });
    }, 500); // Simula un pequeño retraso
  
    // Cambia el conjunto de botones al siguiente
    this.currentSet = selectedButton.nextSet;
  }
  showToast() {
    const toastEl = document.getElementById('sendToast');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
   
}}