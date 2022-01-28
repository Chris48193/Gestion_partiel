import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../isfates/testimonial/testimonial.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactConfirm = false;
  nom = "";
  prenom = "";
  email = "";
  description = "";
  error = false;

  testimonials: Testimonial[] = [
    new Testimonial("../../../assets/testimonials/somebody2.webp", "Rochella Vofo", "Etudiante L3 Info", "Développeuse web, je m'engage dans la qualité des produits que je crée. La qualité, la fiablilité et la robustesse sont mes devises. Vous pouvez me contacter via mon numéro de téléphone ci-dessous ou m'envoyer un message à travers le formulaire de contact ci-après <p>Tel: +33 753 453 234</p>"),
    new Testimonial("../../../assets/testimonials/chris.webp", "Christopher Yepmo", "Étudiant L3 Info", "Étudiant en ingénieurie du web, je crée des site webs et applications mobiles depuis que je sais marcher. Vos rêves deviennent réalité avec notre équipe. N\'hésitez pas à nous contacter !!! <p>Tel: +33 987 435 34</p>"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onContact(): void {
    if(this.nom == "" || this.prenom == "" || this.email == "") {
      this.error = true;
    } else {
      this.error = false;
      this.contactConfirm = true;
    }

  }

}


