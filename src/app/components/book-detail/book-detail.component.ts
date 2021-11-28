import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})

export class BookDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetBook(this.getId).subscribe(res => {
      this.updateForm.setValue({
        bookName: res['bookName'],
        authorName: res['authorName'],
        publishedYear: res['publishedYear'],
        edition: res['edition'],
        purchasePrice: res['purchasePrice'],
        sellingPrice: res['sellingPrice'],
        stock: res['stock'],
        maxCountPerUser: res['maxCountPerUser'],
        description: res['description'],
        authorDetails: res['authorDetails']

      });
    });

    this.updateForm = this.formBuilder.group({
      bookName: [''],
      authorName: [''],
      publishedYear: [''],
      edition: [''],
      purchasePrice: [''],
      sellingPrice: [''],
      stock: [''],
      maxCountPerUser: [''],
      description: [''],
      authorDetails: ['']
    })
  }

  ngOnInit() { }

  onUpdate(): any {
    this.crudService.updateBook(this.getId, this.updateForm.value)
      .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
      }, (err) => {
        console.log(err);
      });
  }

}