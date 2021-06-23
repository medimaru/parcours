<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
    <link rel="stylesheet" href="/style/recruteurIndex/style.css">
    <link rel="stylesheet" href="/style/Nav/style.css">
    <title>
        Chargée de recrutement
    </title>
</head>
<body>
    <nav>
        <div class="logo"></div>
        <div class="navBtns">
            {{-- <input type="button" value="AgentAPI" class="first" name="Formations" onclick="openBTAgentAPI()"> --}}
        </div>
        <div class="logoutContainer">
            <input id="deconnection" class="deconnection" type="button" value="Se deconnecter" onclick="logout()">
        </div>
    </nav>
    <main class="">
        <div class="Title">
            <h1>Liste des nouveaux candidats</h1>
            <input type="text" name="" id="search" placeholder=" Chercher ...">
        </div>
        <div class="formationContainer">
            <div class="formationList">
            </div>
            <input class="ConfirmBtn" id="ConfirmBtn" type="button" value="Valider" onclick="document.getElementById('confirm').style.display='block'">
        </div>
        <div id="confirm" class="confirm">
            <div class="modal-content">
                <span class="close Confirm">&times;</span>
                <p style="padding-bottom:5px ;">Êtes-vous sûr de vouloir continuer ?</p>
                <button class="BtnConfirmValider" onclick="updateFormationCandidat()">valider</button>
                <button class="BtnConfirmAnnuler" onclick="closeConfirm()">annuler</button>
            </div>
        </div>
        <div id="validation" class="validation">
            <div class="modal-content-validation">
                <span class="close Validation">&times;</span>
                <form id="modificationAgent">
                    <h2 style="padding-bottom:5px ;text-align: center;">Modification agent</h2>
                    <label class="labelText">Nom </label>
                    <input type="text" name="nom" id="nom" required><br>
                    <label class="labelText">Prenom</label>
                    <input type="text" name="prenom" id="prenom" required><br>
                    <label class="labelText">Telephone</label>
                    <input type="text" name="telephone" id="telephone" required><br>
                    <label class="labelText">Experience</label>
                    <input type="text" name="experience" id="experience" required><br>
                    <label class="labelText">CIN</label>
                    <input type="text" name="CIN" id="CIN" required><br>
                    <label class="labelText">Nationalite</label>
                    <input type="text" name="nationalite" id="nationalite" required><br>
                    <label class="labelText">Email</label>
                    <input type="text" name="email" id="email" required><br>
                    <label class="labelText">Adresse</label>
                    <input type="text" name="adresse" id="adresse" required><br>
                    <button type="button" id="ValiderForm" class="ValiderForm">Modifier</button><button type="reset" id="ResetBtn" class="ResetBtn"> Reset </button>
                    <div id="confirmForm" class="confirmForm">
                        <div class="modal-content">
                            <span class="close FormConfirm">&times;</span>
                            <p style="padding-bottom:5px ; color: white; font-weight: normal;">Êtes-vous sûr de vouloir continuer ?</p>
                            <button type="submit" class="BtnConfirmValider" style="background-color: #FEFEFE; border-radius: 5px; cursor: pointer;">:heavy_check_mark:</button>
                            <button class="BtnConfirmAnnuler" style="background-color: #FEFEFE; border-radius: 5px;cursor: pointer;" onclick="closeConfirmForm()">:heavy_multiplication_x:</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="content">
            <div class="pages">
            </div>
        </div>
        <div id="ErreurAffectation" class="ErreurAffectation">
            <div class="modal-content-ErreurAffectation">
                <span class="close ErreurAffectation">&times;</span>
                <p style="padding-bottom:5px ; color: white; font-weight: normal;">Formation complete </p>
                <button class="BtnConfirmAnnuler" style="background-color: #FEFEFE; border-radius: 5px;cursor: pointer;" onclick="closeErreurAffectation()">:heavy_multiplication_x:</button>
            </div>
        </div>
    </main>
</body>
<script>
    let langueID = {{$langue}};
</script>
<script src="/js/recruteurIndex/redirections.js" sync></script>
<script src="/js/recruteurIndex/Recruteur.js" sync></script>
<script src="/js/recruteurIndex/RecruteurPagination.js" sync></script>