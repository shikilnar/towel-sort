
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix){
        return [];
    }

    let res = matrix.reduce((prev, cur, i) => {
        if (cur.constructor.name == "Array"){
            cur = i % 2 ? cur.reverse() : cur;
        }
        prev.push(...cur);
        return prev;
    }, []);
    
    return res;
}
