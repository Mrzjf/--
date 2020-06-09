
// js笔试题
// 第一题 看下面代码，给出输出结果
var num = 2
function say () {
  var num
  console.log(num)
  num = 1
  console.log(num)
}

// 分别输出什么
say()
console.log(num)
// 答案
// undefined 1 2


// 第二题 看下面代码，给出输出结果
var num = 2
function say () {
  console.log(num)
  num = 1
  console.log(num)
}

// 分别输出什么
say()
console.log(num)
// 答案
// 2 1 1


// 第三题 看下面代码，给出输出结果.
for(var i = 1; i <= 3; i++){
  setTimeout(function(){
      console.log(i);
  },0);
}

// 答案 4 4 4

// 第四题 看下面代码，给出输出结果.
for(let i = 1; i <= 3; i++){
  setTimeout(function(){
    console.log(i);
  },0);
}

// 答案 1 2 3


// 第五题 看下面代码，给出输出结果
function Foo() {
  Foo.a = function() {
      console.log(1)
  }
  this.a = function() {
      console.log(2)
  }
}

Foo.prototype.a = function() {
  console.log(3)
}

Foo.a = function() {
  console.log(4)
}

// 分别输出什么
Foo.a()
let obj = new Foo()
obj.a()
Foo.a()

// 答案 4 2 1


// 第六题 看下面代码，给出输出结果
function Foo () {
  return new Promise((resolve, reject) => {
    console.log(1)
    setTimeout(()=>{
      resolve(2)
    },2000)
    console.log(3)
    reject(4)
    console.log(5)
  })
}

Foo().then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})

// 答案 1 3 5 4 2


// 第七题 new 操作符做了啥

    // 答案
    // 1.创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。

    // 2、属性和方法被加入到 this 引用的对象中。

    // 3、新创建的对象由 this 所引用，并且最后隐式的返回 this

// 第八题 不使用循环，创建一个长度为100的数组，并且每个元素的值等于它的小标。
	
	// 参考答案，答案不止一种
	// var arr = Array.from(Array(100).keys())


// 第九题 说说深拷贝与浅拷贝的区别，手写一个简单的深拷贝

	// 参考答案，答案不止一种
	// 如何区分深拷贝与浅拷贝，简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，否则就是深拷贝
	// 	function deepClone(obj){
	// 		let objClone = Array.isArray(obj)?[]:{};
	// 		if(obj && typeof obj==="object"){
	// 			for(key in obj){
	// 				if(obj.hasOwnProperty(key)){
	// 					//判断ojb子元素是否为对象，如果是，递归复制
	// 					if(obj[key]&&typeof obj[key] ==="object"){
	// 						objClone[key] = deepClone(obj[key]);
	// 					}else{
	// 						//如果不是，简单复制
	// 						objClone[key] = obj[key];
	// 					}
	// 				}
	// 			}
	// 		}
	// 		return objClone;
// }


// 第十题  判断一个变量为数组的方式
    // 答案
    // Array.isArray(arr)  //true or false
    // arr instanceof Array  // true or false
    // Object.prototype.toString.call(arr)  //  [object Array]为数组




// VUE面试问题

// 第一题  列举你知道的vue的组件间通信
	// 答案 
	// 方法一、 props　/ $emit
	// 方法二、 $emit　/ $on
	// 方法三、 vuex
	// 方法四、 $attrs　/ $listeners
	// 方法五、provide/inject
	// 方法六、 $parent / $children　＆ ref
	
	// 常见使用场景可以分为三类：
	
	// 父子通信： 父向子传递数据是通过 props，子向父是通过 events（ $emit）；通过父链 / 子链也可以通信（ $parent / $children）；ref 也可以访问组件实例；provide / inject API； $attrs/$listeners
	
	// 兄弟通信： Bus；Vuex
	
	// 跨级通信： Bus；Vuex；provide / inject、 $attrs/$listeners

// 第二题 请问 v-if 和 v-show 有什么区别
	// 答案
	// v-if是动态的向DOM树内添加或者删除DOM元素；
	
	// v-show是通过设置DOM元素的display样式属性控制显隐；

// 第三题 Vue 组件中 data 为什么必须是函数
	// 答案
	// 因为组件会存在复用的情况，一旦复用，如果data不是函数，就会出现数据污染

// 第四题 v-for 与 v-if 的优先级
	// 答案
	// v-for优先级更高

// 第五题 computed 与 method 的区别
	// 答案
	// computed 具有缓存性，依赖的数据不发生变化就不会重新计算
	// method 每一次调用都会重新计算一次

// 第六题 vue-router有哪几种导航钩子
	// 答案
	// 前置守卫 beforeEach 和 后置守卫 afterEach

// 第七题 什么是vuex , vuex的使用方法
	// 答案
	// Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。
	// 比较复杂
	// 建议面试官看一下这个链接 https://vuex.vuejs.org/zh/

// 第八题 .vue组件的scoped属性的作用
	// 答案
	// 当style标签具有该scoped属性时，其CSS将仅应用于当前组件的元素

// 第九题 vue中 keep-alive 组件的作用
	// 答案
	// 缓存当前组件



