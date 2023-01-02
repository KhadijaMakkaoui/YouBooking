package com.example.backend.service.Implementation;

import com.example.backend.entity.Chambre;
import com.example.backend.service.Interface.ChambreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChambreServiceImp implements ChambreService {
    ChambreService chambreService;

    public ChambreServiceImp(ChambreService chambreService) {
        this.chambreService = chambreService;
    }

    @Override
    public Chambre addChambre(Chambre chambre) {
        return chambreService.addChambre(chambre);
    }

    @Override
    public Chambre updateChambre(Chambre chambre) {
        return chambreService.updateChambre(chambre);
    }

    @Override
    public Chambre getChambreById(Long id) {
        return chambreService.getChambreById(id);
    }

    @Override
    public void deleteChambre(Long id) {
       chambreService.deleteChambre(id);
    }

    @Override
    public List<Chambre> getAllChambres() {
        return chambreService.getAllChambres();
    }

}
