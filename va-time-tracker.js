(function(){
if(document.getElementById('__va_tracker')){document.getElementById('__va_tracker').style.display='flex';return;}
var FONT=document.createElement('link');FONT.rel='stylesheet';FONT.href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Unbounded:wght@400;600&display=swap';document.head.appendChild(FONT);
var style=document.createElement('style');style.id='__va_style';style.textContent="#__va_tracker{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;display:flex;align-items:flex-start;justify-content:flex-end;background:rgba(5,7,10,.75);backdrop-filter:blur(4px);padding:20px}#__va_panel{background:#141720;border:1px solid #252a3a;border-radius:10px;width:760px;max-height:calc(100vh - 40px);display:flex;flex-direction:column;font-family:'JetBrains Mono',monospace;font-size:13px;color:#e8ecf5;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.6)}#__va_head{padding:16px 20px;border-bottom:1px solid #252a3a;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.__va_title{font-family:'Unbounded',sans-serif;font-size:14px;font-weight:600}.__va_title span{color:#4f7cff}.__va_close{background:none;border:none;color:#6b7590;font-size:20px;cursor:pointer;padding:0 6px;line-height:1;border-radius:4px}.__va_close:hover{background:#252a3a;color:#e8ecf5}#__va_body{overflow-y:auto;padding:16px 20px;flex:1}#__va_body::-webkit-scrollbar{width:5px}#__va_body::-webkit-scrollbar-track{background:#141720}#__va_body::-webkit-scrollbar-thumb{background:#252a3a;border-radius:3px}.__va_card{background:#1c2030;border:1px solid #252a3a;border-radius:7px;padding:14px 16px;margin-bottom:12px}.__va_label{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#6b7590;margin-bottom:10px;font-weight:500}.__va_token_row{display:flex;gap:8px;align-items:center}.__va_token_badge{font-size:11px;color:#6b7590;padding:4px 10px;border:1px solid #252a3a;border-radius:4px;cursor:pointer;background:none;font-family:'JetBrains Mono',monospace}.__va_token_badge:hover{border-color:#2a3f80;color:#4f7cff}.__va_token_badge.active{border-color:#2ecc8a;color:#2ecc8a}.__va_token_input{background:#141720;border:1px solid #252a3a;border-radius:4px;color:#e8ecf5;font-family:'JetBrains Mono',monospace;font-size:12px;padding:6px 10px;flex:1;outline:none}.__va_token_input:focus{border-color:#4f7cff}.__va_textarea{width:100%;background:#141720;border:1px solid #252a3a;border-radius:6px;color:#e8ecf5;font-family:'JetBrains Mono',monospace;font-size:13px;line-height:1.6;padding:12px 14px;resize:vertical;min-height:130px;outline:none}.__va_textarea:focus{border-color:#4f7cff}.__va_actions{display:flex;gap:8px;align-items:center;margin-top:10px;flex-wrap:wrap}.__va_btn{font-family:'Unbounded',sans-serif;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:9px 16px;border-radius:6px;border:none;cursor:pointer}.__va_btn_primary{background:#4f7cff;color:#fff}.__va_btn_primary:hover{background:#6b91ff}.__va_btn_primary:disabled{background:#2a3f80;color:#6b7590;cursor:not-allowed}.__va_btn_confirm{background:#2ecc8a;color:#0a2a1a}.__va_btn_confirm:hover{background:#3ddf9a}.__va_btn_confirm:disabled{background:#1a5c3f;color:#6b7590;cursor:not-allowed}.__va_btn_ghost{background:transparent;color:#6b7590;border:1px solid #252a3a}.__va_btn_ghost:hover{border-color:#2a3f80;color:#4f7cff}.__va_btn_sm{font-family:'JetBrains Mono',monospace;font-size:11px;padding:3px 10px;border-radius:4px;border:1px solid #252a3a;background:transparent;color:#6b7590;cursor:pointer}.__va_btn_sm:hover{border-color:#2a3f80;color:#4f7cff}.__va_issue_list{display:flex;flex-direction:column;gap:7px}.__va_row{background:#141720;border:1px solid #252a3a;border-radius:6px;padding:10px 12px;display:grid;grid-template-columns:20px 90px 1fr 30px;gap:8px;align-items:start;transition:opacity .2s,border-color .2s}.__va_row.loading{border-color:#2a3f80;opacity:.7}.__va_row.ready{border-color:#252a3a}.__va_row.disabled{opacity:.4}.__va_row.done{border-color:#2ecc8a;background:rgba(46,204,138,.05)}.__va_row.error{border-color:#ff4f6a;background:rgba(255,79,106,.05)}.__va_row.parse_error{border-color:#f5c842}.__va_row.skip_status{border-color:#6b3fa0;background:rgba(107,63,160,.05)}.__va_cb{width:14px;height:14px;cursor:pointer;margin-top:2px;accent-color:#4f7cff}.__va_key{font-weight:700;color:#4f7cff;font-size:12px;padding-top:1px}.__va_key a{color:inherit;text-decoration:none}.__va_key a:hover{text-decoration:underline}.__va_summary{color:#e8ecf5;font-size:12px;line-height:1.5;margin-bottom:5px}.__va_meta{display:flex;flex-wrap:wrap;gap:5px;align-items:center}.__va_tag{font-size:10px;padding:2px 6px;border-radius:3px;border:1px solid;white-space:nowrap}.__va_tag_status{border-color:#2a3f80;color:#4f7cff}.__va_tag_rc{border-color:#6b3fa0;color:#b47fea}.__va_tag_sp{border-color:#3a4060;color:#6b7590}.__va_tag_sp_new{border-color:#1a5c3f;color:#2ecc8a}.__va_tag_sp_zero{border-color:#5c4a10;color:#f5c842}.__va_clone_preview{font-size:11px;color:#6b7590;margin-top:7px;padding:7px 10px;background:#1c2030;border-left:2px solid #2a3f80;border-radius:0 4px 4px 0;line-height:1.5}.__va_clone_title{color:#e8ecf5;font-size:11px}.__va_spin{width:13px;height:13px;border:2px solid #2a3f80;border-top-color:#4f7cff;border-radius:50%;animation:__va_spin .6s linear infinite;display:inline-block}@keyframes __va_spin{to{transform:rotate(360deg)}}.__va_msg_ok{font-size:11px;color:#2ecc8a;margin-top:5px}.__va_msg_err{font-size:11px;color:#ff4f6a;margin-top:5px}.__va_msg_skip{font-size:11px;color:#6b7590;margin-top:4px;font-style:italic}.__va_msg_warn{font-size:11px;color:#f5c842;margin-top:4px}.__va_divider{border:none;border-top:1px solid #252a3a;margin:14px 0}.__va_preview_header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px}.__va_ph_left{display:flex;align-items:center;gap:12px}.__va_stats{display:flex;gap:14px;font-size:12px;color:#6b7590}.__va_stats b{color:#e8ecf5}.__va_log{background:#141720;border:1px solid #252a3a;border-radius:5px;padding:10px 12px;font-size:11px;line-height:1.7;max-height:140px;overflow-y:auto;color:#6b7590;margin-top:10px}.__va_log_ok{color:#2ecc8a}.__va_log_err{color:#ff4f6a}.__va_log_info{color:#4f7cff}.__va_log_skip{color:#3a4060}.__va_result{padding:12px 14px;border-radius:6px;font-size:12px;margin-top:10px}.__va_result_ok{background:rgba(46,204,138,.08);border:1px solid #1a5c3f;color:#2ecc8a}.__va_result_err{background:rgba(255,79,106,.08);border:1px solid #5c1a24;color:#ff4f6a}";document.head.appendChild(style);
var o=document.createElement('div');o.id='__va_tracker';o.innerHTML="<div id=\"__va_panel\">\n<div id=\"__va_head\"><div class=\"__va_title\">Учёт <span>времени</span></div><button class=\"__va_close\" onclick=\"document.getElementById('__va_tracker').style.display='none'\">✕</button></div>\n<div id=\"__va_body\">\n<div class=\"__va_card\"><div class=\"__va_label\">Токен</div><div class=\"__va_token_row\">\n  <button class=\"__va_token_badge\" id=\"__va_tbadge\" onclick=\"__vaToggleToken()\">⚙ Токен</button>\n  <input class=\"__va_token_input\" id=\"__va_tinput\" type=\"password\" placeholder=\"Jira API token\" style=\"display:none\" onkeydown=\"if(event.key==='Enter')__vaSaveToken()\">\n  <button class=\"__va_btn __va_btn_primary\" id=\"__va_tsave\" style=\"display:none;font-size:10px;padding:7px 12px\" onclick=\"__vaSaveToken()\">Сохранить</button>\n</div></div>\n<div class=\"__va_card\"><div class=\"__va_label\">Список задач</div>\n  <textarea class=\"__va_textarea\" id=\"__va_input\" placeholder=\"VA-12732 2/0&#10;VA-9079 7/0&#10;VA-12387 2/0\"></textarea>\n  <div class=\"__va_actions\">\n    <button class=\"__va_btn __va_btn_primary\" id=\"__va_parse_btn\" onclick=\"__vaParse()\">▶ Проверить задачи</button>\n    <span id=\"__va_parse_status\" style=\"color:#6b7590;font-size:12px\"></span>\n  </div>\n</div>\n<div id=\"__va_preview\" style=\"display:none\"><div class=\"__va_card\">\n  <div class=\"__va_preview_header\">\n    <div class=\"__va_ph_left\">\n      <div class=\"__va_label\" style=\"margin:0\">Превью операций</div>\n      <button class=\"__va_btn_sm\" onclick=\"__vaSelectAll(true)\">✓ Все</button>\n      <button class=\"__va_btn_sm\" onclick=\"__vaSelectAll(false)\">✕ Снять</button>\n    </div>\n    <div class=\"__va_stats\" id=\"__va_stats\"></div>\n  </div>\n  <div class=\"__va_issue_list\" id=\"__va_list\"></div>\n  <hr class=\"__va_divider\">\n  <div class=\"__va_actions\">\n    <button class=\"__va_btn __va_btn_confirm\" id=\"__va_confirm\" onclick=\"__vaRunAll()\" disabled>✓ Выполнить отмеченные</button>\n    <button class=\"__va_btn __va_btn_ghost\" onclick=\"__vaReset()\">Сбросить</button>\n    <span id=\"__va_run_status\" style=\"color:#6b7590;font-size:12px\"></span>\n  </div>\n  <div id=\"__va_result\" style=\"display:none\"></div>\n  <div class=\"__va_log\" id=\"__va_log\" style=\"display:none\"></div>\n</div></div>\n</div></div>";document.body.appendChild(o);

var TK='jira_token_va';
var SKIP_CLONE=['rc','done'];
var SM={
  'в работе':'IN_PROGRESS','in progress':'IN_PROGRESS',
  'qa: smoke':'QA: SMOKE','qa: смоки':'QA: SMOKE',
  'приостановлено':'PAUSED','paused':'PAUSED',
  'qa: в работе':'QA: IN_PROGRESS','qa: in progress':'QA: IN_PROGRESS',
  'review':'REVIEW',
  'сборка/архнадзор':'АрхНадзор','архнадзор':'АрхНадзор',
  'сборка/архитектурный надзор':'АрхНадзор',
  'сборка / архнадзор':'АрхНадзор',
  'сборка / архитектурный надзор':'АрхНадзор',
  'qa: regress':'QA: REGRESS','qa: регресс':'QA: REGRESS'
};
window.__vaItems=[];
window.__vaGetToken=function(){return document.getElementById('__va_tinput').value.trim()||localStorage.getItem(TK)||'';};
window.__vaToggleToken=function(){var i=document.getElementById('__va_tinput'),s=document.getElementById('__va_tsave');var op=i.style.display==='none';i.style.display=op?'block':'none';s.style.display=op?'block':'none';if(op){var t=localStorage.getItem(TK);if(t)i.value=t;i.focus();}};
window.__vaSaveToken=function(){var t=document.getElementById('__va_tinput').value.trim();if(!t)return;localStorage.setItem(TK,t);document.getElementById('__va_tinput').style.display='none';document.getElementById('__va_tsave').style.display='none';var b=document.getElementById('__va_tbadge');b.textContent='✓ Токен';b.classList.add('active');__vaLog('info','Токен сохранён');};
window.__vaH=function(){return{'Authorization':'Bearer '+__vaGetToken(),'Content-Type':'application/json'};};
window.__vaFetch=async function(p,opts){
  var r=await fetch(p,{headers:__vaH(),...(opts||{})});
  if(!r.ok){var t=await r.text();throw new Error(r.status+': '+t.slice(0,300));}
  if(r.status===204)return null;
  try{var txt=await r.text();return txt?JSON.parse(txt):null;}catch(e){return null;}
};
window.__vaSL=function(s){return SM[(s||'').toLowerCase().trim()]||s;};
window.__vaSkip=function(s){return SKIP_CLONE.includes((s||'').toLowerCase().trim());};
window.__vaPI=function(raw){return raw.split('\n').map(l=>l.trim()).filter(Boolean).map(line=>{var urlMatch=line.match(//browse/([A-Z]+-\d+)/i);var keyMatch=line.match(/^([A-Z]+-\d+)/i);var key=urlMatch?urlMatch[1].toUpperCase():(keyMatch?keyMatch[1].toUpperCase():null);var spMatch=line.match(/(\d+)\/(\d+)/);if(!key||!spMatch)return line.length?{raw:line,error:'Не удалось распознать'}:null;return{key:key,spNew:parseInt(spMatch[1]),spOrig:parseInt(spMatch[2]),raw:line};}).filter(Boolean);};
window.__vaE=function(s){return(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');};
window.__vaLog=function(type,msg){var el=document.getElementById('__va_log');el.style.display='block';var d=document.createElement('div');d.className=type==='ok'?'__va_log_ok':type==='err'?'__va_log_err':type==='skip'?'__va_log_skip':'__va_log_info';d.textContent='['+new Date().toLocaleTimeString('ru',{hour12:false})+'] '+msg;el.appendChild(d);el.scrollTop=el.scrollHeight;};
window.__vaCbChange=function(i){var row=document.getElementById('__va_row_'+i);var cb=document.getElementById('__va_cb_'+i);if(row)row.classList.toggle('disabled',!cb.checked);__vaUpdateBtn();};
window.__vaUpdateBtn=function(){var ok=__vaItems.some(function(it,i){if(!it.key||!it.jira||it.loadError)return false;var cb=document.getElementById('__va_cb_'+i);return cb&&cb.checked;});document.getElementById('__va_confirm').disabled=!ok;};
window.__vaSelectAll=function(v){__vaItems.forEach(function(it,i){if(!it.key||!it.jira||it.loadError)return;var cb=document.getElementById('__va_cb_'+i);var row=document.getElementById('__va_row_'+i);if(cb)cb.checked=v;if(row)row.classList.toggle('disabled',!v);});__vaUpdateBtn();};
window.__vaParse=async function(){
  var raw=document.getElementById('__va_input').value;if(!raw.trim())return;
  if(!__vaGetToken()){alert('Введите токен');__vaToggleToken();return;}
  var parsed=__vaPI(raw);if(!parsed.length)return;
  __vaItems=parsed;
  document.getElementById('__va_preview').style.display='block';
  document.getElementById('__va_list').innerHTML='';
  document.getElementById('__va_confirm').disabled=true;
  document.getElementById('__va_result').style.display='none';
  document.getElementById('__va_log').style.display='none';document.getElementById('__va_log').innerHTML='';
  document.getElementById('__va_parse_btn').disabled=true;
  document.getElementById('__va_parse_status').textContent='Загружаю из Jira…';
  __vaRenderRows(parsed);
  await __vaLoadAll(parsed);
  document.getElementById('__va_parse_btn').disabled=false;
  document.getElementById('__va_parse_status').textContent='';
};
window.__vaRenderRows=function(items){
  var list=document.getElementById('__va_list');list.innerHTML='';
  items.forEach(function(item,i){
    var row=document.createElement('div');
    row.className='__va_row '+(item.error&&!item.key?'parse_error':'loading');
    row.id='__va_row_'+i;
    if(!item.key){
      row.innerHTML='<div></div><div class="__va_key" style="color:#f5c842">—</div><div><div class="__va_summary" style="color:#6b7590">'+__vaE(item.raw)+'</div><div class="__va_msg_err">⚠ '+__vaE(item.error)+'</div></div><div>⚠️</div>';
    }else{
      row.innerHTML='<input type="checkbox" class="__va_cb" id="__va_cb_'+i+'" checked onchange="__vaCbChange('+i+')" disabled>'
        +'<div class="__va_key"><a href="/browse/'+item.key+'" target="_blank">'+item.key+'</a></div>'
        +'<div><div class="__va_summary" style="color:#3a4060">Загружаю…</div></div>'
        +'<div><div class="__va_spin"></div></div>';
    }
    list.appendChild(row);
  });
};
window.__vaLoadAll=async function(items){
  var activeSprint=null;
  try{
    var sr=await __vaFetch('/rest/api/2/search?jql=project=VA AND sprint in openSprints()&maxResults=1&fields=customfield_10001');
    var spRaw=(sr.issues[0]&&sr.issues[0].fields.customfield_10001)||[];
    var ac=spRaw.find(function(s){return s.indexOf('state=ACTIVE')>-1;});
    var m=ac&&ac.match(/id=(\d+)/);
    activeSprint=m?parseInt(m[1]):null;
  }catch(e){}
  await Promise.all(items.map(async function(item,i){
    if(!item.key)return;
    try{
      var d=await __vaFetch('/rest/api/2/issue/'+item.key+'?fields=summary,status,customfield_10100,customfield_10001,issuetype,project,priority,assignee,components,labels,issuelinks');
      item.jira=d.fields;
      item.statusLabel=__vaSL(d.fields.status&&d.fields.status.name);
      item.isSkipStatus=__vaSkip(d.fields.status&&d.fields.status.name);
      var spRaw=d.fields.customfield_10001||[];
      var ac=spRaw.find(function(s){return s.indexOf('state=ACTIVE')>-1;});
      var src=ac||spRaw[spRaw.length-1];
      var sm=src&&src.match(/id=(\d+)/);
      item.sprintId=sm?parseInt(sm[1]):null;
      var cur=d.fields.customfield_10100;
      item.skipOriginal=(cur===0||cur===null||cur===undefined);
      item.hasCloneInActiveSprint=false;
      if(activeSprint){
        var links=(d.fields.issuelinks||[]).filter(function(l){return l.type&&l.type.name==='Cloners'&&l.inwardIssue&&(l.inwardIssue.fields&&l.inwardIssue.fields.summary||'').includes('// учёт времени');});
        if(links.length){
          var checks=await Promise.all(links.map(async function(l){
            try{var cd=await __vaFetch('/rest/api/2/issue/'+l.inwardIssue.key+'?fields=customfield_10001');var cs=cd.fields.customfield_10001||[];return cs.some(function(s){var cm=s.match(/id=(\d+)/);return cm&&parseInt(cm[1])===activeSprint;});}catch(e){return false;}
          }));
          item.hasCloneInActiveSprint=checks.some(Boolean);
        }
      }
      __vaUpdateRow(i,item);
    }catch(e){item.loadError=e.message;__vaUpdateRowErr(i,item);}
  }));
  __vaUpdateStats();
  __vaUpdateBtn();
};
window.__vaUpdateRow=function(i,item){
  var row=document.getElementById('__va_row_'+i);if(!row)return;
  var f=item.jira,s=f.summary||'',sl=item.statusLabel;
  var cur=f.customfield_10100!=null?f.customfield_10100:'—';
  var cbChecked=!item.hasCloneInActiveSprint;
  row.className='__va_row '+(item.isSkipStatus?'skip_status':'ready')+(cbChecked?'':' disabled');
  var cb=document.getElementById('__va_cb_'+i);if(cb){cb.checked=cbChecked;cb.disabled=false;}
  var stCls=item.isSkipStatus?'__va_tag_rc':'__va_tag_status';
  var spTag=item.isSkipStatus
    ?'<span class="__va_tag __va_tag_sp_new">SP оригинал → '+item.spNew+'</span>'
    :(item.skipOriginal?'<span class="__va_tag __va_tag_sp">SP оригинал: уже 0</span>':'<span class="__va_tag __va_tag_sp_zero">SP оригинал: '+item.spOrig+'</span>');
  var cloneBlock=item.isSkipStatus?''
    :'<div class="__va_clone_preview"><div style="color:#3a4060;font-size:10px;margin-bottom:2px">СОЗДАТЬ КЛОН → Done:</div><div class="__va_clone_title">'+__vaE('['+sl+'] '+s+' // учёт времени')+'</div></div>';
  var warns='';
  if(item.isSkipStatus)warns+='<div class="__va_msg_warn">⚡ RC/Done — клон не создаём, SP оригинала → '+item.spNew+'</div>';
  if(item.hasCloneInActiveSprint)warns+='<div class="__va_msg_warn">⚠ Уже есть клон в текущем спринте — чекбокс снят</div>';
  if(!item.isSkipStatus&&item.skipOriginal)warns+='<div class="__va_msg_skip">↩ SP оригинала не меняем (уже 0)</div>';
  var bodyHtml='<div class="__va_summary">'+__vaE(s)+'</div>'
    +'<div class="__va_meta"><span class="__va_tag '+stCls+'">'+__vaE(sl||'')+'</span>'
    +'<span class="__va_tag __va_tag_sp">SP: '+cur+'</span>'
    +(item.isSkipStatus?'':'<span class="__va_tag __va_tag_sp_new">Клон SP: '+item.spNew+'</span>')
    +spTag+'</div>'+cloneBlock+warns;
  var cells=row.querySelectorAll(':scope > div');
  if(cells[1])cells[1].innerHTML=bodyHtml;
  var ic=row.querySelector(':scope > div:last-child');
  if(ic)ic.innerHTML=item.isSkipStatus?'⚡':'🔵';
};
window.__vaUpdateRowErr=function(i,item){
  var row=document.getElementById('__va_row_'+i);if(!row)return;
  row.className='__va_row error';
  var cb=document.getElementById('__va_cb_'+i);if(cb){cb.checked=false;cb.disabled=true;}
  row.innerHTML='<div></div><div class="__va_key"><a href="/browse/'+item.key+'" target="_blank">'+item.key+'</a></div><div><div class="__va_summary" style="color:#6b7590">'+__vaE(item.raw)+'</div><div class="__va_msg_err">✗ '+__vaE(item.loadError)+'</div></div><div>❌</div>';
};
window.__vaUpdateStats=function(){
  var t=__vaItems.filter(function(i){return i.key;}).length;
  var e=__vaItems.filter(function(i){return i.loadError;}).length;
  var rc=__vaItems.filter(function(i){return i.jira&&i.isSkipStatus;}).length;
  var dup=__vaItems.filter(function(i){return i.jira&&i.hasCloneInActiveSprint;}).length;
  document.getElementById('__va_stats').innerHTML='<span>Задач: <b>'+t+'</b></span>'+(e?'<span style="color:#ff4f6a">Ошибок: <b>'+e+'</b></span>':'')+(rc?'<span style="color:#b47fea">RC/Done: <b>'+rc+'</b></span>':'')+(dup?'<span style="color:#f5c842">Дубли: <b>'+dup+'</b></span>':'');
};
window.__vaRunAll=async function(){
  document.getElementById('__va_confirm').disabled=true;
  document.getElementById('__va_run_status').textContent='Выполняю…';
  document.getElementById('__va_result').style.display='none';
  var ok=0,fail=0,skip=0;
  for(var idx=0;idx<__vaItems.length;idx++){
    var item=__vaItems[idx];
    if(!item.key||!item.jira||item.loadError)continue;
    var cb=document.getElementById('__va_cb_'+idx);
    if(!cb||!cb.checked){skip++;continue;}
    __vaSetL(idx);
    try{await __vaProc(item);__vaSetD(idx,item);ok++;}
    catch(e){__vaSetF(idx,item,e.message);fail++;}
  }
  document.getElementById('__va_run_status').textContent='';
  var res=document.getElementById('__va_result');
  res.style.display='block';
  res.className=fail?'__va_result __va_result_err':'__va_result __va_result_ok';
  res.textContent=fail?'⚠ Выполнено: '+ok+', ошибок: '+fail+(skip?', пропущено: '+skip:''):'✓ Готово! Обработано: '+ok+(skip?', пропущено: '+skip:'');
};
window.__vaProc=async function(item){
  var f=item.jira,s=f.summary||'',sl=item.statusLabel;
  if(item.isSkipStatus){
    // RC/Done: всегда ставим spNew в оригинал (левое число)
    await __vaFetch('/rest/api/2/issue/'+item.key,{method:'PUT',body:JSON.stringify({fields:{customfield_10100:item.spNew}})});
    __vaLog('ok',item.key+' [RC/Done] SP → '+item.spNew);
    return;
  }
  var body={fields:{project:{key:(f.project&&f.project.key)||'VA'},summary:'['+sl+'] '+s+' // учёт времени',issuetype:{id:f.issuetype&&f.issuetype.id},customfield_10100:item.spNew}};
  if(item.sprintId)body.fields.customfield_10001=item.sprintId;
  if(f.assignee&&f.assignee.name)body.fields.assignee={name:f.assignee.name};
  if(f.priority&&f.priority.id)body.fields.priority={id:f.priority.id};
  if(f.components&&f.components.length)body.fields.components=f.components.map(function(c){return{id:c.id};});
  if(f.labels&&f.labels.length)body.fields.labels=f.labels;
  var cr=await __vaFetch('/rest/api/2/issue',{method:'POST',body:JSON.stringify(body)});
  item.cloneKey=cr.key;
  __vaLog('info',item.key+' → клон '+cr.key);
  await __vaFetch('/rest/api/2/issueLink',{method:'POST',body:JSON.stringify({type:{name:'Cloners'},inwardIssue:{key:cr.key},outwardIssue:{key:item.key}})});
  __vaLog('info',item.key+' ↔ '+cr.key+' Cloners');
  await __vaFetch('/rest/api/2/issue/'+cr.key+'/transitions',{method:'POST',body:JSON.stringify({transition:{id:'381'}})});
  __vaLog('ok',cr.key+' → Done');
  if(!item.skipOriginal){
    await __vaFetch('/rest/api/2/issue/'+item.key,{method:'PUT',body:JSON.stringify({fields:{customfield_10100:item.spOrig}})});
    __vaLog('ok',item.key+' SP → '+item.spOrig);
  }else{__vaLog('skip',item.key+' SP уже 0, пропуск');}
};
window.__vaSetL=function(i){var r=document.getElementById('__va_row_'+i);if(r){r.className='__va_row loading';var c=r.querySelector('div:last-child');if(c)c.innerHTML='<div class="__va_spin"></div>';}};
window.__vaSetD=function(i,item){
  var r=document.getElementById('__va_row_'+i);if(!r)return;r.className='__va_row done';
  var c=r.querySelector('div:last-child');if(c)c.innerHTML='✅';
  var cells=r.querySelectorAll(':scope > div');
  if(cells[2]){var m=document.createElement('div');m.className='__va_msg_ok';
    if(item.cloneKey)m.innerHTML='✓ <a href="/browse/'+item.cloneKey+'" target="_blank" style="color:#2ecc8a">'+item.cloneKey+'</a> → Done'+(item.skipOriginal?'':' · SP оригинала → '+item.spOrig);
    else m.textContent='✓ SP → '+item.spNew;
    cells[2].appendChild(m);}
};
window.__vaSetF=function(i,item,err){
  var r=document.getElementById('__va_row_'+i);if(!r)return;r.className='__va_row error';
  var c=r.querySelector('div:last-child');if(c)c.innerHTML='❌';
  __vaLog('err',item.key+' ERR: '+err);
  var cells=r.querySelectorAll(':scope > div');
  if(cells[2]){var m=document.createElement('div');m.className='__va_msg_err';m.textContent='✗ '+err;cells[2].appendChild(m);}
};
window.__vaReset=function(){__vaItems=[];document.getElementById('__va_preview').style.display='none';document.getElementById('__va_list').innerHTML='';document.getElementById('__va_log').innerHTML='';document.getElementById('__va_input').value='';document.getElementById('__va_confirm').disabled=true;};
var sv=localStorage.getItem(TK);if(sv){document.getElementById('__va_tinput').value=sv;var b=document.getElementById('__va_tbadge');b.textContent='✓ Токен';b.classList.add('active');}
})();