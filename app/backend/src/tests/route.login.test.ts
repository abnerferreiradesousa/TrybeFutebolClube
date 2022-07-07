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

  let chaiHttpResponse: Response;

  const mockFindOne = {
    id: 1,
    username: 'Hulk',
    email: 'hulkbravo@gmail.com'
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

  it('É possível logar com sucesso.', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({
        "email": "hulkbravo@gmail.com",
        "password": "hulkEsmaga"
       })
       console.log(chaiHttpResponse);
       
    expect(chaiHttpResponse.status).to.be.equal(200)
    expect(chaiHttpResponse.body).to.be.eql(mockJwt)
  });

  it('Não é possível logar com email inválido.', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({
        "email": "hulkbravogmail",
        "password": "hulkEsmaga"
       })
    expect(chaiHttpResponse.status).to.be.equal(404)
    expect(chaiHttpResponse.body.message).to.be.eql('error')
  });

  it('Como senha deve estar com mais de 6 caracteres.', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({
        "email": "hulkbravo@gmail.com",
        "password": "hulk"
       })
    expect(chaiHttpResponse.status).to.be.equal(404)
    expect(chaiHttpResponse.body.message).to.be.eql('error')
  });
});
