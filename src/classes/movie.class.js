export class Movie {

  static fromJson({ id, title, type, rank, imageUrl, year }) {
    const tempTodo = new Movie(id, title, type, rank, imageUrl, year);
    return tempTodo;
  }

  constructor(id, title, type, rank, imageUrl, year) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.rank = rank;
    this.imageUrl = imageUrl;
    this.year = year;
  }
}