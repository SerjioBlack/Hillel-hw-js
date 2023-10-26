'use strict';

const reachUsers = users.filter((users) => users["balance"] >= "$2,000");
const reachUsersPhones = reachUsers.map((reachUsers) => reachUsers["phone"]);
console.log(reachUsersPhones);

//  знайти суму всіх балансів користувачів

const sum = users.map((users) => users["balance"].slice(1));
const balances = sum.map((string) => +string.replace(/[\s,]/g, ""));
const total = balances.reduce((sum, current) => sum + current);
console.log(total.toPrecision(7));
