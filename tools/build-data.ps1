# ============================================================
# The Handbook · DeMolay — ensamblador de contenido
# Une los JSON de site/content/{modules,reference} en los
# archivos que carga el sitio: content/data.es.js y data.en.js
#
# Uso:  pwsh -File tools/build-data.ps1   (desde la carpeta site/)
#       o botón derecho > Run with PowerShell
# ============================================================
$ErrorActionPreference = 'Stop'

$site    = Split-Path -Parent $PSScriptRoot          # .../site
$modDir  = Join-Path $site 'content\modules'
$refDir  = Join-Path $site 'content\reference'
$outDir  = Join-Path $site 'content'

# Orden oficial de los módulos (debe coincidir con js/app.js)
$ORDER = @(
  'esencia','historia','membresia',
  'capitulo','oficiales','adultos','planificacion','actividades','reclutamiento','imagen',
  'seguridad','ritual',
  'organizacion','cuerpos','premios','fundar'
)

function Read-Json($path) {
  if (-not (Test-Path $path)) { Write-Warning "Falta: $path"; return $null }
  Get-Content $path -Raw -Encoding UTF8 | ConvertFrom-Json
}

$refFiles = @{
  glossary   = Join-Path $refDir 'glossary.json'
  awards     = Join-Path $refDir 'awards.json'
  offices    = Join-Path $refDir 'offices.json'
  calendar   = Join-Path $refDir 'calendar.json'
  procedures = Join-Path $refDir 'procedures.json'
  facts      = Join-Path $refDir 'facts.json'
}
$flashFile = Join-Path $refDir 'flashcards.json'

$refs  = @{}
foreach ($k in $refFiles.Keys) { $refs[$k] = Read-Json $refFiles[$k] }
$flash = Read-Json $flashFile

foreach ($lang in @('es','en')) {
  $modules = [ordered]@{}
  foreach ($id in $ORDER) {
    $m = Read-Json (Join-Path $modDir "$id.json")
    if ($null -ne $m -and $null -ne $m.$lang) { $modules[$id] = $m.$lang }
  }

  $reference = [ordered]@{}
  foreach ($k in @('glossary','awards','offices','calendar','procedures','facts')) {
    if ($null -ne $refs[$k] -and $null -ne $refs[$k].$lang) { $reference[$k] = $refs[$k].$lang }
  }

  $decks = @()
  if ($null -ne $flash -and $null -ne $flash.$lang -and $null -ne $flash.$lang.decks) {
    $decks = $flash.$lang.decks
  }

  $payload = [ordered]@{
    modules    = $modules
    reference  = $reference
    flashcards = $decks
  }

  $json = $payload | ConvertTo-Json -Depth 100 -Compress
  $js   = "window.HB_DATA = window.HB_DATA || {}; window.HB_DATA.$lang = $json;"
  $out  = Join-Path $outDir "data.$lang.js"
  [System.IO.File]::WriteAllText($out, $js, [System.Text.UTF8Encoding]::new($false))
  $kb = [math]::Round((Get-Item $out).Length / 1KB)
  Write-Host "OK  data.$lang.js  ($($modules.Count) modulos, $kb KB)"
}
Write-Host 'Listo. Abri index.html para ver el sitio actualizado.'
