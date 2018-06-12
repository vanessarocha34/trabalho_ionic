import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { ClientesPage } from './../clientes/clientes';
import { Http, Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
   private url:string = "http://localhost:3000/moda";

  public user = {

    "nome": "",
      "telefone": "",
      "data_nasc": "",
      "item": "",
      "preco": "",
      "endereco": ""
  };


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http,
              public toastCtrl: ToastController){

  }
       Cadastrar(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');

    let options = new RequestOptions({headers: headers});

    this.http.post(this.url, user, options)
            .map(res => res.json())
            .subscribe(data => {
              const toast = this.toastCtrl.create({
                message: 'Cliente cadastrado com Sucesso!',
                showCloseButton: true,
                closeButtonText: 'Ok'
              });
              toast.present();
              this.navCtrl.push(ClientesPage);
            });

      user.nome = "";
      user.telefone = "";
      user.data_nasc = "";
      user.item = "";
      user.preco = "";
      user.endereco = "";
  }
}
