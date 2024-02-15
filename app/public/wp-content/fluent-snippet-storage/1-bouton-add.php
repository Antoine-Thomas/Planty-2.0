<?php
// <Internal Doc Start>
/*
*
* @description: bouton add
* @tags: bouton add
* @group: bouton add
* @name: bouton add
* @type: js
* @status: published
* @created_by: 
* @created_at: 
* @updated_at: 2024-02-13 17:00:10
* @is_valid: 
* @updated_by: 
* @priority: 1
* @run_at: wp_head
* @condition: {"status":"yes","run_if":"assertive","items":[[{"source":["page","url"],"operator":"contains","value":"http:\/\/localhost\/wordpress\/commander\/"}]]}
*/
?>
<?php if (!defined("ABSPATH")) { return;} // <Internal Doc End> ?>
document.getElementById('incrementButton1').addEventListener('click', function() {
  var counter = document.getElementById('counter1');
  counter.value = parseInt(counter.value) + 1;
  var event = new Event('change');
  counter.dispatchEvent(event);
});

document.getElementById('incrementButton2').addEventListener('click', function() {
  var counter = document.getElementById('counter2');
  counter.value = parseInt(counter.value) + 1;
  var event = new Event('change');
  counter.dispatchEvent(event);
});

document.getElementById('incrementButton3').addEventListener('click', function() {
  var counter = document.getElementById('counter3');
  counter.value = parseInt(counter.value) + 1;
  var event = new Event('change');
  counter.dispatchEvent(event);
});

document.getElementById('incrementButton4').addEventListener('click', function() {
  var counter = document.getElementById('counter4');
  counter.value = parseInt(counter.value) + 1;
  var event = new Event('change');
  counter.dispatchEvent(event);
});
