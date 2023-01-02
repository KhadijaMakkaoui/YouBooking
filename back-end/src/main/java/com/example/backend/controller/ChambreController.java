package com.example.backend.controller;

import com.example.backend.entity.Chambre;
import com.example.backend.service.Implementation.ChambreServiceImp;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @PostMapping
    public Chambre saveChambre(@RequestBody Chambre chambre){
        return chambreServiceImp.addChambre(chambre);
    }

}
