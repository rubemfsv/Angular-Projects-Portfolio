import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTasksComponent } from './list-tasks.component';

describe('ListTasksComponent', () => {
  let component: ListTasksComponent;
  let fixture: ComponentFixture<ListTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTasksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    // fixture = TestBed.createComponent(ListTasksComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });
});
