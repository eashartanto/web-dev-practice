'use strict';

$(document).ready(function () {
  // let name = 'David';
  // localStorage.setItem('myname', name);
  // localStorage.removeItem('myname');
  // alert(localStorage.getItem('myname'));

  localStorage.setItem('hobbies', JSON.stringify(['hobby1', 'hobby2']));
  console.log(localStorage.getItem('hobbies'));

  $('#add_task').click(function () {
    let textbox = $('#task');
    let task = textbox.val();
    if (task === '') {
      alert('Please enter a task.');
      textbox.focus();
    } else {
      let tasks = localStorage.C15tasks || ''; // default value of empty string
      localStorage.C15tasks = tasks.concat(task, '\n');

      // clear task text box and re-display tasks
      textbox.val('');
      $('#task_list').val(localStorage.C15tasks);
      textbox.focus();
    }
  });

  $('#clear_tasks').click(function () {
    localStorage.removeItem('C15tasks');
    $('#task_list').val('');
    $('#task').focus();
  });

  // display tasks on initial load
  $('#task_list').val(localStorage.C15tasks);
  $('#task').focus();
});
