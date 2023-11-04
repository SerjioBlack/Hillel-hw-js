'use strict';

const arr = [1, 2, 3, 4, {}, [1, 2, 3], [1, 2, 3], [3, 4, [5, 6, 7]]];

function outerFlat(arr) {
    let res = [];

    function flat(subArr) {
        for (let i = 0; i < subArr.length; i++) {
            if (Array.isArray(subArr[i])) {
                flat(subArr[i]);
            } else {
                res.push(subArr[i]);
            }
        }
    }
    flat(arr);
    return res;
}

const flated = outerFlat(arr);

