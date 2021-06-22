<!DOCTYPE html>
<html lang="en">
​
<head>
    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
    <link rel="stylesheet" href="/style/formateurValidation/style.css">
    <link rel="stylesheet" href="/style/Nav/style.css">
    <title>
        Formateur
    </title>
</head>
​
<body>
    <nav>
        <div class="logo"></div>
        <div class="logoutContainer">
            <input id="deconnection" class="deconnection" type="button" value="Se deconnecter" onclick="logout()">
        </div>
    </nav>
    <main class="">
        <div class="Title">
            <h1>Validation des candidats </h1>
            <input type="text" name="" id="search" placeholder=" Chercher ...">
        </div>
        <div class="formationContainer">
            <input class="ConfirmBtn" id="ConfirmBtn" type="button" value="Valider" onclick="document.getElementById('confirm').style.display='block'">
        </div>
        <div id="confirm" class="confirm">
            <div class="modal-content">
                <span class="close Confirm">&times;</span>
                <p style="padding-bottom:5px ;">Êtes-vous sûr de vouloir continuer ?</p>
                <button class="BtnConfirmValider" onclick="UpdateValidationCandidat()">✔</button>
                <button class="BtnConfirmAnnuler" onclick="closeConfirm()">✖</button>
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
<script src="/js/formateurValidation/redirections.js" sync></script>
<script src="/js/formateurValidation/FormateurValidation.js" sync></script>
<script src="/js/formateurValidation/FormateurValidationPagination.js" sync></script>