package com.example.backend.controller;

import com.example.backend.entity.Chambre;
import com.example.backend.service.Implementation.ChambreServiceImp;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/chambres")
public class ChambreController {
    ChambreServiceImp chambreServiceImp;

    public ChambreController(ChambreServiceImp chambreServiceImp) {
        this.chambreServiceImp = chambreServiceImp;
    }
    @GetMapping
    public List<Chambre> getAllChambres(){
        return chambreServiceImp.getAllChambres();
    }
    @PostMapping("/add/{hotelId}")
    public Chambre saveChambre(@RequestBody Chambre chambre,@PathVariable("hotelId") Long hotelId){
        return chambreServiceImp.addChambre(chambre,hotelId);
    }
    @GetMapping("/hotel/{id}")
    public List<Chambre> getChambresByHotel(@PathVariable("id") Long id){
        return chambreServiceImp.getChambresByHotel(id);
    }


}
