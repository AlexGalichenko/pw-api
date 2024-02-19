import { test as base } from '@playwright/test';
import { User } from '../api/User';

type ApiFixtures = {
  user: User;
};

export const test = base.extend<ApiFixtures>({
    user: ({ request }, use) => use(new User({
        request,
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }))
});

export { expect } from '@playwright/test';