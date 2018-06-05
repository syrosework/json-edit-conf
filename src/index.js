import JSONEditor from '@json-editor/json-editor';

document.addEventListener('DOMContentLoaded', function () {
  let editorEl = document.querySelector('#json-edit');
  let editor = new JSONEditor(editorEl, {
    theme: 'bootstrap2',
    iconLib : 'bootstrap2'
  });
});

