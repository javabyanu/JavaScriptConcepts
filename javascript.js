const addBtn = document.getElementById("add");
// const notes = JSON.parse(localStorage.getItem("notes"));

// if(notes){
//     notes.forEach(n => addNewNote(n))
// }

addBtn.addEventListener("click", () => addNewNote());

// const deleteBtn = document.getElementsByClassName("delete");
// deleteBtn.addEventListener("click", () => deleteNote());

function addNewNote() {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class = "controls">
    <button class = "delete"><i class="fas fa-trash"></i></button>
    <button class = "edit"><i class = "fas fa-edit"></i></button>
</div>
<div >
<textarea class="main"></textarea>
</div>`;

  //${text ? "" : "hidden"}
  //${text ? "hidden" : ""}

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  // const textArea = note.querySelector(".textarea");
  // console.log(textArea);

  //    textArea.value = text;
  //      main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", () => deleteNote());
  // =>{
  //      note.remove();
  // });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  // textArea.addEventListener("input", (e) =>{
  //     const{value} = e.target;
  //     main.innerHTML = marked(value);

  //     saveList();
  // });

  document.body.appendChild(note);
}

function saveList() {
  const notesText = document.querySelectorAll("textarea");
  console.log(notesText);
  const allnotes = [];

  notesText.forEach((note) => allnotes.push(note.value));
  console.log(notesText);
  localStorage.setItem("notes", JSON.stringify(allnotes));
}

function display() {
  document.getElementById("box").style.display = "none";
}
// function deleteNote() {
//   console.log("calling");
//   //     <div id = "box">

//   // </div>
//   const deleteNote = document.createElement("div");

//   deleteNote.innerHTML = `
//   <div id = "box">
//   <div id = "txt">Are you sure delete this note</div>
//   <div><input type="button" value="No"/>
//        <input type="button" value="Yes"/>
//   </div>
// </div>`;
// document.body.append(deleteNote);
// }
