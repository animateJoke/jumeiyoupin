import $ from "jquery"
var fn=function(num,fn){
    var arr=[];
    $.ajax({
        url : "http://localhost:55555/home/list",
        type : "post",
        dataType : "json",
        data : {
            index : num
        }
    }).then(function(res){
        arr = res;
        fn(arr)
    })
}

export default fn