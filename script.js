window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav")
    nav.classList.toggle("sticky", window.scrollY > 0)
})

var form = document.querySelector("#my-form");
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        alert("سأعاود الاتصال بك بمجرد وصول بياناتك إلي");
        form.reset();
    }).catch(error => {
        alert("عذرا، هناك خطأ ما")
    });
}
form.addEventListener("submit", handleSubmit);

var newletterform = document.querySelector("#newsform");
async function Submit(e) {
    e.preventDefault();
    var data = new FormData(e.target);
    fetch(e.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        alert("سأعاود الاتصال بك بمجرد وصول بريدك الإلكتروني");
        newletterform.reset();
    }).catch(error => {
        alert("عذرا، هناك خطأ ما")
    });
}
newletterform.addEventListener("submit", Submit)