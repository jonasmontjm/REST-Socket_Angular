
import {Router, Request, Response } from 'express';
import Server from '../classes/server';
import { Socket } from 'socket.io';
import { usuariosConectados } from '../sockets/sockets';

const router = Router();


router.get('/mensajes',(req: Request, res: Response)=>{
    res.jsonp({
        ok: true,
        mensaje: 'Todo esta bien!!'
    });
});


router.post('/mensajes',(req: Request, res: Response)=>{

    const cuerpo= req.body. cuerpo;
    const de = req.body.de;

    const payload = {
        de,
        cuerpo
    }

    const server = Server.instance;

    server.io.emit('mensaje-nuevo', payload);
    

    res.jsonp({
        ok: true,
        mensaje: 'post listo esta bien!!'
        ,cuerpo
        ,de
    });
});


router.post('/mensajes/:id',(req: Request, res: Response)=>{

    const cuerpo= req.body. cuerpo;
    const de = req.body.de;
    const id = req. params.id;

    const payload = {
        de,
        cuerpo
    }

    const server = Server.instance;

    server.io.in(id).emit('mensaje-privado', payload);
    
    res.jsonp({
        ok: true,
        mensaje: 'post listo esta bien!!'
        ,cuerpo
        ,de
        , id
    });
});

router.get('/usuarios',(req: Request, res: Response) =>{

    const server = Server.instance;

    server.io.clients((err: any, clientes: string[]) => {
        if (err){
            return res.json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            clientes: clientes
        });
    })
});

router.get('/usuarios/detalle',(req: Request, res: Response) =>{

    const server = Server.instance;

    res.json({
        ok: true,
        clientes: usuariosConectados.getLista()
    });
});



export default router;