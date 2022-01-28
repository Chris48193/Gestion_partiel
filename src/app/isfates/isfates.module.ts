import {NgModule} from "@angular/core";
import {SliderComponent} from "./slider/slider.component";
import {PresentationComponent} from "./presentation/presentation.component";
import {TestimonialComponent} from "./testimonial/testimonial.component";
import {IsfatesComponent} from "./isfates.component";
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [
      SliderComponent,
      PresentationComponent,
      TestimonialComponent,
      IsfatesComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
      SliderComponent,
      PresentationComponent,
      TestimonialComponent,
      IsfatesComponent
    ],
    providers: []
}
)
export class IsfatesModule {
}
