import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/teams';
import * as jwt from 'jsonwebtoken'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /teams', () => {

  describe('Quando existe times no database', () => {


    let chaiHttpResponse: Response;

    const mockFindAll = [
      {
        "id": 1,
        "teamName": "Avaí/Kindermann"
      },
      {
        "id": 2,
        "teamName": "Bahia"
      },
      {
        "id": 3,
        "teamName": "Botafogo"
      },
    ] as Team[];

    const mockJwt = {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6Ikh1bGsifSwiaWF0IjoxNjU3MjMwODQzfQ.BhANw6Git7mgjRkzQjNdOhoj930oc2hTPY30Ea9nPuA"
    }
    
    before(async () => {
      sinon
        .stub(Team, "findAll")
        .resolves(mockFindAll);
        // sinon
        // .stub(jwt, "sign")
        // .resolves(mockJwt.token);
    });

    after(()=>{
      (Team.findAll as sinon.SinonStub).restore();
      // (jwt.sign as sinon.SinonStub).restore();
    })

    it('1 - É possível buscar todos os times com sucesso.', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/teams')
        .set({ "authorization": mockJwt.token })
        
      expect(chaiHttpResponse.status).to.be.equal(200)
      expect(chaiHttpResponse.body).to.be.eql(mockFindAll)
    });
  })


  describe('Quando existe times no database', () => {


    let chaiHttpResponse: Response;

    const mockFindOne = {
        id: 1,
        teamName: "Avaí/Kindermann"
      } as Team;

    const mockJwt = {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6Ikh1bGsifSwiaWF0IjoxNjU3MjMwODQzfQ.BhANw6Git7mgjRkzQjNdOhoj930oc2hTPY30Ea9nPuA"
    }
    
    before(async () => {
      sinon
        .stub(Team, "findOne")
        .resolves(mockFindOne);
        // sinon
        // .stub(jwt, "sign")
        // .resolves(mockJwt.token);
    });

    after(()=>{
      (Team.findOne as sinon.SinonStub).restore();
      // (jwt.sign as sinon.SinonStub).restore();
    })

    it('2 - É possível buscar um time individualmente com sucesso.', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/teams/1')
        .set({ "authorization": mockJwt.token })
        
      expect(chaiHttpResponse.status).to.be.equal(200)
      expect(chaiHttpResponse.body).to.be.eql(mockFindOne)
    });
  })
});
