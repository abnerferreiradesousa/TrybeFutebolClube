import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import users from '../database/models/users';

import { Response } from 'superagent';

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
  } as users
  
  before(async () => {
    sinon
      .stub(users, "findOne")
      .resolves(mockFindOne);
  });

  after(()=>{
    (users.findOne as sinon.SinonStub).restore();
  })

  it('É possível logar com sucesso.', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/login')
       .send({
        "email": "hulkbravo@gmail.com",
        "password": "hulkEsmaga"
       })
    expect(chaiHttpResponse.status).to.be.equal(200)
    expect(chaiHttpResponse.body.message).to.be.eql(mockFindOne)
  });

  it('Não é possível logar com email inválido.', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/login')
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
       .get('/login')
       .send({
        "email": "hulkbravo@gmail.com",
        "password": "hulk"
       })
    expect(chaiHttpResponse.status).to.be.equal(404)
    expect(chaiHttpResponse.body.message).to.be.eql('error')
  });
});
