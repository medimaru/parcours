<!DOCTYPE html>
<html lang="en">
​
<head>
    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script type="text/javascript" src="/js/tools/jquery.js"></script>
    <script type="text/javascript" src="/js/tools/redirect.js"></script>
    <input type="checkbox" name="" id="">
    <link rel="stylesheet" href="/style/Nav/style.css">
    <link rel="stylesheet" href="/style/ChefPlateauAbsence/style.css">
    <title>
        Absence
    </title>
</head>
​
<body>
    <nav>
        <div class="logo"></div>
        <div class="navBtns">
            <input type="button" value="Affectation" class="first" onclick="goToAffectation()">
            <input type="button" value="Recyclage" class="first"  onclick="goToRecycle()">
            <input type="button" value="Compagne" class="first" onclick="goToCompagne()">
            <input type="button" value="ABC player" class="first" onclick="goToAffectation()">
            <input type="button" value="ABC Archive" class="first" onclick="goToAbcFilter()">
        </div>
        <div class="logoutContainer">
            <input id="deconnection" class="deconnection" type="button" value="Se deconnecter" onclick="logout()">
        </div>
    </nav>
​
    <main class="">
        <div class="salaire sectionAcceuil">
        </div>
        <div class="Absence sectionAcceuil Title">
            <h1>Les absences journalies des candidats</h1>
            <input type="text" name="" id="search" placeholder=" Chercher ..." style="display: none;">
            <div class="formationList" id="formationList">
            </div>
​
            <div id="confirm" class="confirm">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p style="padding-bottom:5px ; color: white; font-weight: normal;">Êtes-vous sûr ?</p>
                    <button type="submit" class="BtnConfirmValider" id="BtnConfirmValider" style="background-color: #fefefe; border-radius: 5px; cursor: pointer;">✔</button>
                    <button class="BtnConfirmAnnuler" id="BtnConfirmAnnuler" style="background-color: #fefefe; border-radius: 5px;cursor: pointer;" onclick="closeConfirm()">✖</button>
                </div>
            </div>
            <div class="content">
            </div>
            <div class="pages"></div>
        </div>
    </main>
​
</body>
<script src="/js/ChefPlateauAbsence/redirections.js" sync></script>
<script src="/js/ChefPlateauAbsence/agent.js" sync></script>
<script src="/js/ChefPlateauAbsence/ChefPlateauAbsence.js" sync></script>
<script src="/js/ChefPlateauAbsence/ChefPlateauPaginationTeamAb.js" sync></script>
​
</html>