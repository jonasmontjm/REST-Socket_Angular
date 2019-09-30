import { Socket } from 'socket.io';
import  socketIO  from 'socket.io';
import Server from '../classes/server';

export const desconectar = (client: Socket) =>{
     client.on('disconnect',()=>{
         console.log('Cliente desconectado');
     })
}


export const mensaje = (client: Socket) =>{
    client.on('mensaje',(payload:{de:string, cuerpo: string}) => {
        console.log('mensaje recibido',payload);
        
        //io.emit('mensaje-nuevo', payload);
        client.emit('mensaje-nuevo', {de: payload.de, cuerpo: payload.cuerpo, para:'Angular'});

    })
}