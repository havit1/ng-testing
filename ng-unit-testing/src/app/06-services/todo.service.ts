import { HttpClient } from '@angular/common/http';

export class TodoService {
  constructor(private http: HttpClient) {}

  add(todo: { title: string }) {
    return this.http.post('...', todo);
  }

  getTodos() {
    return this.http.get('...');
  }

  delete(id: number) {
    return this.http.delete('...');
  }
}
