/**
 * 홈페이지 견적/상담 문의 접수 및 자동 메일 발송 Google Apps Script
 *
 * 시트 컬럼 순서 (A열 ~ J열):
 * A: 접수일시(timestamp)
 * B: 기관명(institution)
 * C: 담당자명(name)
 * D: 연락처(phone)
 * E: 이메일(email)
 * F: 문의유형(category)
 * G: 인원수량(count)
 * H: 희망날짜(date)
 * I: 예산(budget)
 * J: 문의내용(message)
 */

const ADMIN_EMAIL = 'dwn21@naver.com'; // 관리자 수신 이메일

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // 동시 입력 시 행 충돌 방지

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // 1. 시트 첫 행(헤더)이 비어있으면 A~J열 헤더 자동 생성
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        '접수일시',
        '기관명',
        '담당자명',
        '연락처',
        '이메일',
        '문의유형',
        '인원수량',
        '희망날짜',
        '예산',
        '문의내용'
      ]);
    }

    // 2. HTML FormData(e.parameter) 또는 JSON(e.postData.contents) 데이터 파싱
    let params = {};
    if (e.parameter && Object.keys(e.parameter).length > 0) {
      params = e.parameter;
    } else if (e.postData && e.postData.contents) {
      try {
        params = JSON.parse(e.postData.contents);
      } catch (err) {
        params = {};
      }
    }

    const timestamp = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');
    const institution = (params.institution || '').trim();
    const name = (params.name || '').trim();
    const phone = (params.phone || '').trim();
    const email = (params.email || '').trim();
    const category = (params.category || '').trim();
    const count = (params.count || '').trim();
    const date = (params.date || '미정').trim();
    const budget = (params.budget || '미정').trim();
    const message = (params.message || '-').trim();

    // 3. 시트 마지막 행에 안전하게 추가 (A~J열)
    sheet.appendRow([
      timestamp,
      institution,
      name,
      phone,
      email,
      category,
      count,
      date,
      budget,
      message
    ]);

    // 4. 관리자(dwn21@naver.com)에게 즉시 알림 메일 발송
    const adminSubject = `[신규 문의 접수] ${institution} (${name} 님) - ${category}`;
    const adminBody = [
      '홈페이지에서 새로운 견적/상담 문의가 접수되었습니다.',
      '--------------------------------------------------',
      `• 접수일시 : ${timestamp}`,
      `• 기관명/상호 : ${institution}`,
      `• 담당자명 : ${name}`,
      `• 연락처 : ${phone}`,
      `• 이메일 : ${email}`,
      `• 문의유형 : ${category}`,
      `• 인원/수량 : ${count}`,
      `• 희망날짜 : ${date}`,
      `• 예산 : ${budget}`,
      `• 문의내용 :\n${message}`,
      '--------------------------------------------------'
    ].join('\n');

    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      replyTo: email || ADMIN_EMAIL,
      subject: adminSubject,
      body: adminBody
    });

    // 5. 고객(email 열 주소)에게 자동 회신 메일 발송
    if (email) {
      const customerSubject = `[접수 완료] ${institution} ${name} 님, 문의가 정상적으로 접수되었습니다.`;
      const customerBody = [
        `안녕하세요, ${institution} ${name} 님.`,
        '',
        '접수가 정상적으로 완료되었으며, 내용 검토 후 이틀 안에 맞춤 제안서를 보내드리겠습니다.',
        '',
        '[접수하신 문의 내역]',
        `• 기관명/상호 : ${institution}`,
        `• 담당자명 : ${name}`,
        `• 연락처 : ${phone}`,
        `• 문의유형 : ${category}`,
        `• 인원/수량 : ${count}`,
        `• 희망날짜 : ${date}`,
        `• 예산 : ${budget}`,
        `• 문의내용 : ${message}`,
        '',
        '감사합니다.'
      ].join('\n');

      MailApp.sendEmail({
        to: email,
        subject: customerSubject,
        body: customerBody
      });
    }

    // 6. CORS 에러 방지를 위한 JSON 응답 반환
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', timestamp: timestamp }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
