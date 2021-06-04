import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';

// describe( el grupo de pruebas de la clase en concreto) 
describe('PostsService', () => {
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsService);
  });

  // it("explicacion")
  it('deberia retornar un objeto', () => {
    expect(service).toBeTruthy();
  });
});
