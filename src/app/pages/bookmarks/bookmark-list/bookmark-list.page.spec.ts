import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkListPage } from './bookmark-list.page';

describe('BookmarkListPage', () => {
  let component: BookmarkListPage;
  let fixture: ComponentFixture<BookmarkListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
