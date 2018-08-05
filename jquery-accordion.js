
$.fn.accordion = function(obj){
  obj.minWidth = obj.minWidth || 100;
  var lis = this.find('li');
  
  //动态的设置颜色.
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