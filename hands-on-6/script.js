const coursesInfo = (data) => {
  const { courseNo, abbrName, department, credit, totalSeats, genEdType } =
    data;
  return `<section class="course">
	<h3>${courseNo} ${abbrName}</h3>
	<h4>ภาควิชา/กลุ่มวิชา/สาขาวิชา</h4>
	<p>${department}/p>
	<h4>จำนวนหน่วยกิต</h4>
	<p>${credit} หน่วยกิต</p>
	<h4>จำนวนที่นั่ง</h4>
	<p>${totalSeats}</p>
	<h4>ประเภทGenEd</h4>
	<p>${genEdType}</p>
</section>`;
};

const main = async () => {
  const result = await fetch("https://api.minireg.thanayut.in.th/courses")
    .then((response) => response.json())
    .catch((error) => error.json());
  if (result?.error) {
    console.log(result?.error);
    return;
  }
  const coursesData = result?.courses.reduce((previous, current) => {
    previous += coursesInfo(current);
    return previous;
  }, "");

  const coursesList = document.getElementById("course-list");
  coursesList.innerHTML = coursesData;
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
