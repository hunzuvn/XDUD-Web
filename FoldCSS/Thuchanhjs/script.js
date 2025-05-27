function giaiphuongtrinh() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const result = document.getElementById("result");

  if (isNaN(a) || isNaN(b)) {
    result.textContent = "Vui lòng nhập cả hai số a và b hợp lệ.";
    return;
  }

  if (a === 0) {
    if (b === 0) {
      result.textContent = "Phương trình có vô số nghiệm.";
    } else {
      result.textContent = "Phương trình vô nghiệm.";
    }
  } else {
    const x = -b / a;
    result.textContent = `Nghiệm của phương trình là x = ${x}`;
  }
}
