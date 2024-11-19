import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CatalogService } from './catalog.service';
import { CategoryModel } from './model/category.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<CategoryModel[]>([]); 
  data = this.dataSubject.asObservable(); 

  constructor(private catalogService: CatalogService) {}

  loadData(): void {
    this.catalogService.get().subscribe(
      (data) => {
        this.dataSubject.next(data);
      }
    );
  }

  getData(): Observable<CategoryModel[]> {
    return this.data;
  }
}
