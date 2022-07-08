import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/users';
import * as jwt from 'jsonwebtoken'

import { Response } from 'superagent';

// user {
//   dataValues: {
//     id: 1,
//     username: 'Admin',
//     role: 'admin',
//     email: 'admin@admin.com',
//     password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
//   }
// }

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /login', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  describe('1 - Quando existe usuário no database', () => {


    let chaiHttpResponse: Response;

    const mockFindOne = {
      id: 1,
      username: 'Hulk',
      email: 'hulkbravo@gmail.com',
      password: 'hulkEsmaga'
    } as User

    const mockJwt = {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6Ikh1bGsifSwiaWF0IjoxNjU3MjMwODQzfQ.BhANw6Git7mgjRkzQjNdOhoj930oc2hTPY30Ea9nPuA"
    }
    
    before(async () => {
      sinon
        .stub(User, "findOne")
        .resolves(mockFindOne);
        sinon
        .stub(jwt, "sign")
        .resolves(mockJwt.token);
    });

    after(()=>{
      (User.findOne as sinon.SinonStub).restore();
      (jwt.sign as sinon.SinonStub).restore();
    })

    it('1 - É possível logar com sucesso.', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          "email": "hulkbravo@gmail.com",
          "password": "hulkEsmaga"
        })
        
      expect(chaiHttpResponse.status).to.be.equal(200)
      expect(chaiHttpResponse.body).to.be.eql(mockJwt)
    });

    it('2 - Não é possível logar com email inválido.', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          "email": "hulkbravogmail",
          "password": "hulkEsmaga"
        })
      expect(chaiHttpResponse.status).to.be.equal(400)
      expect(chaiHttpResponse.body.message).to.be.eql('"email" must be a valid email')
    });

    it('3 - Não é possível logar com senha de no mínimo 8 caracteres.', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          "email": "hulkbravo@gmail.com",
          "password": "hulk"
        })
      expect(chaiHttpResponse.status).to.be.equal(400)
      expect(chaiHttpResponse.body.message).to.be.eql('"password" length must be at least 8 characters long')
    });

    it('4 - Não é possível logar sem o email.', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          "email": "",
          "password": "hulkEsmaga"
        })
      expect(chaiHttpResponse.status).to.be.equal(400)
      expect(chaiHttpResponse.body.message).to.be.eql("All fields must be filled")
    });

    it('5 - Não é possível logar sem uma senha.', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          "email": "hulkbravo@gmail.com",
          "password": ""
        })
      expect(chaiHttpResponse.status).to.be.equal(400)
      expect(chaiHttpResponse.body.message).to.be.eql("All fields must be filled")
    });

    it('6 - Retorna erro quando senha não corresponde ao email informado.', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          "email": "hulkbravo@gmail.com",
          "password": "hulkFeliz"
        })
      expect(chaiHttpResponse.status).to.be.equal(401)
      expect(chaiHttpResponse.body.message).to.be.eql("Incorrect email or password")
    });
  })

  describe('2 - Quando não existe um usuário correspondente no database.', () => {
    let chaiHttpResponse: Response;
    
    before(async () => {
      sinon
        .stub(User, "findOne")
        .resolves(null);
    });

    after(()=>{
      (User.findOne as sinon.SinonStub).restore();
    })

    it('1 - Não é possível logar com email inexistente.', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          "email": "hulk@feliz.com",
          "password": "hulkEsmaga"
        })
        
      expect(chaiHttpResponse.status).to.be.equal(401)
      expect(chaiHttpResponse.body.message).to.be.eql("Incorrect email or password")
    });

  })

});
