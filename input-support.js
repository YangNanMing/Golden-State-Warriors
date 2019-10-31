function load() {
	var input = document.getElementById("textinput").value;
	document.querySelectorAll
	// window.alert("你输入的内容是："+input);
	// 获取文档中 class="swiper-slide" 的所有元素:
	var slideLength = document.querySelectorAll(".swiper-slide").length;
	var index = searchDetail(input);
	//window.alert(index)
	if (index >= slideLength * 2 || index == undefined) {
		window.alert("没有该球员的具体信息！");
		return false;
	}
	swiper.slideTo(index, 1000, false);
}

//遍历slide节点，获取slide中球员的具体信息。
function searchDetail(value) {
	var slideLength = document.querySelectorAll(".swiper-slide").length;
	var div_warpper = document.getElementById("wrapper");
	// js中childNodes包含了该dom节点的子节点集合，包括元素节点、文本节点还有属性节点(重点)
	var childs = div_warpper.childNodes;
	//window.console.log(childs);
	for (var index = 0; index < childs.length; index++) {
		if (childs[index].childNodes.length > 0) {
			// htmlText为球员的具体信息
			var htmlText = childs[index].innerText;
			//window.console.log(index + ":" + htmlText);
			if (isContains(htmlText, value)) {
				return index / 2;
			}
		}

	}
	return index;
}

//模糊查询，判断输入的值是否在球员的信息中。如果输入的搜索条件在多个球员中，则返回排在最前面的球员信息。
function isContains(str, substr) {
	if (substr == '') {
		return false;
	} else {
		return str.indexOf(substr) >= 0;
	}
}




