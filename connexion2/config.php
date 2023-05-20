<?php
  try 
  {
      $bdd = new PDO("mysql:host=localhost;dbname=connexion;charset=utf8", "root", "");
  }
  catch(PDOException $e)
  {
      die('Erreur : '.$e->getMessage());
  }