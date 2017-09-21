let obj ={
    '+'(...arr){
        return arr.reduce((prev,cur)=>{
            return prev+cur
        },0);
    },
    '-'(a,b){
        return a-b;
    }
};
// obj['+'](1,2);
exports.sum=obj;
// module.exports=obj;
// module.exports={
//     add:obj['+'],
//     reduce:obj['-']
// };
//module.exports和exports是同一空间，可以给exports增加属性或者赋值给modules.exports