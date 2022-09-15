<?php

class DbConnect
{
  private $server = 'localhost';
  private $dbname = 'react-crud';
  private $user = 'root';
  private $pass = '';

  /* dsn이란? 
Data Source Name의 줄임말 입니다.
DB를 사용하는 어플리케이션에서 DB를 불러 올때 해당하는 
DB를 연결시키기 위해 구분 짓는 이름을 DSN이라고 합니다. */
  public function connect()
  {
    try {
      $conn = new PDO("mysql:host={$this->server};dbname={$this->dbname};charset=utf8", $this->user, $this->pass);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $conn;
    } catch (Exception $e) {
      echo "Database Error: " . $e->getMessage();
    }
  }
}