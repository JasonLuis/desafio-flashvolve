import { getCompanyAcronym } from '~/app/core/base/companyAcronym';
import { getCompId } from '~/app/core/base/compId';
import { getStoreAcronym } from '~/app/core/base/storeAcronym';


interface GetParams {
    url: string;
    queryString?: string;
    headers?: Record<string, string>;
    options?: object;
    path?: any;
}

interface PostParams {
    url?: string;
    queryString?: string;
    headers?: Record<string, string>;
    options?: object;
    body?: any;
    path?: any;
}

export interface IHttpAdapter {
    get(p: GetParams): Promise<any>;
    post(p: PostParams): Promise<any>;
    request(p: any): Promise<any>;
    put(p: PostParams): Promise<any>;
    patch(p?: PostParams): Promise<any>;
    delete(p?: PostParams): Promise<any>;
}

export class HttpAdapter implements IHttpAdapter {
    private baseUrl: string | undefined;
    private initialHeaders: Record<string, string>;

    constructor(baseUrl?: string, initialHeaders?: Record<string, string>) {
        this.baseUrl = baseUrl ?? undefined;
        this.initialHeaders = initialHeaders || {};
    }

    async put(p: PostParams): Promise<any> {
        const qs = p.queryString ? `?${p.queryString}` : '';
        const urlCall = this.baseUrl
            ? `${this.baseUrl}${p.path}${qs}`
            : `${p.url}${qs}`;
        let headers = { ...this.initialHeaders, ...p.headers };

        if (getCompanyAcronym()) {
            headers = { ...headers, CompanyAcronym: getCompanyAcronym() };
        }
        if (getStoreAcronym()) {
            headers = { ...headers, StoreAcronym: getStoreAcronym() };
        }
        if (getCompId()) {
            headers = { ...headers, CompId: getCompId() };
        }

        const response = await fetch(urlCall, {
            method: 'PUT',
            headers,
            body: JSON.stringify(p.body),
            ...p.options,
        });

        const timeoutPromise = new Promise<any>((_, reject) => {
            setTimeout(() => {
                reject(new Error('Timeout exceeded'));
            }, 300000);
        });

        return Promise.race([response.json(), timeoutPromise]);
    }

    async post(p: PostParams): Promise<any> {
        const qs = p.queryString ? `?${p.queryString}` : '';
        const urlCall = this.baseUrl
            ? `${this.baseUrl}${p.path}${qs}`
            : `${p.url}${qs}`;
        let headers = { ...this.initialHeaders, ...p.headers };

        if (getCompanyAcronym()) {
            headers = { ...headers, CompanyAcronym: getCompanyAcronym() };
        }

        if (getStoreAcronym()) {
            headers = { ...headers, StoreAcronym: getStoreAcronym() };
        }
        if (getCompId()) {
            headers = { ...headers, CompId: getCompId() };
        }

        const response = await fetch(urlCall, {
            method: 'POST',
            headers,
            body: JSON.stringify(p.body),
            ...p.options,
        });

        const timeoutPromise = new Promise<any>((_, reject) => {
            setTimeout(() => {
                reject(new Error('Timeout exceeded'));
            }, 300000);
        });

        return Promise.race([response.json(), timeoutPromise]);
    }

    async get(p: GetParams): Promise<any> {
        const qs = p.queryString ? `?${p.queryString}` : '';
        const urlCall = this.baseUrl
            ? `${this.baseUrl}${p.path}${qs}`
            : `${p.url}${qs}`;
        const headers = { ...this.initialHeaders, ...p.headers };

        const response = await fetch(urlCall, {
            method: 'GET',
            headers,
            ...p.options,
        });

        return response.json();
    }

    async request(p: any): Promise<any> {
        const response = await fetch(p.url, {
            method: p.method,
            headers: p.headers,
            body: p.body,
            timeout: 300000,
            ...p.options,
        });

        return response.json();
    }

    async delete(p: PostParams): Promise<any> {
        const qs = p.queryString ? `?${p.queryString}` : '';
        const urlCall = this.baseUrl
            ? `${this.baseUrl}${p.path}${qs}`
            : `${p.url}${qs}`;
        let headers = { ...this.initialHeaders, ...p.headers };

        if (getCompanyAcronym()) {
            headers = { ...headers, CompanyAcronym: getCompanyAcronym() };
        }

        if (getStoreAcronym()) {
            headers = { ...headers, StoreAcronym: getStoreAcronym() };
        }
        if (getCompId()) {
            headers = { ...headers, CompId: getCompId() };
        }

        const response = await fetch(urlCall, {
            method: 'DELETE',
            headers,
            body: JSON.stringify(p.body),
            ...p.options,
        });

        const timeoutPromise = new Promise<any>((_, reject) => {
            setTimeout(() => {
                reject(new Error('Timeout exceeded'));
            }, 300000);
        });

        return Promise.race([response.json(), timeoutPromise]);
    }

    async patch(p: PostParams): Promise<any> {
        const qs = p.queryString ? `?${p.queryString}` : '';
        const urlCall = this.baseUrl
            ? `${this.baseUrl}${p.path}${qs}`
            : `${p.url}${qs}`;
        let headers = { ...this.initialHeaders, ...p.headers };

        if (getCompanyAcronym()) {
            headers = { ...headers, CompanyAcronym: getCompanyAcronym() };
        }

        if (getStoreAcronym()) {
            headers = { ...headers, StoreAcronym: getStoreAcronym() };
        }
        if (getCompId()) {
            headers = { ...headers, CompId: getCompId() };
        }

        const response = await fetch(urlCall, {
            method: 'PATCH',
            headers,
            body: JSON.stringify(p.body),
            ...p.options,
        });

        const timeoutPromise = new Promise<any>((_, reject) => {
            setTimeout(() => {
                reject(new Error('Timeout exceeded'));
            }, 300000);
        });

        return Promise.race([response.json(), timeoutPromise]);
    }
}

// delete(p: PostParams): Promise<any> {
//   const qs = p.queryString ? `?${p.queryString}` : '';
//   const urlCall = this.baseUrl
//     ? `${this.baseUrl}${p.path}${qs}`
//     : `${p.url}${qs}`;
//   let headers = { ...this.initialHeaders, ...p.headers };
//   if (getCompanyAcronym()) {
//     headers = { ...headers, CompanyAcronym: getCompanyAcronym() };
//   }
//   return axios.delete(urlCall, {
//     data: p.body,
//     headers,
//     timeout: 300000,
//     ...p.options,
//   });
// }

// patch(p: PostParams): Promise<any> {
//   const qs = p.queryString ? `?${p.queryString}` : '';
//   const urlCall = this.baseUrl
//     ? `${this.baseUrl}${p.path}${qs}`
//     : `${p.url}${qs}`;
//   let headers = { ...this.initialHeaders, ...p.headers };
//   if (getCompanyAcronym()) {
//     headers = { ...headers, CompanyAcronym: getCompanyAcronym() };
//   }
//   if (getStoreAcronym()) {
//     headers = { ...headers, StoreAcronym: getStoreAcronym() };
//   }
//   if (getCompId()) {
//     headers = { ...headers, CompId: getCompId() };
//   }
//   return axios.patch(urlCall, p.body, {
//     headers,
//     timeout: 300000,
//     ...p.options,
//   });
// }
