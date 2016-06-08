function createTable(upLayer, row, column){
	var table=document.createElement('table');
	//table.setAttribute('border', '1');
	var tbody=document.createElement('tbody');
	for(var i=0;i<row;i++){
		var tr = document.createElement('tr');
		for(var j=0;j<column;j++){
			var td=document.createElement('td');
			//td.appendChild(document.createTextNode(i*column+j));
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
	upLayer.appendChild(table);
}

function tdProcess(td,row,column,integer,remainder,name,pictureName,description){
	
	var nameCount=0;//名字計數器
	var tdCount=0;
	var imgCount=1;
	var descriptionCount=0;
	var countAmount=0;//要處理的格數
	var dividend=0;
	var firstColumn=0;
	
	for(var i=0;i<integer+1;i++){//+1與格數計算無關
	
		if(i==integer){
			countAmount=row*(remainder+1);
			dividend=remainder+1;
		}
		else{
			countAmount=row*(column+1);
			dividend=column+1;
		}
		//console.log("countAmount: "+countAmount);
		//console.log("dividend: "+dividend);
		for(var j=0;j<countAmount;j++){
			//console.log("tdCount: "+tdCount);
			//console.log("j: "+j);
			if(j%dividend!=0){
				//console.log(tdCount);
				if(Math.floor(j/dividend)==0){
					//console.log("IN 1");
					td[tdCount].appendChild(document.createTextNode(name[nameCount]));
					nameCount++;
				}else if(Math.floor(j/dividend)==1){
					//console.log("IN 2");
					var img=document.createElement('img');
					img.setAttribute("src","picture/"+pictureName+imgCount+".jpg");
					img.setAttribute("width","200");
					img.setAttribute("height","200");
					imgCount++;
					td[tdCount].appendChild(img);
				}else if(Math.floor(j/dividend)==2){
					//console.log("IN 3");
					td[tdCount].appendChild(document.createTextNode(description[descriptionCount]));
					descriptionCount++;
				}
			}else{
				var text="";
				if(firstColumn==0){
					text=document.createTextNode("名稱");
				}else if(firstColumn==1){
					text=document.createTextNode("圖片");
				}else if(firstColumn==2){
					text=document.createTextNode("介紹");
				}
				firstColumn++;
				td[tdCount].appendChild(text);
			}
			tdCount++;
		}
		firstColumn=0;
	}
}

function initial(n){
	for(var i=1;i<=n;i++){
		document.getElementById("box"+i).checked=false;
		document.getElementById("text"+i).readOnly=true;
	}
}

function isTextDisable(number){
	var boxID = document.getElementById("box"+number);
	var textID = document.getElementById("text"+number);
	if(boxID.checked)
		textID.readOnly=false;
	else
		textID.readOnly=true;
}