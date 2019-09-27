
import {Router, Request, Response } from 'express';

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
    res.jsonp({
        ok: true,
        mensaje: 'post listo esta bien!!'
        ,cuerpo
        ,de
        , id
    });
});



export default router;