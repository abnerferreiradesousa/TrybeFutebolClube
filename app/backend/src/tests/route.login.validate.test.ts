import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/users';
import * as jwt from 'jsonwebtoken'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /login/validate', () => {

    let chaiHttpResponse: Response;

    const mockFindOne = {
      id: 1,
      username: 'Hulk',
      email: 'hulkbravo@gmail.com',
      role: 'admin',
      password: 'hulkEsmaga'
    } as User

    const mockJwt = {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6Ikh1bGsifSwiaWF0IjoxNjU3MjMwODQzfQ.BhANw6Git7mgjRkzQjNdOhoj930oc2hTPY30Ea9nPuA"
    }
    
    before(async () => {
      sinon
        .stub(User, "findOne")
        .resolves(mockFindOne);
    });

    after(()=>{
      (User.findOne as sinon.SinonStub).restore();
    })

    it('1 - É possível buscar a role com sucesso.', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/login/validate')
        .set({ "authorization": mockJwt.token })
        
      expect(chaiHttpResponse.status).to.be.equal(200)
      expect(chaiHttpResponse.body).to.be.eql({role: mockFindOne.role})
    });
});
