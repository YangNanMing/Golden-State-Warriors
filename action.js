function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;

}

var index=0,
timer=null
pics=byId("rotation").getElementsByTagName("div"),
len=pics.length;
function slideImg(){
		timer=setInterval(function(){
			index++;//length 0 1 2 3
			if(index>=len){
				index=0;
			}
			console.log(index);
			changeImg();
		},3000);
	}

    
    function changeImg(){  
        for(var i=0;i<len;i++){
            pics[i].style.display="none";
            
        }
        pics[index].style.display='block';
        
    }
    
    slideImg();