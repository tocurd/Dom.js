##dom.js
`dom.js` 是一个让您能以javascript的书写方式赋予某些javascript变量HTML代码的插件，使用这个插件可以让编写组件时更加舒适、简洁、明了。另外代码也可多次复用，`dom.js` 彻底解决了HTML在javascript中需要用字符串来编写无法被编辑器解析的问题。
<br><hr><br>

你可以这样写代码
```html
<script type="text/dom">
	<!-- hello -->
	var bodyContent = <h1>hello {%name%}</h1>
	<button>goto {%name%}</button>

	<!--welcome  -->
	var welcome = welcome to here
</script>
```
<br>
你可以这样获取到你写的代码
```javascript
// 注册dom组建
var dom = new Dom();

//获得bodyContent中的内容，并将{%name%}替换成"dom.js"
var bodyContent = dom.get('bodyContent' , {
	name : 'dom.js'
};

//你也可以这么写，不去替换语义化标签
var welcome = dom.get('welcome')

$('#js-body').html(bodyContent).append(welcome);
```
