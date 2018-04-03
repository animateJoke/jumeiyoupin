import $ from "jquery"
var fn=function(url,num,fn){
    var arr=[];
    $.ajax({
        url :url,
        type : "post",
        dataType : "json",
        data : {
            index : num
        }
    }).then(function(res){
        arr = res;
        fn(arr)
    })
};

export default fn