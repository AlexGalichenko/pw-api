import { test, expect } from '../core';

test('get user', async ({ user }) => {
  const response = await user.get('1');
  const userData = await response.json();
  expect(userData.name).toBe('Leanne Graham');
});

test('create user', async ({ user }) => {
  const response = await user.create({
      'name': 'Ervin Howell',
      'username': 'Antonette',
      'email': 'Shanna@melissa.tv',
      'address': {
          'street': 'Victor Plains',
          'suite': 'Suite 879',
          'city': 'Wisokyburgh',
          'zipcode': '90566-7771',
          'geo': {
              'lat': '-43.9509',
              'lng': '-34.4618'
          }
      },
      'phone': '010-692-6593 x09125',
      'website': 'anastasia.net',
      'company': {
          'name': 'Deckow-Crist',
          'catchPhrase': 'Proactive didactic contingency',
          'bs': 'synergize scalable supply-chains'
      }
  });
  const userData = await response.json();
  expect(userData.id).toBe(11);
  expect(userData.name).toBe('Ervin Howell');
});