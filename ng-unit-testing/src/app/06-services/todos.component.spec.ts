import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService((null as unknown) as HttpClient);
    component = new TodosComponent(service);
  });

  it('should set todos property with items returned from the server', () => {
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([[1, 2, 3]]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBeGreaterThan(0);
  });
});
