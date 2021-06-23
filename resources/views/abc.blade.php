<!DOCTYPE html>
<html lang="en">
​
<head>
    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/style/abc/style.css">
    <link rel="stylesheet" href="/style/Nav/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
    <title>
        Classement
    </title>
</head>
​
<body>
    <nav>
        <div class="logo"></div>
        <div class="navBtns">
​
            <input type="button" value="Absences" class="first" name="Absences" onclick="openBTabsence()">
            <input type="button" value="Validations" class="first" name="Validations" onclick="openBTvalidation()">
​
        </div>
        <div class="logoutContainer">
            <input id="deconnection" class="deconnection" type="button" value="Se deconnecter" onclick="logout()">
        </div>
    </nav>
    <main class="">
        <div class="Title">
            <h1>Classements</h1>
            <label for="fichier-CSV" class="custom-fichier-CSV">
                <i class="fa fa-cloud-upload"></i> Importer les données
            </label>
            <input id="fichier-CSV" type="file" accept=".csv" />
            <button onclick="openArchiveForm()" id="archiveValidation" class="archiveValidation" style="display:none"> 💾 Archiver </button>
            <div id="expand" class="expand" style="height: 0px">
                <input type="date" name="dateDebut" id="dateDebut"><br>
                <button type="button" class="ValiderBtn" id="ValiderBtn" style="display:flex"> Sauvgarder </button>
                <div id="confirm" class="confirm">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <p style="padding-bottom:5px ;">Êtes-vous sûr de vouloir continuer ?</p>
                        <button class="BtnConfirmValider" onclick="archiveData()">✔</button>
                        <button class="BtnConfirmAnnuler" onclick="document.getElementById('confirm').style.display='none'">✖</button>
                    </div>
                </div>
            </div>
            <input type=" text" name="" id="search" class="search" placeholder=" Chercher ..." style="display:none" />
        </div>
        <div class="content">
        </div>
        <div class="pages">
        </div>
    </main>
</body>
​
<script src="/js/abc/ChefPlateauPagination.js" sync></script>
<script src="/js/abc/ChefPlateau.js" sync></script>
<script src="/js/abc/redirections.js" sync></script>