import { APIRequestContext } from '@playwright/test';

export class User {
    public baseUrl: string; 
    public request: APIRequestContext;

    constructor({ baseUrl, request }: { baseUrl: string, request: APIRequestContext }) {
        this.request = request;
        this.baseUrl = baseUrl + '/users';
    }

    getAll() {
        return this.request.get(this.baseUrl)
    }

    get(id: string) {
        return this.request.get(`${this.baseUrl}/${id}`)
    }

    create(data: any) {
        return this.request.post(this.baseUrl, { data })
    }
}