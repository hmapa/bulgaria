<?php
$form_type=$_POST['form_type'];
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['tel'];
//Тут указываем на какой ящик посылать письмо
$to = "angli4ah@yandex.ru";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Заявка с сайта Bulgaria.NET";
// Сообщение письма
$message = "
Тип формы: ".htmlspecialchars($form_type)."<br/>
Имя пользователя: ".htmlspecialchars($name)."<br/>
Email: ".htmlspecialchars($email)."<br/>
Телефон: <a href='tel:$phone'>".htmlspecialchars($phone)."</a>";
// Отправляем письмо при помощи функции mail();
$headers = "From: bulgaria.sl <mail@bulgaria.sl>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
header('Location: ../thx.html');
exit();
?>