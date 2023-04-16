export const environment = {
  production: false,
  auth0: {
    domain: 'dev-owrcq1v64yv04cev.us.auth0.com',
    clientId: 'Jd38e8dTb6KFKAZAzgAE3Pb8MwtKiZft',
    authorizationParams: {
      audience: 'https://dev-owrcq1v64yv04cev.us.auth0.com/api/v2/',
      redirect_uri: 'http://localhost:4040/callback'
    },
  },
  api: {
    serverUrl: 'http://localhost:6060'
  },
};
