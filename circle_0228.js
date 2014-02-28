function Init(n){
	if(typeof n!='number'){
		return null;
	} else if(n>0){
		var headNode={point:null,index:1};
		var tmpNode=headNode;
		for(var i=1;i<n;i++){
			var node={point:null,index:i+1};
			tmpNode.point=node;
			tmpNode=node;
		}
		tmpNode.point=headNode;
		return headNode;
	}
	return null;
}

function testPrint(a,index){
    var head=a;
    for(var i=0;i<index;i++){
    	head=head.point;
    };
    var guard=head;
    console.log(head.index);
    while(guard.point!=head){
    	guard=guard.point;
    	console.log(guard.index);
    };
}

function killNode(a){
   while(a.point!=a){
    console.log(p.index);
   	var p=a.point;
   	a.point=p.point;
    a=p.point;
    p.index=0;
   };
   return a.index;
}