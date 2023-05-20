const Question = [
    //theme1, question1, article de 1 à 10.
    { numéroArticle: 1, article: 'Une telle doctrine est-­elle nécessaire ?', motsClé: 'la doctrine de l eglise catholique est elle vraiment necessaire ', numéroQuestion: 1, Question: 'LA DOCTRINE SACRÉE. QU’EST-­ELLE? AQUOI S’ÉTEND-­ELLE?', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '1.1.1.html', ref: '1.1.1', img: '1.jpg', refT: '111' },
    { numéroArticle: 2, article: 'La doctrine sacrée est-­elle une science ?', motsClé: 'la doctrine de l eglise catholique est elle une science', numéroQuestion: 1, Question: 'LA DOCTRINE SACRÉE. QU’EST-­ELLE? AQUOI S’ÉTEND-­ELLE?', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.1.2', img: '1.jpg', refT: '112' },
    { numéroArticle: 3, article: 'La doctrine sacrée est-­elle une ou multiple ?', motsClé: 'une ou multiple', numéroQuestion: 1, Question: 'LA DOCTRINE SACRÉE. QU’EST-­ELLE? AQUOI S’ÉTEND-­ELLE?', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.1.3', img: '1.jpg' },
    { numéroArticle: 4, article: 'La doctrine sacrée est-­elle spéculative ou pratique ?', motsClé: 'la doctrine est plus spéculative ou pratique', numéroQuestion: 1, Question: 'LA DOCTRINE SACRÉE. QU’EST-­ELLE? AQUOI S’ÉTEND-­ELLE?', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.1.4', img: '1.jpg' },
    { numéroArticle: 5, article: 'La doctrine sacrée est-­elle supérieure aux autres sciences ?', motsClé: 'la science catholique, la doctrine est elle supérieure aux autres sciences', numéroQuestion: 1, Question: 'LA DOCTRINE SACRÉE. QU’EST-­ELLE? AQUOI S’ÉTEND-­ELLE?', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.1.5', img: '1.jpg', refT: '113' },
    { numéroArticle: 6, article: 'Cette doctrine est-­elle une sagesse ?', motsClé: 'la doctrine est-elle une sagesse', numéroQuestion: 1, Question: 'LA DOCTRINE SACRÉE. QU’EST-­ELLE? AQUOI S’ÉTEND-­ELLE?', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.1.6', img: '1.jpg' },
    { numéroArticle: 7, article: 'Dieu est-­il le sujet de cette doctrine ?', motsClé: 'Est-que Dieu est sujet à la doctrine', numéroQuestion: 1, Question: 'LA DOCTRINE SACRÉE. QU’EST-­ELLE? AQUOI S’ÉTEND-­ELLE?', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.1.7', img: '1.jpg' },
    { numéroArticle: 8, article: 'Cette doctrine argumente-t-­elle ?', motsClé: 'que contient cette doctrine qu argumente elle', numéroQuestion: 1, Question: 'LA DOCTRINE SACRÉE. QU’EST-­ELLE? AQUOI S’ÉTEND-­ELLE?', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.1.8', img: '1.jpg' },
    { numéroArticle: 9, article: 'La doctrine sacrée doit-­elle user de métaphores ?', motsClé: 'La doctrine utilise elle des métaphores', numéroQuestion: 1, Question: 'LA DOCTRINE SACRÉE. QU’EST-­ELLE? AQUOI S’ÉTEND-­ELLE?', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.1.9', img: '1.jpg' },
    { numéroArticle: 10, article: 'Est-­ce que la “lettre” de l’Écriture sainte peut revêtir plusieurs sens ?', motsClé: '', numéroQuestion: 1, Question: 'LA DOCTRINE SACRÉE. QU’EST-­ELLE? AQUOI S’ÉTEND-­ELLE?', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.1.10', img: '1.jpg' },
    // fin de question 1
    //theme1, question2, article de 1 à 3.
    { numéroArticle: 1, article: 'L’existence de Dieu est‐elle évidente par elle-­même ?', motsClé: 'Est que l’existance de Dieu est évidente', numéroQuestion: 2, Question: 'L’EXISTENCE DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.2.1', img: '1.jpg' },
    { numéroArticle: 2, article: 'L’existence de Dieu est-­elle démontrable ?', motsClé: 'L’existence de Dieu est-­elle démontrable ? Peut on démontrer que Dieu existe', numéroQuestion: 2, Question: 'L’EXISTENCE DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.2.2', img: '1.jpg' },
    { numéroArticle: 3, article: 'Dieu existe-­t-­il ?', motsClé: 'Est que Dieu existe', numéroQuestion: 2, Question: 'L’EXISTENCE DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: 'google.fr', ref: '1.2.3', img: '1.jpg' },
    // fin de question 2
    // thème 1 question 3 article de 1 à 8
    { numéroArticle: 1, article: 'Dieu est-il un corps, c’est-à-dire, y a-t-il en lui composition de parties quantitatives ?', motsClé: '', numéroQuestion: 3, Question: 'LA SIMPLICITE DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.3.1', img: '1.jpg' },
    { numéroArticle: 2, article: 'Y a-t-il en Dieu composition de matière et de forme ?', motsClé: 'Dieu est-t-il composé de matiére et de forme', numéroQuestion: 3, Question: 'LA SIMPLICITE DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.3.2', img: '1.jpg' }, ,
    { numéroArticle: 3, article: 'Y a-t-il en Dieu composition d’essence ou de nature, et de sujet ?', motsClé: 'Dieu est-t-il composé d essence ou de nature, et de sujet', numéroQuestion: 3, Question: 'LA SIMPLICITE DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.3.3', img: '1.jpg' },
    { numéroArticle: 4, article: 'Y a-t-il en Dieu composition de l’essence et de l’existence ?', motsClé: '', numéroQuestion: 3, Question: 'LA SIMPLICITE DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.3.4', img: '1.jpg' },
    { numéroArticle: 5, article: 'Y a-t-il en Dieu composition de genre et de différence ?', motsClé: '', numéroQuestion: 3, Question: 'LA SIMPLICITE DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.3.5', img: '1.jpg' },
    { numéroArticle: 6, article: 'Y a-t-il en Dieu composition de sujet et d’accident ?', motsClé: '', numéroQuestion: 3, Question: 'LA SIMPLICITE DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.3.6', img: '1.jpg' },
    { numéroArticle: 7, article: 'Dieu est-il composé de quelque manière, ou absolument simple ?', motsClé: '', numéroQuestion: 3, Question: 'LA SIMPLICITE DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.3.7', img: '1.jpg' },
    { numéroArticle: 8, article: 'Dieu entre-t-il en composition avec les autres êtres ?', motsClé: '', numéroQuestion: 3, Question: 'LA SIMPLICITE DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.3.8', img: '1.jpg' },
    // fin q3
    // thème 1 question 4 article de 1 à 8
    { numéroArticle: 1, article: 'Dieu est-il parfait ?', motsClé: 'Dieu a t il des défauts imparfait', numéroQuestion: 4, Question: ' LA PERFECTION DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.4.1', img: '1.jpg' },
    { numéroArticle: 2, article: 'Dieu est-il universellement parfait, contenant en lui les perfections de toutes choses ?', motsClé: 'Dieu a tout en parfait', numéroQuestion: 4, Question: ' LA PERFECTION DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.4.2', img: '1.jpg' },
    { numéroArticle: 3, article: 'Peut-on dire que les créatures ressemblent à Dieu ?', motsClé: 'est on comme semblable à Dieu', numéroQuestion: 4, Question: ' LA PERFECTION DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.4.3', img: '1.jpg' },
    // fin q4
    // thème 1 question 5 article de 1 à 6
    { numéroArticle: 1, article: 'Le bon et l’étant sont-ils identiques dans la réalité ?', motsClé: '', numéroQuestion: 5, Question: 'LA BONTÉ EN GÉNÉRAL', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.5.1', img: '1.jpg' },
    { numéroArticle: 2, article: 'Puisqu’il n’y a entre le bon et l’étant qu’une différence de raison, lequel est premier en raison ?', motsClé: '', numéroQuestion: 5, Question: 'LA BONTÉ EN GÉNÉRAL', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.5.2', img: '1.jpg' },
    { numéroArticle: 3, article: 'Puisque l’être est premier, tout étant est-il bon ?', motsClé: '', numéroQuestion: 5, Question: 'LA BONTÉ EN GÉNÉRAL', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.5.3', img: '1.jpg' },
    { numéroArticle: 4, article: 'Dans quel genre de cause la bonté rentre-t-elle ?', motsClé: '', numéroQuestion: 5, Question: 'LA BONTÉ EN GÉNÉRAL', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.5.4', img: '1.jpg' },
    { numéroArticle: 5, article: 'La bonté consiste-t-elle dans le mode, l’espèce et l’ordre ?', motsClé: '', numéroQuestion: 5, Question: 'LA BONTÉ EN GÉNÉRAL', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.5.5', img: '1.jpg' },
    { numéroArticle: 6, article: 'La division du bien en honnête, utile et délectable', motsClé: 'comment définir le bien', numéroQuestion: 5, Question: 'LA BONTÉ EN GÉNÉRAL', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.5.6', img: '1.jpg' },
    // fin q5
    // thème 1 question 6 article de 1 à 4
    { numéroArticle: 1, article: 'Peut-on dire de Dieu qu’il est bon ?', motsClé: '', numéroQuestion: 6, Question: ' LA BONTÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.6.1', img: '1.jpg' },
    { numéroArticle: 2, article: 'Dieu est-il suprêmement bon ?', motsClé: '', numéroQuestion: 6, Question: ' LA BONTÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.6.2', img: '1.jpg' },
    { numéroArticle: 3, article: 'Dieu seul est-il bon par essence ?', motsClé: '', numéroQuestion: 6, Question: ' LA BONTÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.6.3', img: '1.jpg' },
    { numéroArticle: 4, article: 'Toutes choses sont-elles bonnes de la bonté divine ?', motsClé: '', numéroQuestion: 6, Question: ' LA BONTÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.6.4', img: '1.jpg' },
    // fin q6
    // thème 1 question 7 article de 1 à 4
    { numéroArticle: 1, article: ' Dieu est-il infini ?', motsClé: '', numéroQuestion: 7, Question: ' L’INFINITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.7.1', img: '1.jpg' },
    { numéroArticle: 2, article: ' Y a-t-il, en dehors de Dieu, un être qui soit infini en son essence ?', motsClé: '', numéroQuestion: 7, Question: ' L’INFINITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.7.2', img: '1.jpg' },
    { numéroArticle: 3, article: ' Quelque chose peut-il être infini en étendue ?', motsClé: '', numéroQuestion: 7, Question: ' L’INFINITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.7.3', img: '1.jpg' },
    { numéroArticle: 4, article: ' Peut-il y avoir dans les choses une multitude infinie ?', motsClé: '', numéroQuestion: 7, Question: ' L’INFINITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.7.4', img: '1.jpg' },
    // fin q7
    // thème 1 question 8 article de 1 à 4
    { numéroArticle: 1, article: ' Dieu est-il en toutes choses ?', motsClé: '', numéroQuestion: 8, Question: ' L’EXISTENCE DE DIEU DANS LES CHOSES', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.8.1', img: '1.jpg' },
    { numéroArticle: 2, article: ' Dieu est-il partout ?', motsClé: '', numéroQuestion: 8, Question: ' L’EXISTENCE DE DIEU DANS LES CHOSES', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.8.2', img: '1.jpg' },
    { numéroArticle: 3, article: ' Dieu est-il partout par l’essence, la puissance et la présence ?', motsClé: '', numéroQuestion: 8, Question: ' L’EXISTENCE DE DIEU DANS LES CHOSES', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.8.3', img: '1.jpg' },
    { numéroArticle: 4, article: ' Être partout est-il propre à Dieu ?', motsClé: '', numéroQuestion: 8, Question: ' L’EXISTENCE DE DIEU DANS LES CHOSES', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.8.4', img: '1.jpg' },
    // fin q8
    // thème 1 question 9 article de 1 à 4
    { numéroArticle: 1, article: ' Dieu est-il absolument immuable ?', motsClé: 'Dieu est il absolument inchangeable, est que Dieu change ', numéroQuestion: 9, Question: ' L’IMMUTABILITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.9.1', img: '1.jpg' },
    { numéroArticle: 2, article: ' Être immuable (qui ne change pas) est-il propre à Dieu ?', motsClé: '', numéroQuestion: 9, Question: ' L’IMMUTABILITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.9.2', img: '1.jpg' },
    // fin q9
    // thème 1 question 10 article de 1 à 6
    { numéroArticle: 1, article: ' Qu’est-ce que l’éternité ?', motsClé: '', numéroQuestion: 10, Question: ' L’ÉTERNITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.10.1', img: '1.jpg' },
    { numéroArticle: 2, article: ' Dieu est-il éternel ?', motsClé: '', numéroQuestion: 10, Question: ' L’ÉTERNITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.10.2', img: '1.jpg' },
    { numéroArticle: 3, article: ' Est-il propre à Dieu d’être éternel ?', motsClé: 'Dieu est il le seul à être imortelle sans commencement ni fin', numéroQuestion: 10, Question: ' L’ÉTERNITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.10.3', img: '1.jpg' },
    { numéroArticle: 4, article: ' L’éternité diffère-t-elle du temps ?', motsClé: '', numéroQuestion: 10, Question: ' L’ÉTERNITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.10.4', img: '1.jpg' },
    { numéroArticle: 5, article: ' La différence entre l’aevum et le temps...', motsClé: 'qu est ce que l aevum', numéroQuestion: 10, Question: ' L’ÉTERNITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.10.5', img: '1.jpg' },
    { numéroArticle: 6, article: ' Y a-t-il un seul aevum, comme il y a un seul temps et une seule éternité ?', motsClé: '', numéroQuestion: 10, Question: ' L’ÉTERNITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.10.6', img: '1.jpg' },
    // fin q10
    // thème 1 question 11 article de 1 à 4
    { numéroArticle: 1, article: ' Est-ce que “ un ” ajoute quelque chose à “ étant ” ?', motsClé: '', numéroQuestion: 11, Question: 'L’UNITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.11.1', img: '1.jpg' },
    { numéroArticle: 2, article: ' Y a-t-il opposition entre l’un et le multiple ?', motsClé: '', numéroQuestion: 11, Question: ' L’UNITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.11.2', img: '1.jpg' },
    { numéroArticle: 3, article: ' Dieu est-il un ?', motsClé: '', numéroQuestion: 11, Question: ' L’UNITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.11.3', img: '1.jpg' },
    { numéroArticle: 4, article: ' Dieu est-il le plus un de tous les étants ?', motsClé: '', numéroQuestion: 11, Question: ' L’UNITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.11.4', img: '1.jpg' },
    // fin q11
    // thème 1 question 12 article de 1 à 13
    { numéroArticle: 1, article: ' Un intellect créé peut-il voir l’essence divine ?', motsClé: '', numéroQuestion: 12, Question: 'COMMENT DIEU EST CONNU PAR NOUS', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.12.1', img: '1.jpg' },
    { numéroArticle: 2, article: ' L’essence de Dieu est-elle vue par l’intellect au moyen d’une espèce créée ?', motsClé: '', numéroQuestion: 12, Question: ' COMMENT DIEU EST CONNU PAR NOUS', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.12.2', img: '1.jpg' },
    { numéroArticle: 3, article: ' L’essence divine peut-elle être vue par les yeux du corps ?', motsClé: '', numéroQuestion: 12, Question: 'COMMENT DIEU EST CONNU PAR NOUS', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.12.3', img: '1.jpg' },
    { numéroArticle: 4, article: ' Une substance intellectuelle créée, par ses seules facultés naturelles, est-elle capable de voir l’essence de Dieu ?', motsClé: '', numéroQuestion: 12, Question: ' L’ÉTERNITÉ DE DIEU', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.12.4', img: '1.jpg' },
    { numéroArticle: 5, article: ' L’intellect créé, pour voir l’essence divine, a-t-il besoin d’une lumière créée ?', motsClé: 'qu est ce que l aevum', numéroQuestion: 12, Question: ' COMMENT DIEU EST CONNU PAR NOUS', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.12.5', img: '1.jpg' },
    { numéroArticle: 6, article: ' Parmi ceux qui voient l’essence de Dieu, certains la voient-ils plus parfaitement que d’autres ?', motsClé: '', numéroQuestion: 12, Question: ' COMMENT DIEU EST CONNU PAR NOUS', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.12.6', img: '1.jpg' },
    { numéroArticle: 7, article: ' Un intellect créé peut-il comprendre l’essence divine ?', motsClé: '', numéroQuestion: 12, Question: ' COMMENT DIEU EST CONNU PAR NOUS', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.12.7', img: '1.jpg' },
    { numéroArticle: 8, article: ' L’intellect créé qui voit l’essence divine connaît-il en elle toutes choses ?', motsClé: '', numéroQuestion: 12, Question: ' COMMENT DIEU EST CONNU PAR NOUS', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.12.8', img: '1.jpg' },
    { numéroArticle: 9, article: ' Ce que l’intellect créé connaît en Dieu, le connaît-il au moyen de certaines représentations ?', motsClé: '', numéroQuestion: 12, Question: ' COMMENT DIEU EST CONNU PAR NOUS', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.12.9', img: '1.jpg' },
    { numéroArticle: 10, article: ' L’intellect créé connaît-il simultanément tout ce qu’il voit en Dieu ?', motsClé: '', numéroQuestion: 12, Question: ' COMMENT DIEU EST CONNU PAR NOUS', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.12.10', img: '1.jpg' },
    { numéroArticle: 11, article: ' Un homme peut-il en cette vie voir l’essence de Dieu ?', motsClé: 'qu est ce que l aevum', numéroQuestion: 12, Question: ' COMMENT DIEU EST CONNU PAR NOUS', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.12.11', img: '1.jpg' },
    { numéroArticle: 12, article: ' Pouvons-nous, en cette vie, connaître Dieu par la raison naturelle ?', motsClé: '', numéroQuestion: 12, Question: ' COMMENT DIEU EST CONNU PAR NOUS', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.12.12', img: '1.jpg' },
    { numéroArticle: 13, article: ' Au-dessus de la connaissance naturelle, y a-t-il en cette vie une connaissance de Dieu par la grâce ?', motsClé: '', numéroQuestion: 12, Question: ' COMMENT DIEU EST CONNU PAR NOUS', numérotheme: 1, theme: 'DIEU,LA TRINITÉ,LA CRÉATION', url: '', ref: '1.12.13', img: '1.jpg' },
    // fin q12

];
const searchinput = document.getElementById('searchInput');
const showAllButton = document.getElementById('showAllButton');
const urlParams = new URLSearchParams(window.location.search);
const erreur = urlParams.get('erreur')
const ref = urlParams.get('ref')

searchinput.addEventListener('keyup', function () {
    const input = searchinput.value;
    const regex = new RegExp(input.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').toLowerCase().split(' ').join('|'));
    const result = Question.filter(item => regex.test(item.motsClé.toLowerCase()) || item.article.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

    // Tri 
    result.sort((a, b) => {
        const aMatches = (a.motsClé.toLowerCase().match(regex) || []).length + (a.article.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ? 3 : 1);
        const bMatches = (b.motsClé.toLowerCase().match(regex) || []).length + (b.article.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ? 1 : 0);
        return bMatches - aMatches;
    });

    let suggestion = '';
    if (input != '') {
        const limitedResult = result.slice(0, 10); // Limite à 10 proposition
        limitedResult.forEach(resultItem => {
            suggestion += `
                <div class="emplacSugg">
                    <a class="noDeco" href="article.html?ref=${resultItem.ref}&recherche=${input}">
                        <div class="suggestion">
                            <img class="imgtheme" src="${resultItem.img}" alt="">
                            <div class="propo">
                                ${resultItem.ref}-${resultItem.article}
                            </div>
                        </div>
                    </a>
                </div>
            `;
        });

        
        if (result.length > 10) {
            showAllButton.style.display = 'block';
        } else {
            showAllButton.style.display = 'none';
        }
    }
    document.getElementById('suggestion').innerHTML = suggestion;
});


showAllButton.addEventListener('click', function () {
    const input = searchinput.value;
    const regex = new RegExp(input.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').toLowerCase().split(' ').join('|'));
    const result = Question.filter(item => regex.test(item.motsClé.toLowerCase()) || item.article.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

    let suggestion = '';
    result.forEach(resultItem => {
        suggestion += `
            <div class="emplacSugg">
                <a class="noDeco" href="article.html?ref=${resultItem.ref}&art=${resultItem.article}&quest=${resultItem.Question}&img=${resultItem.img}&recherche=${input}&refT=${resultItem.refT}">
                    <div class="suggestion">
                        <img class="imgtheme" src="${resultItem.img}" alt="">
                        <div class="propo">
                            ${resultItem.ref}-${resultItem.article}
                        </div>
                    </div>
                </a>
            </div>
        `;
    });

    
    showAllButton.style.display = 'none';

    document.getElementById('suggestion').innerHTML = suggestion;
});

var textes = document.getElementsByClassName('meilleurs');
var indexTexteVisible = 0;
var boutonPrecedent = document.getElementById('bouton-precedent');
var boutonSuivant = document.getElementById('bouton-suivant');
var textun = document.getElementById('bouton-cacheUn');
var b_suivant = document.getElementById('bouton-cacheDeux');

afficherTexte();
verifierBoutons();

function afficherTexte() {
  for (var i = 0; i < textes.length; i++) {
    textes[i].classList.remove('visible', 'hidden');
    if (i < indexTexteVisible || i > indexTexteVisible + 1) {
      textes[i].classList.add('hidden');
    }
  }

  var indexTexteSuivant = indexTexteVisible + 1;
  textes[indexTexteVisible].classList.add('visible');
  textes[indexTexteSuivant].classList.add('visible');
  verifierBoutons();
}

function precedentTexte() {
  if (indexTexteVisible > 0) {
    textes[indexTexteVisible].classList.remove('visible');
    indexTexteVisible--;
    afficherTexte();
  }
}

function suivantTexte() {
  if (indexTexteVisible < textes.length - 2) {
    textes[indexTexteVisible].classList.add('hidden');
    indexTexteVisible++;
    afficherTexte();
  }
}

function verifierBoutons() {
  boutonPrecedent.style.display = indexTexteVisible > 0 ? 'block' : 'none';
  boutonSuivant.style.display = indexTexteVisible < textes.length - 2 ? 'block' : 'none';

var computedStyle = getComputedStyle(boutonPrecedent);
if (computedStyle.display === 'none') {
    textun.classList.remove('cache');
}else{
    textun.classList.add('cache');
}

var computedStyle =  getComputedStyle(boutonSuivant);
if (computedStyle.display === 'none') {
    b_suivant.classList.remove('cache');
}else{
    b_suivant.classList.add('cache');
}
}

if(erreur != null){
    document.write(`
    <div class="erreur1">
    <font>L'article de référence "${ref}" n'a pas été trouvé ou n'est pas référencer...</font>
 </div>
    `)
}else{
    console.log("pas d'erreur")
    document.write(`
    <div class="erreur1 cache">
    <font>L'article de référence "${ref}" n'a pas été trouvé ou n'est pas référencer...</font>
 </div>
    `)
}

