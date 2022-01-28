import { Component } from '@angular/core';
import {Testimonial} from "./testimonial.model";

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent{
  testimonials: Testimonial[] = [
    new Testimonial("../../../assets/testimonials/somebody2.webp", "Rochella Vofo", "Etudiante L3 Info", "A l’ISFATES, j’ai pu allier mes deux passions, la technique et le français. Les portes d’un monde international m’ont été ouvertes et aujourd’hui, je ne pourrais plus m’en passer."),
    new Testimonial("../../../assets/testimonials/chris.webp", "Christopher Yepmo", "Étudiant L3 Info", "L’ISFATES m’offre non seulement la possibilité d’obtenir un double diplôme, mais aussi de faire beaucoup de nouvelles connaissances."),
    new Testimonial("../../../assets/testimonials/somebody1.webp", "Aristide Grange", "Manager", "Je suis originaire de Berlin et je n’avais aucune idée de ce qui m’attendait à Metz et à Sarrebruck. Grâce à l’ISFATES, les choses ont rapidement changé, notamment grâce aux semaines d’intégration.")
  ];
  constructor() { }

}
