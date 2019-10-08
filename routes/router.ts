
import {Router, Request, Response } from 'express';
import Server from '../classes/server';

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



export default router;