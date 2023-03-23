import request from 'common/request';

export async function login(body: API.LoginParams, options?: { [key: string]: unknown }) {
  return request<API.LoginResult>('/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function outLogin(options?: { [key: string]: never }) {
  return request<Record<string, unknown>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

export async function currentUser(options?: { [key: string]: unknown }) {
  return request<{
    data: API.CurrentUser;
  }>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}
