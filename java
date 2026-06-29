package com.nagrak.rt004b.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "warga")
@Data // Menggunakan Lombok untuk auto-generate getter/setter
public class Warga {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 16)
    private String nik;

    @Column(nullable = false)
    private String namaLengkap;

    private String tempatLahir;
    private String tanggalLahir; // Bisa menggunakan LocalDate

    @Column(length = 10)
    private String jenisKelamin;

    private String pekerjaan;
    private String statusHubunganKeluarga; // Misal: Kepala Keluarga, Istri, Anak
}

package com.nagrak.rt004b.repository;

import com.nagrak.rt004b.model.Warga;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WargaRepository extends JpaRepository<Warga, Long> {
    // Spring Boot otomatis menyediakan fungsi findall(), save(), delete(), dll.
}

package com.nagrak.rt004b.controller;

import com.nagrak.rt004b.model.Warga;
import com.nagrak.rt004b.repository.WargaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/warga")
public class WargaController {

    @Autowired
    private WargaRepository wargaRepository;

    // Menampilkan semua warga
    @GetMapping
    public String listWarga(Model model) {
        model.addAttribute("daftarWarga", wargaRepository.findAll());
        return "warga-list"; // Mengarah ke warga-list.html
    }

    // Form Tambah Warga
    @GetMapping("/tambah")
    public String formTambah(Model model) {
        model.addAttribute("warga", new Warga());
        return "warga-form";
    }

    // Simpan Data Warga
    @PostMapping("/simpan")
    public String simpanWarga(@ModelAttribute("warga") Warga warga) {
        wargaRepository.save(warga);
        return "redirect:/warga";
    }
}
