<?php require_once __DIR__ . '/../config.php'; ?>
<!DOCTYPE html>
<html lang="vi">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RUNAI Project</title>
  <?php $time = time(); ?>
  <link rel="stylesheet" href="<?php echo BASE_URL; ?>css/tailwind.css?v=<?php echo time(); ?>">
  <link rel="stylesheet" href="<?php echo BASE_URL; ?>css/style.css?v=<?php echo time(); ?>">
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
    rel="stylesheet" />
</head>

<body class="bg-dark lightm:bg-white transition-all duration-500">
  <div class="bg_opacity fixed top-0 left-0 w-full h-full bg-dark-slate-transparent backdrop-sepia-2 z-8 hidden"></div>