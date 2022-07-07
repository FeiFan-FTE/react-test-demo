
/** 给定 csv 文件，转换成对象结构，提供测试用例，并补充 typescript 函数签名
* interface Person {
*   name: string;
*   age: number;
*   parent: Person[];
*   children: Person[];
* }
*/



const csv = `
name,age,parent
Bob,30,David
David,60,
Anna,10,Bob
`;


const processor = (csv) => {
    let list = csv.trim().split(/[,\s]/)

    console.log(list)
    return {
        name: list[1],
        age: list[4],
        parent: [{
            name: list[5],
            age: list[7]
        }],
        children: [{
            name: list[9],
            age: list[10]
        }]
    }
  

}
console.log(processor(csv))