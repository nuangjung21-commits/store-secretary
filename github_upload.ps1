$env:Path += ";C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI"
Set-Location -LiteralPath $PSScriptRoot

Write-Host "=====================================================" -ForegroundColor Cyan
Write-Host "   [말하는 가게비서] 깃허브(GitHub) 자동 저장 & 배포 도우미" -ForegroundColor Cyan
Write-Host "=====================================================" -ForegroundColor Cyan
Write-Host ""

$gh = "C:\Program Files\GitHub CLI\gh.exe"
$git = "C:\Program Files\Git\cmd\git.exe"

& $gh auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "[1단계] 깃허브 계정 로그인이 필요합니다." -ForegroundColor Yellow
    Write-Host "화면에 나오는 8자리 일회용 번호(XXXX-XXXX)를 확인하시고 Enter 키를 누르면 인터넷 창이 열립니다!" -ForegroundColor Green
    Write-Host ""
    & $gh auth login --hostname github.com --git-protocol https --web
}

& $git add -A
& $git commit -m "Update: 말하는 가게비서 홈페이지 업데이트" 2>&1 | Out-Null

$remote = & $git remote
if (-not $remote) {
    Write-Host ""
    Write-Host "[2단계] 깃허브에 새 저장소(store-secretary)를 생성하고 파일들을 업로드합니다..." -ForegroundColor Yellow
    & $gh repo create store-secretary --public --source=. --remote=origin --push
} else {
    Write-Host ""
    Write-Host "[2단계] 기존 깃허브 저장소에 최신 파일들을 업로드(Push)합니다..." -ForegroundColor Yellow
    & $git push -u origin main
}

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ 깃허브 저장이 완료되었습니다! 인터넷 창에서 저장소를 엽니다..." -ForegroundColor Green
    & $gh repo view --web
} else {
    Write-Host ""
    Write-Host "⚠️ 업로드 중 확인이 필요합니다. 위 메시지를 확인해 주세요." -ForegroundColor Red
}

Write-Host ""
Read-Host "창을 닫으려면 Enter 키를 누르세요"