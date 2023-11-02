function convert(){
	// alert("in convert function!!!");
	var frm,to,amount;

	frm=document.getElementById('from');
	to=document.getElementById('to');
	amount=document.getElementById('amt');
	res=document.getElementById('result');
	cu=document.getElementById('curr');



   /* document.write(frm+"<br>");
	document.write(to+"<br>");
	document.write(amount+"<br>");*/

   /* document.write("from :"+frm.value+"<br>");
	document.write("from :"+to.value+"<br>");
	document.write("from :"+amount.value);*/
	 var url='https://v6.exchangerate-api.com/v6/e370fc0ddb62fd8e0cc057c8/latest/'+frm.value;
	fetch(url)

	.then(function(res){
		//document.write(res.json());
		return res.json();
	}).then(function(data){

		//document.write(data+"<br>");
		//document.write(data['result']+"<br>");
		//document.write(data['base_code']+"<br>");
		 var cr=data['conversion_rates'];
		cf=cr[to.value];

		var famt=cf*amount.value;
	   // document.write("FINAL AMOUNT  "+famt);
		res.innerHTML=famt;
		cu.innerHTML=to.value;
	});

 } 