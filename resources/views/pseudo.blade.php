<!DOCTYPE html>
<html lang="en">

<head>
    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="/js/tools/jquery.js"></script>
    <input type="checkbox" name="" id="">
    <link rel="stylesheet" href="/style/Nav/style.css">
    <link rel="stylesheet" href="/style/pseudo/style.css">
    <title>
        Absence
    </title>
</head>

<body>
    <nav>
        <div class="logo"></div>
        <div class="navBtns">
            <input type="button" value="Accueil" class="first" name="Accueil" onclick="openAffectation()">
            <input type="button" value="validation" class="first" name="Pseudos" onclick="openValidation()">
            <input type="button" value="formations" class="first" name="Formations" onclick="openFormation()">
        </div>
        <div class="logoutContainer">
            <input id="deconnection" class="deconnection" type="button" value="Se deconnecter" onclick="logout()">
        </div>
    </nav>

    <main class="">
        <div>
            <input type="button" value="Valider"  onclick="UpdateValidation()" style="display: block; margin:auto; padding:10px 20px;">
        </div>
            <div class="content">
                Chargement des donnees ...
            </div>
            <div class="pages">

            </div>
        </div>
    </main>

</body>
<script>
    let langueID = {{$langue}};
</script>
<script src="/js/pseudo/redirections.js" defer></script>
<script src="/js/pseudo/agent.js" defer></script>
<script src="/js/pseudo/pagination.js" defer></script>

</html>