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
    <link rel="stylesheet" href="/style/chefPlateauSetCompagne/style.css">
    <title>Chef Plateau Objectif</title>
</head>
​
<body>
    <nav>
        <div class="logo"></div>
        <div class="navBtns">
            <input type="button" value="Absence" class="first" onclick="goToChefPlateauAbsence()">
            <input type="button" value="Recyclage" class="first"  onclick="goToRecycle()">
            <input type="button" value="Affectation" class="first" onclick="goToAffectation()">
            <input type="button" value="ABC player" class="first" onclick="goToAffectation()">
            <input type="button" value="ABC Archive" class="first" onclick="goToAbcFilter()">
        </div>
        <div class="logoutContainer">
            <input id="deconnection" class="deconnection" type="button" value="Se deconnecter" onclick="logout()">
        </div>
    </nav>
    <div class="content"></div>
    <div id="confirm" class="confirm">
        <div class="modal-content">
            <span class="close" onclick="closeConfirm()">&times;</span>
            <form id="ModifObjectifForm">
                <h2 style="padding-bottom:5px ;text-align: center;">Modifier Objectif</h2>
                <label class="labelText">Absence Objectif</label>
                <input type="number" min="0" name="AbsenceObjectif" id="AbsenceObjectif" oninvalid="closeConfirmUpdate()" step="any" required><br>
                <label class="labelText">Absence Coeficient</label>
                <input type="number" min="0" name="AbsenceCoefficient" id="AbsenceCoefficient" oninvalid="closeConfirmUpdate()" step="any" required><br>
                <label class="labelText">Appel Objectif</label>
                <input type="number" min="0" name="AppelObjectif" id="AppelObjectif" oninvalid="closeConfirmUpdate()" step="any" required><br>
                <label class="labelText">Appel Coeficient</label>
                <input type="number" min="0" name="AppelCoefficient" id="AppelCoefficient" step="any" oninvalid="closeConfirmUpdate()" required><br>
                <label class="labelText" palce>Rendez-vous Objectif</label>
                <input type="number" min="0" name="RDVobjectif" id="RDVobjectif" step="any" oninvalid="closeConfirmUpdate()" required><br>
                <label class="labelText">Rendez-vous Coeficient</label>
                <input type="number" min="0" name="RDVCoefficient" id="RDVcoefficient" step="any" oninvalid="closeConfirmUpdate()" required><br>
                <button type="button" id="ValiderBtn" class="ValiderBtn" onclick="confirmUpdateOpen()">Valider</button>
                <button type="reset" id="ResetBtn" class="ResetBtn">Reset</button>
                <div id="confirmUpdate" class="confirmUpdate">
                    <div class="modal-content-Update">
                        <span class="close" onclick="closeConfirmUpdate()">&times;</span>
                        <p style="padding-bottom:5px ; color: white; font-weight: normal;">Êtes-vous sûr de vouloir continuer EE?</p>
                        <input type="submit" class="BtnConfirmValider" value="✔" style="padding:0;text-align:center; width: 30px; background-color: #fefefe; font-weight: bolder;border-radius: 5px; cursor: pointer;" />
                        <input class="BtnConfirmAnnuler" style="padding:0;text-align:center;width:30px; background-color: #fefefe; font-weight: bolder; border-radius: 5px;cursor: pointer;" onclick="closeConfirmUpdate()" value="✖" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>
<script>
    let langueID = {{$langue}};
</script>
<script src="/js/chefPlateauSetCompagne/ChefPlateauObjectif.js" sync></script>
<script src="/js/chefPlateauSetCompagne/ChefPlateauObjectifPagination.js" sync></script>
​
​
​
</html>