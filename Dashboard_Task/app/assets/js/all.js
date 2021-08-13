console.log('Hello!');
var isCreate = false;
$(document).ready(() => {
  $("#reply").click(() => {
    if(!isCreate){
      ClassicEditor.create(document.querySelector('#editor')).then(editor => { console.log(editor); }).catch(error => { console.error(error); });
    }else{
      $(".ck-editor").show();
    }
    $("#btns").toggleClass("d-none");
  });
  $("#cancel").click(()=>{
    $(".ck-editor").hide();
    $("#btns").toggleClass("d-none");
  });
  $("#infoBtn").click(()=>{
    console.log("info");
    $("#infoBtns").toggleClass("mb-8");
  });
});
