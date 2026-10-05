from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    judul = "Manajemen Produk"
    produk = [
        {"nama": "Sepatu", "harga": 100000, "stock": 5},
        {"nama": "Baju", "harga": 50000, "stock": 0},
        {"nama": "Celana", "harga": 75000, "stock": 2}
    ]
    return render_template('home.html', judul=judul, produk=produk)

@app.route('/mahasiswa')
def mahasiswa():
    return render_template('mahasiswa.html')

@app.route('/register')
def register():
    return render_template('register.html')

if __name__ == '__main__':
    app.run(debug=True)