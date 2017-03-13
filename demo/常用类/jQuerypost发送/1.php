<?php
$username=$_POST['username'];
echo $username;
$pass=$_POST['password'];
	if($username!='admin'){
		echo "用户名不正确";
		exit();
	}
	if($pass!='admin'){
		echo "密码不正确";
		exit();
	}else{
		echo "欢迎";
	}