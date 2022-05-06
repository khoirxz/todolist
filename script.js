// dataList adalah tempat penyimpanan data kegiatan yang kita masukan
// karena data kita lebih dari 1, maka kita mengunakan array untuk menyimpanya
const dataList = [];

// input adalah variabel yang menyimpan data inputan atau masukan dari user
const input = document.getElementById("input");

// listEl adalah varibel element dari ul yang kita akan untuk memanipulasi data dari dataList
const listEl = document.getElementById("todos");

// addBtn adalah memberi fungsi ketika button dari html kita
function addBtn() {
  // inputData berfungsi menyimpan value atau hasil dari ketikan dikolom input
  const inputData = input.value;

  /**
   * ! fungsi dibawah ini digunakan untuk menyinpan inputan ke dalam dataList
   * kondisi if dibawah ini memfilter jika field/form/inputan kosong maka
   * akan dialihkan langsung ke else tetapi jika inputData memiliki nilai
   * atau field diisi makan kode dibawah akan dieksekusi terlebih dahulu
   **/
  if (inputData != "") {
    /**
     * nomer berfunsi sebagai menyimpan id atau nomer urut yang kita akan gunakan
     * pengurudan dataList.
     */
    const nomer = dataList.length;

    /**
     * fungsi kode dibawah ini digunakan untuk memasukan data yang kita ketik/inputan
     * kita kedalam dataList
     * contoh dari data yang masuk ke dataList :
     * {
     *  key: 0,
     *  kegiatan: "memasak"
     * }
     */
    dataList.push({
      key: nomer,
      kegiatan: inputData,
    });

    // newEl berfunsi menyimpan element baru berupa list atau <li> yang akan kita tampilkan di html
    const newEl = document.createElement("li");

    /**
     * kode dibawah berfunsi menampilkan apa yang kita input dari field/kolom kedalam <li>
     * contoh hasil :
     * <li> memasak </li>
     */
    newEl.innerHTML = inputData;

    // kode dibawah akan menyisipkan element <li> ke dalam <ul>
    listEl.appendChild(newEl);

    // inputan akan direset kembali menjadi kosong
    input.value = "";

    /**
     * kode dibawah berfunsi ketika element <li> saat diklik "click" akan memicu
     * class baru yang secara otomatis tertulis di element <li> yang kita klik
     */
    newEl.addEventListener("click", () => {
      newEl.classList.toggle("completed");
    });

    /**
     * kode dibawah berfunsi ketika element <li> saat diklik kanan atau dijavascript menamainya dengan "contextmenu"
     */
    newEl.addEventListener("contextmenu", (e) => {
      //funsi dari kode dibawah ini untuk membatalkan fungsi default dari element
      //hapus kode dibawah ini untuk mengetahui maksud dari kode.
      e.preventDefault();

      // kode dibawah ini berfungsi menghapul element
      newEl.remove();
    });

    // kode dibawah ini berfunsi untuk debuggin/mengecek hasil kode (javascript tingkat lanjut)
    console.log(dataList);

    // end if
  } else {
    // jika kondisi if tidak sesuai/salah/field tidak diisi maka akan muncul peringatan dibawah ini
    alert("isi kegiatanmu dulu");
  }
}
