document.getElementById('registerForm').addEventListener('submit', function (event) {
  let isValid = true;

  // Helper function untuk menampilkan/menyembunyikan pesan error
  function showError(id, message) {
    const errorEl = document.getElementById(id);
    if (message) {
      errorEl.innerText = message;
      errorEl.classList.remove('hidden');
      isValid = false;
    } else {
      errorEl.innerText = '';
      errorEl.classList.add('hidden');
    }
  }

  // 1. Validasi Username (tidak boleh kosong & min 3 karakter)
  const username = document.getElementById('username').value.trim();
  if (username === '') {
    showError('usernameError', 'Username tidak boleh kosong');
  } else if (username.length < 3) {
    showError('usernameError', 'Username minimal 3 karakter');
  } else {
    showError('usernameError', '');
  }

  // 2. Validasi Password (tidak boleh kosong & min 8 karakter)
  const password = document.getElementById('password').value;
  if (password === '') {
    showError('passwordError', 'Password tidak boleh kosong');
  } else if (password.length < 8) {
    showError('passwordError', 'Password minimal 8 karakter');
  } else {
    showError('passwordError', '');
  }

  // 3. Validasi Nama (tidak boleh kosong)
  const nama = document.getElementById('nama').value.trim();
  if (nama === '') {
    showError('namaError', 'Nama tidak boleh kosong');
  } else {
    showError('namaError', '');
  }

  // 4. Validasi Tanggal Lahir (tidak boleh kosong & tidak boleh di masa depan)
  const tanggalLahirInput = document.getElementById('tanggalLahir').value;
  if (tanggalLahirInput === '') {
    showError('tanggalLahirError', 'Tanggal lahir tidak boleh kosong');
  } else {
    const selectedDate = new Date(tanggalLahirInput);
    selectedDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate > today) {
      showError('tanggalLahirError', 'Tanggal lahir tidak boleh di masa depan');
    } else {
      showError('tanggalLahirError', '');
    }
  }

  // 5. Validasi Alamat (tidak boleh kosong)
  const alamat = document.getElementById('alamat').value.trim();
  if (alamat === '') {
    showError('alamatError', 'Alamat tidak boleh kosong');
  } else {
    showError('alamatError', '');
  }

  // 6. Validasi Nomor Telpon (tidak boleh kosong & harus diawali "62")
  const nomorTelpon = document.getElementById('nomorTelpon').value.trim();
  if (nomorTelpon === '') {
    showError('nomorTelponError', 'Nomor telpon tidak boleh kosong');
  } else if (!nomorTelpon.startsWith('62')) {
    showError('nomorTelponError', 'Nomor telpon harus berawalan 62');
  } else {
    showError('nomorTelponError', '');
  }

  // Hentikan pengiriman form jika terdapat error
  if (!isValid) {
    event.preventDefault();
  }
});