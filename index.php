<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="newstyle.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora&family=Ysabeau&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="logoiseau2.png"/>
    <title>LaSomme</title>
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
    <div class="animationsearch">
        <h2>Que voulez-vous savoir sur la théologie ?</h2>
        <div class="recherche">
            <input id="searchInput" class="searchbar input" type="text">
            <div id="nothing" class="nothing">Attention, ce site ne peut fournir de commentaires théologiques concernant des évènements ou idées postérieurs à 1274. <a href="vocation.html" class="learnmore">Voir vocation et notice du site</a></div>
            <div class="propPosition" id="suggestion"></div>
            <a class="affPlus" id="showAllButton" style="display: none;">Afficher tout</a>
        </div>
    </div>
    <div class="bestof">
        <h3>Les plus likés du moment</h3>
        <div class="propositionslist">
            <img class="fleche fleche_remplacement cache" id="bouton-cacheUn" src="flechelecache.png" <body oncontextmenu='return false;' onkeydown='return false;' onmousedown='return false;'></body>
            <a class="fleche" id="bouton-precedent" onclick="precedentTexte()"><img src="flecheleft.png" alt="vers la gauche"></a>
            <a href="resultat.html" id="texte1" class="meilleurs visible">
                <h4>Pourquoi Dieu est-il si sympa  (1) ?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusantium cumque, repellat
                    natus quaerat nemo explicabo ab necessitatibus. Eum veniam excepturi a distinctio quae cum,
                    temporibus autem cupiditate maiores minima... <em>Cliquez pour lire la suite</em>
                </p>
            </a>
            <a href="resultat.html" id="texte2" class="meilleurs visible">
                <h4>Pourquoi j'ai pas d'autre idée de titre  (2) ?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa voluptate molestias laudantium
                    fugit, odit nemo vel nihil facilis labore, excepturi deserunt voluptatibus id in praesentium dolor
                    nesciunt eos autem... <em>Cliquez pour lire la suite</em>
                </p>
            </a>

            <a href="resultat.html" id="texte3" class="meilleurs">
                <h4>Pourquoi Dieu est-il si sympa  (3) ?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusantium cumque, repellat
                    natus quaerat nemo explicabo ab necessitatibus. Eum veniam excepturi a distinctio quae cum,
                    temporibus autem cupiditate maiores minima... <em>Cliquez pour lire la suite</em>
                </p>
            </a>
            <a href="resultat.html" id="texte4" class="meilleurs">
                <h4>Pourquoi j'ai pas d'autre idée de titre (4) ?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa voluptate molestias laudantium
                    fugit, odit nemo vel nihil facilis labore, excepturi deserunt voluptatibus id in praesentium dolor
                    nesciunt eos autem... <em>Cliquez pour lire la suite</em>
                </p>
            </a>

            <a href="resultat.html" id="texte5" class="meilleurs">
                <h4>Pourquoi Dieu est-il si sympa (5) ?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusantium cumque, repellat
                    natus quaerat nemo explicabo ab necessitatibus. Eum veniam excepturi a distinctio quae cum,
                    temporibus autem cupiditate maiores minima... <em>Cliquez pour lire la suite</em>
                </p>
            </a>
            <a href="resultat.html" id="texte6" class="meilleurs">
                <h4>Pourquoi j'ai pas d'autre idée de titre (6) ?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa voluptate molestias laudantium
                    fugit, odit nemo vel nihil facilis labore, excepturi deserunt voluptatibus id in praesentium dolor
                    nesciunt eos autem... <em>Cliquez pour lire la suite</em>
                </p>
            </a>

            <a href="resultat.html" id="texte7" class="meilleurs">
                <h4>Pourquoi Dieu est-il si sympa (7) ?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusantium cumque, repellat
                    natus quaerat nemo explicabo ab necessitatibus. Eum veniam excepturi a distinctio quae cum,
                    temporibus autem cupiditate maiores minima... <em>Cliquez pour lire la suite</em>
                </p>
            </a>
            <a href="resultat.html" id="texte8" class="meilleurs">
                <h4>Pourquoi j'ai pas d'autre idée de titre (8) ?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa voluptate molestias laudantium
                    fugit, odit nemo vel nihil facilis labore, excepturi deserunt voluptatibus id in praesentium dolor
                    nesciunt eos autem... <em>Cliquez pour lire la suite</em>
                </p>
            </a>
            <img class="fleche fleche_remplacement cache" id="bouton-cacheDeux" src="flechelecache.png" <body oncontextmenu='return false;' onkeydown='return false;' onmousedown='return false;'></body>
            <a class="fleche" id="bouton-suivant" onclick="suivantTexte()"><img src="flecheright.png" alt="vers la droite"></a>
        </div>

    </div>

   

    <script src="moteur.js"></script>

    <footer>
        <a class="learnmore" href="vocation.html">En savoir plus</a>
    </footer>

</body>

</html>