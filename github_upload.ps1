[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$env:Path += ";C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI"

Set-Location -Path $PSScriptRoot

Write-Host "=====================================================" -ForegroundColor Cyan
Write-Host "   [말하는 가게비서] 깃허브(GitHub) 자동 저장 & 배포 도우미" -ForegroundColor Cyan
Write-Host "=====================================================" -ForegroundColor Cyan
Write-Host ""

$gh = "C:\Program Files\GitHub CLI\gh.exe"
$git = "C:\Program Files\Git\cmd\git.exe"

# 1. GitHub 로그인 확인
& $gh auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "1단계: 깃허브 계정 로그인이 필요합니다." -ForegroundColor Yellow
    Write-Host "아래에 나오는 8자리 일회용 코드를 복사한 뒤, Enter 키를 눌러 열리는 인터넷 창에 입력해 주세요!" -ForegroundColor Green
    Write-Host ""
    & $gh auth login --hostname github.com --git-protocol https --web
}

# 2. 변경사항 자동 커밋
& $git add -A
& $git commit -m "Update: 말하는 가게비서 홈페이지 업데이트" 2>&1 | Out-Null

# 3. 원격 저장소 확인 및 생성/푸시
$remote = & $git remote
if (-not $remote) {
    Write-Host ""
    Write-Host "2단계: 깃허브에 새 저장소(store-secretary)를 생성하고 파일들을 업로드합니다..." -ForegroundColor Yellow
    & $gh repo create store-secretary --public --source=. --remote=origin --push
} else {
    Write-Host ""
    Write-Host "2단계: 기존 깃허브 저장소에 최신 파일들을 업로드(Push)합니다..." -ForegroundColor Yellow
    & $git push -u origin main
}

Write-Host ""
Write-Host "✅ 깃허브 저장이 완료되었습니다! 브라우저에서 저장소를 엽니다..." -ForegroundColor Green
& $gh repo view --web
Write-Host ""
Read-Host "종료하려면 Enter 키를 누르세요"
