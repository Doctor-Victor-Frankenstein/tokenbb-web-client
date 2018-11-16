export const STACK_NAME = process.env.VUE_APP_STACK_NAME

export const CLIENT_URL = process.env.NODE_ENV === 'production'
  ? 'https://' + STACK_NAME + '.tokenbb.io'
  : 'http://localhost:8080'

export const API_URL = process.env.NODE_ENV === 'production'
  ? CLIENT_URL + '/api/v1'
  : 'http://localhost:9090/api/v1'

export const CONNECT_API_URL = 'https://steemconnect.com'

export const ACCESS_TOKEN_KEY = 'tokenbb:' + STACK_NAME + ':access-token'

export const USERNAME_KEY = 'tokenbb:' + STACK_NAME + ':username'
