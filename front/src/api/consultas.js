import {basePath} from "./config";

export function consultaUno(id){

    const url = `${basePath}/consulta1/${id}`;


    const params = {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
    };

    return fetch(url, params).then((response) => {

        return response.json();

    }).then((result) => {

        return result;

    });

}

export function consultaDos(){

    const url = `${basePath}/consulta2`;

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

export function consultaTres(){

    const url = `${basePath}/consulta3`;

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

export function consultaCuatro(){

    const url = `${basePath}/consulta4`;

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

export function consultaCinco(){

    const url = `${basePath}/consulta5`;

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

export function consultaSeis(calle){

    const url = `${basePath}/consulta6`;

    const params = {

        method: 'POST',
        headers: {

            'Content-Type': 'application/json',
        },
        body: JSON.stringify(calle),

    };

    return fetch(url, params).then((response) => {

        return response.json();

    }).then((result) => {

        return result;

    });

}

export function consultaSiete(){

    const url = `${basePath}/consulta7`;

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

export function consultaOcho(id){

    const url = `${basePath}/consulta8`;

    const params = {

        method: 'POST',
        headers: {

            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),

    };

    return fetch(url, params).then((response) => {

        return response.json();

    }).then((result) => {

        return result;

    });

}

export function consultaNueve(){

    const url = `${basePath}/consulta9`;

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