<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="newstyle.css">
    <link rel="shortcut icon" href="logoiseau2.png"/>
</head>

<body>
<div class="bandeau">
        <h1><img class="imglogo" src="logoiseau2.svg" alt="logo"></img> LaSomme</h1>
        <div class="Conexion">
        <?php 
    session_start();
    require_once 'connexion/config.php'; 
   
    if(!isset($_SESSION['user'])){
       echo '<a href="connexion/index.php"><img src="connexion/conte.svg" alt="conexion"></a>';
       
    }else{


    $req = $bdd->prepare('SELECT * FROM utilisateur WHERE token = ?');
    $req->execute(array($_SESSION['user']));
    $data = $req->fetch();
    echo  '<a href="connexion/reglage.php"><img src="Conecter.svg" alt="conecter"></a>';
    }
?>
</div>
        </div>
        <div class="article">
            <script src="article.js"></script>

            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum cum dolorem quo sunt laborum
                omnis pariatur in? Quidem sit doloribus placeat quo repellendus nulla ducimus, modi repellat alias
                officia.
                Eos voluptas consequuntur modi recusandae repellat officiis! Quidem autem aliquid officia eaque totam
                beatae cumque doloribus suscipit nihil, asperiores officiis explicabo, eum nobis libero ipsam inventore
                perspiciatis consectetur. Architecto, ab?
                Ducimus saepe suscipit minima unde ipsum quaerat, ad ratione labore beatae consectetur accusamus magnam
                dolor neque molestiae voluptatum ea velit? Consectetur nisi non corporis harum ut nam eius molestiae
                totam!<br><br> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque earum odit placeat ea
                saepe, rem rerum minima nulla. Voluptatum impedit laudantium eaque sequi fugit cupiditate omnis minus
                quas, perspiciatis reprehenderit?
                Reprehenderit eos atque dolore iste ex veniam rem ab exercitationem unde inventore in iusto, aperiam
                alias pariatur laudantium voluptate! Dolor voluptate enim rem repellendus veritatis asperiores molestiae
                doloremque deleniti iusto?
                Ad officia itaque odit quidem vero omnis, tempora adipisci illo commodi sed blanditiis nemo ipsam quae
                eveniet distinctio minima numquam accusantium minus quos magni eaque. Voluptatum molestiae similique
                alias. Perferendis?</p>
            <div class="avis">
                <div class="stick"></div> Ceci vous a-t-il été utile ? <a id="like" class="bouton">J'aime</a> <a class="bouton">Partager</a>
            </div>
            <div class="other"><a href="index.html" class="bouton">Accueil</a><a class="bouton"><img class="icon" src="flecheleft.png" alt="Précédent">Article précédent</a><a class="bouton">Article suivant<img class="icon" src="flecheright.png"></img></a></div>
        </div>
    </body>

</html>