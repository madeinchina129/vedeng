<?php
    header("content-tyoe:text/html;charser=utf-8");
    $phone=$_POST['phone'];
    $upass=$_POST['password'];
    $remember = isset($_POST['remember'])?$_POST['remember']:"";

    if(empty($phone)||empty($upass)){
        echo "<script>alert('信息输入不完整');</script>";
    }else{
        $conn = mysqli_connect("localhost","root","123456","user");
        $sql1 = "select phone,password from user where phone = '$phone' and password = '$upass'";
        //echo "<script>alert(".$sql1.")</script>";
        $result = mysqli_query($conn,$sql1);
        $rows = mysqli_fetch_array($result);
        //$name = $rows['username'];
        if($phone == $rows['phone']&&$upass == $rows['password']){
            if($remember!="on"){//!empty($remember)
                //setcookie("uname",$name,time()+7*24*3600);
                //echo 0;
            }
           header("Location:../index.html");

        }else{
            header("Location:../login.html");
            //echo $name;
        }
        mysqli_close($conn);
    }
?>