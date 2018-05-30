---
typora-root-url: ./
---

# jquery-accordion
jquery封装的手风琴插件,注释详细欢迎下载

效果展示:

![手风琴](/手风琴.gif)

1 HTML结构:

```
 <div id="wrap">

    <ul>

      <li ></li>

      <li ></li>

      <li ></li>

      <li ></li>

      <li ></li>

    </ul>

  </div>

```

2 css内容

```
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

div {
  width: 1200px;
  height: 400px;
  border: 2px solid #000;
  margin: 100px auto;
}

ul {
  width: 1300px;
}

li {
  width: 240px;
  height: 400px;
  float: left;
  
}
```

 3  js内容

```

$.fn.accordion = function(obj){
  obj.minWidth = obj.minWidth || 100;
  var lis = this.find('li');
  
  //动态的设置颜色
  lis.each(function(index, element){
    $(element).css('backgroundColor', obj.colors[index]);
  })

  //计算每一个li最大的宽度
  var liMaxW = this.width() - obj.minWidth* (lis.length - 1);
  var agvWidth = this.width() / lis.length;
  lis.mouseenter(function(){
    
    $(this).stop(true).animate({width: liMaxW}).siblings().stop(true).animate({width: obj.minWidth});
  })
  
  this.mouseleave(function(){
    //让所有的li恢复正常
    lis.stop(true).animate({width: agvWidth});
  })
  
}
```

