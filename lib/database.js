const _0x397745=_0x40bc;(function(_0x12bf90,_0x118969){const _0x34062c=_0x40bc,_0x3f3058=_0x12bf90();while(!![]){try{const _0x16d7ff=-parseInt(_0x34062c(0xd9))/0x1*(-parseInt(_0x34062c(0xdc))/0x2)+parseInt(_0x34062c(0xa9))/0x3*(parseInt(_0x34062c(0xcd))/0x4)+parseInt(_0x34062c(0xce))/0x5+-parseInt(_0x34062c(0xdb))/0x6+-parseInt(_0x34062c(0xe6))/0x7+parseInt(_0x34062c(0xe4))/0x8+-parseInt(_0x34062c(0xb7))/0x9;if(_0x16d7ff===_0x118969)break;else _0x3f3058['push'](_0x3f3058['shift']());}catch(_0x53c1e3){_0x3f3058['push'](_0x3f3058['shift']());}}}(_0x1ddb,0xa296f));const fetch=require('node-fetch'),axios=require('axios'),config=require(_0x397745(0xa5)),userName=config[_0x397745(0xea)],token=config['GITHUB_AUTH_TOKEN'],repoName=_0x397745(0xd4);async function githubApiRequest(_0x53e7f7,_0x3d8364='GET',_0x5b04d5={}){const _0x253d0b=_0x397745;try{const _0xedf6f3={'method':_0x3d8364,'headers':{'Authorization':_0x253d0b(0xcb)+Buffer[_0x253d0b(0xcc)](userName+':'+token)[_0x253d0b(0xb0)](_0x253d0b(0xd2)),'Content-Type':_0x253d0b(0xc9)}};_0x3d8364===_0x253d0b(0xd8)||_0x3d8364===_0x253d0b(0xc4)?delete _0xedf6f3[_0x253d0b(0xe0)]:_0xedf6f3[_0x253d0b(0xe0)]=JSON[_0x253d0b(0xcf)](_0x5b04d5);const _0x3f411d=await fetch(_0x53e7f7,_0xedf6f3);return await _0x3f411d[_0x253d0b(0xab)]();}catch(_0x500ec4){throw new Error(_0x253d0b(0xbe)+_0x500ec4[_0x253d0b(0xc5)]);}}async function checkRepoAvailability(){const _0x3e8d8f=_0x397745;try{const _0xe17de0=_0x3e8d8f(0xa8)+userName+'/'+repoName,_0x301e5b={'Authorization':'Bearer\x20'+token},_0x10a861=await axios[_0x3e8d8f(0xc7)](_0xe17de0,{'headers':_0x301e5b});return _0x10a861[_0x3e8d8f(0xaf)]===0xc8?!![]:![];}catch(_0x18f675){if(_0x18f675[_0x3e8d8f(0xc2)]&&_0x18f675[_0x3e8d8f(0xc2)][_0x3e8d8f(0xaf)]===0x194)return![];else console[_0x3e8d8f(0xe7)](_0x3e8d8f(0xeb),_0x18f675[_0x3e8d8f(0xc5)]);}}async function githubSearchFile(_0xcbee90,_0xb50311){const _0xca107c=_0x397745,_0x2af12c=_0xca107c(0xa8)+userName+'/'+repoName+_0xca107c(0xac)+_0xcbee90+'?ref=main',_0x45bac4=await githubApiRequest(_0x2af12c);return _0x45bac4[_0xca107c(0xc1)](_0x36e09e=>_0x36e09e[_0xca107c(0xd1)]===_0xb50311);}async function githubCreateNewFile(_0x5ae78a,_0x4f0870,_0x3b8a1c){const _0x1f3510=_0x397745,_0x17dc0c=_0x1f3510(0xa8)+userName+'/'+repoName+_0x1f3510(0xac)+_0x5ae78a+'/'+_0x4f0870,_0x58a300={'message':_0x1f3510(0xe3)+_0x4f0870,'content':Buffer[_0x1f3510(0xcc)](_0x3b8a1c)[_0x1f3510(0xb0)](_0x1f3510(0xd2))};return await githubApiRequest(_0x17dc0c,_0x1f3510(0xa6),_0x58a300);}async function githubDeleteFile(_0x4d3f8b,_0x59f324){const _0x20f4d1=_0x397745,_0x28ea69=await githubSearchFile(_0x4d3f8b,_0x59f324);if(!_0x28ea69)throw new Error(_0x20f4d1(0xa7));const _0x2608b3=_0x20f4d1(0xa8)+userName+'/'+repoName+_0x20f4d1(0xac)+_0x4d3f8b+'/'+_0x59f324,_0x2c6fab={'message':_0x20f4d1(0xd7)+_0x59f324,'sha':_0x28ea69['sha']};await githubApiRequest(_0x2608b3,_0x20f4d1(0xe2),_0x2c6fab);}async function githubGetFileContent(_0x57c9de,_0x2fc7be){const _0x2ba008=await githubSearchFile(_0x57c9de,_0x2fc7be);if(!_0x2ba008)throw new Error('File\x20not\x20found\x20on\x20GitHub.');const _0x4cd457=_0x2ba008['download_url'],_0x505de9=await fetch(_0x4cd457);return await _0x505de9['text']();}async function githubClearAndWriteFile(_0x111d5e,_0x380b09,_0x41ff19){const _0x320de7=_0x397745,_0x59a50b=await githubSearchFile(_0x111d5e,_0x380b09);if(!_0x59a50b)await githubCreateNewFile(_0x380b09,_0x41ff19);else{const _0x8240b6='https://api.github.com/repos/'+userName+'/'+repoName+'/contents/'+_0x111d5e+'/'+_0x380b09,_0x46f814={'message':_0x320de7(0xd5)+_0x380b09,'content':Buffer[_0x320de7(0xcc)](_0x41ff19)[_0x320de7(0xb0)](_0x320de7(0xd2)),'sha':_0x59a50b[_0x320de7(0xa0)]};return await githubApiRequest(_0x8240b6,_0x320de7(0xa6),_0x46f814);}}function _0x40bc(_0x3b3ac7,_0x458b8d){const _0x1ddb2b=_0x1ddb();return _0x40bc=function(_0x40bc94,_0x25259b){_0x40bc94=_0x40bc94-0xa0;let _0x127b4c=_0x1ddb2b[_0x40bc94];return _0x127b4c;},_0x40bc(_0x3b3ac7,_0x458b8d);}async function githubDeleteAndUploadFile(_0x3b3064,_0x4ec664){await githubDeleteFile(_0x3b3064),await githubCreateNewFile(_0x3b3064,_0x4ec664);}async function updateCMDStore(_0x1c65a2,_0x4371cf){const _0x23c437=_0x397745;try{let _0x1c4ef8=JSON['parse'](await githubGetFileContent(_0x23c437(0xa2),_0x23c437(0xbd)));_0x1c4ef8['push']({[_0x1c65a2]:_0x4371cf});var _0x4605e3=await githubClearAndWriteFile('Non-Btn',_0x23c437(0xbd),JSON['stringify'](_0x1c4ef8,null,0x2));return!![];}catch(_0x530b7f){return console[_0x23c437(0xca)](_0x530b7f),![];}}async function isbtnID(_0x19843a){const _0x1d7bcb=_0x397745;try{let _0x1ca2a1=JSON[_0x1d7bcb(0xe1)](await githubGetFileContent(_0x1d7bcb(0xa2),_0x1d7bcb(0xbd))),_0x5d80cd=null;for(const _0x48f4eb of _0x1ca2a1){if(_0x48f4eb[_0x19843a]){_0x5d80cd=_0x48f4eb[_0x19843a];break;}}if(_0x5d80cd)return!![];else return![];}catch(_0x216e08){return![];}}async function getCMDStore(_0x32c499){const _0x20d9b1=_0x397745;try{let _0x367949=JSON[_0x20d9b1(0xe1)](await githubGetFileContent(_0x20d9b1(0xa2),_0x20d9b1(0xbd))),_0x2a9cb4=null;for(const _0x3746cb of _0x367949){if(_0x3746cb[_0x32c499]){_0x2a9cb4=_0x3746cb[_0x32c499];break;}}return _0x2a9cb4;}catch(_0x1b7345){return console['log'](_0x1b7345),![];}}function _0x1ddb(){const _0x1f6800=['2604422CzXkPO','AUTO_REPLY','PREFIX','*🐱\x20THIS\x20IS\x20SEON\x20MD\x20WHATSAPP\x20USER\x20BOT.*\x0a\x0a*➠\x20OWNER:*\x20Cyber\x20Dark\x20Maker\x20\x0a*➠\x20SUPPORT:*\x20https://chat.whatsapp.com/EmDrIWO173YDRATGsbZd2h\x0a*➠\x20GITHUB:*\x20https://github.com/SEON-MD/SEON-MD-V2\x0a*➠\x20VERSION:*\x202.0.0\x0a*➠\x20RELEASE\x20DATE:*\x202024/12/23\x0a\x0a*😻\x20THANK\x20YOU\x20FOR\x20USING\x20SEON\x20MD.✔*\x0a\x0a\x0a>\x20*Made\x20By\x20Dark\x20Cyber\x20Maker\x20™*','body','parse','DELETE','Create\x20new\x20file:\x20','6013904eQXGwt','Bearer\x20','8440782lFfAKv','error','Database\x20connected\x20🛢️','settings.json','GITHUB_USERNAME','Error:','sha','true','Non-Btn','AUTO_REACT','ANTI_BAD','../config','PUT','File\x20not\x20found\x20on\x20GitHub.','https://api.github.com/repos/','701247YueYZR','AUTO_VOICE','json','/contents/','post','ALIVE_IMG','status','toString','READ_CMD','Database\x20\x22','exports','ANTI_BOT','Database\x20writed\x20✅','settings','11577807lNDvkc','cmd','https://i.ibb.co/SQR4bCd/20241128-154521.jpg','public','AUTO_READ_STATUS','AUTO_STICKER','data.json','GitHub\x20API\x20request\x20failed:\x20','ALIVE_MSG','ALLWAYS_OFFLINE','find','response','RECORDING','HEAD','message','SUDO','get','MODE','application/json','log','Basic\x20','from','16fIhNSS','3129420agmxrk','stringify','false','name','base64','cmdId','SEON-MD-DB','Modify\x20file:\x20','94742195461','Delete\x20file:\x20','GET','1JLzQSu','ANTI_LINK','2739678TXJIDM'];_0x1ddb=function(){return _0x1f6800;};return _0x1ddb();}function getCmdForCmdId(_0x1f353b,_0x4fed76){const _0x1cbd56=_0x397745,_0x65d93f=_0x1f353b[_0x1cbd56(0xc1)](_0x5f3a89=>_0x5f3a89[_0x1cbd56(0xd3)]===_0x4fed76);return _0x65d93f?_0x65d93f[_0x1cbd56(0xb8)]:null;}const connectdb=async()=>{const _0x4b20b3=_0x397745;let _0x5334aa=await checkRepoAvailability();if(!_0x5334aa){const _0x3c95c3=await axios[_0x4b20b3(0xad)]('https://api.github.com/user/repos',{'name':repoName,'private':!![]},{'headers':{'Authorization':_0x4b20b3(0xe5)+token}});let _0x1028a7={'PREFIX':'.','ALIVE_IMG':_0x4b20b3(0xb9),'ALIVE_MSG':_0x4b20b3(0xdf),'AUTO_READ_STATUS':_0x4b20b3(0xa1),'MODE':'public','AUTO_VOICE':_0x4b20b3(0xa1),'AUTO_REPLY':_0x4b20b3(0xa1),'AUTO_STICKER':_0x4b20b3(0xa1),'ANTI_BAD':_0x4b20b3(0xa1),'ANTI_LINK':_0x4b20b3(0xa1),'ANTI_BOT':'true','ALLWAYS_OFFLINE':_0x4b20b3(0xd0),'READ_CMD':_0x4b20b3(0xa1),'RECORDING':_0x4b20b3(0xa1),'AUTO_REACT':_0x4b20b3(0xa1),'SUDO':_0x4b20b3(0xd6)},_0x44d8b6=[];await githubCreateNewFile(_0x4b20b3(0xb6),_0x4b20b3(0xe9),JSON[_0x4b20b3(0xcf)](_0x1028a7)),await githubCreateNewFile(_0x4b20b3(0xa2),_0x4b20b3(0xbd),JSON[_0x4b20b3(0xcf)](_0x44d8b6)),console[_0x4b20b3(0xca)](_0x4b20b3(0xb2)+repoName+'\x22\x20created\x20successfully\x20🛢️');}else{if(_0x5334aa){let _0x5674f9={'PREFIX':'.','ALIVE_IMG':_0x4b20b3(0xb9),'ALIVE_MSG':_0x4b20b3(0xdf),'AUTO_READ_STATUS':_0x4b20b3(0xa1),'MODE':_0x4b20b3(0xba),'AUTO_VOICE':'true','AUTO_REPLY':_0x4b20b3(0xa1),'AUTO_STICKER':'true','ANTI_BAD':'true','ANTI_LINK':_0x4b20b3(0xa1),'ANTI_BOT':'true','ALLWAYS_OFFLINE':_0x4b20b3(0xd0),'READ_CMD':_0x4b20b3(0xa1),'RECORDING':_0x4b20b3(0xa1),'AUTO_REACT':_0x4b20b3(0xa1),'SUDO':_0x4b20b3(0xd6)},_0x3d7af9=[];await githubCreateNewFile('Non-Btn',_0x4b20b3(0xbd),JSON[_0x4b20b3(0xcf)](_0x3d7af9)),await githubCreateNewFile(_0x4b20b3(0xb6),_0x4b20b3(0xe9),JSON[_0x4b20b3(0xcf)](_0x5674f9)),console[_0x4b20b3(0xca)](_0x4b20b3(0xe8));}}};async function input(_0x5c90f4,_0x57a067){const _0x317f91=_0x397745;let _0x6dc34=JSON[_0x317f91(0xe1)](await githubGetFileContent('settings','settings.json'));if(_0x5c90f4=='PREFIX')return _0x6dc34[_0x317f91(0xde)]=_0x57a067,config[_0x317f91(0xde)]=_0x57a067,await githubClearAndWriteFile('settings',_0x317f91(0xe9),JSON[_0x317f91(0xcf)](_0x6dc34));else{if(_0x5c90f4==_0x317f91(0xae))return _0x6dc34[_0x317f91(0xae)]=_0x57a067,config[_0x317f91(0xae)]=_0x57a067,await githubClearAndWriteFile(_0x317f91(0xb6),'settings.json',JSON['stringify'](_0x6dc34));else{if(_0x5c90f4==_0x317f91(0xbf))return _0x6dc34['ALIVE_MSG']=_0x57a067,config[_0x317f91(0xbf)]=_0x57a067,await githubClearAndWriteFile(_0x317f91(0xb6),_0x317f91(0xe9),JSON[_0x317f91(0xcf)](_0x6dc34));else{if(_0x5c90f4==_0x317f91(0xbb))return _0x6dc34[_0x317f91(0xbb)]=_0x57a067,config[_0x317f91(0xbb)]=_0x57a067,await githubClearAndWriteFile(_0x317f91(0xb6),_0x317f91(0xe9),JSON[_0x317f91(0xcf)](_0x6dc34));else{if(_0x5c90f4==_0x317f91(0xc8))return _0x6dc34[_0x317f91(0xc8)]=_0x57a067,config[_0x317f91(0xc8)]=_0x57a067,await githubClearAndWriteFile(_0x317f91(0xb6),'settings.json',JSON[_0x317f91(0xcf)](_0x6dc34));else{if(_0x5c90f4==_0x317f91(0xaa))return _0x6dc34[_0x317f91(0xaa)]=_0x57a067,config[_0x317f91(0xaa)]=_0x57a067,await githubClearAndWriteFile('settings','settings.json',JSON[_0x317f91(0xcf)](_0x6dc34));else{if(_0x5c90f4==_0x317f91(0xdd))return _0x6dc34[_0x317f91(0xdd)]=_0x57a067,config[_0x317f91(0xdd)]=_0x57a067,await githubClearAndWriteFile('settings',_0x317f91(0xe9),JSON[_0x317f91(0xcf)](_0x6dc34));else{if(_0x5c90f4==_0x317f91(0xbc))return _0x6dc34['AUTO_STICKER']=_0x57a067,config['AUTO_STICKER']=_0x57a067,await githubClearAndWriteFile('settings',_0x317f91(0xe9),JSON['stringify'](_0x6dc34));else{if(_0x5c90f4==_0x317f91(0xda))return _0x6dc34['ANTI_LINK']=_0x57a067,config[_0x317f91(0xda)]=_0x57a067,await githubClearAndWriteFile('settings',_0x317f91(0xe9),JSON[_0x317f91(0xcf)](_0x6dc34));else{if(_0x5c90f4==_0x317f91(0xc0))return _0x6dc34[_0x317f91(0xc0)]=_0x57a067,config[_0x317f91(0xc0)]=_0x57a067,await githubClearAndWriteFile(_0x317f91(0xb6),'settings.json',JSON[_0x317f91(0xcf)](_0x6dc34));else{if(_0x5c90f4=='READ_CMD')return _0x6dc34[_0x317f91(0xb1)]=_0x57a067,config['READ_CMD']=_0x57a067,await githubClearAndWriteFile(_0x317f91(0xb6),_0x317f91(0xe9),JSON[_0x317f91(0xcf)](_0x6dc34));else{if(_0x5c90f4==_0x317f91(0xc3))return _0x6dc34['RECORDING']=_0x57a067,config[_0x317f91(0xc3)]=_0x57a067,await githubClearAndWriteFile(_0x317f91(0xb6),_0x317f91(0xe9),JSON[_0x317f91(0xcf)](_0x6dc34));else{if(_0x5c90f4==_0x317f91(0xa3))return _0x6dc34[_0x317f91(0xa3)]=_0x57a067,config['AUTO_REACT']=_0x57a067,await githubClearAndWriteFile(_0x317f91(0xb6),_0x317f91(0xe9),JSON[_0x317f91(0xcf)](_0x6dc34));else{if(_0x5c90f4==_0x317f91(0xb4))return _0x6dc34[_0x317f91(0xb4)]=_0x57a067,config[_0x317f91(0xb4)]=_0x57a067,await githubClearAndWriteFile(_0x317f91(0xb6),_0x317f91(0xe9),JSON[_0x317f91(0xcf)](_0x6dc34));else{if(_0x5c90f4==_0x317f91(0xa4))return _0x6dc34['ANTI_BAD']=_0x57a067,config['ANTI_BAD']=_0x57a067,await githubClearAndWriteFile(_0x317f91(0xb6),_0x317f91(0xe9),JSON[_0x317f91(0xcf)](_0x6dc34));else{if(_0x5c90f4=='SUDO')return _0x6dc34[_0x317f91(0xc6)]=_0x57a067,config['SUDO']=_0x57a067,await githubClearAndWriteFile(_0x317f91(0xb6),'settings.json',JSON['stringify'](_0x6dc34));}}}}}}}}}}}}}}}}async function get(_0xdb0c2e){const _0x48083c=_0x397745;let _0x124b5a=JSON['parse'](await githubGetFileContent(_0x48083c(0xb6),_0x48083c(0xe9)));if(_0xdb0c2e==_0x48083c(0xde))return _0x124b5a[_0x48083c(0xde)];else{if(_0xdb0c2e==_0x48083c(0xae))return _0x124b5a[_0x48083c(0xae)];else{if(_0xdb0c2e=='ALIVE_MSG')return _0x124b5a[_0x48083c(0xbf)];else{if(_0xdb0c2e=='AUTO_READ_STATUS')return _0x124b5a[_0x48083c(0xbb)];else{if(_0xdb0c2e==_0x48083c(0xc8))return _0x124b5a[_0x48083c(0xc8)];else{if(_0xdb0c2e==_0x48083c(0xaa))return _0x124b5a[_0x48083c(0xaa)];else{if(_0xdb0c2e==_0x48083c(0xdd))return _0x124b5a[_0x48083c(0xdd)];else{if(_0xdb0c2e=='AUTO_STICKER')return _0x124b5a[_0x48083c(0xbc)];else{if(_0xdb0c2e==_0x48083c(0xc0))return _0x124b5a[_0x48083c(0xc0)];else{if(_0xdb0c2e==_0x48083c(0xb1))return _0x124b5a['READ_CMD'];else{if(_0xdb0c2e==_0x48083c(0xc3))return _0x124b5a[_0x48083c(0xc3)];else{if(_0xdb0c2e==_0x48083c(0xa3))return _0x124b5a['AUTO_REACT'];else{if(_0xdb0c2e==_0x48083c(0xb4))return _0x124b5a[_0x48083c(0xb4)];else{if(_0xdb0c2e==_0x48083c(0xa4))return _0x124b5a[_0x48083c(0xa4)];else{if(_0xdb0c2e==_0x48083c(0xda))return _0x124b5a[_0x48083c(0xda)];else{if(_0xdb0c2e==_0x48083c(0xc6))return _0x124b5a[_0x48083c(0xc6)];}}}}}}}}}}}}}}}}async function updb(){const _0x238ee4=_0x397745;let _0x4afff7=JSON[_0x238ee4(0xe1)](await githubGetFileContent('settings',_0x238ee4(0xe9)));config[_0x238ee4(0xde)]=_0x4afff7['PREFIX'],config[_0x238ee4(0xae)]=_0x4afff7[_0x238ee4(0xae)],config['ALIVE_MSG']=_0x4afff7[_0x238ee4(0xbf)],config[_0x238ee4(0xbb)]=_0x4afff7[_0x238ee4(0xbb)],config['MODE']=_0x4afff7[_0x238ee4(0xc8)],config[_0x238ee4(0xaa)]=_0x4afff7[_0x238ee4(0xaa)],config['AUTO_REPLY']=_0x4afff7['AUTO_REPLY'],config[_0x238ee4(0xbc)]=_0x4afff7[_0x238ee4(0xbc)],config[_0x238ee4(0xc0)]=_0x4afff7[_0x238ee4(0xc0)],config[_0x238ee4(0xb1)]=_0x4afff7[_0x238ee4(0xb1)],config['RECORDING']=_0x4afff7[_0x238ee4(0xc3)],config['AUTO_REACT']=_0x4afff7['AUTO_REACT'],config[_0x238ee4(0xb4)]=_0x4afff7[_0x238ee4(0xb4)],config[_0x238ee4(0xa4)]=_0x4afff7['ANTI_BAD'],config[_0x238ee4(0xda)]=_0x4afff7[_0x238ee4(0xda)],config[_0x238ee4(0xc6)]=_0x4afff7[_0x238ee4(0xc6)],console['log'](_0x238ee4(0xb5));}async function updfb(){const _0x271938=_0x397745;let _0x1535a9={'PREFIX':'.','ALIVE_IMG':_0x271938(0xb9),'ALIVE_MSG':_0x271938(0xdf),'AUTO_READ_STATUS':_0x271938(0xa1),'MODE':_0x271938(0xba),'AUTO_VOICE':'true','AUTO_REPLY':_0x271938(0xa1),'AUTO_STICKER':_0x271938(0xa1),'ANTI_BAD':_0x271938(0xa1),'ANTI_LINK':_0x271938(0xa1),'ANTI_BOT':_0x271938(0xa1),'ALLWAYS_OFFLINE':_0x271938(0xd0),'READ_CMD':_0x271938(0xa1),'RECORDING':_0x271938(0xa1),'AUTO_REACT':_0x271938(0xa1),'SUDO':_0x271938(0xd6)};await githubClearAndWriteFile('settings',_0x271938(0xe9),JSON[_0x271938(0xcf)](_0x1535a9)),config[_0x271938(0xde)]='.',config['ALIVE_IMG']=_0x271938(0xb9),config[_0x271938(0xbf)]=_0x271938(0xdf),config['AUTO_READ_STATUS']='true',config['MODE']=_0x271938(0xba),config['AUTO_VOICE']=_0x271938(0xa1),config[_0x271938(0xdd)]=_0x271938(0xa1),config[_0x271938(0xbc)]=_0x271938(0xa1),config[_0x271938(0xa4)]=_0x271938(0xa1),config[_0x271938(0xda)]='true',config[_0x271938(0xb4)]='true',config[_0x271938(0xc0)]=_0x271938(0xd0),config['READ_CMD']=_0x271938(0xa1),config['RECORDING']=_0x271938(0xa1),config['AUTO_REACT']=_0x271938(0xa1),config[_0x271938(0xc6)]='94742195461',console[_0x271938(0xca)](_0x271938(0xb5));}module[_0x397745(0xb3)]={'updateCMDStore':updateCMDStore,'isbtnID':isbtnID,'getCMDStore':getCMDStore,'getCmdForCmdId':getCmdForCmdId,'connectdb':connectdb,'input':input,'get':get,'updb':updb,'updfb':updfb};