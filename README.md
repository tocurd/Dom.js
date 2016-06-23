# Dom.js
能够在javascript中写html的插件


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

<br>你可以这样获取到你写的代码
```javascript
var dom = new Dom();

$('#js-body').html(dom.get('bodyContent' , {
	name : 'dom.js'
})).append(dom.get('welcome'))

```
