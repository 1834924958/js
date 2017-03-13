function pp(){
	var name=$('#name').val();//获取ID为name的元素的值
	var pass=$('#password').val();//获取ID为passeord的元素的值
	$.post("./1.php", {username:name, password:pass},
	function(data){
		alert(data);
	});
}