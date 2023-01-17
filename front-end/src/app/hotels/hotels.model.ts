export class Hotels {
  public id:number;
  public name:string;
  public adresse:string;
  public ville:string;
  public telephone:string;
  public description:string;
  public imagePath: string;

  constructor(id: number, name: string, description: string, imagePath: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
