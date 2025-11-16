
function myFunction() {
  let num = document.getElementById('a');
  let print = document.getElementById('print');
  print.innerHTML = "";

  Swal.fire({
    title: 'Enter any number',
    input: 'number',
    inputValue: 5,
    confirmButtonText: 'Next'
  }).then((result1) => {
    if (result1.isConfirmed) {
      let x = Number(result1.value);
      num.innerHTML = x;

      Swal.fire({
        title: 'Table length',
        input: 'number',
        inputValue: 10,
        confirmButtonText: 'Generate'
      }).then((result2) => {
        if (result2.isConfirmed) {
          let y = Number(result2.value);

          for (let i = 1; i <= y; i++) {
            print.innerHTML += `${x} x ${i} = ${x * i}<br/>`;
          }
        }
      });
    }
  });
}
function reset(){
  let print = document.getElementById('print');
   let num = document.getElementById('a');
    num.innerHTML = "";
  print.innerHTML = "";
}