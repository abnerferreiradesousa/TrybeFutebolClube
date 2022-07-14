import MatchService from './match.service';

export default class LeaderService {
  private helperService: MatchService;

  constructor(service = new MatchService()) {
    this.helperService = service;
  }

  public async getAll() {
    const data = await this.helperService.getAll();
    return data;
  }
}
