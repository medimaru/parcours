
<!DOCTYPE html>
<html lang="en">
​
<head>
    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
    <link rel="stylesheet" href="/style/ChefPlateauRecyclage/style.css">
    <link rel="stylesheet" href="/style/Nav/style.css">
    <title>
        Chef de plateau
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
            <h1>Recyclage des candidats</h1>
​
            <input type="text" name="" id="search" placeholder=" Chercher ...">
        </div>
        <div class="formationContainer">
            <input class="Recycle" id="Recycle" type="button" value="Recyclé" style="background: #dddddd;" disabled='disabled' onclick="document.getElementById('confirmRecycle').style.display='block'">
            <input class="nonRecycle" id="nonRecycle" type="button" value="Non Recyclé" style="background: #dddddd;" disabled="disabled" onclick="document.getElementById('noRecycle').style.display='block'">
        </div>
        </div>
        <form id="ClassementCForm">
            <label class="labelText">Date debut <span class="required">*</span></label>
            <input type="date" name="dateDebut" id="dateDebut" oninvalid="closeConfirm()" required><br>
​
            <label class="labelText">Date Fin <span class="required">*</span></label>
            <input type="date" name="dateFin" id="dateFin" oninvalid="closeConfirm()" required><br>
​
            <button type="button" id="ValiderBtn" class="ValiderBtn" onclick="document.getElementById('confirmsecond').style.display='block'">Import</button>
​
            <div id="confirmsecond" class="confirmsecond">
                <div class="modal-content">
                    <span class="close" onclick="document.getElementById('confirmsecond').style.display='none'">&times;</span>
                    <p style="padding-bottom:5px ; color: white; font-weight: normal;">Êtes-vous sûr de vouloir
                        continuer ?</p>
                    <input value="✔" type="submit" class="BtnConfirmValider" style="padding:0;text-align: center;width:30px ;background-color: #fefefe; font-weight: bolder;border-radius: 5px; cursor: pointer;">
                    <input value="✖" class="BtnConfirmAnnuler" style="padding:0 ;text-align:center; width:30px ; background-color: #fefefe; font-weight: bolder; border-radius: 5px;cursor: pointer;" onclick="document.getElementById('confirmsecond').style.display='none'">
                </div>
            </div>
        </form>
​
        <div id="confirmRecycle" class="confirmRecycle">
            <div class="modal-content-recyclage-validation">
                <span id="closeRec" class="closeRec">&times;</span>
                <form id="recycleForm">
                    <label class="labelText">Cause</label>
                    <input type="text" name="Cause" id="Cause" oninvalid="closeconfirmRecycle()" required><br>
                    <button type="button" id="ValiderBtn2" class="ValiderBtn2" onclick="document.getElementById('confirmRecycle2').style.display='block'">Valider</button>
                    <button type="reset" id="ResetBtn2" class="ResetBtn2"> Reset </button>
​
​
​
                    <div id="confirmRecycle2" class="confirmRecycle2">
                        <div class="modal-content2">
                            <span class="close" onclick="document.getElementById('confirmRecycle2').style.display='none'">&times;</span>
                            <p style="padding-bottom:5px ; color: white; font-weight: normal;">Êtes-vous sûr de vouloir
                                continuer ?</p>
                            <input value="✔" type="submit" class="BtnConfirmValider" style="padding:0;text-align: center;width:30px ;background-color: #fefefe; font-weight: bolder;border-radius: 5px; cursor: pointer;">
                            <input value="✖" class="BtnConfirmAnnuler" style="padding:0 ;text-align:center; width:30px ; background-color: #fefefe; font-weight: bolder; border-radius: 5px;cursor: pointer;" onclick="document.getElementById('confirmRecycle2').style.display='none'">
                        </div>
                    </div>
                </form>
            </div>
        </div>
​
        <div id="noRecycle" class="noRecycle">
            <div class="modal-content-norecyclage-validation">
                <span id="closeRec2" class="closeRec2">&times;</span>
                <form id="norecycleForm">
                    <label class="labelText">Cause</label>
                    <input type="text" name="cause" id="cause" oninvalid="closeconfirmNoRecycle()" required><br>
                    <button type="button" id="ValiderBtn3" class="ValiderBtn3" onclick="document.getElementById('confirmNonRecycle').style.display='block'">Valider</button>
                    <button type="reset" id="ResetBtn3" class="ResetBtn3"> Reset </button>
​
​
​
                    <div id="confirmNonRecycle" class="confirmNonRecycle">
                        <div class="modal-content3">
                            <span class="close" onclick="document.getElementById('confirmNonRecycle').style.display='none'">&times;</span>
                            <p style="padding-bottom:5px ; color: white; font-weight: normal;">Êtes-vous sûr de vouloir
                                continuer ?</p>
                            <input value="✔" type="submit" class="BtnConfirmValider" style="padding:0;text-align: center;width:30px ;background-color: #fefefe; font-weight: bolder;border-radius: 5px; cursor: pointer;">
                            <input value="✖" class="BtnConfirmAnnuler" style="padding:0 ;text-align:center; width:30px ; background-color: #fefefe; font-weight: bolder; border-radius: 5px;cursor: pointer;" onclick="document.getElementById('confirmNonRecycle').style.display='none'">
                        </div>
                    </div>
                </form>
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
<script src="/js/ChefPlateauRecyclage/ChefPlateauRecyclage.js" sync></script>
<script src="/js/ChefPlateauRecyclage/ChefPlateauRecyclagePagination.js" sync></script>
<script src="/js/ChefPlateauRecyclage/redirections.js" sync></script>

















