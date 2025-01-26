<?php
$fio = $_POST['fio_user'];
echo "fio $fio\n";

$email = $_POST['email_input'];
echo "email $email\n";

$wallet = $_POST['account'];
echo "account $wallet\n";

// Параметры для подключения
$phdb_host = "localhost";
$db_user = "u1695089_default"; // Логин БД
$db_password = "7n30Cs4BF68rnhJR"; // Пароль БД
$db_base = 'u1695089_default'; // Имя БД
$db_table = "users"; // Имя Таблицы БД

try {
  // Подключение к базе данных
  $db = new mysqli($db_host, $db_user, $db_password, $db_base);
  // Подготавливаем SQL-запрос

  $query = "INSERT INTO $db_table (fio, email, wallet) VALUES('$fio', '$email', '$wallet');";
  echo $query;

  $result = $db->query($query);
  if($result) {
    echo "Success";
  } else {
    echo "Error";
    echo $db->error;
  }
} catch (Exception $e) {
  // Если есть ошибка соединения, выводим её
  print "Ошибка!: " . $e->getMessage() . "<br/>";
}
?>
