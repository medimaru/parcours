<!DOCTYPE html>
<html lang="en">

<head>
    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
    <input type="checkbox" name="" id="">
    <link rel="stylesheet" href="/style/Nav/style.css">
    <link rel="stylesheet" href="/style/formateurIndex/style.css">
    <title>
        Absence
    </title>
</head>

<body>
    <nav>
        <div class="logo"></div>
        <div class="navBtns">
            <input type="button" value="validation" class="first" name="Pseudos" onclick="openValidation()">
            <input type="button" value="formations" class="first" name="Formations" onclick="openFormation()">
            <input type="button" value="affectation" class="first" name="Formations" onclick="openAffectation()">
            {{-- <input type="button" value="Classement" class="first" name="Classements" onclick="openBTClassement()"> --}}
        </div>
        <div class="logoutContainer">
            <input id="deconnection" class="deconnection" type="button" value="Se deconnecter" onclick="logout()">
        </div>
    </nav>

    <main class="">
        <div class="salaire sectionAcceuil">
        </div>
        <div class="Absence sectionAcceuil Title">
            <h1>Les absences journalies des candidats</h1>
            <input type="text" name="" id="search" placeholder=" Chercher ...">
            <div class="formationList" id="formationList">
            </div>
            <div id="confirm" class="confirm">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p style="padding-bottom:5px ; color: white; font-weight: normal;">Êtes-vous sûr ?</p>
                    <button type="submit" class="BtnConfirmValider" id="BtnConfirmValider" style="background-color: #fefefe; border-radius: 5px; cursor: pointer;">valider</button>
                    <button class="BtnConfirmAnnuler" id="BtnConfirmAnnuler" style="background-color: #fefefe; border-radius: 5px;cursor: pointer;" onclick="closeConfirm()">annuler</button>
                </div>
            </div>
            <div class="content">
            </div>
            <div class="pages"></div>
        </div>
    </main>

</body>
<script>
    let langueID = {{$langue}};
</script>
<script src="/js/formateurIndex/redirections.js" sync></script>
<script src="/js/formateurIndex/agent.js" sync></script>
<script src="/js/formateurIndex/FormateurAbsence.js" sync></script>
<script src="/js/formateurIndex/FormateurPaginationTeamAb.js" sync></script>

</html>