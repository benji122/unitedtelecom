<?php
require_once('../PHPMailer-master/class.phpmailer.php');

	if($_POST["type"] == "contact"){
		 contact(); 
	}
	if($_POST["type"] == "rappel"){
		 rappel(); 
	}
	if($_POST["type"] == "devis"){
		 devis(); 
	}
	if($_POST["type"] == "operateur"){
		 operateur(); 
	}

	//FONCTION envoie mail formulaire de contact
	function contact()
	{
		$destinataire = 'benjamin_bitton@hotmail.com';
		$expediteur = 'secretaria@unitedtelecom.fr';
		$objet = 'Contact'; // Objet du message
		$headers  = 'MIME-Version: 1.0' . "\n"; // Version MIME
		$headers .= 'Content-type: text/html; charset=ISO-8859-1'."\n"; // l'en-tete Content-type pour le format HTML
		$headers .= 'Reply-To: '.$expediteur."\n"; // Mail de reponse
		$headers .= 'From: "UnitedTelecom"<'.$expediteur.'>'."\n"; // Expediteur
		$headers .= 'Delivered-to: '.$destinataire."\n"; // Destinataire
		
		// message
		 $message = '
		 <html>
		  <head>
		   <title>Contact</title>
		  </head>
		  <body>
			<p>' . $_POST["nom"] . ' ' . $_POST["prenom"] . ' à rempli le formulaire de contact !</p>
			<p>Societe : ' . $_POST["societe"] . '</p>
			<p>Email : ' . $_POST["email"] . '</p>
			<br>
			<br>
			<p>Son message : ' . $_POST["message"] . '<p>
		  </body>
		 </html>
		 ';

		if (mail($destinataire, $objet, $message, $headers)) // Envoi du message
		{
			header("Location: ../contact.php?retour=1");
		}
		else // Non envoyé
		{
			header("Location: ../contact.php?retour=0");
		}		
	}

	//FONCTION envoie mail formulaire de rappel
	function rappel()
	{
		$destinataire = 'benjamin_bitton@hotmail.com';
		$expediteur = 'secretaria@unitedtelecom.fr';
		$objet = 'Rappel'; // Objet du message
		$headers  = 'MIME-Version: 1.0' . "\n"; // Version MIME
		$headers .= 'Content-type: text/html; charset=ISO-8859-1'."\n"; // l'en-tete Content-type pour le format HTML
		$headers .= 'Reply-To: '.$expediteur."\n"; // Mail de reponse
		$headers .= 'From: "UnitedTelecom"<'.$expediteur.'>'."\n"; // Expediteur
		$headers .= 'Delivered-to: '.$destinataire."\n"; // Destinataire
		
		// message
		 $message = '
		 <html>
		  <head>
		   <title>Rappel</title>
		  </head>
		  <body>
			<p> Rappel immédiat à ce numéro : ' . $_POST["tel-rappel"] . ' !</p>
		  </body>
		 </html>
		 ';

		if (mail($destinataire, $objet, $message, $headers)) // Envoi du message
		{
			header("Location: ../contact.php?retour-rappel=1");
		}
		else // Non envoyé
		{
			header("Location: ../contact.php?retour-rappel=0");
		}		
	}

	 //FONCTION envoie mail formulaire de rappel
	function devis()
	{
		$destinataire = 'benjamin_bitton@hotmail.com';
		$expediteur = 'secretaria@unitedtelecom.fr';
		$objet = 'Rappel'; // Objet du message
		$headers  = 'MIME-Version: 1.0' . "\n"; // Version MIME
		$headers .= 'Content-type: text/html; charset=ISO-8859-1'."\n"; // l'en-tete Content-type pour le format HTML
		$headers .= 'Reply-To: '.$expediteur."\n"; // Mail de reponse
		$headers .= 'From: "UnitedTelecom"<'.$expediteur.'>'."\n"; // Expediteur
		$headers .= 'Delivered-to: '.$destinataire."\n"; // Destinataire
		
		$presta = "";
		foreach ($_POST["presta"] as $value) {
			$presta = $presta . "/" .$value;
		}

		// message
		 $message = '
		 <html>
		  <head>
		   <title>Rappel</title>
		  </head>
		  <body>
			<p> Une nouvelle demande de devis vous est parvenu.</p>
			<p>Besoins : ' . $presta . '</p>
			<p>' . $_POST["nom"] . ' ' . $_POST["prenom"] . '</p>
			<p>Societe : ' . $_POST["societe"] . '</p>
			<p>Email : ' . $_POST["email"] . '</p>
			<p>Adresse : ' . $_POST["adresse"] . ' '. $_POST["code-postal"] . ' ' . $_POST["ville"] . '</p>
			<p>Téléphone : ' . $_POST["telephone"] . '</p>
			<br>
			<br>
			<p>Son projet : ' . $_POST["projet"] . '<p>
		  </body>
		 </html>
		 ';

		if (mail($destinataire, $objet, $message, $headers)) // Envoi du message
		{
			header("Location: ../devis.php?retour=1");
		}
		else // Non envoyé
		{
			header("Location: ../devis.php?retour=0");
		}
	}

	//FONCTION envoie mail formulaire de operateur fichier
	function operateur()
	{

		$email = new PHPMailer();
		$email->From      = 'secretaria@unitedtelecom.fr';
		$email->FromName  = 'unitedtelecom';
		$email->Subject   = 'Operateur fichier';
		$email->Body      = 'nouveau fichier';
		$email->AddAddress( 'benjamin_bitton@hotmail.com' );

		$email->AddAttachment( $_FILES["facture"]["tmp_name"], $_FILES["facture"]["name"]);

		if ($email->Send()) // Envoi du message
		{
			header("Location: ../operateur.php?retour=1");
		}
		else // Non envoyé
		{
			header("Location: ../operateur.php?retour=0");
		}
	}
?>