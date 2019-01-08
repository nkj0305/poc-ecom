export function setLocalData(name,data){
    data = typeof data === Object ? JSON.stringify(data):data;
    localStorage.setItem(name,JSON.stringify(data));
}

export function getLocalData(name){
    return JSON.parse(localStorage.getItem(name));
}

export function deleteLocalData(name){
    return localStorage.clear(name);
}

export function setSessionData(name,data){
    data = typeof data === Object ? JSON.stringify(data):data;
    sessionStorage.setItem(name,JSON.stringify(data));
}

export function getSessionData(name){
    return sessionStorage.getItem(name);
}

export function deleteSessionData(name){
    return sessionStorage.clear(name);
}