// File: api/suhu.js
let suhuGlobal = "28.00"; // Nilai data awal

export default function handler(req, res) {
    // Membuka izin akses silang agar NodeMCU bisa masuk dengan mulus
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'POST') {
        // Menangkap data POST dari NodeMCU
        suhuGlobal = req.body.suhu || "28.00";
        return res.status(200).json({ status: "Sukses", suhu: suhuGlobal });
    } else {
        // Memberikan data suhu terbaru saat halaman web meminta via fetch
        return res.status(200).json({ suhu: suhuGlobal });
    }
}
