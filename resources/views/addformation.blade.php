<!DOCTYPE html>
<html lang="en">

<head>
    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script type="text/javascript" src="/js/tools/jquery.js"></script>
    <script type="text/javascript" src="/js/tools/redirect.js"></script>
    <link rel="stylesheet" href="/style/addFormation/style.css">
    <link rel="stylesheet" href="/style/Nav/style.css">
    <title>
        Formations
    </title>
</head>

<body>
    <nav>
        <div class="logo"></div>
        <div class="navBtns">
            <input type="button" value="acceuil" class="first" name="Pseudos" onclick="openHome()">
            <input type="button" value="validation" class="first" name="Absences" onclick="openValidation()">
            <input type="button" value="affectation" class="first" name="Absences" onclick="openAffectation()">
        </div>
        <div class="logoutContainer">
            <input id="deconnection" class="deconnection" type="button" value="Se deconnecter" onclick="logout()">
        </div>
    </nav>
    <main class="">
        <div class="Title">
            <h1>Liste des formations</h1>

            <input type="text" name="" id="search" placeholder=" Chercher ..." style="display: none">
            <button class="openbtn" id="openbtn" onclick=openForm()>
                ➕ Ajouter Formation</button>
        </div>
        <div id="validation" class="validation">
            <div class="modal-content-Formation-validation">
                <span class="close Validation">&times;</span>
                <form id="addFormationForm">
                    <h2 style="padding-bottom:5px ;text-align: center;">Ajout de Formation</h2>
                    <label class="labelText">Label</label>
                    <input type="text" name="label" id="label" oninvalid="closeConfirm()" placeholder="Nom formation ..." required><br>
                    <label class="labelText">Date debut</label>
                    <input type="date" name="dateDebut" id="dateDebut" oninvalid="closeConfirm()" required><br>
                    <label class="labelText">Date Fin </label>
                    <input type="date" name="dateFin" id="dateFin" oninvalid="closeConfirm()" required><br>
                    <label class="labelText">Type </label>
                    <div class="typeFormation" id="typeFormation"></div><br>
                    <label class="labelText" palce>Max </label>
                    <input type="number" min="1" name="max" id="max" oninvalid="closeConfirm()" placeholder="Nbr candidats ..." required><br>
                    <button type="button" id="ValiderBtn" class="ValiderBtn">Ajouter</button><button type="reset" id="ResetBtn" class="ResetBtn"> Reset </button>
                    <div id="confirm" class="confirm">
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <p style="padding-bottom:5px ; color: white; font-weight: normal;">Êtes-vous sûr de vouloir continuer ?</p>
                            <button type="submit" class="BtnConfirmValider" style="background-color: #fefefe; font-weight: bolder;border-radius: 5px; cursor: pointer;">valider</button>
                            <button class="BtnConfirmAnnuler" style="background-color: #fefefe; font-weight: bolder; border-radius: 5px;cursor: pointer;" onclick="document.getElementById('confirm').style.display='none'">annuler</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        </div>
        <div class="content">
        </div>
        <div class="pages">
        </div>

    </main>
</body>
<script>
    let langueID = 1;
</script>
<script src="/js/addFormation/Formateur.js" sync></script>
<script src="/js/addFormation/redirections.js" sync></script>
<script src="/js/addFormation/FormateurPagination.js" sync></script>