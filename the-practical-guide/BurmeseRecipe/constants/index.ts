import users from '@/assets/data/users.json';

export const categories = ['All', ...users.map(el => el.UserEngType)];

export const userType = users.reduce((acc, curr) => {
  acc[curr.UserCode] = curr.UserEngType;
  return acc;
}, {} as Record<string, string>);
