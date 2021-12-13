let forms = qsa('.form-delete');

forms.forEach(formDelete => {
    formDelete.addEventListener('submit', (e) => {
        e.preventDefault();
        swal({
            title: "¿Queres borrarlo?",
            text: "Si borras este producto va a desaparecer de la db",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((resultado) => {
            if (!resultado) {
              swal("Me imaginaba que no querias borrarlo", {
                icon: "success",
              });
            } else {
              formDelete.submit()
            }
          });
    })
});
