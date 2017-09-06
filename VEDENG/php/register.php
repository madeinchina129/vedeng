<?php
    header("content-type:text/html;charset=utf-8");
    $uname = $_POST['username'];
    $upass = $_POST['password'];
    $repass = $_POST['repass'];
    $email = $_POST['email'];
    $companyName = $_POST['companyName'];
    $phone = $_POST['phone'];

    if(empty($uname)||empty($upass)||empty($email)||empty($phone)||empty($companyName)){
        echo "<script>alert('信息不完整')</script>";
    }else if($upass != $repass){
        echo "<script>alert('两次密码不一致')</script>";
        echo "<script>location='index.html'</script>";
    }else{
        $conn = mysqli_connect("localhost","root","123456","user");
        $sql = "select * from user where username = '$uname'";
        $result = mysqli_query($conn,$sql);
        $rows = mysqli_num_rows($result);
        if($rows>0){
            echo "<script>alert('用户名已注册')</script>";
            echo "<script>location='index.html'</script>";
        }else{
            $sqlinsert = "insert into user(phone,username,password,email,companyName) values ('$phone','$uname','$upass','$email','$companyName')";
            $result = mysqli_query($conn,$sqlinsert);
            if(!$result){
                die("Dont could enter data".mysql_error());

            }
            echo "注册成功\n";
            header("Location:../login.html");
			mysqli_close($conn);
        }
    }
?>