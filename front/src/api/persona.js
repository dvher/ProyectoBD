import {basePath} from "./config";

export function createPersona(persona){

    const url = `${basePath}/persona`;

    const params = {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(persona),
    };

    return fetch(url, params).then((response) => {

        return response.json();

    }).then((result) => {

        return result;

    });

}

export function getPersona(){

    const url = `${basePath}/persona`;

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

export function getPersonaById(id){

    const url = `${basePath}/persona/${id}`;

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

export function updatePersona(id, persona){

    const url = `${basePath}/persona/${id}`;

    const params = {

        method: 'PUT',
        headers: {

            'Content-Type': 'application/json',

        },
        body: JSON.stringify(persona),
    };

    return fetch(url, params).then((response) => {

        return response.json();

    }).then((result) => {

        return result;

    });

}