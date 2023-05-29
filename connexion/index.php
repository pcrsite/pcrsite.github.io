<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="NoS1gnal" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora&family=Ysabeau&display=swap" rel="stylesheet">

    <link href="index.css" rel="stylesheet" />
    <link rel="stylesheet" href="index2.css">
    <title>Connexion</title>
</head>

<body>

    <div class="login-form">
        <?php 
                if(isset($_GET['login_err']))
                {
                    $err = htmlspecialchars($_GET['login_err']);

                    switch($err)
                    {
                        case 'password':
                        ?>
        <div class="alert alert-danger">
            <strong>Erreur</strong> mot de passe incorrect
        </div>
        <?php
                        break;

                        case 'email':
                        ?>
        <div class="alert alert-danger">
            <strong>Erreur</strong> email incorrect
        </div>
        <?php
                        break;

                        case 'already':
                        ?>
        <div class="alert alert-danger">
            <strong>Erreur</strong> compte non existant
        </div>
        <?php
                        break;
                    }
                }
                ?>

        <form action="connexion.php" method="post">
            <h2 class="text-center">Connexion</h2>
            <div class="form-group">
                <input type="email" name="email" class="form-control" placeholder="Email" required="required"
                    autocomplete="off">
            </div>
            <div class="form-group">
                <input type="password" name="password" class="form-control" placeholder="Mot de passe"
                    required="required" autocomplete="off">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Connexion</button>
            </div>
        </form>
        <p class="text-center"><a href="inscription.php">Inscription</a></p>
    </div>
</body>

</html>