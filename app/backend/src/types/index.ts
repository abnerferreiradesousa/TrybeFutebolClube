import IUserPayload from '../interfaces/user.interface';

type User = Pick<IUserPayload, 'id' | 'username'>;

type Role = { role: string };

type TeamName = {
  teamName: string
};

export {
  User,
  Role,
  TeamName,
};
