<!DOCTYPE html>
<html lang="en">

<head>
    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
    <link rel="stylesheet" href="/style/chefPlateauAffectation/style.css">
    <link rel="stylesheet" href="/style/Nav/style.css">
    <title>
        Chef de plateau
    </title>
</head>

<body>
    <nav>
        <div class="logo"></div>
        <div class="navBtns">
            <input type="button" value="Classements" class="first" name="Classements" onclick="openBTclassement()">
            <input type="button" value="Absences" class="first" name="Absences" onclick="openBTabsences()">
        </div>
        <div class="logoutContainer">
            <input id="deconnection" class="deconnection" type="button" value="Se deconnecter" onclick="logout()">
        </div>
    </nav>
    <main class="">
        <div class="Title">
            <h1>Affectation compagne candidats</h1>
            <input type="text" name="" id="search" placeholder=" Chercher ...">
        </div>
        <div class="compagneContainer">
            <div class="compagneList">
            </div>
            <input class="ConfirmBtn" id="ConfirmBtn" type="button" value="Valider" onclick="document.getElementById('confirm').style.display='block'">
        </div>
        <div id="confirm" class="confirm">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p style="padding-bottom:5px ;">Êtes-vous sûr de vouloir continuer ?</p>
                <button class="BtnConfirmValider" id="BtnConfirmValider" style="background-color: #fefefe; border-radius: 5px; cursor: pointer;" onclick="UpdateCompagneCandidat()">✔</button>
                <button class="BtnConfirmAnnuler" id="BtnConfirmAnnuler" style="background-color: #fefefe; border-radius: 5px;cursor: pointer;" onclick="">✖</button>
            </div>
        </div>
        <div class="content">
            <div class="pages">
            </div>
        </div>
    </main>
</body>
<script>
    let langueID = {{$langue}};
</script>
<script src="/js/chefPlateauAffectation/ChefValidation.js" sync></script>
<script src="/js/chefPlateauAffectation/ChefValidationPagination.js" sync></script>
<script src="/js/chefPlateauAffectation/redirections.js" sync></script>