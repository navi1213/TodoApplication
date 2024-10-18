function formatDate(date, format) {
  const days = [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日",
  ];
  var year = date.getFullYear().toString().padStart(4, "0");
  var month = (date.getMonth() + 1).toString().padStart(2, "0");
  var day = date.getDate().toString().padStart(2, "0");

  var hour = date.getHours().toString().padStart(2, "0");
  var minute = date.getMinutes().toString().padStart(2, "0");
  var dayOfWeek = days[date.getDay()];

  return format
    .replace("YYYY", year)
    .replace("MM", month)
    .replace("DD", day)
    .replace("hh", hour)
    .replace("mm", minute)
    .replace("date", dayOfWeek);
}

var d = new Date();
console.log(formatDate(d, "YYYY-MM-DD hh:mm date"));

//   2024-07-15 12:43:02のように出力される
export default formatDate;
