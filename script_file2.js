var spcl = {
  setcolor : function(color){
    var alist=document.querySelectorAll('#spcl')
    i=0
    while(i<alist.length){
      alist[i].style.color=color;
      i = i+1
    }
  }
}

var body = {
  setcolor : function(color){
          document.querySelector('body').style.color=color;
  },
  setbackgroundcolor:function(color){
          document.querySelector('body').style.backgroundColor=color;
  }
}

function nightdayhandle(self){
  var target=document.querySelector('body')
    if(self.value==='night'){
    body.setbackgroundcolor('black');
    body.setcolor('black');
    self.value='day'
    spcl.setcolor('red');
    }
    else{
      body.setbackgroundcolor('white');
      body.setcolor('black');
      self.value='night'
      spcl.setcolor('black');
    }
  }
