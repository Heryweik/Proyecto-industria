import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import io from 'socket.io-client'
import { WebSocketsService } from "../../SERVICES/web-sockets.service";
import {chats,sendMessenge,listMessenge} from '../../../assets'
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  dataMessenge=new FormGroup({
    messenge: new FormControl('', [Validators.required] )
  });

  dataM:sendMessenge = {
    "fk_id_chat":0,
    "fk_id_user":0,
    "text_contents":""
  }

  get messengeControl():FormControl{
    return this.dataMessenge.get('messenge') as FormControl
  }

  @ViewChild("messengeContainer") mCont:ElementRef = new ElementRef("")
  @ViewChild("myInput") input: ElementRef = new ElementRef("");

  constructor(private WebSocketsService:WebSocketsService,private rutaActiva: ActivatedRoute) {
    
  }

  chats:chats[] = []
  messenge:listMessenge[]|null = null
  token:string|null = ""
  dataChat:number[] = [0,0]
  chatSelected:number = 0
  stateChat:boolean = true

  ngOnInit(): void {
    this.dataM.fk_id_user = Number(localStorage.getItem('token'))
    this.token = localStorage.getItem('token')
    this.WebSocketsService.emit("getchats",{"id_user":this.token})

    //carga los chats del usuario y los mensajes si el id viene en la ruta
    this.WebSocketsService.listen("getchatsresponse").subscribe((data:any)=>{
      this.chats = data.msg
      if (this.stateChat) {
        let d:number = this.rutaActiva.snapshot.params['id']
        if (d != undefined) {
          for (let i = 0; i < this.chats.length; i++) {
            if (this.chats[i].id_chat==d) {
              this.chatSelected = d
              this.dataM.fk_id_chat = d
              this.WebSocketsService.emit("listmessagesv3",{"id":d,"idUser":this.chats[i].Rol=='Cliente'?this.chats[i].id_vendedor:this.chats[i].id_comprador})
              break
            }
          }
        }
        this.stateChat=false
      }
      
    })

    //carga la lista de mensajes propia del usuario
    this.WebSocketsService.listen("listmessagesResponse").subscribe((data:any)=>{      
      if (data.status=="200") {
        this.messenge = data.msg
        this.WebSocketsService.emit("getchats",{"id_user":this.token})
      }else if(data.status=="201"){
        this.messenge = data.msg
      }else{
        console.log(data);
      }
    })

    //recibe la respuesta para los usuarios connectados, menos al que envia, para cargar su lista de mensajes
    this.WebSocketsService.listen("listmessagesResponseUsers").subscribe((data:any)=>{
      if (this.dataChat[1]==data.msg) {
        this.WebSocketsService.emit("listmessagesv2",{"id":this.dataChat[1],"idUser":this.dataChat[0]})
      }
    })

    //recibe la respuesta al recibir un mensaje
    this.WebSocketsService.listen("addMessageResponse").subscribe((data:any)=>{
      if (data.status=="200") {
        console.log(data);
        if (data.msg == 'si') {
          if(this.dataM.fk_id_chat!=0){
            this.WebSocketsService.emit("listmessages",{"id":this.dataChat[1],"idUser":this.dataChat[0]})
          } 
          this.WebSocketsService.emit("getchats",{"id_user":this.token})
        }else{
          this.messenge = data.msg
          this.chats = data.msgChat
          this.dataM.text_contents=""
        }
      }else{
        console.log(data);
      }
    })
  }

  getMessages(idChat:number,Rol:string,id_comprador:number,id_vendedor:number){
    let p : number = Rol == 'Cliente' ? id_vendedor : id_comprador
    this.chatSelected = idChat
    this.dataChat[0] = p 
    this.dataChat[1] = idChat 
    this.dataM.fk_id_chat = idChat
    this.WebSocketsService.emit("listmessages",{"id":idChat,"idUser":p})
  }

  sendMessenge(){
    if (this.dataM.text_contents!="") {
      this.WebSocketsService.emit("addMessage",this.dataM)
    }
  }

  ngAfterViewChecked(){
    try {
      this.mCont.nativeElement.scrollTop = 
      this.mCont.nativeElement.scrollHeight;
      this.input.nativeElement.focus()
    } catch (error) {
      
    }
  }

  renderText(text:string,amount:number){
    try {
      if (text.length>amount) return text.substring(0,amount-3)+"..."
      else return text
    } catch (error) {
      return text
    }
    
  }

}
