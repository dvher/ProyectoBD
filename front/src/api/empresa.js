import {basePath} from './config';

export function createEmpresa(empresa){

    const url = `${basePath}/empresa`;

    const params = {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(empresa),
    };

    return fetch(url, params).then((response) => {

        return response.json();

    }).then((result) => {

        return result;

    });

}

export function getEmpresa(){

    const url = `${basePath}/empresa`;

    const params = {

        method: 'GET',
        headers: {

            'Content-Type': 'application/json',

        },

    };

    return fetch(url, params).then((response) => {

        return response.json();

    }).then((result) => {

        return result;

    });

}

export function getEmpresaById(id){

    const url = `${basePath}/empresa/${id}`;

    const params = {

        method: 'GET',
        headers: {

            'Content-Type': 'application/json',

        },

    };

    return fetch(url, params).then((response) => {

        return response.json();

    }).then((result) => {

        return result;

    });

}

export function updateEmpresa(id, empresa){

    const url = `${basePath}/empresa/${id}`;

    const params = {

        method: 'PUT',
        headers: {

            'Content-Type': 'application/json',

        },
        body: JSON.stringify(empresa),
    };

    return fetch(url, params).then((response) => {

        return response.json();

    }).then((result) => {

        return result;

    });

}