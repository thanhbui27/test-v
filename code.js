class oclock{
	constructor(second , tens){
		this._sencond = second;
		this._tens =tens;
	}

	set second(second){
		this._sencond = second;
	}
	get second(){
		return this._sencond;
	}

	set tens(tens){
		this._tens = tens;
	}
	get tens(){
		return this._tens;
	}

	restet(){
		 this._second = 0 ;
		 this._tens = 0;
	}

}

var oclocks = new oclock(0,1);

var second= document.querySelector('#seconds');
var tens= document.querySelector('#tens');
var btn_start = document.querySelector('#button-start');
var btn_stop = document.querySelector('#button-stop');

var btn_reset = document.querySelector('#button-reset');
var run;
btn_start.addEventListener('click',() => {
	clearInterval(run)
	 run = setInterval(() => {
		if(oclocks.tens > 99){
			oclocks.second ++;
			oclocks.tens =0;
		}
		second.innerHTML = convert(oclocks.second);
		tens.innerHTML = convert(oclocks.tens);
		oclocks.tens++;
	}, 10)


});
btn_stop.addEventListener('click',() =>  clearInterval(run))

btn_reset.addEventListener('click', () => {
	clearInterval(run);
	oclocks.restet();
	tens.innerHTML = '00';
	second.innerHTML = '00';
} )
var convert = function(con){
	if(con < 10 ){
		return '0'+con;
	}else{
		return con;
	}
}

// function f(l,r,x){
//     var count = 0;
//     for(let i=l ; i <= r ; i++){
//         if( i == x){
//             count ++;
//         }
//     }
//     return count;
// }

// function countOccurrencePairs(arr){
//    var count = 0;
//    var n = arr.length;
//    for(let i = 0 ; i < n  ; i++){
      
//        for(let j = i+1 ;j < n -1 ; j++){
 
//            if( i < j && f(1,i,arr[i]) > f(j,n,arr[j]) ){

//                count ++;
//            }
//        }
//    }
//    return count;
// }
// console.log(countOccurrencePairs([1,2,1,1,2,2,1]));



