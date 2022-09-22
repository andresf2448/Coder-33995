let boton = document.getElementById("boton");

//SWEET ALERT
/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue?",
    icon: "error",
    confirmButtonText: "Cool",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Genial!",
    text: "Haz agregado al carrito",
    icon: "Exito",
    confirmButtonText: "Bien!",
  });
});
 */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Error inesperado",
    icon: "error",
    confirmButtonText: " =( ",
  });
});
 */

/* boton.addEventListener("click", () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 3000,
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Está seguro de eliminar el producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      //logica para eliminar
      Swal.fire({
        title: "Borrado!",
        icon: "success",
        text: "El archivo ha sido borrado",
      });
    }
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Submit your Github username",
    input: "text",
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value}`,
      });
    }
  });
}); */

//TOASTIFY
/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    style: {
      background: "linear-gradient(to left, #00b09b, #96c92d)",
    },
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    className: "notificacion",
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    onClick: () => {
      Toastify({
        text: "Clickeaste un Toast!",
        duration: 1500,
      }).showToast();
    },
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Click aquí para ir a Coder!",
    duration: 3000,
    destination: "https://www.coderhouse.com",
  }).showToast();
}); */

//LUXON
// const DateTime = luxon.DateTime;

/* const dt = DateTime.local(2022, 1, 25, 5);
console.log(dt.c); */
// const now = DateTime.now();
// console.log(now.toString());
/* console.log(now.year);
console.log(now.month);
console.log(now.day);
console.log(now.second);
console.log(now.weekday);
console.log(now.zoneName);
console.log(now.daysInMonth); */

/* console.log(now.toLocaleString());
console.log(now.toLocaleString(DateTime.DATE_FULL));
console.log(now.toLocaleString(DateTime.TIME_SIMPLE));
console.log(now.setLocale('en').toLocaleString(DateTime.DATE_FULL));
console.log(now.setLocale('es').toLocaleString(DateTime.DATE_FULL)); */

/* console.log(now.toLocaleString(DateTime.DATETIME_SHORT));

const suma = now.plus({hours: 1, minutes: 20});
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));

const resta = now.minus({month: 2, days: 10});
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT)); */

const Interval = luxon.Interval
const DateTime = luxon.DateTime;

const now = DateTime.now();
const navidad = DateTime.local(2022, 12, 25);

const i = Interval.fromDateTimes(now, navidad)
console.log(i.length("days"));
console.log(i.length("hours"));
console.log(i.length("minutes"));

