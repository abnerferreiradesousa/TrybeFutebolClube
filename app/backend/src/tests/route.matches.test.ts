import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/matches';
import * as jwt from 'jsonwebtoken'

import { Response } from 'superagent';
import { Model } from 'sequelize';

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /matches', () => {

  describe('Quando existe times no database', () => {


    let chaiHttpResponse: Response;

    const mockFindAll = [
      {
        "id": 1,
        "homeTeam": 16,
        "homeTeamGoals": 1,
        "awayTeam": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "teamHome": {
          "teamName": "São Paulo"
        },
        "teamAway": {
          "teamName": "Grêmio"  
        }
      },
    ]

    const mockJwt = {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6Ikh1bGsifSwiaWF0IjoxNjU3MjMwODQzfQ.BhANw6Git7mgjRkzQjNdOhoj930oc2hTPY30Ea9nPuA"
    }
    
    before(async () => {
      sinon
        .stub(Match, "findAll")
        .resolves(mockFindAll as unknown as Match[]) ;
    });

    after(()=>{
      (Match.findAll as sinon.SinonStub).restore();
    })

    it('1 - É possível buscar todos os times com sucesso.', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/matches')
        .set({ "authorization": mockJwt.token })
        
      expect(chaiHttpResponse.status).to.be.equal(200)
      expect(chaiHttpResponse.body).to.be.eql(mockFindAll)
    });
  })
  
});
