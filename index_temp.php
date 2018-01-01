<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">

  <link rel="stylesheet" href="dist/css/main.css">

  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script>window.html5 || document.write('<script src="js/vendor/html5shiv.js"><\/script>')</script>
  <![endif]-->
</head>
<body>
  <!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->

<main class="temp" role="main">
  
  <div class="backgrounds" role="presentation" aria-hidden="true">
    <?php 
    $image_url_large = "/2017/images/bg_large.jpg"; 
    $image_url_medium = "/2017/images/bg_medium.jpg"; 
    $image_url_small = "/2017/images/bg_small.jpg"; 
    ?>
    <div class="background size-large" style="background-image:url(<?php echo $image_url_large; ?>)"></div>
    <div class="background size-medium" style="background-image:url(<?php echo $image_url_medium; ?>)"></div>
    <div class="background size-small" style="background-image:url(<?php echo $image_url_small; ?>)"></div>
  </div>
  
  <div class="content">
    <h1>Web Site Coming Soon.</h1>

    <ul class="contact_methods">
      <li><a href="mailto:ying@cubedmelons.com">E-mail</a></li>
      <li><a href="https://www.linkedin.com/in/yinghe/" target="_blank">LinkedIn</a></li>
      <li><a href="https://github.com/Nunuu" target="_blank">GitHub</a></li>
    </ul>
  </div>

</main>

<?php include "footer.php"; ?>