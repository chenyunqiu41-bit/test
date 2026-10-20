let int:number = 123      // 数字类型 是JS/TS中浮点数与整数类型都记为number
let str:string = "123"     // 字符串类型 在JS/TS中字符串可以使用单引号、双引号、反引号(模板字符串)声明
let bool:boolean = true     // 布尔类型 布尔类型只有true或false两种状态用于做分支判断
let array:number[] = [1,2,3]      // 数组类型 数组类型可以存储任意长度的任意类型数据，key默认为从0开始的下标，使用方式xxx[x]表示为取xxx变量的第x个值(从0开始计数)
let object:object = {}     // 对象类型 对象类型和json类似，使用kay:value存储任意长度与类型的数据，使用方式xxx.x表示为取xxx变量的名为x的键值对的值
// JS/TS由以上类型构成全部的数据存储模式

if (int) { // if是条件判断语句可以根据条件执行不同的代码块
    console.log("int变量存在且不为undefined、null") // 单独写一个变量名为判断该变量是否存在或是否为undefined、null
    // 当条件成立时会执行语句后的的一个作用域内的代码
} else if (int === undefined) {
    console.log("int 变量为undefined")
    // 当条件不成立时会执行下一个作用域的代码
} else {
    console.log("int 变量不存在或为null")
    // 当前方无条件判断语句时且所有条件不成立则执行else后的第一个作用域内的代码
}

// document是一个由浏览器提供的对象可以访问操作页面内的一部分事务 
let root = document.getElementById("app"); // getElementById获取页面内id为指定参数的元素

// innerHTML是HTML元素的原型(prototype)上的一个属性可以根据他修改页面内展示的效果 使用模板字符串即可做到根据数据渲染页面
root!.innerHTML = `
<p>int = ${int}</p>
<p>str = ${str}</p>
<p>bool = ${bool}</p>
<p>array = ${array}</p>
<p>object = ${object}</p>
`;

// 因外部文件无法直接操作属性所以导出一个函数来间接操作一个属性
function innert(text:string){ // function为定义函数的关键字
    // 以该函数为例 innert 这个函数的名称
    // text 为这个函数的参数 string 为 text 的参数类型 作用为限制调用时传入的参数类型错误
    root!.innerHTML = text; // 这条语句表示将root.innerHTML 的值设置为 text 的值
}

// export导出一个数据可以是任何类型的数据包括函数等，导出后可以在其他文件内引入使用且其他文件不可修改该数据的内容
export { root,innert };