const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');

test('scanned part shows its inventory fields and is never offered for redemption',()=>{
 const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
 const body=html.slice(html.indexOf('function partDetail('),html.indexOf('\nasync function verify()',html.indexOf('function partDetail(')));
 const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const partDetail=vm.runInNewContext(body+'\npartDetail',{escapeHtml,URL,Intl});
 const result=partDetail({code:'48271936',label:'Řemen',part_data:{version:1,name:'Řemen',type:'Řemeny',machines:['Pila 1'],spec:'SPA 1250',needed:2,stock:4,price:210,unit:'ks',status:'active',note:'Náhradní',links:[{name:'Dodavatel',url:'https://example.com/'}],barcodes:['P-12']}});
 for(const value of ['48271936','Řemeny','Pila 1','SPA 1250','Náhradní','Dodavatel','P-12','210'])assert.match(result,new RegExp(value));
 assert.doesNotMatch(result,/redeem|Potvrdit použití/);
 const escaped=partDetail({code:'48271936',part_data:{version:1,name:'<img src=x>',links:[{name:'X',url:'javascript:alert(1)'}]}});
 assert.doesNotMatch(escaped,/<img src=x>|javascript:/);
});
