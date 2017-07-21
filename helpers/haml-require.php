<?php

if (! isset($dir)) {
  $dir = __DIR__ . '/';
}
$dir .= '../';

require_once  $dir . 'vendor/autoload.php';

$haml = new MtHaml\Environment('php');
$executor = new MtHaml\Support\Php\Executor($haml, array(
  'cache' => sys_get_temp_dir().'/haml-'.get_current_user(),
));

if (! isset($args)) {
  $args = array();
}
$executor->display($template, $args);

?>