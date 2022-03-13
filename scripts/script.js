

function switDownloadOs() {
const icones = document.querySelectorAll('.js-tablist li');
const txtDownload = document.querySelectorAll('.js-txtDownloads div');

  if (icones.length && txtDownload.length) {
    console.log(txtDownload)
    icones.forEach((icone, index) => {
      icone.addEventListener('click', () => {
        txtDownload.forEach(item => {
          item.classList.remove('ativo');
        })
        txtDownload[index].classList.add('ativo');
      })
    })

  }

}
switDownloadOs();
