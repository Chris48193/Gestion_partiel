export class Testimonial {
  public imageURL: string;
  public name: string;
  public status: string;
  public testimony: string;
  constructor(imageURL: string, name: string, status: string , testimony: string) {
    this.imageURL = imageURL;
    this.name = name;
    this.status = status;
    this.testimony = testimony;
  }
}
