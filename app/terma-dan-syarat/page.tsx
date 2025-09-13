import { merriweather } from "@/config/font";

export default function TermaDanSyaratPage() {
  return (
    <section className="flex flex-col p-4 sm:px-64 sm:py-24 gap-8 sm:gap-16 text-brand">
      <h2 className={`text-4xl sm:text-6xl ${merriweather.className}`}>
        Terma Dan Syarat
      </h2>

      <div>
        <h2 className="text-lg font-semibold">1. Penerimaan Terma</h2>
        <p>
          Dengan mengakses laman web atau membuat pesanan dengan Nujum Cafe,
          anda dianggap bersetuju untuk mematuhi semua terma dan syarat yang
          dinyatakan di sini. Jika anda tidak bersetuju, anda disarankan untuk
          tidak menggunakan laman ini.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">2. Pesanan Dan Harga</h2>
        <p>
          Semua pesanan tertakluk pada ketersediaan stok. Harga yang dipaparkan
          adalah dalam Ringgit Malaysia (RM) dan boleh berubah pada bila-bila
          masa tanpa notis. Nujum Cafe berhak untuk menolak atau membatalkan
          pesanan sekiranya terdapat kesilapan harga, maklumat produk, atau isu
          teknikal lain.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">3. Pembayaran dan Pembatalan</h2>
        <p>
          Pembayaran mestilah dibuat sepenuhnya melalui kaedah yang diterima
          seperti tunai, kad debit/kredit, atau platform pembayaran elektronik
          sebelum pesanan diproses. Pembatalan hanya dibenarkan dalam tempoh
          tertentu selepas pesanan dibuat, dan bayaran balik akan
          dipertimbangkan berdasarkan kes yang munasabah.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">
          4. Hak Cipta Dan Harta Intelek
        </h2>
        <p>
          Segala kandungan di laman web Nujum Cafe, termasuk teks, grafik, logo,
          imej, dan reka bentuk, adalah milik kami dan dilindungi undang-undang
          hak cipta. Anda tidak dibenarkan menggunakan, menyalin, atau mengubah
          suai kandungan ini tanpa kebenaran bertulis daripada pihak kami.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">5. Had Tanggungjawab</h2>
        <p>
          Nujum Cafe tidak bertanggungjawab terhadap sebarang kerugian tidak
          langsung, kerosakan, atau kehilangan yang timbul akibat penggunaan
          laman web atau perkhidmatan kami.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">6. Perubahan Terma</h2>
        <p>
          Kami berhak untuk mengemas kini terma dan syarat ini dari semasa ke
          semasa. Sebarang perubahan akan berkuat kuasa sebaik sahaja ia
          diterbitkan di laman web rasmi Nujum Cafe.
        </p>
      </div>
    </section>
  );
}
