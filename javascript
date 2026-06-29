import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class AplikasiDusun {

    // Konfigurasi koneksi database MariaDB
    private static final String URL = "jdbc:mysql://localhost:3306/db_komplek_dusun_nagrak";
    private static final String USER = "root"; // Sesuaikan dengan user MariaDB Anda
    private static final String PASSWORD = ""; // Sesuaikan dengan password MariaDB Anda

    public static void main(String[] args) {
        System.out.println("--- MENAMPILKAN DATA AWAL ---");
        tampilkanDataPenduduk();

        System.out.println("\n--- MENGUPDATE DATA (SI JANGKUNG) ---");
        // Mengubah data warga dengan id_warga '06007'
        updateDataPenduduk("06007", "Si Jangkung", 180);

        System.out.println("\n--- MENAMPILKAN DATA SETELAH DIUPDATE ---");
        tampilkanDataPenduduk();
    }

    // 1. Fungsi Koneksi Database
    public static Connection hubungkanDatabase() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // 2. Fungsi Menampilkan Data (SELECT)
    public static void tampilkanDataPenduduk() {
        String query = "SELECT id_warga, nama, jenis_kelamin, tinggi_badan FROM penduduk";

        try (Connection conn = hubungkanDatabase();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            System.out.printf("%-10s | %-20s | %-13s | %-12s\n", "ID WARGA", "NAMA", "JENIS KELAMIN", "TINGGI BADAN");
            System.out.println("---------------------------------------------------------------------");

            while (rs.next()) {
                String id = rs.getString("id_warga");
                String nama = rs.getString("nama");
                String jk = rs.getString("jenis_kelamin");
                int tinggi = rs.getInt("tinggi_badan");

                System.out.printf("%-10s | %-20s | %-13s | %d cm\n", id, nama, jk, tinggi);
            }

        } catch (SQLException e) {
            System.err.println("Gagal menampilkan data: " + e.getMessage());
        }
    }

    // 3. Fungsi Mengubah Data (UPDATE)
    public static void updateDataPenduduk(String idWarga, String namaBaru, int tinggiBaru) {
        String query = "UPDATE penduduk SET nama = ?, tinggi_badan = ? WHERE id_warga = ?";

        try (Connection conn = hubungkanDatabase();
             PreparedStatement pstmt = conn.createsetString(1, namaBaru);
             
             // Menggunakan PreparedStatement agar lebih aman dari SQL Injection
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            
            pstmt.setString(1, namaBaru);
            pstmt.setInt(2, tinggiBaru);
            pstmt.setString(3, idWarga);

            int barisTerubah = pstmt.executeUpdate();
            if (barisTerubah > 0) {
                System.out.println("Sukses! Data warga dengan ID " + idWarga + " berhasil diperbarui.");
            } else {
                System.out.println("Data tidak ditemukan. Tidak ada data yang berubah.");
            }

        } catch (SQLException e) {
            System.err.println("Gagal mengupdate data: " + e.getMessage());
        }
    }
}
