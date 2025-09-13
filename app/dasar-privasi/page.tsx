import { merriweather } from "@/config/font";

export default function DasarPrivasiPage() {
  return (
    <section className="flex flex-col p-4 sm:px-64 sm:py-24 gap-8 sm:gap-16 text-brand">
      <h2 className={`text-4xl sm:text-6xl ${merriweather.className}`}>
        Dasar Privasi
      </h2>
      <p>
        Nujum Cafe menghormati privasi anda dan komited untuk melindungi
        maklumat peribadi yang anda berikan kepada kami. Dasar Privasi ini
        menerangkan bagaimana kami mengumpul, menggunakan dan melindungi data
        anda apabila anda menggunakan laman web atau perkhidmatan kami.
      </p>

      <div>
        <h2 className="text-lg font-semibold">1. Maklumat yang Kami Kumpul</h2>
        <p>
          Apabila anda menggunakan laman web atau perkhidmatan Nujum Cafe, kami
          mungkin mengumpul maklumat peribadi seperti nama, nombor telefon,
          alamat emel, serta maklumat transaksi sekiranya anda membuat pesanan
          atau tempahan. Selain itu, data teknikal seperti alamat IP, jenis
          pelayar, dan corak penggunaan laman juga mungkin direkodkan bagi
          tujuan analisis.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">
          2. Cara Kami Menggunakan Maklumat
        </h2>
        <p>
          Maklumat yang dikumpul digunakan untuk memproses pesanan, mengurus
          tempahan, serta memastikan penghantaran atau pengambilan berjalan
          lancar. Kami juga menggunakan data anda untuk menghantar promosi,
          kemas kini, atau berita berkaitan tawaran terbaru. Selain itu,
          maklumat ini membantu kami menambah baik pengalaman pengguna dan
          meningkatkan keselamatan laman web.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">3. Perkongsian Maklumat</h2>
        <p>
          Kami tidak menjual atau menyewakan maklumat peribadi anda kepada pihak
          ketiga. Namun, kami mungkin berkongsi data dengan rakan kongsi
          perkhidmatan seperti penyedia pembayaran, penghantaran, atau pihak
          berkuasa yang sah jika diminta berdasarkan undang-undang.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">4. Keselamatan Data</h2>
        <p>
          Nujum Cafe mengambil langkah sewajarnya dari segi teknikal dan
          organisasi untuk melindungi data anda daripada capaian tanpa
          kebenaran, penyalahgunaan, atau kehilangan. Walaupun begitu, kami
          tidak dapat menjamin keselamatan mutlak kerana tiada sistem digital
          yang benar-benar bebas risiko.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">5. Hak Anda</h2>
        <p>
          Anda berhak untuk mengakses, mengemas kini, atau meminta pemadaman
          maklumat peribadi anda. Anda juga boleh menarik balik persetujuan
          penggunaan data untuk tujuan pemasaran bila-bila masa dengan
          menghubungi kami melalui talian telefon [+60 11-16174226].
        </p>
      </div>
    </section>
  );
}
