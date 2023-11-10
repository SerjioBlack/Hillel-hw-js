'use strict';

const user = {
    name: "Serjio",
};

function info(phone, email) {
    return `${this.name}, ${phone}, ${email}`;
}

function bind(fn, context, ...rest) {
    return function (...args) {
        const someKey = "value";
        context[someKey] = fn;
        const res = context[someKey](...rest.concat(args));
        delete context[someKey];
        return res;
    };
}

bind(info, user, "0800500500", "1@gmail.com")();




