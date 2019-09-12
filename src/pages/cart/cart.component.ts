import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interfaces/product.model';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private readonly productsService: ProductsService,
    private fb: FormBuilder
  ) {}
  cartProducts: IProduct[] = [];

  // readonly countries = ['Ukraine', 'Great Britain', 'USA'];
  // loginData = {};
  // defaultData = {
  //   email: 'test@gmail.com',
  //   password: '321654',
  // };
  // Перший спосіб
  // onSave = () => {
  //   console.log(this.loginData);
  // };
  // onSave = (form: NgForm) => {
  //   console.log(form);
  // };
  ngOnInit() {
    this.cartProducts = this.productsService.cartProducts;
    this.loginForm = this.fb.group({
      agree: ['', Validators.requiredTrue],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      fields: new FormArray([]),
    });
    this.updateForm();
  }
  addField() {
    (this.loginForm.get('fields') as FormArray).push(
      new FormGroup({
        name: new FormControl(''),
      })
    );
  }
  updateForm() {
    this.loginForm.patchValue({
      agree: ['true'],
      email: ['asd'],
      password: ['das'],
    });
  }
  onSave = () => {
    console.log(this.loginForm);
  };
  sayHello = (m) => {
    console.log(m);
  };
}
