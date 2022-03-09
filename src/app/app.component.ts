import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Víctor Rolack';
  github: string = 'https://github.com/vcrolack';
  instagram: string = 'https://www.instagram.com/rolack_dev/';
  linkedin: string = 'https://cl.linkedin.com/in/rolack-victor';
  titleSN: string = 'Redes sociales';
  description: string =
    `¡Hola! Soy Víctor Rolack. Tengo 23 años y estudio ingeniería informática en Duoc UC, ubicado en Santiago de Chile. Soy un joven que le gusta
    estudiar programación, especialmente las tecnologías del front-end, aunque continuamente voy explorando nuevos mundos que ofrece las industrias
    IT, como lo puede ser Unity, el motor gŕafico para videojuegos. También me gusta mucho la fotografía, tanto como hobbie como oficio, pues
    con el esposo de una prima tenemos un empredimiento en el cual nos dedicamos a sacar fotos en diversos eventos, tales como bodas
    conciertos, cumpleaños, etc. Un dato random acerca de mí es que tengo nueve gatitos, no se llevan muy bien entre sí, pero juegan de vez
    en cuando. Si quieres seguir sabiendo de mí, te invito a seguirme en Instagram. Si lo que quieres es saber más acerca de mi vida
    académica y laboral, seguime en Linkedin y Github. ¡Buen día, tarde o noche, lector!`
}
