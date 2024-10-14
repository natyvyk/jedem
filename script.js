const start = Number (15)
const delka = Number (prompt ("Zadej, jak dlouho jsi běžel:", "10"))
const konec = (start + delka) % 24

document.body.innerHTML += "<p> Závod jsi doběhl v " + konec + " hodiny ráno. </p>"