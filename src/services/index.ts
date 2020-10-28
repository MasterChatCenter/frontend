export { default as AgentsService } from './agents';
export { default as AuthService } from './auth';
export { default as MessagesService } from './messages';
export { default as CompaniesService } from './companies';

export const mutation = (
  url: string,
  method: string,
  data: any
): Promise<void> => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
