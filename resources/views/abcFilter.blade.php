<!DOCTYPE html>
<html lang="en">
​
<head>
    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/style/abcFilter/style.css">
    <link rel="stylesheet" href="/style/abcFilter/style.css">
    <link rel="stylesheet" href="/style/Nav/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script type="text/javascript" src="/js/tools/jquery.js"></script>
    <script type="text/javascript" src="/js/tools/redirect.js"></script>
    <title>
        Classement (BD)
    </title>
</head>
​
<body>
    <nav>
        <div class="logo"></div>
        <div class="navBtns">
            <input type="button" value="Absence" class="first" onclick="goToChefPlateauAbsence()">
            <input type="button" value="Recyclage" class="first"  onclick="goToRecycle()">
            <input type="button" value="Compagne" class="first" onclick="goToCompagne()">
            <input type="button" value="Affectation" class="first" onclick="goToAffectation()">
            <input type="button" value="ABC player" class="first" onclick="goToAbcCalcule()">
        </div>
        <div class="logoutContainer">
            <input id="deconnection" class="deconnection" type="button" value="Se deconnecter" onclick="logout()">
        </div>
    </nav>
    <main class="">
        <div class="Title">
            <h1>Classements (BD)
                </title>
            </h1>
        </div>
        <div id="datePicker" class="datePicker" style="display: flex; flex-direction: column;">
            <label class="labelText">Date debut<span class="required">*</span></label>
            <input type="date" name="dateDebut" id="dateDebut" required><br>
            <label class="labelText">Date Fin <span class="required">*</span></label>
            <input type="date" name="dateFin" id="dateFin" required><br>
            <input type="button" id="ValiderBtn" class="ValiderBtn" value="Chercher" onclick="candidatList()">
        </div>
        <div class="content">
        </div>
        <div class="pages">
        </div>
    </main>
</body>
​
<script>
    let langueID = {{$langue}};
</script>
​
<script src="/js/abcFilter/ChefPlateauABCPagination.js" sync></script>
<script src="/js/abcFilter/ChefPlateauABC.js" sync></script>