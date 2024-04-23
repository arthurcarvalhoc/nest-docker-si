import { Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('login')
  login(){
    console.log("Carregar login");
    return {};
  }

  @Post("/login")
  efetuarLogin( @Req() req : Request, @Res()  res : Response){
     
    console.log( req.body);

    const { email, senha } = req.body;

    // let user = this.appService.consultaUsuario(email);

    if( email == 'admin@gmail.com' 
        && senha == '123456'){
      res.render('home');      
    }else{
      res.redirect("/");
    }


  }
}
