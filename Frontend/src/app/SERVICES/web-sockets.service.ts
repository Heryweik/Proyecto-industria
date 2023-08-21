import { Injectable } from '@angular/core';
import {io} from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketsService {

  socket:any
  url ='http://localhost:3000'

  constructor() { 
    this.socket = io(this.url)
  }

  listen(eventName:String){
    return new Observable((Subscriber)=>{
      this.socket.on(eventName, (data:any)=>{
        console.log("hola")
        Subscriber.next(data);
      })
    })
  }

  emit(eventName:String,data:any){
    this.socket.emit(eventName,data)
  }
}
