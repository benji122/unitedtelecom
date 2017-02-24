<html class="wf-opensans-n4-active wf-active js cssanimations csstransforms csstransforms3d csstransitions">
<?php include './Includes/header.php'; ?>

<body class="page page-id-131 page-template-default w960 headerstyle2 no-header-image">

    <header class="page-header">

        <?php include './Includes/menu.php'; ?>

        <div class="absolute">
            <div class="wrapper headline  diamonds border-bottom-black-tr">
                <div class="container">
                    <div class="grid_12">
                        <div class="imageillu">
                            <img src="./uploads/2015/03/devis2.png">
                        </div>
                        <h1><span>Devis</span> en ligne</h1>
                        <div class="page-path">
                            <div id="crumbs" xmlns:v="http://rdf.data-vocabulary.org/#"><span typeof="v:Breadcrumb"><a rel="v:url" property="v:title" href="/web/20150628025921/http://www.unitedtelecom.fr/">Accueil</a></span> <span class="delimiter">|</span> <span class="current"><span>Devis</span> en ligne</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="wrapper header-image "></div>

    <div class="wrapper ">
        <div class="container main">
            <div class="post-area grid_9" style="margin-bottom:25px;">
                <div>
                    <!--Message confirmation ou erreur formulaire-->
                    <?php if(isset($_GET["retour"]) && $_GET["retour"] == 1){
                        ?>
                            <p style="color:green;text-align:center;font-size: 1.3em;">Votre devis nous à boen été transmis, nous vous contacterons dans les plus brefs delais.</p>
                        <?php
                    } ?>
                    <?php if(isset($_GET["retour"]) && $_GET["retour"] == 0){
                        ?>
                            <p style="color:red;text-align:center;font-size: 1.3em;">Suite à un probléme, votre devis n'a pas pu etre envoyé.</p>
                        <?php
                    } ?>

                    <p>Vous avez un projet&nbsp;ou un besoin spécifique concernant nos services&nbsp;? &nbsp;Simplifiez votre démarche à&nbsp; l’aide d’une demande de devis en ligne&nbsp;!</p>
                    <div role="form" class="wpcf7" id="wpcf7-f276-p131-o1" lang="fr-FR" dir="ltr">
                        <div class="screen-reader-response"></div>
                        <form name="" action="controller/mail.php" method="post" class="wpcf7-form cf7-style twenty-fifteen-pattern" novalidate="novalidate">
                            <div style="display: none;">
                                <input type="hidden" name="type" value="devis">
                            </div>
                            <h4 style="margin-bottom:15px;"><span style="color: #b4b4b4">Vos</span> besoins</h4>
                            <div class="presta">
                                <p>
                                    <label>
                                        <img src="./uploads/2015/01/telephone.png"><br>
                                        <span class="wpcf7-form-control-wrap presta1"><span class="wpcf7-form-control wpcf7-checkbox"><span class="wpcf7-list-item first last"><input type="checkbox" name="presta[]" value="Téléphonie">&nbsp;<span class="wpcf7-list-item-label">Téléphonie</span></span></span></span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <img src="./uploads/2014/03/operateur.png"><br>
                                        <span class="wpcf7-form-control-wrap presta2"><span class="wpcf7-form-control wpcf7-checkbox"><span class="wpcf7-list-item first last"><input type="checkbox" name="presta[]" value="Opérateur">&nbsp;<span class="wpcf7-list-item-label">Opérateur</span></span></span></span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <img src="./uploads/2014/03/reseau.png"><br>
                                        <span class="wpcf7-form-control-wrap presta3"><span class="wpcf7-form-control wpcf7-checkbox"><span class="wpcf7-list-item first last"><input type="checkbox" name="presta[]" value="Câblage &amp; réseau">&nbsp;<span class="wpcf7-list-item-label">Câblage &amp; réseau</span></span></span></span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <img src="./uploads/2014/03/video.png"><br>
                                        <span class="wpcf7-form-control-wrap presta4"><span class="wpcf7-form-control wpcf7-checkbox"><span class="wpcf7-list-item first last"><input type="checkbox" name="presta[]" value="Vidéosurveillance">&nbsp;<span class="wpcf7-list-item-label">Vidéosurveillance</span></span></span></span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <img src="./uploads/2014/03/alarme.png"><br>
                                        <span class="wpcf7-form-control-wrap presta5"><span class="wpcf7-form-control wpcf7-checkbox"><span class="wpcf7-list-item first last"><input type="checkbox" name="presta[]" value="Alarme &amp; sécurité">&nbsp;<span class="wpcf7-list-item-label">Alarme &amp; sécurité</span></span></span></span>
                                    </label>
                                </p>
                            </div>
                            <p><span class="wpcf7-form-control-wrap projet"><textarea name="projet" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Quel est votre projet ? (Nombre de lignes/postes/cameras ? Type d'alarme ? ...)"></textarea></span> </p>
                            <h4 style="margin-bottom:15px;">Vos <span style="color: #b4b4b4;">coordonnées</span></h4>
                            <div class="une-ligne">
                                <p><span class="wpcf7-form-control-wrap nom"><input type="text" name="nom" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Nom*"></span> </p>
                                <p><span class="wpcf7-form-control-wrap prenom"><input type="text" name="prenom" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Prénom*"></span> </p>
                            </div>
                            <p><span class="wpcf7-form-control-wrap societe"><input type="text" name="societe" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Société"></span></p>
                            <div class="une-ligne-tiers">
                                <p><span class="wpcf7-form-control-wrap adresse"><input type="text" name="adresse" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Adresse"></span></p>
                                <p><span class="wpcf7-form-control-wrap code-postal"><input type="text" name="code-postal" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Code Postal"></span></p>
                                <p><span class="wpcf7-form-control-wrap ville"><input type="text" name="ville" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Ville"></span></p>
                            </div>
                            <div class="une-ligne">
                                <p><span class="wpcf7-form-control-wrap telephone"><input type="text" name="telephone" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Téléphone"></span></p>
                                <p><span class="wpcf7-form-control-wrap email"><input type="email" name="email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email" aria-invalid="false" placeholder="Email"></span></p>
                            </div>
                            <div >
                                <input type="submit" value="Envoyer" class="wpcf7-form-control wpcf7-submit">
                            </div>
                            <div class="wpcf7-response-output wpcf7-display-none"></div>
                        </form>
                    </div>
                </div>
            </div>

            <?php include './Includes/aside.php'; ?>
        </div>
    </div>

    <?php include './Includes/footer.php'; ?>
</body>

</html>