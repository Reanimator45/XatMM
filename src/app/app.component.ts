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
  messages = [{ text: 'prepare esto para vo poq te amo mucho mucho', sender: 'bot' }];
  showGallery = false;
  selectedImage: string | null = null;
  showVideo = false;

  // Definir tipo para los botones
  buttonSets: { [key: string]: { text: string; response: string; nextSet: string }[] } = {
    start: [
      { text: 'gracias momoano', response: 'MWAAAAA ERES UNA LINDA MOMA', nextSet: 'set1' },
      { text: 'erm what the sigma', response: 'what the flip', nextSet: 'set2' }
    ],
    set1: [
      { text: 'YIPEEEEEE', response: 'No puedo imaginar otro futuro que no sea a tu lado', nextSet: 'fin1img' },
      { text: '*manda foto bobiana*', response: 'QUE SIGMA', nextSet: 'fin2img' }
    ],
    set2: [
      { text: 'Stop Brainrot', response: 'mmmm bueno', nextSet: 'fin3img' },
      { text: 'WAMZAAAA', response: '🐢', nextSet: 'fin4img' }
    ],
    fin1img: [
      { text: 'Y esooo?', response: 'Momita, hoy celebramos 3 años de un viaje increíble juntos. Tres años llenos de risas, aventuras, aprendizajes y, sobre todo, mucho amor. Recuerdo como si fuera ayer el primer día que estuvimos juntos, y desde entonces supe que mi vida había cambiado para siempre. Contigo he descubierto lo que es el verdadero amor, ese que me hace sentir completo, que me impulsa a ser mejor persona y que me acompaña en cada paso que yo quiera dar. Gracias por ser mi amiga, mi confidente, mi apoyo incondicional. Gracias  por estos 3 años maravillosos y por todos los que vendrán. Y es que, en realidad, no hay nadie en el mundo a quien quiera más de lo que te quiero a ti. No me imagino siendo tan feliz con nadie más. Contigo, cada día de estos 3 años ha sido un regalo, una aventura compartida. No concibo un hogar más dichoso que aquel donde al llegar del trabajo, te vea con la bobiana acostada. Esa imagen me llena de emoción y esperanza, me impulsa a seguir trabajando por nuestro futuro juntos. Y me motiva el saber que cada día siento que estamos más cerca de alcanzar ese sueño que tanto deseamos', nextSet: 'final' }
    ],
    fin2img: [
      { text: '*otra foto bibiana*', response: 'ok pero la mewsiana>>>>', nextSet: 'final' }
    ],
    fin3img: [
      { text: 'CHUAHAHA', response: 'GRRRRRR', nextSet: 'final' }
    ],
    fin4img: [
      { text: '🐢❤️', response: '🐢❤️🐢 :D', nextSet: 'final' }
    ],
    final: [
      { text: 'Volver a empezar 🔄', response: 'Te amo mucho mi vida feliz 3er Aniversario', nextSet: 'start' }
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
   
}
galleryImages = [
  'assets/fondo-chat.jpg', 'assets/flor.jpg', 'assets/flor2.png',
  'assets/bobi1.png', 'assets/bobi2.png', 'assets/hi.jpg',
  'assets/usmc.png', 'assets/si.png', 'assets/uscars.jpg',
  'assets/important.png', 'assets/us.png', 'assets/video.mp4'
];

toggleGallery() {
  this.showGallery = !this.showGallery;
}

viewImage(img: string) {
  this.selectedImage = img;
  this.showVideo= false;
}

playVideo() {
  this.showVideo = true;
  this.selectedImage = null;
}

closeViewer() {
  this.showVideo = false;
  this.selectedImage = null;
}

}