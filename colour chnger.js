<!DOCTYPE html>
<html lang="en">
<head>
    <title>Dom</title>
</head>
<style>
    #box{
        height: 200px;
        width: 200px;
        border: 4px solid aqua;
        background-color: greenyellow;
    }
</style>
<body>
    <div onclick=change() id="box">

    </div>
<script>
    function change(){
        let randomno=Math.floor(Math.random() * 16777215)
        let code="#"+randomno.toString(16)
    document.getElementById("box").style.background=code;
    }
</script>
</body>
</html>