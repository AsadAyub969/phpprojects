<!DOCTYPE html >
<html>
<head>
<title>PHP: Hello World</title>
</head>
<body>
<?php
class MyClass
{

}
class MyOtherClass extends MyClass
{
public function newMethod() {
echo "New method in " . __CLASS__ . ".<br />";
}
}
$obj = new MyClass;
$newobj = new MyOtherClass;
echo $newobj->newMethod();
echo $newobj->getProperty();


?>

</body>
</html>